let inp = $("#inp");
let btn = $("#btn");
let user = prompt("Who are you?");

btn.click(function(e){
    $("h1").text(inp.val()+ ' ' +user);
});
