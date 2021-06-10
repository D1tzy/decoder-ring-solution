// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const alphaLength = alphabet.length;


const caesarModule = (function () {
  // you can add any code you want within this function scope
  function caesar(input, shift, encode = true) {
    // your solution code here
    if (!shift || shift > 25 || shift < -25) return false;

    const returnString = [];
    const split = input.split("");

    for (let each in split) returnString.push(getCaesar(alphabet, split[each], shift, encode));

    return returnString.join("");
  }

  function getCaesar(alphabet, letter, shift, encode = true) {
    
    const index = alphabet.indexOf(letter.toLowerCase());

    if(!alphabet.includes(letter.toLowerCase())) return letter;
   
    if ((shift > 0 && encode == true) || (shift < 0 && encode == false)) {
      return (index < (alphaLength - Math.abs(shift))) ? letter = alphabet[index + Math.abs(shift)] : letter = alphabet[(index + Math.abs(shift) - alphaLength)];
    }
    else {
      return (index >= Math.abs(shift)) ? letter = alphabet[index - Math.abs(shift)] : letter = alphabet[(alphaLength + index) - Math.abs(shift)];
    }
  }

  return {
    caesar, getCaesar
  };})();
module.exports = { 
  caesar: caesarModule.caesar, getCaesar: caesarModule.getCaesar, alphabet,
}
