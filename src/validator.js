// src/validator.js

function isValidHex(input){
    return /^[0-9A-F]{1,2}$/i.test(input);
}

module.exports = isValidHex;

