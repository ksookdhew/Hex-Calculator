const {
  hexAdd,
  hexSubtract,
  hexMultiply,
  hexDivide,
} = require('../src/calculatorTest.js');

test('Adds two hex numbers correctly', () => {
  expect(hexAdd('A', '5')).toBe('F');
});

test('Returns ERROR if result exceeds four hex digits', () => {
  expect(hexAdd('FFFF', '1')).toBe('ERROR');
});

test('Subtracts without going negative', () => {
  expect(hexSubtract('10', '5')).toBe('B');
});

test('Returns ERROR if subtraction is negative', () => {
  expect(hexSubtract('5', 'A')).toBe('ERROR');
});

test('Multiplies two hex numbers correctly', () => {
  expect(hexMultiply('A', '5')).toBe('32');
});

test('Divides two hex numbers correctly', () => {
  expect(hexDivide('A', '2')).toBe('5');
});
  
  test('Returns ERROR when output exceeds four digits', () => {
    expect(hexAdd('FFFF', '1')).toBe('ERROR');
    expect(hexMultiply('FFFF', 'F')).toBe('ERROR');
  });
  
