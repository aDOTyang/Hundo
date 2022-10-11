function getValues() {
  let startValue = document.getElementById("startValue").value;
  let endValue = document.getElementById("endValue").value;

  // values from HTML are treated as strings & needs to be parsed into a number
  // ok to drop in front of the pull command i.e. let startValue = parseInt(document...);
  startValue = parseInt(startValue);
  endValue = parseInt(endValue);

  if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
    // generate numbers based on user input
    let numbers = generateNumbers(startValue, endValue);
    // display numbers on page
    displayNumbers(numbers);
  } else {
    Swal.fire({
      icon: "error",
      title: "NO HUNDO",
      text: "Only integers are allowed for HUNDO!",
    });
  }
}

function generateNumbers(startValue, endValue) {
  let numbers = [];

  for (let i = startValue; i <= endValue; i++) {
    numbers.push(i);
  }
  return numbers;
}

function displayNumbers(numbers) {
  let className = "even";
  let templateRows = "";
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    if (number % 2 == 0) {
      className = "even";
    } else {
      className = "odd";
    }
    // use tic marks, not single quotes for string interpolation and template literal
    templateRows += `<tr><td class="${className}">${number}</td></tr>`;
  }
  document.getElementById("results").innerHTML = templateRows;
}
