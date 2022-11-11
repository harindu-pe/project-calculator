// display container variables
let displayMemoryContainer = "";
let displayCurrentContainer = "0";
let displayOperandContainer = "";

// reference to display DOM elements
const displayMemory = document.querySelector(".display-memory-1");
const displayCurrent = document.querySelector(".display-current");
const displayOperand = document.querySelector(".display-memory-operand");

// reference to control button DOM elements
const clearButton = document.querySelector(".clear-button");
const deleteButton = document.querySelector(".delete-button");

// reference to the input buttons
const inputNumberArray = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "zero",
  "dot",
];
const inputNumberButtons = inputNumberArray.map((string) => {
  return document.querySelector(`.${string}`);
});

// reference to the operand buttons
const operandArray = ["divide", "multiply", "subtract", "add", "equal"];
const operandButtons = operandArray.map((string) => {
  return document.querySelector(`.${string}`);
});

// adding event listeners to control buttons
clearButton.addEventListener("click", (event) => {
  // reset the display container variables
  displayMemoryContainer = "";
  displayCurrentContainer = "0";
  displayOperandContainer = "";
  displayMemory.innerHTML = displayMemoryContainer;
  displayCurrent.innerHTML = displayCurrentContainer;
  displayOperand.innerHTML = displayOperandContainer;
});
deleteButton.addEventListener("click", (event) => {
  // removing the last character from the display current container variable
  displayCurrentContainer = displayCurrentContainer.slice(0, -1);
  // check if display current container is empty
  if (displayCurrentContainer === "") {
    displayCurrentContainer = "0";
    displayCurrent.innerHTML = displayCurrentContainer;
  } else {
    displayCurrent.innerHTML = displayCurrentContainer;
  }
});

// adding event listeners to input buttons
inputNumberButtons.forEach((inputNumberButton) => {
  inputNumberButton.addEventListener("click", (event) => {
    if (displayCurrentContainer.length < 9) {
      // for dot
      if (event.target.innerHTML === ".") {
        // check if display current container contains "."
        if (
          !displayCurrentContainer.includes(".") &&
          displayCurrentContainer !== ""
        ) {
          displayCurrentContainer += event.target.innerHTML;
          displayCurrent.innerHTML = displayCurrentContainer;
        }
      }
      // for numbers
      else {
        // check for initial zero
        if (displayCurrentContainer === "0") {
          displayCurrentContainer = "";
        }
        displayCurrentContainer += event.target.innerHTML;
        displayCurrent.innerHTML = displayCurrentContainer;
      }
    }
  });
});

