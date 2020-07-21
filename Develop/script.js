// Assignment Code
var generateBtn = document.querySelector("#generate");


//Arrays
const pNumeric = '1234567890'
const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const specialCharacters = '!#$%&()*+,-./:;<=>?@[]^_{|}~'
//decalred variables 
var pLength;
var lCase;
var upCase;
var pNum;
var sCharacters;

function writePassword() {
  var prompts = getprompts();
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//this function controls the promts, confirms, if and do while loop
function getprompts() {
  // user picks length of password
  pLength = parseInt(prompt('Please pick a number between 8 and 128. This will be the length of your password!'));

  // if user picks length of password less than 8 or greater that 128 or not a number user is asked to pick between 8 and 128
  if (pLength < 8 || pLength > 128 || isNaN(pLength)) {
    pLength = prompt('Remember password length is any number between 8 and 128. Please choose again.');
  }

  
  console.log('Password Length is ' + pLength);

  //do all the user confirms bellow while they are all false. 
  do {
    console.log('whilecheck')
    lCase = confirm('Do you want to add lowercase letters to your password?');
    console.log('picked lowercase' + lCase);

    upCase = confirm('Do you want to add uppercase letters to your password?');
    console.log('picked uppercase' + upCase);

    pNum = confirm('Do you want to add numbers to your password?');
    console.log('picked numeric' + pNum);

    sCharacters = confirm('Do you want to add special characters to your password?');
    console.log('picked specialcharacters' + sCharacters);
    //this alerts the user to pick at least one criteria options for their password
    if (!lCase && !upCase && !pNum && !sCharacters){
    alert('You have to pick at least one of the previouse criteria options for your password');
    }
  }
  while (!lCase && !upCase && !pNum && !sCharacters);
}
//This function creates the password. It organizes the users criteria input 
function generatePassword() {
  //variable to store user category choices for password randomization
  let allowed = "";

  if (lCase) {
    allowed = allowed + lowerCase;
  }

  if (upCase) {
  
    allowed = allowed + upperCase;
  }

  if (pNum) {
    
    allowed = allowed + pNumeric;
  }

  if (sCharacters) {

    allowed = allowed + specialCharacters;
  }
  console.log("allowed characters" + allowed);
  //making length equal to the length the user picked for password
  var length = parseInt(pLength);
  //newPassword will be created bellow in the for. 
  var newPassword ="";
// this for takes the category choices of the user that are stored in the allowed is asigned the length from the user input is radomnized by the math random and is combined into newPassword
  for (let i = 0; i < pLength; i++) {
    var random = Math.floor(Math.random() * allowed.length);
    newPassword += allowed[random];
  }

  console.log(newPassword)
//this returns the password to be printed on the screen!!!
  return newPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

