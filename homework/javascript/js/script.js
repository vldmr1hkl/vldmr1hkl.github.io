let content = document.getElementById('content')
let userName = prompt("What is your name?");
let userAge = prompt("How old are you?");
while(isNaN(userAge)){
	userAge = prompt("Enter your age in numerals only:");
};
userAge = Number(userAge);
let userAgeIn5year = 5 + userAge;
content.innerHTML = "Hello, " +userName+ "! In 5 years you will be " +userAgeIn5year+ " years old!";