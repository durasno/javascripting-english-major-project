let turtles, sortedTurtles, reversedTurtles, turtleNames;
turtles = ["Leonardo", "Donatello", "Raphael", "Michelangelo"];
sortedTurtles = turtles.sort();
// sortedTurtles is:
// ["Donatello", "Leonardo", "Michelangelo", "Raphael"]
reversedTurtles = turtles.reverse();
// reversedTurtles is:
// ["Raphael", "Michelangelo", "Donatello", "Leonardo"]
turtleNames = turtles.join(" ");
// turtleNames is "Leonardo Donatello Raphael Michelangelo"
let output;
output = turtles;
turtles.push("Splinter");
// turtles is now:
// ["Leonardo", "Donatello", "Raphael", "Michelangelo", "Splinter"]
$("#response").html(output);
turtles.pop();
// back to ["Leonardo", "Donatello", "Raphael", "Michelangelo"]
