//---Homework part 01---
let strings = ['We', 'are', 'the', 'champions', '.'];
function getString() {
    console.log(strings.join(' '));
}
getString(strings);

//----Homework part 02----
let i = 1;
while(i<20){
    
    if(i % 2 == 0){
        console.log(i , "\n");
    }
    else{
        console.log(i , ' ');
    }
    i++;
}

//---Homework part 03---
function calculateNumbers(){
    let numbers = [3,5,12,19,27,30];
    let minNumber = numbers[0];
    let maxNumber = numbers[0];
    let i = 0;
    while(i < numbers.length) {
         if(numbers[i] < minNumber){
             minNumber = numbers[i];
         }
         if(numbers[i] > maxNumber){
             maxNumber = numbers[i];
         }
         
         i++;
     }
     console.log(`Min number is: ${minNumber}. Max number is: ${maxNumber}. The sum of the two numbers is: ${minNumber+maxNumber}. ` );
    }
    calculateNumbers();

    //---Homework part 04----
    let firstNames = ['Jimmy', 'John', 'Sandra', 'Paul'];
    let lastNames = ['Johnes', 'Sap', 'Bullock', 'Graham'];
    let fullNames =[0];
    function returnFullNames(){
        for(let i=0; i<firstNames.length; i++) {
              fullNames +=(i+1 + '. ' + firstNames[i]+ ' ' +lastNames[i] + ', ');    
        } 
        console.log(full);
    }

    returnFullNames(firstNames, lastNames);
    
    
