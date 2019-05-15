let makeFullName, hughessFullName;
makeFullName = function(firstName, lastName){
  return (firstName + " " + lastName);
};
hughessFullName = makeFullName("Langston", "Hughes");
console.log("Is your name " + hughessFullName + "?");
