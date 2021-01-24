//---Homework #01---

let animal = {};
animal.name = prompt(`what is the name of the animal?`);
animal.kind = prompt(`Which kind is the animal?`);
animal.speak = function(voice) {
    console.log(`The ${animal.kind} says ${voice}.`);
};
console.log(animal);
animal.speak('auuu');


//---Homework #02---

let book = {};
book.name = prompt("Which book you are reading right now?");
book.author = prompt("Who is the author of the book?");
book.readingStatus = prompt("Write true or false if you are reading the book right now.");
book.info = function(){
    if(book.readingStatus === 'true') {
       alert(`Already read ${book.name}.`);
    }
    else{
       alert(`You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.`);
    }
}
book.info();
//Vaka razbrav deka treba da ja resham zadacava, mozebi gresham...?