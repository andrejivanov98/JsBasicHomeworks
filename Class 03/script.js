//Part 1
var dataType = function getDataType (x) {
    var result = typeof x;
    console.log(result);
}

dataType({firstName:"John", lastName:"Doe"});
dataType(false);
dataType(5);
dataType('Helloooooo');
dataType(undefined);


//Part 2
function calculateDogAge (humanAge) {
    let result = humanAge * 7;
    console.log(result); 
}

calculateDogAge(3);

function calculateHumanAge (dogAge) {
    let result = dogAge / 7;
    console.log(result);
}

calculateHumanAge(28);


//Part 3 
var moneyOnAccount = 1000;
var askForMoney = prompt('How much money you want to withdraw?');
var withdrawnMoney = parseInt(askForMoney);
var difference = moneyOnAccount - withdrawnMoney;

function withdrawMoney () {
    if (withdrawnMoney > moneyOnAccount) {
        alert ('Not enough money')
    }
    else {
        alert (`You have withdrawn ${withdrawnMoney} and your current ammount is ${difference}.`)
    }
}

withdrawMoney();