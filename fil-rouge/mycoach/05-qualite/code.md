<details>
<summary>Coup de pouce — squelette de test</summary>

```csharp
public class TrainingSessionTests
{
    [Fact]
    public void SuccessRate_Is_100_Percent_When_No_Skips()
    {
        var session = new TrainingSession(...);
        session.MarkDone();
        ...
        Assert.Equal(100, session.Summary.SuccessPercent);
    }
}
```

</details>
