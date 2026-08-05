import {glob} from 'glob';
import * as path from 'path';
import fg from 'fast-glob'
import fs from 'node:fs/promises'
import {dirname} from 'node:path'
import {withMermaid} from "vitepress-plugin-mermaid";
import taskLists from 'markdown-it-task-lists'
import {full as emoji} from 'markdown-it-emoji'

process.env.VITE_EXTRA_EXTENSIONS = 'docx,zip,pptx'

// Transforme les liens vers fil-rouge/<projet>/<ex> en composant <FilRougeLink> dynamique.
// Le markdown reste navigable en dehors de VitePress (lien statique vers le fil rouge par défaut).
// Limité aux thématiques : ailleurs (évaluation, activités), les liens vers un fil rouge précis restent statiques.
function filRougeLinksPlugin(md) {
    md.core.ruler.push('fil-rouge-links', (state) => {
        if (!state.env?.relativePath?.startsWith('thematiques/')) return

        for (const blockToken of state.tokens) {
            if (blockToken.type !== 'inline' || !blockToken.children) continue

            const children = blockToken.children
            let i = 0
            while (i < children.length) {
                const token = children[i]
                if (token.type !== 'link_open') { i++; continue }

                const href = token.attrGet('href') ?? ''
                const match = href.match(/fil-rouge\/[^/]+\/(.+)$/)
                if (!match) { i++; continue }

                const ex = match[1]

                // Collecter le texte jusqu'à link_close
                let label = ''
                let j = i + 1
                while (j < children.length && children[j].type !== 'link_close') {
                    if (children[j].type === 'text') label += children[j].content
                    j++
                }
                label = label || ex

                // Remplacer link_open + contenu + link_close par le composant Vue
                const component = new state.Token('html_inline', '', 0)
                component.content = `<FilRougeLink ex="${ex}" label="${label.replace(/"/g, '&quot;')}" />`
                children.splice(i, j - i + 1, component)
            }
        }
    })
}

// https://vitepress.dev/reference/site-config
export default withMermaid({
    lang: 'fr-CH',
    title: "ICT-335",
    description: "Programmation mobile",
    head: [
        ['link', {rel: "icon", href: "logo.svg"}],
    ],
    srcExclude: ['slides/images/**', 'slides/*.md', 'fil-rouge/*/[0-9]*/*.md', 'fil-rouge/*/cdc.md', 'fil-rouge/*/missions-table.md'],

    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: 'logo.svg',
        nav: [
            {text: 'Accueil', link: '/'},
            {text: 'Parcours du module', link: '/thematiques/README.html'},
            {text: 'Supports', link: '/supports/README.html'},
            //{text: 'Activités', link: '/activites/'}
        ],
        outline: {label: "Sur cette page",level:[1,4]},
        docFooter: {prev: "Précédent", next: "Suivant"},
        returnToTopLabel: "Retourner au début",
        lastUpdated: {
            text: 'Dernière mise à jour',
            formatOptions: {
                dateStyle: 'full',
                timeStyle: 'short'
            }
        },
        sidebar: {
            '/': [
                {
                    text: 'Parcours du module',
                    collapsed: false,
                    items:
                        glob.sync('thematiques/**/*.md', {ignore: '*/**README.md', posix: true})
                            .map(file => ({
                                text: `${path.basename(file).replace(".md", "")}`,
                                link: `/${file}`
                            })).reverse()
                },
                {
                    text: 'Fil rouge',
                    collapsed: false,
                    items: [
                        {text: 'Choisir son projet', link: '/fil-rouge/README.md'},
                        {
                            text: 'Missions',
                            collapsed: false,
                            items: [
                                {text: '00 — Cahier des charges', link: '/fil-rouge/missions/00-cdc'},
                                {text: '01 — Storyboard',         link: '/fil-rouge/missions/01-storyboard'},
                                {text: '02 — Pages et navigation',link: '/fil-rouge/missions/02-pages'},
                                {text: '03 — CRUD',               link: '/fil-rouge/missions/03-crud'},
                                {text: '04 — Mode session',       link: '/fil-rouge/missions/04-interaction'},
                                {text: '05 — Qualité',            link: '/fil-rouge/missions/05-qualite'},
                            ]
                        },
                    ]
                },
                {
                    text: 'Supports de cours',
                    collapsed: false,
                    items:
                        glob.sync('supports/**/*.md', {ignore: '*/**README.md', posix: true})
                            .sort()
                            .map(file => ({
                                text: `${path.basename(file).replace(".md", "")}`,
                                link: `/${file}`
                            }))
                },
                {text: 'Évaluation', link: '/legal/evaluation.md'}
            ],
            '/activites/': [
                {
                    text: 'Activités',
                    collapsed:
                        true,
                    items:
                        glob.sync('activites/**/README.md', {posix: true})
                            .map(file => ({
                                text: `${file.split("/")[1]}`,
                                link: `/${file}`
                            })).reverse()
                }
            ],

        },
        search: {
            provider: 'local',
            options: {
                translations: {
                    button: {buttonText: "Rechercher", buttonAriaLabel: "Rechercher"},
                    modal: {
                        displayDetails: "Voir les détails",
                        footer: {selectText: "Valider", closeText: "Fermer", navigateText: "Pour naviguer"}
                    },
                }
            }
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/etml-inf/c-335-mobile'}
        ]
    },
    base: "/c-335-mobile/",//for gh pages
    rewrites: {
        'README.md': 'index.md',
    },
    lastUpdated: true,
    markdown: {
        math: true,
        config: (md) => {
            md
                .use(taskLists)
                .use(emoji)
                .use(filRougeLinksPlugin)
        }
    },
    async buildEnd({srcDir: src, outDir: dest}) {
        //Copy other assets...
        const files = await fg(['**/*', '!**/*.md'], {cwd: src, absolute: true})
        await Promise.all(
            files.map(async (file) => {
                const destFile = file.replace(src, dest)
                await fs.mkdir(dirname(destFile), {recursive: true})
                await fs.copyFile(file, destFile)
            })
        )
    },
    mermaid: {
        // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
    },
    /*ignoreDeadLinks: [
        /\.docx$/,
    ]*/
    /*vite: {
        //optimizeDeps: { include: ['dayjs','@braintree/sanitize-url','debug'] },
        resolve: {
            alias: {
                dayjs: 'dayjs/'
            },
        },
    },*/
});



