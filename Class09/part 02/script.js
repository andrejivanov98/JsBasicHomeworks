let text = $("#text");
let color = $("#color");
let btn = $("#btn");
let header1 = $("#h1");
let header3 = $("#h3");

btn.click(function(){
   if(isNaN(color.val()) && isNaN(text.val())){
       $("#h1").text(text.val());
        $("#h1").css("background-color", color.val());
   }
   else{
        $("#h3").text("You entered invalid input.");
    }

})