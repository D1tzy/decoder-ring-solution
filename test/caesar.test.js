// Write your tests here!
const expect = require("mocha").expect;
const {getCaesar} = require("../src/caesar.js");
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

describe("getCaesar return", () => {
    it("should return a proper caesar cyphered alphabet based on the input values", () => {
        const expected = ["b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a"];
        const actual = getCaesar(alphabet, 1, true);
        expect(actual).to.eql(expected);
    });
});