var flag = false;
var again = true;

while (again == true)
{
    let request = +prompt("Enter 1 to play |------| Enter any character to end");
    if (request != 1)
    {
        again = false;
    }
    else if (again == true)
    {
        var answer = Math.floor(Math.random()*100) + 1;
        console.log(answer);

        for (let i = 0; i < 20 && flag == false; i++)
        {
            let userAnswer = +prompt("Attempt number " + (i+1) + ". Enter the number: ");
            if (userAnswer == answer)
            {
                alert("Correct answer!");
                flag = true;
            }
            else if (userAnswer < answer)
            {
                alert("Incorrect answer, The correct answer is higher.");
            }
            else if (userAnswer > answer)
            {
                alert("Incorrect answer, The correct answer is lower.");
            }
            else
            {
                alert("Invalid input, Please enter a number.");
            }
        }
    }
}