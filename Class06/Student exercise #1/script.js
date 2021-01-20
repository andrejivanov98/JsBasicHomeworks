//---Student Exercise - #1---

let firstDiv = document.getElementById("first");
console.log(firstDiv);

let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

let lastDiv = firstDiv.nextElementSibling.nextElementSibling;
console.log(lastDiv);

let h3 = lastDiv.lastElementChild;
console.log(h3);

let h1 = lastDiv.firstElementChild;
console.log(h1);

let secondDivParagraph = document.getElementsByClassName(".paragraph second");
console.log(secondDivParagraph);

let text = document.getElementsByTagName("text");
let addText = text.innerText = "text";
console.log(addText);

let header1 = lastDiv.firstElementChild.innerText = "";
console.log(header1);
let header1Change = lastDiv.firstElementChild.innerText = "What's up?";
console.log(header1Change);

let header3 = lastDiv.lastElementChild.innerText = "";
console.log(header3);
let header3Change = lastDiv.lastElementChild.innerText = "Heeeyy";
console.log(header3Change);


//---Student Exercise - #2---







