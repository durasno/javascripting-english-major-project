//alert("scripts.js has loaded!");
//console.log("scripts.js has loaded!");
//$("#response").html("scripts.js has loaded!");
//let userInput;
//userInput = "burrito";
/*userInput = prompt("What do you want to have for dinner?", "Type your answer here.");
if ( userInput === "burrito" ) {
  $("#response").html("Brilliant choice!");
} else {
  $("#response").html("Don’t you want a burrito?");
}*/

/*let i;
i = 1;
while ( i < 4 ) {
  $("#response").append("<br />" + i);
  i = i + 1;
}*/

//request user input
/*let userInput = prompt("What is your favorite number (less than 20)?", "Enter text here");

//print first string
//$("#response").html("This is the response div.");

//print out loop
for (let i = 1; i < userInput; i = i + 1 ) {
  if(i % 2 == 0){
    $("#response").append("<br />" + i + " is even");
  }
  else{
    $("#response").append("<br />" + i + " is odd");
  }
}*/

let rate = prompt("Please enter a tip rate", "Enter your answer here");
let sum = prompt("Please enter a total", "Enter your answer here");

let tipCalculator;
tipCalculator = function(total, tipRate){
  // step 1:
  let tipAmount;
  if(tipRate.substring(0,1) == "."){
    tipAmount = Math.round(tipRate * total);
  }
  else {
    tipAmount = Math.round((tipRate / 100) * total);
  }
  // and step 2:
  $("#response").html("Your tip is $" + tipAmount);
};

// Now call (or “execute”) the function, passing a
// total of $50.00 and a tipRate of 20%:

tipCalculator(sum, rate);
