
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
  // if (isNaN(length)) {
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
    //another way to do it
    //possibleCharacters = possibleCharacters.concat(special)

    //console.log(possibleCharacters, "this is possibleCharacters array");
//step 4: get a random index from the array 
    var randomChar = Math.floor(Math.random() * special.length);
    //console.log(randomChar)
//step 6: use randomChar on the special array to return the character at the random index
    var randomSpecialCharacter = special[randomChar];
    //console.log(randomSpecialCharacter)
    
//Step 4 and 6 alternate
  // var character = special[Math.floor(Math.random() * special.length)];
  // console.log(character, "the way i did it")
    
//Step 7: add random character to guaranteed characters array
    guaranteedCharacters = guaranteedCharacters + randomSpecialCharacter
    console.log(guaranteedCharacters)
  }
//do 3 more if statments for each type of character
  if (passOptions.upperOpt) {
    possibleCharacters = possibleCharacters + uppercase;
    var randomChar = Math.floor(Math.random() * uppercase.length);
    var randomSpecialCharacter = uppercase[randomChar];
    guaranteedCharacters = guaranteedCharacters + randomSpecialCharacter
    console.log(guaranteedCharacters)
  }

  if (passOptions.lowOpt) {
  possibleCharacters = possibleCharacters + lowercase;
  var randomChar = Math.floor(Math.random() * lowercase.length);
  var randomSpecialCharacter = lowercase[randomChar];
  guaranteedCharacters = guaranteedCharacters + randomSpecialCharacter
  console.log(guaranteedCharacters)
  }

    if (passOptions.numOpt) {
  possibleCharacters = possibleCharacters + numbers;
  var randomChar = Math.floor(Math.random() * numbers.length);
  var randomSpecialCharacter = numbers[randomChar];
  guaranteedCharacters = guaranteedCharacters + randomSpecialCharacter
  console.log(guaranteedCharacters)
}
  
  //Step 8: take the guaranteed characters and minus them from the passlenght the user gave us
  var remainingChars = passOptions.passOpt - guaranteedCharacters.length;
  console.log(remainingChars)

  //Step 9: declare final password variable, add guaranteed characters to it
  var finalPassword = '';
  finalPassword = finalPassword + guaranteedCharacters;
  //console.log(finalPassword, "final password")
  //Step 10: for loop that adds random characters to the final password
  for (var i = 0; i < remainingChars; i++){
    finalPassword += possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
    console.log(finalPassword)
  }
  return finalPassword
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
