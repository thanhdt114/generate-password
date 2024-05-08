function randomString(characters, length) {
    var randomString = "";

    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }
  
    return randomString;
}

function handler() {
    var lowercase = document.getElementById('lowercase').checked;
    var uppercase = document.getElementById('uppercase').checked;
    var number = document.getElementById('number').checked;
    var specialCharacter = document.getElementById('specialCharacter').value;
    var length = document.getElementById('length').value;
    var numberOfPassword = document.getElementById('numberOfPassword').value;

    var characters = "" + specialCharacter;

    if (lowercase) {
        characters += "abcdefghijklmnopqrstuvwxyz";
    }
    if (uppercase) {
        characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (number) {
        characters += "0123456789";
    }

    var passwordDisplay = "";
    for (var i = 0; i < numberOfPassword; i++ ) {
        var password = randomString(characters, length);
        passwordDisplay += password + "<br>";
    }

    document.getElementById('password-display').innerHTML = passwordDisplay;
}

