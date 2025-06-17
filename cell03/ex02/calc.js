function isValidInteger(value) {
  return /^[0-9]+$/.test(value);
}

function calculate() {
  const left = document.getElementById("left").value.trim();
  const right = document.getElementById("right").value.trim();
  const op = document.getElementById("operator").value;

  if (!isValidInteger(left) || !isValidInteger(right)) {
    alert("Error try again bro");
    return;
  }

  const a = parseInt(left);
  const b = parseInt(right);

  if ((op === "/" || op === "%") && b === 0) {
    alert("It’s over 9000!");
    console.log("It’s over 9000!");
    return;
  }

  let result;
  switch (op) {
    case "+": result = a + b; break;
    case "-": result = a - b; break;
    case "*": result = a * b; break;
    case "/": result = a / b; break;
    case "%": result = a % b; break;
  }

  alert("Result: " + result);
  console.log("Result: " + result);
}

document.getElementById("try").addEventListener("click", calculate);

// Alert every 30 seconds
setInterval(() => {
  alert("Please, use me Please, use me Please, use me Please, use me ");
}, 30000);
