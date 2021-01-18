var userInput = prompt("Insert your year of birth");
var yearOfBirth = parseInt(userInput);

var chineseZodiac = (yearOfBirth-4)%12;

if (chineseZodiac === 0){
    alert("Your Chinese Zodiac is Rat");
}
else if (chineseZodiac === 1){
    alert("Your Chinese Zodiac is Ox");
}
else if (chineseZodiac === 2){
    alert("Your Chinese Zodiac is Tiger");
}
else if (chineseZodiac === 3){
    alert("Your Chinese Zodiac is Rabbit");
}
else if (chineseZodiac === 4){
    alert("Your Chinese Zodiac is Dragon");
}
else if (chineseZodiac === 5){
    alert("Your Chinese Zodiac is Snake");
}
else if (chineseZodiac === 6){
    alert("Your Chinese Zodiac is Horse");
}
else if (chineseZodiac === 7){
    alert("Your Chinese Zodiac is Goat");
}
else if (chineseZodiac === 8){
    alert("Your Chinese Zodiac is Monkey");
}
else if (chineseZodiac === 9){
    alert("Your Chinese Zodiac is Rooster");
}
else if (chineseZodiac === 10){
    alert("Your Chinese Zodiac is Dog");
}
else if (chineseZodiac === 11){
    alert("Your Chinese Zodiac is Pig");
}
else {
    alert("You should insert correct birth year");
}