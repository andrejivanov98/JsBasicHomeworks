let btn = document.getElementById("btn");
function createTable()
{
let rw = window.prompt("Input number of rows.");
let col = window.prompt("Input number of columns.");
  
 for(var r=0;r<parseInt(rw);r++)
  {
   var x=document.getElementById('myTable').insertRow(r);
   for(var c=0;c<parseInt(col);c++)  
    {
     var y=  x.insertCell(c);
     y.innerHTML="Row-"+r+" Column-"+c; 
    }
   }
}

btn.addEventListener(`click`, createTable);
