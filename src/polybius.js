// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
const alphabet = [["a", "b", "c", "d", "e"], 
                  ["f", "g", "h", "i/j", "k"],
                  ["l", "m", "n", "o", "p"],
                  ["q", "r", "s", "t", "u"],
                  ["v", "w", "x", "y", "z"]];

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    const returnArray = [];

    // split the input into an array
    const split = input.split("");


    // if encode is true
    if (encode) {
      // for each index in split, run the getPolybius function and push the value to the returnArray
      for (let each in split) returnArray.push(getPolybius(alphabet, split[each]));
    } 
    

    // if encode is false
    else {
      // create a testInput variable to make sure the input value is the correct length
      // remove all spaces in input
      const testInput = input.replace(" ","");
      // if the length of testInput divided by 2 has a remainder, return false
      if (testInput.length % 2 != 0) return false;

      // as long as the above code doesnt return false
      // loop through the split array, add 2 to i after every iteration
      // in order to keep up with the indexing
      for (let i = 0; i < split.length; i += 2) {
        // as long as neither of the values being tested is a space, push the value from getAntiPolybius for the 2 indexes
        if (split[i] != " " && split[i + 1] != " ") {
          returnArray.push(getAntiPolybius(alphabet, split[i], split[i + 1]));
        }
        // if one of the values is a space
        else {
          // add one to i to skip over that space
          i++;
          // push a space to return array to keep that space
          returnArray.push(" ");
          // then push getAntiPolybius
          returnArray.push(getAntiPolybius(alphabet, split[i], split[i + 1]));
        }
      }   
    }

    return returnArray.join("");
  }

  function getPolybius(alphabet, letter) {
    let returnValue = [];
    letter = letter.toLowerCase();

    if (letter == "i" || letter == "j") return "42";

    for (let each in alphabet) {
      const row = alphabet[each];

      if (row.includes(letter))  {
        returnValue.push(row.indexOf(letter) + 1);
        returnValue.push(parseInt(each) + 1);
      }
    }

    returnValue = returnValue.join("");
    
    return returnValue.length > 0 ? returnValue.toString() : letter;
  }

  function getAntiPolybius(alphabet, firstNumber, secondNumber) {
    return alphabet[secondNumber - 1][firstNumber - 1];
  }

  return {
    polybius, getPolybius, getAntiPolybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius, getPolybius: polybiusModule.getPolybius, getAntiPolybius: polybiusModule.getAntiPolybius, alphabet, };
