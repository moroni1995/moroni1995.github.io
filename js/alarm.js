//INPUT: Collect the values from Date() and assign them to variables
let now = new Date(2021, 11, 27);
let month = now.getMonth();
let dayOfMonth = now.getDate();
let dayOfWeek = now.getDay();
let message;

//PROCESS: Check all of the conditions given ex: If it is holiday or weekend then will print Sleep in. Thus, I'm checking all conditions I don't need to check weekdays.
if (
  (month == 0 && dayOfMonth == 1) ||
  (month == 6 && dayOfMonth == 4) ||
  (month == 11 && dayOfMonth == 25) ||
  dayOfWeek == 0 ||
  dayOfWeek == 6
) {
  message = "Sleep in &#128564;";
} else {
  message = "Get up! &#129297;";
}

//Display the result to the user

document.getElementById("output").innerHTML = message;
