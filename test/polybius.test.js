// Write your tests here!
const expect = require("chai").expect;
const {polybius, getPolybius, getAntiPolybius, alphabet} = require("../src/polybius.js");
const expectEqual = (actual, expected) => expect(actual).to.equal(expected);

describe("getPolybius()", () => {
    it("should return a proper polybius coded letter", () => {
        let expected = "32"
        let actual = getPolybius(alphabet, "h");
        expectEqual(actual, expected);
    })
    it("should ignore special characters", () => {
        expected = "!";
        actual = getPolybius(alphabet, "!");
        expectEqual(actual, expected);
    })
    it("should ignore spaces", () => {
        expected = " ";
        actual = getPolybius(alphabet, " ");
        expectEqual(actual, expected);
    })
    it("should return properly even if the letter passed in is capital", () => {
        expected = "32";
        actual = getPolybius(alphabet, "H");
        expectEqual(actual, expected);
    })
})

describe("getAntiPolybius()", () => {
    it("should return a proper decoded polybius character", () => {
        let expected = "c";
        let actual = getAntiPolybius(alphabet, 3, 1);
        expectEqual(actual, expected);
    })
    it("should output i/j when decoding the number 42", () => {
        expected = "i/j";
        actual = getAntiPolybius(alphabet, 4, 2);
        expectEqual(actual, expected);
    })
})

describe("polybius()", () => {
    it("should return false if the input length is odd and it is set to decode", () => {
        let expected = false;
        let actual = polybius("12345 1234", false);
        expectEqual(actual, expected);
    })
    it("should return a proper coded string", () => {
        expected = "4432423352125413";
        actual = polybius("thinkful");
        expectEqual(actual, expected);
    })
    it("should decode a string properly", () => {
        expected = "thi/jnkful";
        actual = polybius("4432423352125413", false);
        expectEqual(actual, expected);
    })
    it("should maintain spaces when decoding", () => {
        expected = "hello world";
        actual = polybius("3251131343 2543241341", false);
        expectEqual(actual, expected);
    })
    it("should maintain spaces when encoding", () => {
        expected = "3251131343 2543241341";
        actual = polybius("hello world");
        expectEqual(actual, expected);
    })
})