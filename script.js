function getAnswer(){

let q = document.getElementById("question").value;
let answer = document.getElementById("answer");

if(q==""){
answer.innerHTML="Pehle question likho.";
return;
}

answer.innerHTML=
"🤖 AI Teacher:<br><br> Aapka question hai: <b>"
+ q +
"</b><br><br> Abhi demo version hai. Future me yahan AI answer aayega.";
}
