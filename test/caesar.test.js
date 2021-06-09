// Write your tests here!
const expect = require("chai").expect;
var {caesar, getCaesar, alphabet} = require("../src/caesar.js");
const expectEqual = (actual, expected) => expect(actual).to.equal(expected);  

describe("getCaesar()", () => {
    it("should return the proper caesar letter", () => {
        let expected = "d";
        let actual = getCaesar(alphabet, "a", 3, true);     
        expectEqual(actual, expected);
    });
    it("should return the proper caesar letter if the first case isnt true", () => {
        expected = "p"
        actual = getCaesar(alphabet, "s", -3, true);
        expectEqual(actual, expected);
    });
    it("should return special characters as is", () => {
        expected = "%";
        actual = getCaesar(alphabet, "%", 3);
        expectEqual(actual, expected);
    });
});

describe("caesar() errors", () => {
    let expected = false;
    let actual;

    it("should return false if the shift value isnt present", () => {
        actual = caesar("Hayden Quale");
        expectEqual(actual, expected);
    });
    it("should return false if the shift value is 0", () => {
        actual = caesar("Hayden Quale", 0);
        expectEqual(actual, expected);
    });
    it("should return false if the shift value is greater than 25", () => {
        actual = caesar("Hayden Quale", 26);
        expectEqual(actual, expected);
    });
    it("should return false if the shift value is less than -25", () => {
        actual = caesar("Hayden Quale", -26);
        expectEqual(actual, expected);
    })
});

describe("caesar() return", () => {
    it("should return a proper caesar cyphered string, even with capital letters", () => {
        let actual = caesar("Hayden", 3);
        let expected = "kdbghq";
        expectEqual(actual, expected);
    });
    it("should be able to decode messages too", () => {
        actual = caesar("kdbghq", 3, false);
        expected = "hayden";
        expectEqual(actual, expected);
    })
    it("should return a proper caesar cyphered sentence, even with spaces and special characters", () => {
        actual = caesar("g ayl'r uygr rm amknjcrc rfgq npmhcar! #$%?!", -2, false);
        expected = "i can't wait to complete this project! #$%?!";
        expectEqual(actual, expected);
    })
})

