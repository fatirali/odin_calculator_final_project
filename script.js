var firstNum;
var operand;
var secondNum;

var counter = 0;
console.log("counter is" + " " + counter);

// Creating functions for all basic operations: + - / *
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

// Create a function calculate the result of the operation with the 1st and 2nd number
function operate(first, opera, second) {
  if (opera == "multiply") {
    return multiply(first, second);
  } else if (opera == "add") {
    return add(first, second);
  } else if (opera == "subtract") {
    return subtract(first, second);
  } else if (opera == "divide") {
    return divide(first, second);
  }
}

// Select the number and populate in the input bar
// Store the 1st number selection in a variable
arr1 = [];
arr2 = [];
var inputElement = document.getElementById("myInput");
var buttons = document.querySelectorAll("button");
console.log(buttons);
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (counter <= 9 && button.className == "number") {
      arr1.push(button.innerHTML);
      console.log(arr1.length);
      if (arr1.length == 1) {
        // if arr.length = 1, no further action needed store as the first number
        console.log(arr1);
        inputElement.value = Number(button.innerHTML);
        firstNum = Number(button.innerHTML);
        counter += 1;
        console.log("counter is" + " " + counter);
      } else if (arr1.length >= 2 && arr1.length <= 9) {
        // however, if arr.length is between 2 and 9(inclusove)
        var combineDigits = arr1.reduce((accumulator, currentValue) => {
          return accumulator + currentValue;
        });
        counter += 1;
        firstNum = Number(combineDigits);
        console.log("counter is" + " " + counter);
        inputElement.value = Number(firstNum);
        console.log(firstNum);
      }
      return firstNum;
    } else if (counter <= 10 && button.className == "operand") {
      operand = button.id;
      counter = 11;
      console.log("counter is" + " " + counter);
      console.log(operand);
      return operand;
    } else if (counter >= 11 && button.className == "number") {
      arr2.push(button.innerHTML);
      console.log(arr2.length);
      if (arr2.length == 1) {
        // if arr.length = 1, no further action needed store as the first number
        console.log(arr2);
        inputElement.value = Number(button.innerHTML);
        secondNum = Number(button.innerHTML);
        counter += 1;
        console.log("counter is" + " " + counter);
      } else if (arr2.length >= 2 && arr2.length <= 9) {
        // however, if arr.length is between 2 and 9(inclusove)
        var combineDigits = arr2.reduce((accumulator, currentValue) => {
          return accumulator + currentValue;
        });
        counter += 1;
        secondNum = Number(combineDigits);
        console.log("counter is" + " " + counter);
        inputElement.value = Number(secondNum);
        console.log(secondNum);
      }
      return secondNum;
    } 
    else if (counter <=20 && button.className == "equals") {
          console.log("firstNum" + " is " + firstNum);
          console.log("operand" + " is " + operand);
          console.log("secondNum" + " is " + secondNum);
          var result = operate(firstNum, operand, secondNum);
          inputElement.value = Number(result);
          counter = 0;
          console.log("counter is" + " " + counter);
          console.log(Number(result));
          arr1 = []
          arr2 = []
          return result;
        }
  });
});


var clearButton = document.getElementById("clear");
clearButton.addEventListener("click", () => {
    inputElement.value = null
    firstNum = 0
    secondNum = 0
    arr1 = []
    arr2 = []
})

// check to see if another digit is clicked. Up to 9 digits can be clicked
// if another digit is clicked then combine with other digit to make the full number. I.e 1 and 2 = 12
// How to: if more than 1 number is clicked before the operand. combine append numbers. create array with frst number
// Append following digits pushed to the array and then display the combined number on the input screen
//   firstNum = Number(button.innerHTML);

// else if (counter == 1 && button.className == "operand") {
//   operand = button.id;
//   counter += 1;
//   console.log("counter is" + " " + counter);
//   console.log(operand);
//   return operand;
// } else if (counter == 2 && button.className == "number") {
//   inputElement.value = Number(button.innerHTML);
//   secondNum = Number(button.innerHTML);
//   counter += 1;
//   console.log("counter is" + " " + counter);
//   console.log(secondNum);
//   return secondNum;
// } else if (counter == 3 && button.className == "equals") {
//   console.log("firstNum" + " is " + firstNum);
//   console.log("operand" + " is " + operand);
//   console.log("secondNum" + " is " + secondNum);
//   var result = operate(firstNum, operand, secondNum);
//   inputElement.value = Number(result);
//   counter = 0;
//   console.log("counter is" + " " + counter);
//   console.log(Number(result));
// }
//   });
// });
// Focus on edge cases:
//         1. Multiple digit, number (DONE)
//         2. Error if user divides by 0
//         3. remove a way to edit the input on the input section of the calulator
// Create a clear function that remove input screen number, sets all variables to null
