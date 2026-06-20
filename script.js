async function getMeaning() {

let word = document.getElementById("word").value.trim();
let answer = document.getElementById("answer");

if(word === ""){
answer.innerHTML = "Please enter a word.";
return;
}

answer.innerHTML = "Searching...";

try{

let response = await fetch(
`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
);

let data = await response.json();

let meaning =
let translateResponse = await fetch(
`https://api.mymemory.translated.net/get?q=${word}&langpair=en|hi`
);

let translateData = await translateResponse.json();

let hindiMeaning =
translateData.responseData.translatedText;
data[0].meanings[0].definitions[0].definition;

answer.innerHTML =
`<h3>${word}</h3><p>${meaning}</p>`;

}
catch{

answer.innerHTML =
"❌ Meaning not found.";
}

}
function startVoice() {

const recognition =
new(window.SpeechRecognition ||
window.webkitSpeechRecognition)();

recognition.lang = "en-US";

recognition.start();

recognition.onresult = function(event) {

document.getElementById("word").value =
event.results[0][0].transcript;

};

}
function speakWord() {

let word = document.getElementById("word").value;

if(word === ""){
alert("Please enter a word.");
return;
}

let speech = new SpeechSynthesisUtterance(word);

speech.lang = "en-US";

window.speechSynthesis.speak(speech);

}
