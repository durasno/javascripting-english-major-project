let userString, upperCaseMinusE, upperCasedString;
/*userString = prompt("What do you want to UPPeRCASe?");*/
/*upperCaseMinusE = function(string){
  let result;
  result = "";
  for (let i = 0; i < string.length; i = i + 1) {
    let letter;
    letter = string[i];
    if ( letter === "e" ) {
      result += letter;
    } else {
      result += letter.toUpperCase();
    }
  }
  return result;
};*/
upperCaseMinusE = function(string){
  let result, stringArray;
  result = "";
  // Since forEach() only works on arrays, we have
  // to convert the string to an array:
  stringArray = string.split("");
  // Now we call forEach() on stringArray:
  stringArray.forEach(function(letter){
    if ( letter === "e" ) {
      result = result + letter;
    } else {
      result = result + letter.toUpperCase();
    }
  }) // Note the parenthesis!
  return result;
};

let leonardo, donatello, raphael, michelangelo, turtles;
leonardo = {name: "Leonardo", color: "blue", weapon: "katana"};
donatello = {name: "Donatello", color: "purple", weapon: "bo"};
raphael = {name: "Raphael", color: "red", weapon: "sai"};
michelangelo = {name: "Michelangelo", color: "blue", weapon: "nunchaku"};
turtles = [leonardo, donatello, raphael, michelangelo];

weapons = ""; // a list of weapons.

/*turtles.forEach(function(turtle){
  weapons = weapons + turtle.weapon + " ";
})*/

weapons = turtles.map(function(turtle){
  return turtle.weapon;
}).sort();

/*let names;
names = turtles.map(function(turtle){
  return turtle.name;
}).sort();

namesWithO = names.filter(function(name){
  return name.includes("o");
}).join(", ");*/

//ex1
/*array = [1,2,3,4];
doubleFunc = function(inArr){
  outArr = inArr.map(function(val){
    return(2*val);
  });
  return outArr.join(", ");
}
$("#response").html(doubleFunc(array));*/

//ex2
iterFunc = function(array){
  let result = 2;
  result = "";
  for(let i = 0; i < array.length; i = i + 1){
    if(i === array.length-1){
      result = result + "and " + array[i];
    }
    else{
      result = result + array[i] + ", ";
    }
  }
  return result;
}

$("#response").html(iterFunc(weapons));

//$("#response").html(weapons);
//$("#response").html(namesWithO);


/*upperCasedString = upperCaseMinusE(userString);
$("#response").html(upperCasedString);*/
