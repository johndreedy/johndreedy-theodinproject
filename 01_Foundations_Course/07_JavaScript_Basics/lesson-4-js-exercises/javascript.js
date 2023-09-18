// take one number and return number plus 7

function add7 (num) {
    return num + 7;
}

console.log(add7(4));

// take two numbers and multiply their product

function multiply (num1, num2) {
    return num1 * num2;
}

console.log(multiply(428, 234));

// take a string and return it with only the first letter capitalised

function capitalise (string) {
    firstLetterInput = string.charAt(0).toUpperCase();
    otherLetterInput = string.slice(1);
    return firstLetterInput + otherLetterInput;
}

console.log(capitalise("hello world"));

// take a string and return the last letter of it

function lastLetter (string) {
    return string.slice(-1);
}

console.log(lastLetter("Interesting"));