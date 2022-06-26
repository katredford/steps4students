
//first part
//arrays
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=']

//create function for password options
function passwordOptions() {
//call this function in the generatPassword function or writePassword function
//if just starting may have to comment out generatePassword in writepassword
  
//use window prompt to get a number from the user
//let them try it without parseInt first then google how to convert string to integer
    var passlength = parseInt(
    prompt('How many characters would you like your password to contain?')
    );
  //console.log(passlength);



  // EXTRA STUFF IF YOU HAVE TIME
   // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  // if (Number.isNaN(length)) {
  //   alert('Password length must be provided as a number');
  //   return null;
  //}


  //these if statements can be combined
  // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
  if (passlength < 8) {
    alert('Password length must be at least 8 characters');
    return null;
  }

  // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
  if (passlength > 128) {
    alert('Password length must less than 129 characters');
    return null;
  }

  //make variables set to the value of the window confirms, console log values
  var hasSpecialCharacters = confirm("click ok to include special characters");
  //console.log(hasSpecialCharacters)

  var up = confirm("UPPERCASE");
  var low = confirm("lowercase");
  var num = confirm("numbers");
  

//EXTRA STUFF IF YOU HAVE TIME
   // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
  // if (
  //   hasSpecialCharacters === false &&
  //   hasNumericCharacters === false &&
  //   hasLowerCasedCharacters === false &&
  //   hasUpperCasedCharacters === false
  // ) {
  //   alert('Must select at least one character type');
  //   return null;
  // }


//discus objects and how you can store the values from what we get from the user
//in an object
  
  const passwordOptions = {
            passOpt: passlength,
            upperOpt: up,
            lowOpt: low,
            numOpt: num,
            specOpt: hasSpecialCharacters

        };
        //console.log(passwordOptions, 'in the console?????');

        return passwordOptions;

}

//second part
function generatePassword() {
  //step 1: call passwordOptions
  var passOptions = passwordOptions();

  //step 2: create empty array for other arrays to get stuffed into
  var possibleCharacters = [];

  //step 5: create guaranteed characters array
  var guaranteedCharacters = [];

  
//step 3: if statement to add array to possiblecharacters
  if (passOptions.specOpt) {
    //add special characters to the array if the user chose it
    possibleCharacters = possibleCharacters + special;
    //console.log(possibleCharacters, "this is possibleCharacters array");
//step 4: get a random index from the array 
    var randomSpec = Math.floor(Math.random() * special.length);
    console.log(randomSpec)
//step 6: use randomSpec on the special array to return the character at the random index
    var randomSpecialCharacter = special[randomSpec];
    console.log(randomSpec)
    // guaranteedCharacters.push()
  }

}




// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //call passwordOptions here until you create the generatePassword function
  // passwordOptions()
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
