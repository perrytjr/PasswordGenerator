// Assignment Code
var generateBtn = document.querySelector("#generate");


//Arrays
const pNumeric = '1234567890'.split('');
const lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('');
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const specialCharacters = '!#$%&()*+,-./:;<=>?@[]^_{|}~'.split('');

const useLowerCase = confirm('Do you want lower case letters?');
const useUpperCase = confirm('Do you want upper case letters?');
const useSpecialCharacters = confirm('Do you want special characters?');
const usepNumeric = confirm('Do you want to add numbers?')

let password = [];

if (useLowerCase) {
  for (let i = 0; i < 2; i++) {
    password.push('randomCharacter');
  }
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



/* GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page */