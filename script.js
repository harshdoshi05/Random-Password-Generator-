const passwordBox = document.getElementById("password");
const length = 12;
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = uppercaseLetters.toLowerCase();
const numbers = "0123456789";
const specialCharacters = "!@#$%^&*()_+=-[]{}|;':\",<>/?";
const allCharacters =
  uppercaseLetters + lowercaseLetters + numbers + specialCharacters;

function generatePassword() {
  let password = "";
  password +=
    uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
  password +=
    lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password +=
    specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

  while (length > password.length) {
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }
  passwordBox.value = password;
}
function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
}
