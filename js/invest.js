function doFV() {
    let amountInvested = parseFloat(document.getElementById('invested').value);
    let annualRate = parseFloat(document.getElementById('annualRate').value);
    let numberYears = parseFloat(document.getElementById('numberYears').value);
    let periodsYear = parseFloat(document.getElementById('periodsYear').value);
    let result = computeFutureValue(amountInvested, annualRate, numberYears, periodsYear);

    document.getElementById('output').innerHTML = `$${result.toFixed(2)}`;
}

function computeFutureValue(principal, annualRate, years, periodsPerYear) {
    let a = principal;
    let n = periodsPerYear * years;
    let r = annualRate / periodsPerYear;
    let result = a * Math.pow(1 + r, n);

    return result
}