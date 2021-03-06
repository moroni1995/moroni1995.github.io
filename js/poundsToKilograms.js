function poundsToKilograms() {
    //INPUT: Take the string in id="pounds" and define kilograms constant.
    const kilograms = 0.45359237;
    let userInput = document.getElementById("pounds").value;
    //PROCESSING: Convert the user input to a floating-point number and multiply it by kilograms.
    let pounds = parseFloat(userInput);
    let result = pounds * kilograms;
    //OUTPUT: Displays the conversion result in id="output" using the round method ".tofixed()" and string interpolation. 
    document.getElementById("output").innerHTML = `${result.toFixed(1)} Kilograms`;    
}

