// Assignment code here
var passCriteria = {};

var alertInvalid = function () {
  window.alert("Please enter a valid response.");
};

// prompt user for password criteria and pass into passCriteria object
var promptCriteria = function () {
  var promptLength = function () {
    // prompt user for password length
    passCriteria.passLen = window.prompt(
      "Please enter the length of password (8-128 characters)"
    );
    if (passCriteria.passLen < 8 || passCriteria.passLen > 128) {
      alertInvalid();
      promptLength();
    }
  };
  // prompt user for boolean responses
  var promptBool = function () {
    var caseResponse = window.confirm(
      "Is this password case-sensitive?\n\n[Ok] for YES, [Cancel] for NO"
    );
    if (caseResponse) {
      passCriteria.caseSense = true;
    } else {
      passCriteria.caseSense = false;
    }

    var numResponse = window.confirm(
      "Will the password contain numbers?\n\n[Ok] for YES, [Cancel] for NO"
    );
    if (numResponse) {
      passCriteria.numb = true;
    } else {
      passCriteria.numb = false;
    }

    var specResponse = window.confirm(
      "Will the password contain special characters?\n\n[Ok] for YES, [Cancel] for NO"
    );
    if (specResponse) {
      passCriteria.spec = true;
    } else {
      passCriteria.spec = false;
    }
  };
  var confirmCrit = function () {
    var confirm = window.confirm(
      "Please confirm these criteria for your password:\n\n[Ok] for YES, [Cancel] for NO\n\nPassword Length: " +
        passCriteria.passLen +
        "\nCase-sensitive: " +
        passCriteria.caseSense +
        "\nNumerics: " +
        passCriteria.numb +
        "\nSpecial Characters: " +
        passCriteria.spec
    );
    if (!confirm) {
      window.alert("No problem! Let's try again!");
      promptCriteria();
    }
  };
  promptLength();
  promptBool();
  confirmCrit();
};


// randomizer function testing below
var passChar = {
  specials: [' ', '!' ,'"', '#', '$', '%', '&', "'", '(' , ")", "*", "+", ',', "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", '\\', ']', '^', '_', "`", "{", "|", "}", "~"],
  lowers: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
  uppers: ['A','B','C,','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
  Numers: ['0','1','2','3','4','5','6','7','8','9']
};

var randomizer = function (y) {
  len = passChar[y].length; 

  // len = testes.x.length;
  // console.log(testes.x, len);
console.log(len);
};

var generatePassword = function () {
  randomizer("lowers");
  promptCriteria();
  return "password";
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  console.log("password");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
