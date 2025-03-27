const isValidHex = require('../src/validator.js');

test('Accepts valid two-digit hex input', ()=> {
    expect(isValidHex('A3')).toBe(true);
});

test('Rejects non-Hex characters', () =>{
    expect(isValidHex('G4')).toBe(false);
});

// add the following tests
test('Accepts a valid single-digit hexadecimal', () => {
    expect(isValidHex('F')).toBe(true);
});

test('Rejects more than two characters', () => {
    expect(isValidHex('1A3')).toBe(false);
});

test('Rejects empty input', () => {
    expect(isValidHex('')).toBe(false);
  });

test('Accepts lowercase letters', () => {
    expect(isValidHex('af')).toBe(true);
});

test('Rejects symbols or special characters', () => {
    expect(isValidHex('$A')).toBe(false);
});
  