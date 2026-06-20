
// 🔍 SEARCH MEANING
async function getMeaning() {

let word = document.getElementById("word").value.trim();
let answer = document.getElementById("answer");

if(word === ""){
answer.innerHTML = "Please enter a word.";
return;
}

answer.innerHTML = "Searching...";

try {

let response = await fetch(
`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
);

let data = await response.json();

let meaning =
data?.[0]?.meanings?.[0]?.definitions?.[0]?.definition ||
"No meaning found";

let translateResponse = await fetch(
`https://api.mymemory.translated.net/get?q=${word}&langpair=en|hi`
);

let translateData = await translateResponse.json();

let hindiMeaning =
translateData?.responseData?.translatedText ||
"No translation available";

answer.innerHTML = `
<h3>${word}</h3>
<p><b>English Meaning:</b><br>${meaning}</p>
<p><b>Hindi Meaning:</b><br>${hindiMeaning}</p>
`;

} catch (error) {
console.log(error);
answer.innerHTML = "❌ Error fetching meaning";
}

}


// 🎤 VOICE INPUT
function startVoice() {

if (!("SpeechRecognition" in window || "webkitSpeechRecognition" in window)) {
alert("Voice not supported in this browser");
return;
}

const recognition =
new (window.SpeechRecognition || window.webkitSpeechRecognition)();

recognition.lang = "en-US";

recognition.start();

recognition.onresult = function(event) {
document.getElementById("word").value =
event.results[0][0].transcript;
};

}


// 🔊 SPEAK WORD
function speakWord() {

let word = document.getElementById("word").value.trim();

if(word === ""){
alert("Please enter a word");
return;
}

let speech = new SpeechSynthesisUtterance(word);
speech.lang = "en-US";

window.speechSynthesis.speak(speech);

}
alert("JS CONNECTED");
