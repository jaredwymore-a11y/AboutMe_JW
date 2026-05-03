// Wymore_forms.js
// CMPSC 3323 - Assignment 5 - HTML Forms
// Jared Wymore

//Gives a function for the html to call inside its div section.
function showOutput(divId, html) {
  var div = document.getElementById(divId);
  if (div) {
    div.innerHTML = html;
    div.classList.add("visible");
  }
}

//Grid 1
function Mathcalc(event) {
  event.preventDefault();

  var num1 = parseFloat(document.getElementById("arith1").value);
  var num2 = parseFloat(document.getElementById("arith2").value);
  var opEl = document.querySelector('input[name="OP"]:checked');

  // Validation
  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers in both fields.");
    return;
  }
  if (!opEl) {
    alert("Please select an operator.");
    return;
  }

  var op = opEl.value;
  var result;
  var opLabel;

  switch (op) {
    case "+":
      result   = num1 + num2;
      opLabel  = "addition";
      break;
    case "-":
      result   = num1 - num2;
      opLabel  = "subtraction";
      break;
    case "*":
      result   = num1 * num2;
      opLabel  = "multiplication";
      break;
    case "/":
      if (num2 === 0) {
        alert("Division by zero is undefined. Please enter a non-zero second number.");
        return;
      }
      result  = num1 / num2;
      opLabel = "division";
      break;
    default:
      alert("Unknown operator selected.");
      return;
  }

  var resultText = num1 + " " + op + " " + num2 + " = " + result;
  alert("Result (" + opLabel + "): " + resultText);

  showOutput(
    "Mathcalc-output",
    "<strong>Result:</strong> " + resultText
  );
}

//Grid 2
function GetFact(event) {
  event.preventDefault();

  var n = parseInt(document.getElementById("factNum").value, 10);

  if (isNaN(n) || n < 0) {
    alert("Please enter a positive number.");
    return;
  }

  if (n > 170) {
    alert("Enter a number less than 170.");
    return;
  }

  var result = 1;
  for (var i = 2; i <= n; i++) {
    result *= i;
  }

  alert(n + "! = " + result);

  showOutput(
    "output-factorial",
    "<strong>" + n + "!</strong> = " + result
  );
}

//Grid 3
function calcFib(event) {
  event.preventDefault();

  var n = parseInt(document.getElementById("fibN").value, 10);

  if (isNaN(n) || n < 0) {
    alert("Please enter a positive number.");
    return;
  }

  var a = 0, b = 1;
  if (n === 0) {
    alert("F(0) = 0");
    showOutput("output-fib", "<strong>F(" + n + ")</strong> = 0");
    return;
  }

  for (var i = 2; i <= n; i++) {
    var temp = a + b;
    a = b;
    b = temp;
  }

  alert("F(" + n + ") = " + b);

 
}

//Grid 4
function calcMMR(event) {
  event.preventDefault();

  var a = parseFloat(document.getElementById("mmr1").value);
  var b = parseFloat(document.getElementById("mmr2").value);
  var c = parseFloat(document.getElementById("mmr3").value);

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert("Please enter three numbers.");
    return;
  }

  var maxVal   = Math.max(a, b, c);
  var minVal   = Math.min(a, b, c);
  var rangeVal = maxVal - minVal;

  var msg = "Maximum: " + maxVal + "\nMinimum: " + minVal + "\nRange: " + rangeVal;
  alert(msg);

  showOutput(
    "output-mmr",
    "<strong>Maximum:</strong> " + maxVal +
    " &nbsp;|&nbsp; <strong>Minimum:</strong> " + minVal +
    " &nbsp;|&nbsp; <strong>Range:</strong> " + rangeVal
  );
}

//Grid 5
function submitmail(event) {
  event.preventDefault();

  var first = document.getElementById("first").value.trim();
  var last  = document.getElementById("last").value.trim();
  var email     = document.getElementById("email").value.trim();
  var zip   = document.getElementById("zip").value.trim();

  // Ensure zip code is 5 digits.
  if (!/^\d{5}$/.test(zip)) {
    alert("Please enter five digits for the zip.");
    return;
  }

  // Build entry string
  var entryHTML =
    "<div class='mailing-entry'>" +
    "<strong>Name:</strong> " + first + " " + last +
    " &nbsp;&nbsp; <strong>Email:</strong> " + email +
    " &nbsp;&nbsp; <strong>ZIP:</strong> " + zip +
    "</div>";

  // Append (not replace) in the entries div
  document.getElementById("mailing-entries").innerHTML += entryHTML;

  // Make the output section visible if it was hidden
  document.getElementById("mailing-output").style.display = "block";

  // Reset the form fields after submission
  document.getElementById("mailingListForm").reset();
}


