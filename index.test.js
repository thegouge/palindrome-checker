import {
  palindrome
} from "./index.js";

var output;

beforeEach(() => {
  output = null;
});

describe("Palindrome Checker", () => {
  it("Should return a boolean", () => {
    output = palindrome("derp");
    expect(typeof output).toBe("boolean", "it doesn't return a boolean");
  });

  it("Should return true when a palindrome is inputted", () => {
    output = palindrome("eye");
    expect(output).toBe(true, "doesn't input true when given a palindrome");
  });

  it("Should ignore underscores", () => {
    output = palindrome("_eye");
    expect(output).toBe(true, "it doesn't ignore underscores");
  });

  it("Should ignore whitespace", () => {
    output = palindrome("race car");
    expect(output).toBe(true, "it doesn't ignore whitespace");
  });

  it("Should return false if given a none-palindrome", () => {
    output = palindrome("not a palindrome");
    expect(output).toBe(false, "it gives a false positive for non-palindromes");
  });

  it("Should ignore capitalization and punctuation", () => {
    output = palindrome("A man, a plan, a canal. Panama");
    expect(output).toBe(true, "it doesn't ignore capitalization and/or punctuation");
  });

  it("Should still work with non-word characters", () => {
    output = palindrome("0_0 (: /-\\ :) 0-0");
    expect(output).toBe(true, "it doesn't work with non-word characters");
  });

  it("Should work with any String", () => {
    output = palindrome("never odd or even");
    expect(output).toBe(true, "the string 'never odd or even' didn't work as expected");

    output = palindrome("nope");
    expect(output).toBe(false, "the string 'nope' didn't work as expected");

    output = palindrome("almostomla");
    expect(output).toBe(false, "the string 'almostomla' didn't work as expected");

    output = palindrome("My age is 0, 0 si ega ym.");
    expect(output).toBe(true, "the string 'My age is 0, 0 si ega ym.' didn't work as expected");

    output = palindrome("1 eye for of 1 eye.");
    expect(output).toBe(false, "the string '1 eye for of 1 eye.' didn't work as expected");

    output = palindrome("five|\\_/|four");
    expect(output).toBe(false, "the string 'five|\\_/|four' didn't work as expected");
  });

});