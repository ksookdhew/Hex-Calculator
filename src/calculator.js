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

export {
  hexAdd,
  hexSubtract,
  hexMultiply,
  hexDivide
};