/*let myArray = [];
for(let i = 1; i < 4; i = i + i){
  let userInput = prompt("Enter a number", "Enter the number here");
  myArray[i] = userInput;
  if(i === 2){
    //return myArray;
    $("#response").html(myArray[2]);
  }
}*/

/*array = ["1", "test", "I", "think", "maybe"];
len = array.length;
$("#response").html(array[len - 1])*/

let ui = prompt("Enter a number", "Here");
let un = Number(ui);
a = typeof un;
//$("#response").html(a);
//$("#response").html(Number.isInteger(un));

if(Number.isInteger(un)){
  $("#response").html("integer")
}
else{
  $("#response").html("not an integer")
}
