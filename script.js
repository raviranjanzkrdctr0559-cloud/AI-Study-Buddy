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
data[0].meanings[0].definitions[0].definition;

answer.innerHTML =
`<h3>${word}</h3><p>${meaning}</p>`;

}
catch{

answer.innerHTML =
"❌ Meaning not found.";
}

}
