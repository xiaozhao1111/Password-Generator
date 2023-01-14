// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Declaration of global variables for the password option settings
let passwordLength = 0;
let hasLowerCase = false;
let hasUpperCase = false;
let hasNumeric = false;
let hasSpecial = false;
let characterTypeNum = 0;

//Delaration of an empty array to store all the selected characters
let passwordCharacterArr = [];

// Function to prompt user for password options
function getPasswordOptions() {
  alert("Please set the length of your password!");
  // keep requesting the password length while the password length is not between 10 and 64.
  while(!(passwordLength>10 && passwordLength<64)){
    passwordLength = prompt("The password length should be between 10 and 64, but doesn't include 10 and 64!")
  }

  alert("Please confirm the character types you prefer!")
  while(!hasLowerCase && !hasUpperCase && !hasNumeric && !hasSpecial){
    hasLowerCase = confirm("The password will have lowercase characters, ok?");
    hasUpperCase = confirm("The password will have uppercase characters, ok?");
    hasNumeric = confirm("The password will have numeric characters, ok?");
    hasSpecial = confirm("The password will have special characters, ok?");
  }

}

// Function for getting a random element from an array
function getRandom(arr) {
  let randomNum = Math.floor(Math.random()*arr.length);
  return arr[randomNum];
}

// Function to join all the selected type characters
function getSelectedCharacter(){
  if(hasLowerCase){
    passwordCharacterArr =passwordCharacterArr.concat(lowerCasedCharacters);
  }
  if(hasUpperCase){
    passwordCharacterArr = passwordCharacterArr.concat(upperCasedCharacters);
  }
  if(hasNumeric){
    passwordCharacterArr = passwordCharacterArr.concat(numericCharacters);
  }
  if(hasSpecial){
    passwordCharacterArr = passwordCharacterArr.concat(specialCharacters);
  }
  
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
  getSelectedCharacter();
  console.log(passwordCharacterArr);
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);