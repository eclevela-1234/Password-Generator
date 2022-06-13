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

  var promptBool = function () {
    // confirm user for case sensitive
    var caseResponse = window.confirm(
      "Is this password case-sensitive?\n\n[Ok] for YES, [Cancel] for NO"
    );
    if (caseResponse) {
      passCriteria.caseSense = true;
    } else {
      passCriteria.caseSense = false;
    }
    // };
    // var promptNumbers = function () {
    // confirm user for case sensitive
    var numResponse = window.confirm(
      "Will the password contain numbers?\n\n[Ok] for YES, [Cancel] for NO"
    );
    if (numResponse) {
      passCriteria.numb = true;
    } else {
      passCriteria.numb = false;
    }
    // };
    // var promptSpecial = function () {
    // confirm user for case sensitive
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
  // promptCase();
  // promptNumbers();
  // promptSpecial();
  console.log(passCriteria);
};

var generatePassword = function () {
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
