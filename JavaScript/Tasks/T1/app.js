const answer = 25;
var userAnswer = prompt("Enter the number: ")

if (userAnswer == answer)
{
    alert("Correct answer!");
}
else if (userAnswer < answer)
{
    alert("Incorrect answer, The correct answer is higher.");
}
else
{
    alert("Incorrect answer, The correct answer is lower.")
}