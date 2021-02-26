function sumOddValues() {
    //INPUT: Get user data from input element
    let integer = parseInt(document.getElementById("integer").value);
    let total = 0;

    //PROCESSING: Iterating a list of numbers to check which of them are odd, dividing each one by two, and summing up the odd to total.
    for (let i = 1; i <= integer; i++) {
        if (i % 2 != 0) {
            total += i;
        }
    }

    //OUTPUT: Display the result to the user
    document.getElementById("output").innerHTML = total;

}