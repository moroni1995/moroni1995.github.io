function doPayment() {
    let principal = parseFloat(document.getElementById('principal').value);
    let annualRate = parseFloat(document.getElementById('annualRate').value);
    let years = parseFloat(document.getElementById('numberYears').value);
    let periodsPerYear = parseFloat(document.getElementById('paymentsYear').value);
    let result = computePayment(principal, annualRate, years, periodsPerYear);   

    document.getElementById('outputPaymentsYear').innerHTML = `$${result.toFixed(2)}`;
}
function doBalance() {
    let principal = parseFloat(document.getElementById('principal').value);
    let annualRate = parseFloat(document.getElementById('annualRate').value);
    let years = parseFloat(document.getElementById('numberYears').value);
    let periodsPerYear = parseFloat(document.getElementById('paymentsYear').value);
    let numberOfPaymentPaidToDate = parseFloat(document.getElementById('paymentsPaid').value);
    let result = computeBalance(principal, annualRate, years, periodsPerYear, numberOfPaymentPaidToDate);   

    document.getElementById('outputPayoffAmount').innerHTML = `$${result.toFixed(2)}`;
}
function computePayment(principal, annualRate, years, periodsPerYear) {
    let a = principal;
    let r = annualRate / periodsPerYear;
    let n = periodsPerYear * years;
    let p = (a * r) / (1 - Math.pow(1 + r, n * -1));

    return p
}

function computeBalance(principal, annualRate, years, periodsPerYear, numberOfPaymentPaidToDate) {
    let a = principal;
    let r = annualRate / periodsPerYear;
    let n = periodsPerYear * years;
    let d = numberOfPaymentPaidToDate;
    let p = computePayment(principal, annualRate, years, periodsPerYear);
    let b = a * Math.pow(1 + r, d) - (p.toFixed(2) * (Math.pow(1 + r, d) - 1)) / r;

    return b
}