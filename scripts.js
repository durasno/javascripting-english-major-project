//alert("scripts.js has loaded!");
//console.log("scripts.js has loaded!");
//$("#response").html("scripts.js has loaded!");
let userInput;
//userInput = "burrito";
userInput = prompt("What do you want to have for dinner?", "Type your answer here.");
if ( userInput === "burrito" ) {
  $("#response").html("Brilliant choice!");
} else {
  $("#response").html("Don’t you want a burrito?");
}
