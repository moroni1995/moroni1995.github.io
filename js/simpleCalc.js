function checkAnswer() {
    //INPUT = Getting user inputs and assigning them to variables
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);
    let operator = document.getElementById('operator').value;
    let userAnswer = parseFloat(document.getElementById('answer').value);
    let correctAnswer;

    //PROCESSING = Using switch statement to verify which of the arithmetic operators 
    //were selected and calculates the answer
    switch (operator) {
        case '+':
            correctAnswer = number1 + number2;
            break;
        case '-':
            correctAnswer = number1 - number2;
            break;
        case '/':
            correctAnswer = number1 / number2;
            break;
        case '*':
            correctAnswer = number1 * number2;
            break;
    }
    //OUTPUT = Compares the user answer with the answer calculated by the computer
    // and if the result is the same it will display "Correct", else will display "Incorrect"
    if (userAnswer == correctAnswer) {
        document.getElementById('output').innerHTML = "Correct! 🏆"
    } else {
        document.getElementById('output').innerHTML = "Incorrect! 😢"
    }

}