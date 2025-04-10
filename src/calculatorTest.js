const MAX_RESULT = 0xFFFF; // 65535 in decimal

function hexToDecimal(hex) {
  return parseInt(hex, 16);
}

function formatHexOutput(decimal) {
  if (decimal < 0 || decimal > MAX_RESULT) return 'ERROR';

  const hex = decimal.toString(16).toUpperCase();
  return hex; // Ensures result is 4 digits
}

function hexAdd(a, b) {
  const result = hexToDecimal(a) + hexToDecimal(b);
  return formatHexOutput(result);
}

function hexSubtract(a, b) {
  const result = hexToDecimal(a) - hexToDecimal(b);
  return formatHexOutput(result);
}

function hexMultiply(a, b) {
  const result = hexToDecimal(a) * hexToDecimal(b);
  return formatHexOutput(result);
}

function hexDivide(a, b) {
  const divisor = hexToDecimal(b);
  if (divisor === 0) return 'ERROR';

  const result = Math.floor(hexToDecimal(a) / divisor);
  return formatHexOutput(result);
}

const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let input = ''; // Stores full user input

// Update the calculator display
function updateDisplay(value) {
  display.textContent = value.padStart(4, '0');
}

// Evaluate a simple expression like 'A+2F'
function calculate(expression) {
  const match = expression.match(/^([0-9A-F]{1,2})([+\-*/])([0-9A-F]{1,2})$/i);
  if (!match) return 'ERROR';

  const [, hex1, operator, hex2] = match;
  const a = hex1.toUpperCase();
  const b = hex2.toUpperCase();

  switch (operator) {
    case '+':
      return hexAdd(a, b);
    case '-':
      return hexSubtract(a, b);
    case '*':
      return hexMultiply(a, b);
    case '/':
      return hexDivide(a, b);
    default:
      return 'ERROR';
  }
}

// Handle button clicks
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (value === 'AC') {
      input = '';
    } else if (value === 'DEL') {
      input = input.slice(0, -1);
    } else if (value === '=') {
      input = calculate(input);
    } else {
      input += value;
    }

    updateDisplay(input || '0');
  });
});


  
  module.exports = {
    hexAdd,
    hexSubtract,
    hexMultiply,
    hexDivide
  };
  