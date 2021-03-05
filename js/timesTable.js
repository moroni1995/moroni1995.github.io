function timesTable() {
    //INPUT = Set variables 
    const number = 5;
    let result;
    let table = "";

    //PROCESSING = Multiply 5 * i and store each expression in output variable
    for (let i = 1; i <= 12 ; i++) {
        result = number * i;
        table += number + " x " + i + " = " + result + "<br>";
        
    }
    //OUTPUT = Display the result of each expression that is stored in output variable
    document.getElementById('output').innerHTML = table;
}
