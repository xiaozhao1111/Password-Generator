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

// Delaration of an empty array to store all the selected characters
let passwordCharacterArr = [];

// Declaration of an string the store random characters for password
let passwordStr = "";

// Function to prompt user for password options
function getPasswordOptions() {
  alert("Please set the length of your password!");
  // keep requesting the password length while the password length is not between 10 and 64.
  while(!(passwordLength>10 && passwordLength<64 && Number.isInteger(passwordLength))){
    passwordLength = prompt("The password length should be between 10 and 64, but doesn't include 10 and 64!"); 
    // prompt() always return a string. Make passwordLength to a float before use it.
    passwordLength =parseFloat(passwordLength);
    console.log("Password length is an interger: "+Number.isInteger(passwordLength)); 
  }
  console.log("The length of password is " + passwordLength + ".");

  alert("Please confirm the character types you prefer!")
  while(!hasLowerCase && !hasUpperCase && !hasNumeric && !hasSpecial){
    hasLowerCase = confirm("The password will have lowercase characters, ok?");
    hasUpperCase = confirm("The password will have uppercase characters, ok?");
    hasNumeric = confirm("The password will have numeric characters, ok?");
    hasSpecial = confirm("The password will have special characters, ok?");
  }

  // calculate the character type numbers
  if(hasLowerCase){
    characterTypeNum++;
    console.log("The password has lower case characters.");
  };
  if(hasUpperCase){
    characterTypeNum++;
    console.log("The password has upper case characters.");};
  if(hasNumeric){
    characterTypeNum++;
    console.log("The password has numeric characters.");};
  if(hasSpecial){
    characterTypeNum++;
    console.log("The password has special characters.");
  };

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

// Function to shuffle the password string
function shuffleStr(str){
  let strArr = str.split("");
  console.log("The orginal password string is "+ strArr);
  for(let i=strArr.length-1; i>0; i--){
    let j = Math.floor(Math.random()*(i+1));
    let k = strArr[i];
    strArr[i] = strArr[j];
    strArr[j] = k;
  }
  console.log("The shuffled password string is " + strArr);
  return strArr.join("");
}

// Function to reset the global values for the generation of another passoword
function resetValues() {
  passwordLength = 0;
  hasLowerCase = false;
  hasUpperCase = false;
  hasNumeric = false;
  hasSpecial = false;
  characterTypeNum = 0;
  passwordCharacterArr = [];
  passwordStr ="";
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
  getSelectedCharacter();
  // Firstly, add one random character to the password string if the character type is selected. Then, using a 'for' loop to select random characters from the joined character array that the chracter type was selected.
if(hasLowerCase){
  passwordStr += getRandom(lowerCasedCharacters);
}
if(hasUpperCase){
  passwordStr += getRandom(upperCasedCharacters);
}
if(hasNumeric){
  passwordStr += getRandom(numericCharacters);
}
if(hasSpecial){
  passwordStr += getRandom(specialCharacters);
}

for(let i=0; i<passwordLength-characterTypeNum; i++){
  passwordStr += getRandom(passwordCharacterArr);
}

passwordStr = shuffleStr(passwordStr);

return passwordStr;
}



// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  resetValues(); // reset the values before generate a new password
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);