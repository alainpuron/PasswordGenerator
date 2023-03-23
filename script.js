// when click submit the password will generate
function submit() {

    // password 
    let password = "";

    let characters = "";


    // lenght of the password minumun of 5
    var length = document.getElementById("length").value;

    // numbers list if checkbox is checked
    const numberList = [1, 2, 4, 5, 6, 7, 8, 9, 0];

    // letters if the check box is checked
    const lettersList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // symbols if the checkbox is checked 
    const symbolsList = ["!", "@", "#", "$", "%", "^", "&", "*"];

    // word if user enters a word
    var word = document.getElementById("word").value;

    // checks if the checkbox was checked on numbers
    var CheckNumbers = document.getElementById("numbers").checked;

    // checks if symbols checkbox was checked
    var CheckSymbols = document.getElementById("symbols").checked;

    // checks if symbols checkbox was checked
    var CheckLetters = document.getElementById("letters").checked;

    var CheckCapitalize = document.getElementById("capitalize").checked



    // count for check boxes if those checks add an element to the password (1@A)
    var checks = 0;

    if (CheckNumbers == true) {
        checks += 1;
    }
    if (CheckSymbols == true) {
        checks += 1;
    }
    if (CheckLetters == true) {
        checks += 1;
    }

    let i = 0;
    while (i < length) {

        if (CheckNumbers == true) {
            const numbers = numberList[Math.floor(Math.random() * numberList.length)];
            characters += numbers;
        }
        else {
            characters += "";
        }

        if (CheckSymbols == true) {
            const symbols = symbolsList[Math.floor(Math.random() * symbolsList.length)];
            characters += symbols;
        }
        else {
            characters += "";
        }

        if (CheckLetters == true) {
            const letters = lettersList[Math.floor(Math.random() * lettersList.length)];
            characters += letters;

        }
        else {
            characters += "";
        }

        i++;


    }

    console.log('Characters: ' + characters);

// gets only the needed characters
    length -= word.length;

// where the new characters will be stored
    let SelectCharacter = "";

    for (let y = 0; y < length; y++) {
        SelectCharacter += characters[Math.floor(Math.random() * characters.length)];
    }

    console.log("select characters: "+SelectCharacter);



    password = word + SelectCharacter;
    console.log('Password: '+ password);

    // if the lenght is the word and it's  options is biggger than the lenght it will display an error
    if (length < checks) {
        alert("Increase the password lenght!");
        password.style.display = "None";
    }
    // if the choices are zero it will display an error because it cannot generate a password without something
    else if (checks === 0) {
        alert("Please pick an option to include in the password");
        password.style.display = "None";

    }

    if(CheckCapitalize == true){
        let capitalizedPassword = password.charAt(0).toUpperCase() + password.slice(1);
        document.getElementById('Password').innerHTML = capitalizedPassword;

    }
    else {

        document.getElementById('Password').innerHTML = password;

    }




}