// Assignment Code
var generateBtn = document.querySelector("#generate");


//Arrays


var number = []
var lowerCase = []
var upperCase = []
var specialCharacters = []





















// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



