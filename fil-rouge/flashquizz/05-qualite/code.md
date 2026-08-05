<details>
<summary>Coup de pouce — squelette de test</summary>

```csharp
public class LearningSessionTests
{
    [Fact]
    public void Memorization_Is_100_Percent_When_No_Errors()
    {
        var session = new LearningSession(...);
        session.MarkCorrect();
        ...
        Assert.Equal(100, session.Summary.MemorizationPercent);
    }
}
```

</details>
