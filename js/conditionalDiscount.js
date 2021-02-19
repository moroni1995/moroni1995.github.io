function calcDiscount() {
  //INPUT = Get customer's subtotal amount from html element and
  //day of week based on computer date
  let subtotal = parseFloat(document.getElementById("subtotal").value);
  let dayOfWeek = new Date().getDay();
  let discount = false;
  let result;
  let message;
  
  //PROCESSING = Check conditions: subtotal must be greather than $50
  //and it have to Tuesday(2) or Wednesday(3)
  if (subtotal > 50 && (dayOfWeek == 2 || dayOfWeek == 3)) {
    subtotal -= subtotal * 0.1;
    discount = true;
  }

  //Adding 6% sales tax
  subtotal += subtotal * 0.06;

  //Check if input is empty, check if customer got discount or not and display it
  if (document.getElementById("subtotal").value === ""){
    message = "Please enter customer's subtotal amount!";
    result = "";
  }
  else if (discount === true) {
    message = "You got 10% discount!";
    result = `$${subtotal.toFixed(2)}`;
  }
  else {
    message = "Thank you for your preference!";
    result = `$${subtotal.toFixed(2)}`;
  }

  //OUTPUT = Displays the value assigned to message variable in id='output' element
  document.getElementById('discountAlert').innerHTML = message;
  document.getElementById('output').innerHTML = result;

}
