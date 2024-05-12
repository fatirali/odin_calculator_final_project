var firstNum;
var operand;
var secondNum;

var counter = 0;
console.log("counter is" + " " + counter);

function add(a, b) {
    return a + b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function divide(a, b) {
    return a / b;
  }
  
  function operate(first, opera, second) {
    if (opera == "multiply") { 
      return multiply(first, second);
    } 
    else if (opera == "add") {
      return add(first, second);
    } 
    else if (opera == "subtract") {
      return subtract(first, second);
    } 
    else if (opera == "divide") {
      return divide(first, second);
    };
  };

  

// Select the number and populate in the input bar
// Store the 1st number selection in a variable

    var inputElement = document.getElementById("myInput");
    var buttons = document.querySelectorAll("button");
    console.log(buttons);
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
        if (counter == 0 && button.className == "number") {
            inputElement.value = Number(button.innerHTML);
            firstNum = Number(button.innerHTML);
            counter += 1;
            console.log("counter is" + " " + counter);
            console.log(firstNum);
            return firstNum;
        }
        else if (counter == 1 && button.className == "operand") {
            operand = button.id;
            counter += 1;
            console.log("counter is" + " " + counter);
            console.log(operand);
            return operand;
        }
        else if (counter == 2 && button.className == "number") {
            inputElement.value = Number(button.innerHTML);
            secondNum = Number(button.innerHTML);
            counter += 1;
            console.log("counter is" + " " + counter);
            console.log(secondNum);
            return secondNum;
        }
        else if (counter == 3 && button.className == "equals") {
            console.log("firstNum" + " is " + firstNum)
            console.log("operand" + " is " + operand)
            console.log("secondNum" + " is " + secondNum)
            var result = operate(firstNum, operand, secondNum);
            inputElement.value = Number(result);
            counter = 0 
            console.log("counter is" + " " + counter);
            console.log(Number(result));
        }

      });
    });





// if (counter == 0) {
//   var inputElement = document.getElementById("myInput");
//   var firstButtons = document.getElementsByClassName("number");
//   console.log(firstButtons);
//   Array.from(firstButtons).forEach((firstButton) => {
//     firstButton.addEventListener("click", () => {
//       inputElement.value = Number(firstButton.innerHTML);
//       firstNum = Number(firstButton.innerHTML);
//       counter += 1;
//       console.log("counter is" + " " + counter);
//       console.log(firstNum);
//       return firstNum;
//     });
//   });
// }

// console.log("counter is" + " " + counter);

// // Store the operand as a variable
// if (counter == 1) {
//   var operandButtons = document.getElementsByClassName("operand");
//   console.log(operandButtons);
//   Array.from(operandButtons).forEach((operandButton) => {
//     operandButton.addEventListener("click", () => {
//       operand = operandButton.id;
//       counter += 1;
//       console.log("counter is" + " " + counter);
//       console.log(operand);
//       return operand;
//     });
//   });
// }

// // Store the 2nd number selection in a variable

// if (counter == 2) { 
//   var inputElement = document.getElementById("myInput");
//   var secondButtons = document.getElementsByClassName("number");
//   console.log(secondButtons);
//   Array.from(secondButtons).forEach((secondButton) => {
//     secondButton.addEventListener("click", () => {
//       inputElement.value = Number(secondButton.innerHTML);
//       secondNum = Number(secondButton.innerHTML);
//       counter += 1;
//       console.log("counter is" + " " + counter);
//       console.log(secondNum);
//       return secondNum;
//     });
//   });
// }

// // Call the operate function on the 1st number, 2nd number and the operand

// if (counter == 3) {
//   var inputElement = document.getElementById("myInput");
//   var equalButton = document.getElementById("equals");
//   console.log(equalButton);
//   equalButton.addEventListener("click", () => {
//     var result = operate(firstNum, operand, secondNum);
//     inputElement.value = Number(result);
//     counter = 0 
//     console.log("counter is" + " " + counter);
//     console.log(Number(result));
//   });
// }

//


console.log(add(1, 2));
console.log(subtract(1, 2));
console.log(multiply(1, 2));
console.log(divide(1, 2));
