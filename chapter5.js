/*let arrayOfStrings, arrayOfNumbers, arrayMixed;
arrayOfStrings = ["a", "b", "c"];
arrayOfNumbers = [1, 2, 3];
arrayMixed = ["a", 1, null, true, arrayOfNumbers, [4.5, 5.6]];*/

//$("#response").html(arrayOfStrings[2]);

let myBurritoObject;
myBurritoObject = {
  tortilla: "wheat",
  guacamole: true,
  beans: "pinto",
  habaneroSauceSquirts: 3
  };
// and let’s access a property
//$("#response").html(myBurritoObject["tortilla"]);

$("#response").html(myBurritoObject.tortilla);

let arrayOfStrings;
arrayOfStrings = ["a", "b", "c"];
$("#response").html(arrayOfStrings.length);
