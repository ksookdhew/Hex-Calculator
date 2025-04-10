import {
    hexAdd,
    hexSubtract,
    hexMultiply,
    hexDivide
  } from './calculator.js';
  
  // DOM references
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
  
  
  