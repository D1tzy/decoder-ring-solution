// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  function caesar(input, shift, encode = true) {
    // your solution code here
    const caesarAlphabet = getCaesar(alphabet, shift, encode);

    return caesarAlphabet;
  }

  function getCaesar(alphabet, shift, encode = true) {
    try {
      const returnAlphabet = [];

      for (let each in alphabet) {
        const letter = alphabet[each];
        const index = each;

        if ((shift > 0 && encode === true) || (shift < 0 && encode === false)) {
          try {
            letter = alphabet[index + Math.abs(shift)];
            returnAlphabet.push(letter);
          } catch (errors) {
            const newValue = (index + Math.abs(shift)) - alphabet.length;
            letter = alphabet[newValue];
            returnAlphabet.push(letter); 
          }

        } else {
          try {
            letter = alphabet[index - Math.abs(shift)];
            returnAlphabet.push(letter);
          } catch (errors) {
            const newValue = (alphabet.length - Math.abs(shift));
            letter = alphabet[newValue];
            returnAlphabet.push(letter);
          }
        }
      }

      return returnAlphabet;
    } catch (error) {

    }
  }

  return {
    caesar,
  };
})();

module.exports = { 
  caesar: caesarModule.caesar,
}
