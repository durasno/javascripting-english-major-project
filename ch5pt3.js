let string, firstLetter, stringLength;
string = "This is a string.";
// Strings have indices and lengths, just like arrays:
firstLetter = string[0];
// firstLetter is "T"
stringLength = string.length;
// stringLength is 17
//
// Strings also have methods, just like arrays:
let upperCaseString, replacedString;
upperCaseString = string.toUpperCase();
// upperCaseString is "THIS IS A STRING."
replacedString = string.replace("string", "pipe");
// replacedString is "This is a pipe."
$("#response").html(replacedString);
