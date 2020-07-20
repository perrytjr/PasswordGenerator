// Assignment Code
var generateBtn = document.querySelector("#generate");


//Arrays
const pNumeric = '1234567890'.split('');
const lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('');
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const specialCharacters = '!#$%&()*+,-./:;<=>?@[]^_{|}~'.split('');


//variables





function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//passwordlength is obtained from user
function generatePassword(){
 
// user picks length of password
let pLength = parseInt(prompt('Please pick length of password between 8 and 128 characters!'));

// if user picks length of password less than 8 or greater that 128 user is asked to pick between 8 and 128
while(pLength < 8 || pLength > 128 || isNaN(pLength)) {
  pLength = prompt('Remember password is between 8 and 128 characters long. Please choose again.');
}

console.log('Password Length is ' + pLength);


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