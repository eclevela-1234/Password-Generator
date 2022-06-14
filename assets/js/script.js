// Assignment code here

//Generate Password function begins
var generatePassword = function () {
  // Initialize variables
  var passCriteria = {};
  var catChoices = [];
  var catArray = [];
  var password1 = "";

  // Set passChar object
  var passChar = {
    specials: [' ', '!' ,'"', '#', '$', '%', '&', "'", '(' , ")", "*", "+", ',', "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", '\\', ']', '^', '_', "`", "{", "|", "}", "~"],
    lowers: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
    uppers: ['A','B','C,','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
    numers: ['0','1','2','3','4','5','6','7','8','9']
  };
  // callback function for invalid response
  var alertInvalid = function () {
    window.alert("Please enter a valid response.");
  };

  // function to prompt user for password criteria and pass into passCriteria object
  var promptCriteria = function () {
    // prompt user for password length
    var promptLength = function () {
      passCriteria.passLen = window.prompt(
        "Please enter the length of password (8-128 characters)"
      );
      if (passCriteria.passLen < 8 || passCriteria.passLen > 128) {
        alertInvalid();
        promptLength();
      }
    };

    // Push lower case into catChoices array (default)
    catChoices.push("lowers");

    // prompt user for boolean responses to criteria
    var promptBool = function () {
      var caseResponse = window.confirm(
        "Is this password case-sensitive?\n\n[Ok] for YES, [Cancel] for NO"
      );
      if (caseResponse) {
        passCriteria.caseSense = true;
        catChoices.push("uppers");
      } else {
        passCriteria.caseSense = false;
      }

      var numResponse = window.confirm(
        "Will the password contain numbers?\n\n[Ok] for YES, [Cancel] for NO"
      );
      if (numResponse) {
        passCriteria.numb = true;
        catChoices.push("numers");
      } else {
        passCriteria.numb = false;
      }

      var specResponse = window.confirm(
        "Will the password contain special characters?\n\n[Ok] for YES, [Cancel] for NO"
      );
      if (specResponse) {
        passCriteria.spec = true;
        catChoices.push("specials");
      } else {
        passCriteria.spec = false;
      }
    };

    // function to confirm password criteria by reading passCriteria object
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

      // console.log passLen
      console.log("Length: " + passCriteria.passLen);
      // log choices in console
      console.log("Criteria: " + catChoices);

      // restarts function if criteria declined
      if (!confirm) {
        window.alert("No problem! Let's try again!");
        delete(passCriteria);
        generatePassword();
      }
    };

    // calls to subroutines
    promptLength();
    promptBool();
    confirmCrit();
    genCategories();
  };

  // generate random character choices for each unit of password length  
  var genCategories = function () {
    for (var i = 0; i < passCriteria.passLen; i++) {
      // Random category choice taken from catChoices
      category = catChoices[Math.floor(Math.random() * catChoices.length)];
      // store choices in catArray
      catArray.push(category);
      // concatenate password string by generating random value from coresponding [category] key in passChar object
      password1 = password1.concat(
        // random choice happens here
        passChar[category][
          Math.floor(Math.random() * passChar[category].length)
        ]
      );
    }

    // validate every catChoices element is included in catArray, If not, retry
    var validate = catChoices.every((element) => {
      return catArray.includes(element);
    });
    if (!validate) {
      password1 = "";
      genCategories();
    }
  };

  // call to promptCriteria function
  promptCriteria();

  // return password to writePassword function
  return password1;
};
// generatePassword function end


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

