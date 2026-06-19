const dictionary = {
  distance: "Distance means the length between two places or points. (दूरी)",
  apple: "Apple means a fruit. (सेब)",
  book: "Book means a collection of written pages. (पुस्तक)",
  school: "School means a place where students study. (विद्यालय)",
  computer: "Computer is an electronic machine. (कंप्यूटर)",
  water: "Water is a liquid necessary for life. (पानी)",
  teacher: "Teacher means a person who teaches. (शिक्षक)",
  student: "Student means a learner. (विद्यार्थी)"
};

function getAnswer() {

  let word = document.getElementById("question").value.toLowerCase().trim();
  let answer = document.getElementById("answer");

  if(word === ""){
    answer.innerHTML = "Please enter a word.";
    return;
  }

  if(dictionary[word]){
    answer.innerHTML = "📖 Meaning:<br><br>" + dictionary[word];
  } else {
    answer.innerHTML = "❌ Word not found in dictionary.";
  }
}