// adding event listeners to operand buttons
operandButtons.forEach((operandButton) => {
  operandButton.addEventListener("click", (event) => {
    // check for equals
    if (event.target.innerHTML === "=") {
      if (
        displayMemoryContainer !== "" &&
        displayCurrentContainer !== "" &&
        displayOperandContainer !== ""
      ) {
        // run operate function and update display
        updateDisplay(displayOperandContainer);
      }
    }
    // check for divison
    else if (event.target.innerHTML === "÷") {
      if (
        displayMemoryContainer === "" &&
        displayCurrentContainer !== "" &&
        displayOperandContainer !== "÷"
      ) {
        // update display memory container
        displayMemoryContainer = displayCurrentContainer;
        displayMemory.innerHTML = displayMemoryContainer;
        // update display operand container
        displayOperandContainer = event.target.innerHTML;
        displayOperand.innerHTML = displayOperandContainer;
        // clear display current container
        displayCurrentContainer = "";
        displayCurrent.innerHTML = displayCurrentContainer;
      } else if (
        displayMemoryContainer !== "" &&
        displayCurrentContainer !== "" &&
        displayOperandContainer === "÷"
      ) {
        // run operate function and update display
        updateDisplay(displayOperandContainer);
      } else if (
        displayMemoryContainer !== "" &&
        displayCurrentContainer === "" &&
        displayOperandContainer === "÷"
      ) {
      } else if (
        displayMemoryContainer !== "" &&
        displayCurrentContainer === "" &&
        displayOperandContainer !== "÷"
      ) {
        // update display operand container
        displayOperandContainer = event.target.innerHTML;
        displayOperand.innerHTML = displayOperandContainer;
      } else {
        // run operate function and update display
        updateDisplay(displayOperandContainer);
        // update display operand container
        displayOperandContainer = event.target.innerHTML;
        displayOperand.innerHTML = displayOperandContainer;
      }
    }
    // check for multiplication
    else if (event.target.innerHTML === "×") {
      if (
        displayMemoryContainer === "" &&
        displayCurrentContainer !== "" &&
        displayOperandContainer !== "×"
      ) {
        // update display memory container
        displayMemoryContainer = displayCurrentContainer;
        displayMemory.innerHTML = displayMemoryContainer;
        // update display operand container
        displayOperandContainer = event.target.innerHTML;
        displayOperand.innerHTML = displayOperandContainer;
        // clear display current container
        displayCurrentContainer = "";
        displayCurrent.innerHTML = displayCurrentContainer;
      } else if (
        displayMemoryContainer !== "" &&
        displayCurrentContainer !== "" &&
        displayOperandContainer === "×"
      ) {
        // run operate function and update display
        updateDisplay(displayOperandContainer);
      } else if (
        displayMemoryContainer !== "" &&
        displayCurrentContainer === "" &&
        displayOperandContainer === "×"
      ) {
      } else if (
        displayMemoryContainer !== "" &&
        displayCurrentContainer === "" &&
        displayOperandContainer !== "×"
      ) {
        // update display operand container
        displayOperandContainer = event.target.innerHTML;
        displayOperand.innerHTML = displayOperandContainer;
      } else {
        // run operate function and update display
        updateDisplay(displayOperandContainer);
        // update display operand container
        displayOperandContainer = event.target.innerHTML;
        displayOperand.innerHTML = displayOperandContainer;
      }
    }
    // check for addition
    else if (event.target.innerHTML === "+") {
      if (
        displayMemoryContainer === "" &&
        displayCurrentContainer !== "" &&
        displayOperandContainer !== "+"
      ) {
        // update display memory container
        displayMemoryContainer = displayCurrentContainer;
        displayMemory.innerHTML = displayMemoryContainer;
        // update display operand container
        displayOperandContainer = event.target.innerHTML;
        displayOperand.innerHTML = displayOperandContainer;
        // clear display current container
        displayCurrentContainer = "";
        displayCurrent.innerHTML = displayCurrentContainer;
      } else if (
        displayMemoryContainer !== "" &&
        displayCurrentContainer !== "" &&
        displayOperandContainer === "+"
      ) {
        // run operate function and update display
        updateDisplay(displayOperandContainer);
      } else if (
        displayMemoryContainer !== "" &&
        displayCurrentContainer === "" &&
        displayOperandContainer === "+"
      ) {
      } else if (
        displayMemoryContainer !== "" &&
        displayCurrentContainer === "" &&
        displayOperandContainer !== "+"
      ) {
        // update display operand container
        displayOperandContainer = event.target.innerHTML;
        displayOperand.innerHTML = displayOperandContainer;
      } else {
        // run operate function and update display
        updateDisplay(displayOperandContainer);
        // update display operand container
        displayOperandContainer = event.target.innerHTML;
        displayOperand.innerHTML = displayOperandContainer;
      }
    }
    // check for subtraction
    else if (event.target.innerHTML === "-") {
      if (
        displayMemoryContainer === "" &&
        displayCurrentContainer !== "" &&
        displayOperandContainer !== "-"
      ) {
        // update display memory container
        displayMemoryContainer = displayCurrentContainer;
        displayMemory.innerHTML = displayMemoryContainer;
        // update display operand container
        displayOperandContainer = event.target.innerHTML;
        displayOperand.innerHTML = displayOperandContainer;
        // clear display current container
        displayCurrentContainer = "";
        displayCurrent.innerHTML = displayCurrentContainer;
      } else if (
        displayMemoryContainer !== "" &&
        displayCurrentContainer !== "" &&
        displayOperandContainer === "-"
      ) {
        // run operate function and update display
        updateDisplay(displayOperandContainer);
      } else if (
        displayMemoryContainer !== "" &&
        displayCurrentContainer === "" &&
        displayOperandContainer === "-"
      ) {
      } else if (
        displayMemoryContainer !== "" &&
        displayCurrentContainer === "" &&
        displayOperandContainer !== "-"
      ) {
        // update display operand container
        displayOperandContainer = event.target.innerHTML;
        displayOperand.innerHTML = displayOperandContainer;
      } else {
        // run operate function and update display
        updateDisplay(displayOperandContainer);
        // update display operand container
        displayOperandContainer = event.target.innerHTML;
        displayOperand.innerHTML = displayOperandContainer;
      }
    }
  });
});

// update display DOM elements according to display container variables
displayMemory.innerHTML = displayMemoryContainer;
displayCurrent.innerHTML = displayCurrentContainer;

// operate function
function operate(operator, a, b) {
  // change to numeric
  const aFloat = parseFloat(a);
  const bFloat = parseFloat(b);

  // add
  if (operator === "+") {
    // check if there are decimal points
    let tempAnswer;
    if ((aFloat + bFloat) % 1 !== 0) {
      tempAnswer = aFloat * bFloat;
      tempAnswer = tempAnswer.toFixed(4) * 1;
    } else {
      tempAnswer = aFloat + bFloat;
    }
    return tempAnswer.toString();
  }
  // subtract
  else if (operator === "-") {
    // check if there are decimal points
    let tempAnswer;
    if ((aFloat - bFloat) % 1 !== 0) {
      tempAnswer = aFloat - bFloat;
      tempAnswer = tempAnswer.toFixed(4) * 1;
    } else {
      tempAnswer = aFloat - bFloat;
    }
    return tempAnswer.toString();
  }
  // multiply
  else if (operator == "×") {
    // check if there are decimal points
    let tempAnswer;
    if ((aFloat * bFloat) % 1 !== 0) {
      tempAnswer = aFloat * bFloat;
      tempAnswer = tempAnswer.toFixed(4) * 1;
    } else {
      tempAnswer = aFloat * bFloat;
    }
    return tempAnswer.toString();
  }
  // divide
  else if (operator == "÷") {
    // check if there are decimal points
    let tempAnswer;
    if ((aFloat / bFloat) % 1 !== 0) {
      tempAnswer = aFloat / bFloat;
      tempAnswer = tempAnswer.toFixed(4) * 1;
    } else {
      tempAnswer = aFloat / bFloat;
    }
    return tempAnswer.toString();
  }
}

// update display operate function
function updateDisplay(operand) {
  // running operate function
  const answer = operate(
    displayOperandContainer,
    displayMemoryContainer,
    displayCurrentContainer
  );
  // update display memory container
  displayMemoryContainer = answer;
  displayMemory.innerHTML = displayMemoryContainer;
  // update display operand container
  displayOperandContainer = operand;
  displayOperand.innerHTML = displayOperandContainer;
  // clear display current container
  displayCurrentContainer = "";
  displayCurrent.innerHTML = displayCurrentContainer;
}
