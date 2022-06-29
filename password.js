//Create a variable called password and set it’s value to a string of your choice.

//Write a conditional statement that checks if the password meets the following constraints:

//At least 10 characters long. Contains at least one letter and one number

//If the password meets the constraint, console log a success message.

//If the password fails the constraint, console log a failure message.

//Test out your conditional by changing the value of your password variable and running your file! */

let password = "iLoveYou1!";

//split string to array so we can loop over it
let passwordSplit = password.split("");

console.log(passwordSplit);

let alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "x",
  "y",
  "z",
];

let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

if (password.length >= 10) {
  for (let i = 0; i < passwordSplit.length; i++) {
    if (alphabet.includes(passwordSplit[i])) {
      for (let j = i + 1; j < passwordSplit.length; j++) {
        if (nums.includes(+passwordSplit[j])) {
          return console.log(`password meets requirements`);
        }
      }
    }
    return console.log(`password doesnt meet requiremenets`);
  }
} else {
  console.log(`did not meet length requirements,try again with 10 digits`);
}
