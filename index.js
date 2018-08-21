// Instructions Go Here

export function palindrome(str) {
  let newStr = str.replace(/[\W_]/g, "").toLowerCase();

  let rev = newStr
    .split("")
    .reverse()
    .join("");

  return newStr === rev;
}

const input = document.getElementById("input");
const output = document.getElementById("output");
const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  let result = palindrome(input.value);

  output.innerHTML =
    input.value == ""
      ? "Empty input!"
      : result
        ? `The string ${input.value} is a palindrome!`
        : `"${input.value}" is not a palindrome!`;
});
