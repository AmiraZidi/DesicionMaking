// Decision Making
// exercice cinema
const age = document.querySelector('.age');
const button = document.querySelector('.button');
const price = document.querySelector('.price');

button.addEventListener("click", function getprice() {
    if (age.value <= 12) {
        price.value = "Children's ticket = $10";
    } else if (age.value >= 13 && age.value <= 17) {
        price.value = "Teenager's ticket = $15";
    } else {
        price.value = "Adult's ticket = $20";
    }
});

// exercice temperature
const temperature = document.querySelector('.temperature');
const raining = document.querySelectorAll('input[name="raining"]');
const buttontemp = document.querySelector('.buttontemp');
const advice = document.querySelector('.advice');

buttontemp.addEventListener('click', function getadvice() {
    const temp = parseFloat(temperature.value);
    const isRaining = Array.from(raining).find(radio => radio.checked)?.value;
    if (temp >= 30 ) {
        if (isRaining === "yes"){
            console.log(advice.value = "Stay cool and carry an umbrella!"); 
        }else {
            console.log(advice.value = "It's hot. Stay hydrated!")  ;
        }
    } else if (temp < 30 && temp >= 15){
        if (isRaining === "yes"){
            console.log(advice.value = "Keep an umbrella handy.")  ;
        }else {
            console.log(advice.value = "The weather is pleasant. Enjoy your day!") ;
        }
    } else {
        if (isRaining === "yes"){
            console.log(advice.value = "It's cold and rainy. Dress warmly!")  ;
        }else {
            console.log(advice.value = "It's cold. Bundle up!") ;
        }
    }
});

// Recursion
const sentence = document.querySelector('.sentence');
const palbutton = document.querySelector('.palbutton');
const result = document.querySelector('.result');

function isPalindrome(str) {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    function checkRecursive(s) {
        if (s.length <= 1) return true; 
        if (s[0] !== s[s.length - 1]) return false; 
        return checkRecursive(s.slice(1, -1)); 
    }
    return checkRecursive(cleanedStr);
}

palbutton.addEventListener('click', () => {
    const input = sentence.value.trim();
    if (!input) {
        result.value = "Please enter a valid sentence.";
        return;
    }
    const cleanedStr = input.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const isPalindrome = cleanedStr === [...cleanedStr].reverse().join('');
    
    result.value = isPalindrome ? "It's a Palindrome!" : "Not a Palindrome.";
});
