//let brokenVariable;
//brokenVariable = "This will be broken';

/*let turtlesWithSplinter, reversedTurtlesWithoutSplinter;
turtlesWithSplinter = ["Leonardo", "Donatello", "Raphael", "Michelangelo", "Splinter"];
// oops. let's pop() Splinter off before reversing…
reversedTurtlesWithoutSplinter = turtlesWithSplinter.pop().reverse();
$("#response").html(reversedTurtlesWithoutSplinter);*/


let turtlesWithSplinter, turtlesWithoutSplinter, reversedTurtlesWithoutSplinter;
turtlesWithSplinter = ["Leonardo", "Donatello", "Raphael", "Michelangelo", "Splinter"];
// oops. let's pop() Splinter off before reversing…
/*turtlesWithoutSplinter = turtlesWithSplinter.pop();
console.log(turtlesWithoutSplinter);*/
//--> Splinter
//reversedTurtlesWithoutSplinter = turtlesWithSplinter.pop().reverse();
//$("#response").html(reversedTurtlesWithoutSplinter);

/*turtlesWithSplinter.pop();
// turtlesWithSplinter is now, paradoxically, without Splinter.
// Now define a new array that is reversed.
reversedTurtlesWithoutSplinter = turtlesWithSplinter.reverse();
$("#response").html(reversedTurtlesWithoutSplinter);*/

reversedTurtlesWithoutSplinter = turtlesWithSplinter.filter(function(turtle){
  // What is the value of turtle?
  console.log(turtle);
  return turtle !== "Splinter";
}).reverse();
//$("#response").html(reversedTurtlesWithoutSplinter);

let x, y, z;
x = "string";
//--> "string"
y = x + 3;
//--> "string3"
z = x * 3;
//--> NaN

/*let promptValue;
promptValue = prompt("Type in a number, please.");
//--> "2"
typeof promptValue;
//--> "string"
promptValue = promptValue + 3;
//--> "23"
promptValue = promptValue * 3;
//--> 69
typeof promptValue;
//--> "number"*/

let promptValue;
promptValue = prompt("Type in a number, please");
if (isNaN(promptValue) === true) {
	alert("The value you submitted is not a number");
} else {
	// Do the calculations on promptValue knowing it
	// will behave like a number and move on from here.
}
