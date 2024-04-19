let fullOperation = '';
let result = '';

function pressButton(number) {
    if (number === "CE"){
        fullOperation = "";
        showNumber();
        return;
    }
  console.log('hello world' + number);
  fullOperation = fullOperation + number;
  showNumber();
}

function pressOperation(op) {
  console.log(op);
  let [operando1, operador, operando2] = fullOperation.toString().split(/(\+|-|\x|\/|\^)/);
  if (operador) return;
  fullOperation = fullOperation + op;
  showNumber();
}

function calculateResult() {
  const values = fullOperation.split(/(\+|-|\x|\/|\^)/);

  console.log(values);
  let [number1, operador, number2] = fullOperation.split(/(\+|-|\x|\/|\^)/);

  console.log(number1);
  console.log(number2);
  console.log(operador);

  number1 = parseFloat(number1);
  number2 = parseFloat(number2);

  switch (operador) {
    case 'x':
      fullOperation = multiplication(number1, number2);
      break;
    case '+':
     fullOperation = sum(number1, number2);
     break;
    case '-':
     fullOperation = subs(number1, number2);
     break;
    case '/':
     fullOperation = div(number1, number2);
     break;
    case '^':
     fullOperation = pot(number1, number2);
     break;
  }

  showNumber();
}

function multiplication(number1, number2) {
  return number1 * number2;
}

function sum(number1, number2){
    return number1 + number2;
}

function subs(number1, number2){
    return number1 - number2;
}

function div(number1, number2){
    return number1 / number2;
}
function pot(number1, number2){
    return Math.pow(number1, number2);
}

function showNumber() {
  document.getElementById('operand1Display').innerHTML = fullOperation;
}

showNumber();
