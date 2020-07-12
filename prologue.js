/*//$("#prologue").html("<p>The text of the Prologue will go here.</p>");
/*$("#glosses").html("<p>The glosses will go here.</p>");

//$("#glosses").html("<p>The glosses will go here.</p>");
let line1, line1Text; // don’t need the intermediate step of line1TextArray
line1 = [{
    text: "Whan"
  }, {
    text: "that"
  }, {
    text: "Aprill,"
  }, {
    text: "with"
  },
  {
    text: "his"
  }, {
    text: "shoures"
  }, {
    text: "soote"
  }
];

line1 = [{
  text: "Whan",
  modern: "When"
}, {
  text: "that"
}, {
  text: "Aprill,",
  modern: "April,"
}, {
  text: "with"
}, {
  text: "his"
}, {
  text: "shoures",
  modern: "showers"
}, {
  text: "soote",
  modern: "sweet"
}];

// Create a blank string that opens two tags.
line1Text = "<blockquote><p>";
line1.forEach(function(word){
  // Add in the word-Object’s .text property plus a space.
  line1Text = line1Text + word.text + " ";
});

line1.forEach(function(word){
  // Define a variable that will be the entirety of a single
  // word-sized chunk of information.
  let wordString;
  wordString = word.text;
  // Test to see if the .modern property exists.
  if (word.modern){
    // If it does, surround wordString in an <a> tag.
    wordString = "<a href='#'>" + wordString + "</a>";
  }
  // Add wordString plus a space to the line1Text.
  line1Text = line1Text + wordString + " ";
});

line1.forEach(function(word){
  let wordString;
  wordString = word.text;
  if (word.modern){
    // Add word.modern as a data attribute to the <a> tag.
    wordString = "<a href='#' data-modern='" + word.modern + "'>" + wordString + "</a>";
  }
  line1Text = line1Text + wordString + " ";
});*/

// Break the line and close the two tags.
/*line1Text = line1Text + "<br />(line 2 would go here)</p></blockquote>";
$("#prologue").html(line1Text);*/

/*$("#prologue a").click(function(){
  $("#glosses").append("<h2>You clicked on a word!</h2>");
});*/

/*$("#prologue a").click(function(){
  // Define the text and the word that was clicked.
  let glossText, clickedWord;
  clickedWord = $( this ).text();
  glossText = "<h2>You clicked on the word: " + clickedWord + "</h2>";
  $("#glosses").html(glossText);
});*/

$.getJSON("https://the-javascripting-english-major.org/v1/prologue.json", function(data){ // Note the data variable!
  let prologueText; // Define the variable you didn’t need before.
  prologueText = "<blockquote><p>"; // Open the tags.
  // Now you can iterate over the data variable’s .lines property:
  data.lines.forEach(function(line){ // We get a variable, line.
    // Define a blank lineText.
    let lineText;
    lineText = "";
    // Now iterate over each line. This part should be familiar.
    line.forEach(function(word){
      let wordString;
      wordString = word.text;
      if (word.modern){
        wordString = "<a href='#' data-modern='" + word.modern + "'>" + wordString + "</a>";
      }
      lineText = lineText + wordString + " ";
    });
    // Add lineText with a line break to the prologueText.
    prologueText = prologueText + lineText + "<br/>";
  });
  // Close the prologueText tags.
  prologueText = prologueText + "</p></blockquote>";
  // Replace the content of #prologue.
  $("#prologue").html(prologueText);
  $("#prologue a").click(function(){
    let glossText, clickedWord, modernWord;
    clickedWord = $( this ).text();
    // .data("modern") looks for the data-modern HTML attribute.
    modernWord = $( this ).data("modern");
    glossText = "<h2>You clicked on " + clickedWord + ", which means " + modernWord +"</h2>";
    $("#glosses").html(glossText);
  });
}); // Close the callback function & method.

/*line1Text = line1.map(function(word) {
  return word.text;
}).join(" ");
$("#prologue").html("<p>" + line1Text + "<br /></p>");*/
// <br /> makes a line break, which will come in handy when we have many
// lines.
