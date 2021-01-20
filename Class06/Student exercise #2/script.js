//---Student exercise - #2---
let inputWeight = parseInt(prompt("Please insert your weight."));
function weightInChickens(inputWeight) {
    let calculation = inputWeight * 0.5;
    let result = document.getElementById("paragraph");
    
     if(!isNaN(inputWeight)){
        return result.innerText = `${calculation}`;
    }
   else{
      return result.innerText = "Sorry, wrong input.";
   }
   
}

weightInChickens(inputWeight);
