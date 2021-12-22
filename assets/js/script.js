var password = ""
// characters object
var characters = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numeric: "0123456789",
  special: "!@#$%^&*()"
};

// Function to generate random number between 8 and 128 
var setPasswordLength = function() {
  var passwordLength = Math.floor(Math.random()*128)+8;
  return passwordLength;
};

// Function to set password characters
var setPasswordCharacters = function() {
  // when prompt answered input validated and character type selected
  var alphabet, numbers, special;
  while (alphabet === undefined) {
    var promptCase = window.prompt("Would you like your password to include UPPER case letters? Enter 'YES' or 'NO.'");
    switch (promptCase.toLowerCase()) {
      case "yes":
        alphabet = characters.lowercase + characters.uppercase;
        break;
      case "no":
        alphabet = characters.lowercase;
        break;
      default:
        window.alert("You need to provide a valid answer. Please try again.");
        break;
    }
  }
  while (numbers === undefined) {
    var promptNumeric = window.prompt("Would you like your password to include numbers? Enter 'YES' or 'NO.'");
    switch (promptNumeric.toLowerCase()) {
      case "yes":
        numbers = characters.numeric
        break;
      case "no":
        numbers = ""
        break;
      default:
        window.alert("You need to provide a valid answer. Please try again.");
        break;
    }
  }
  while (special === undefined) {
    var promptSpecial = window.prompt("Would you like your password to include special characters? Enter 'YES' or 'NO.'");
    switch (promptSpecial.toLowerCase()) {
      case "yes":
        special = characters.special
        break;
      case "no":
        special = ""
        break;
      default:
        window.alert("You need to provide a valid answer. Please try again.");
        break;
    }
  }
  // set password characters based on prompt responses
  password = alphabet + numbers + special;
  return;
};

// FUNCTION TO GENERATE PASSWORD 
var generatePassword = function() {
  // prompt and ask for password inputs 
  setPasswordCharacters();
  // Function to shuffle password characters 
var shuffle = function() {
  // convert password to an array 
  var passwordArray = password.split("");
  // randomly sort array items 
  passwordArray = array.sort(() => Math.random() - 0.5);
  // set password length from setPasswordLength()
  passwordArray.length = setPasswordLength()
  // convert passwordArray back to string 
  password = passwordArray.join("");
  return;
}
  // password displayed in an alert 
  window.alert("Your new password is " + password);
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
