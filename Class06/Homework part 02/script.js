let arr = [3, 5, 8, 11, 22];
let div = document.getElementById("main");
let paragraph = div.firstElementChild;
paragraph.innerHTML = `<li>${arr}</li>`;

let arrSum = arr[0]+arr[1]+arr[2]+arr[3]+arr[4];


let secondParagraph = div.lastElementChild;
secondParagraph.innerHTML = `The sum of the numbers in the array is ${arrSum}`;

