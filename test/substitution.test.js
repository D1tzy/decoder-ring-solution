// Write your tests here!
const expect = require("chai").expect;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const {substitution, ifTrue, ifFalse} = require("../src/substitution.js");
const testAlphabet = "xoyqmcgrukswaflnthdjpzibev";
const expectEqual = (actual, expected) => expect(actual).to.equal(expected);

describe("ifTrue()", () => {
    it("should return a proper substituted letter if true", () => {
        let expected = "x";
        let actual = ifTrue(alphabet, testAlphabet.split(""), "a");
        expectEqual(actual, expected);
    })
    it("should return symbols as is", () => {
        expected = "!";
        actual = ifTrue(alphabet, testAlphabet.split(""), "!");
        expectEqual(actual, expected);
    })
    it("should ignore spaces", () => {
        expected = " ";
        actual = ifTrue(alphabet, testAlphabet.split(""), " ");
        expectEqual(actual, expected);
    })
})

describe("ifFalse()", () => {
    it("should return a proper substituted letter if false", () => {
        const expected = "a";
        const actual = ifFalse(alphabet, testAlphabet.split(""), "x");
        expectEqual(actual, expected);
    })
    it("should return symbols as is", () => {
        expected = "!";
        actual = ifFalse(alphabet, testAlphabet.split(""), "!");
        expectEqual(actual, expected);
    })
    it("should ignore spaces", () => {
        expected = " ";
        actual = ifFalse(alphabet, testAlphabet.split(""), " ");
        expectEqual(actual, expected);
    })
})

describe("substitution()", () => {
    it("should return a proper coded string", () => {
        let expected = "elp xhm x dne";
        let actual = substitution("You are a spy", testAlphabet);
        expectEqual(actual, expected);

    })
    it("should return a proper decoded string", () => {
        expected = "you are a spy";
        actual = substitution("elp xhm x dne", testAlphabet, false);
        expectEqual(actual, expected);
    })
    it("should return false if the test alphabet isnt exactly 26 characters", () => {
        expected = false;
        actual = substitution("You are a spy", "xhskdolmp");
        expectEqual(actual, expected);
    })
    it("should return false if the alphabet input has the same character twice", () => {
        expected = false;
        actual = substitution("You are a spy", "xoyymcgrukswaflnthdjpzibev")
    })
})