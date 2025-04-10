/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

// Load the HTML into jsdom
const html = fs.readFileSync(path.resolve(__dirname, '../src/index.html'), 'utf8');

describe('Hex Calculator GUI', () => {
  let display;

  beforeEach(() => {
    document.body.innerHTML = html;


    require('../src/calculatorTest'); // this attaches event listeners to buttons
    display = document.getElementById('display');
  });

  afterEach(() => {
    jest.resetModules(); // Clears all required modules (including calculatorTest)
    document.body.innerHTML = html;
  });

  test('Clicking A updates display to 000A', ()=>{
    const aButton= document.querySelector('[data-value="A"]');
    aButton.click();
    expect(display.textContent).toBe('000A');
  })

test('Clicking AC clears the display to 0000', () => {
    const aButton = document.querySelector('[data-value="A"]');
    const acButton = document.querySelector('[data-value="AC"]');
    aButton.click();
    acButton.click();
    expect(display.textContent).toBe('0000');
});

test('Clicking DEL removes the last character from the display', () => {
    const aButton = document.querySelector('[data-value="A"]');
    const delButton = document.querySelector('[data-value="DEL"]');
    aButton.click();
    delButton.click();
    expect(display.textContent).toBe('0000');
});

test('Clicking A and B updates display to 00AB', () => {
    const aButton = document.querySelector('[data-value="A"]');
    const bButton = document.querySelector('[data-value="B"]');
    aButton.click();
    bButton.click();
    expect(display.textContent).toBe('00AB');
});

test('Clicking A + B = updates display to 000C', () => {
    const aButton = document.querySelector('[data-value="A"]');
    const plusButton = document.querySelector('[data-value="+"]');
    const bButton = document.querySelector('[data-value="B"]');
    const equalsButton = document.querySelector('[data-value="="]');
    aButton.click();
    plusButton.click();
    bButton.click();
    equalsButton.click();
    expect(display.textContent).toBe('0015');
});

test('Clicking F - A = updates display to 0005', () => {
    const fButton = document.querySelector('[data-value="F"]');
    const minusButton = document.querySelector('[data-value="-"]');
    const aButton = document.querySelector('[data-value="A"]');
    const equalsButton = document.querySelector('[data-value="="]');
    fButton.click();
    minusButton.click();
    aButton.click();
    equalsButton.click();
    expect(display.textContent).toBe('0005');
});

test('Clicking 2 * 3 = updates display to 0006', () => {
    const twoButton = document.querySelector('[data-value="2"]');
    const multiplyButton = document.querySelector('[data-value="*"]');
    const threeButton = document.querySelector('[data-value="3"]');
    const equalsButton = document.querySelector('[data-value="="]');
    twoButton.click();
    multiplyButton.click();
    threeButton.click();
    equalsButton.click();
    expect(display.textContent).toBe('0006');
});

test('Clicking 8 / 2 = updates display to 0004', () => {
    const eightButton = document.querySelector('[data-value="8"]');
    const divideButton = document.querySelector('[data-value="/"]');
    const twoButton = document.querySelector('[data-value="2"]');
    const equalsButton = document.querySelector('[data-value="="]');
    eightButton.click();
    divideButton.click();
    twoButton.click();
    equalsButton.click();
    expect(display.textContent).toBe('0004');
});

test('Invalid input shows ERROR on display', () => {
    const aButton = document.querySelector('[data-value="A"]');
    const divideButton = document.querySelector('[data-value="/"]');
    const zeroButton = document.querySelector('[data-value="0"]');
    const equalsButton = document.querySelector('[data-value="="]');
    aButton.click();
    divideButton.click();
    zeroButton.click();
    equalsButton.click();
    expect(display.textContent).toBe('ERROR');
});

});

