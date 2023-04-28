let content = document.getElementById('content')
let userName = prompt("What is your name?");
let userAge = prompt("How old are you?");
while(isNaN(userAge)){
	userAge = prompt("Enter your age in numerals only:");
};
userAge = Number(userAge);
let userAgeIn5year = 5 + userAge;
function check(userAgeIn5year){
	if(userAgeIn5year<60){
		content.innerHTML="Hello, " +userName+ "! In 5 years you will be " +userAgeIn5year+ " years old!";
	}else if(userAgeIn5year>60){
		content.innerHTML="Sorry " +userName+ ", it's time to retire";
	};
	return(userAge);
};
// content.innerHTML = "Hello, " +userName+ "! In 5 years you will be " +userAgeIn5year+ " years old!";


check(userAgeIn5year);