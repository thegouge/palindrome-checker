// Instructions Go Here

export function palindrome(str) {
  str = str.replace(/[\W_]/g, '').toLowerCase();

  let rev = str.split('').reverse().join('');

  return str === rev;
}

const input = document.getElementById("input");
const output = document.getElementById("output");
const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  let result = palindrome(input.value);

  output.innerHTML = (input.value == "") ? "Empty input!" : (result) ? `The string ${input.value} is a palindrome!` : `"${input.value}" is not a palindrome!`;

});