let myArray = [];
for(let i = 1; i < 4; i = i + 1){
  let userInput = prompt("Enter a number", "Enter the number here");
  //$("#response").append(i);
  myArray[i] = userInput;
  //$("#response").html(userInput);
  if(i === 3){
    //return myArray;
    //$("#response").html(myArray[3]);
    $("#response").html(myArray[i]);
  }
}

/*array = ["1", "test", "I", "think", "maybe"];
len = array.length;
$("#response").html(array[len - 1])*/

/*let ui = prompt("Enter a number", "Here");
let un = Number(ui);
a = typeof un;
//$("#response").html(a);
//$("#response").html(Number.isInteger(un));

array =
if(Number.isInteger(un)){
  $("#response").html("integer")
}
else{
  $("#response").html("not an integer")
}*/
