let firstDiv = document.getElementById("first");
let firstDivFirstChild = firstDiv.firstElementChild;
firstDivFirstChild.innerText = "";
firstDivFirstChild.innerText = "Hello world";

let firstDivLastChild = firstDiv.lastElementChild;
firstDivLastChild.innerText = "";
firstDivLastChild.innerText = "DOM sucks :D";

let secondDiv = document.querySelector(".anotherDiv");
console.log(secondDiv);
let firstChildSecondDiv = secondDiv.firstElementChild;
firstChildSecondDiv.innerText = "";
firstChildSecondDiv.innerText = "Let's start JS Advanced.";

let secondChildSecondDiv = secondDiv.lastElementChild;
secondChildSecondDiv.innerText = "";
secondChildSecondDiv.innerText = "Yupiiii.";

let lastDiv = secondDiv.nextElementSibling;
let firstChildLastDiv = lastDiv.firstElementChild;
firstChildLastDiv.innerText = "";
firstChildLastDiv.innerText = "Let's gooooo";

let secondChildLastDiv = lastDiv.lastElementChild;
secondChildLastDiv.innerText = "";
secondChildLastDiv.innerText = "Finished!";