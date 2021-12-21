// Password characters object
var characters = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numeric: "0123456789",
  special: "!@#$%^&*()"
};

// generate random number between 8 and 128 
var setPasswordLength = function() {
  var passwordLength = Math.floor(Math.random()*128)+8;
  return passwordLength;
};

// FUNCTION TO GENERATE PASSWORD 
var generatePassword = function() {
  // when prompt answered input validated and character type selected
var selectCase = function() {
  var promptCase = window.prompt("Would you like your password to include UPPER case letters? Enter 'YES' or 'NO.'");
  switch(promptCase) {
    case "yes":
    case "YES":
      var alphabet = characters.lowercase + characters.uppercase;
      break;
    case "no":
    case "NO":
      var alphabet = characters.lowercase;
      break;
    default:
        window.alert("You need to provide a valid answer. Please try again.");
        selectCase();
        break;
  }
  return alphabet
}
var selectNumeric = function() {
  var promptNumeric = window.prompt("Would you like your password to include numbers? Enter 'YES' or 'NO.'");
  switch(promptNumeric) {
    case "yes":
    case "YES":
      var numbers = characters.numeric
      break;
    case "no":
    case "NO":
      var numbers = ""
      break;
    default:
      window.alert("You need to provide a valid answer. Please try again.");
      selectNumeric();
      break;
  }
  return numbers
}
var selectSpecial = function() {
  var promptSpecial = window.prompt("Would you like your password to include special characters? Enter 'YES' or 'NO.'");
  switch(promptSpecial) {
    case "yes":
    case "YES":
      var special = characters.special
      break;
    case "no":
    case "NO":
      var special = ""
      break;
    default:
      window.alert("You need to provide a valid answer. Please try again.");
      selectSpecial();
      break;
  }
  return special
}
// set password characters based on prompt responses
var passwordCharacters = alphabet + numbers + special

  // shuffle passoword characters
  shuffle = function() {
    // convert passwordCharacters to an array 
    var passwordArray = passwordCharacters.split("");
    // randomly sort array items 
    passwordArray = array.sort(() => Math.random() - 0.5);
    // set password length from setPasswordLength()
    passwordArray.length = setPasswordLength()
  }
  // convert passwordArray back to string 
  var password = passwordArray.join("");

  // return randomized new password 
  return password;
};

// password displayed in an alert 
window.alert("Your new password is " + password);


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
