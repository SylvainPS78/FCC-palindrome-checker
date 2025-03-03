const checkButton = document.getElementById('checkButton');
const userInput = document.getElementById('user-input');
const result= document.getElementById('result');


function cleanInputString(str) {
    const regex = /[\s]/g;
    return str.replace(regex, '');
}

function isValidInput(str) {
    const regex = /^[a-zA-Z]+$/;
    return regex.test(str);
  }

function isPalindrome(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length-1-i]) {
            return false;
        }
    }
    return true;
}


checkButton.addEventListener('click', function(event) {
    event.preventDefault();
    const input = userInput.value;
    const cleanInput = cleanInputString(input);
    if (isValidInput(cleanInput)) {
        if (isPalindrome(cleanInput)) {
            result.innerText = "Palindrome !";
        }
        else {
            result.innerText = "Not a palindrome.";
        }
        result.style.display = "block";
    }
    else {
        result.innerText = "Invalid input. Please enter only letters.";
        result.style.display = "block";
    }
});

