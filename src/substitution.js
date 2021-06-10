// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
let testAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here

    // if the input alphabet length isnt 26, return false
    if (!alphabet || alphabet.length != 26) return false;

    // return array
    const returnArray = [];

    // split the input values into arrays 
    const splitAlphabet = alphabet.split("");
    const split = input.split("");

    // this for loop tests to see if the same value appears in the input alphabet twice
    for (let i = 0; i < 26; i++) {
      const test = splitAlphabet.slice(i + 1);
      if (test.includes(splitAlphabet[i])) return false;
    }

    // this for loop pushes the values to the return array
    // depending on whether encode is true or false, a different function will be called
    for (let each in split) {
      if (encode) returnArray.push(ifTrue(testAlphabet, splitAlphabet, split[each]));
      if (!encode) returnArray.push(ifFalse(testAlphabet, splitAlphabet, split[each]))
    }

    // after the array is formed, join it together and return it
    return returnArray.join("");
  }

  // this is the function run if the message is being encoded
  function ifTrue(alphabet, split, letter) {
    // if the input value isnt in the alphabet, its either a space, number, or special character
    // simply return it
    if (!alphabet.includes(letter.toLowerCase())) return letter;

    // this variable stores the index of the letter in the alphabet
    const index = alphabet.indexOf(letter.toLowerCase());
    // this line returns the value in the input alphabet at the index stored above
    return split[index];    
  }

  // this is the function run if the message is being decoded
  function ifFalse(alphabet, split, letter) {
    // same logic as ifTrue()
    if (!split.includes(letter.toLowerCase())) return letter;
    const index = split.indexOf(letter.toLowerCase());
    return alphabet[index];
  }

  return {
    substitution, ifTrue, ifFalse,
  };
})();

module.exports = { substitution: substitutionModule.substitution, ifFalse: substitutionModule.ifFalse, ifTrue: substitutionModule.ifTrue, };
