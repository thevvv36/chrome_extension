console.log("content script running ...");
const FIND = "the";
const REPLACE_WITH = "aghiles";

const regex = new RegExp(FIND, "gi");
const contents= document.querySelectorAll("p,li,span,h1,h2,h3");


for(const snippet of contents){
	snippet.textContent = snippet.textContent.replace(regex, REPLACE_WITH);
}

chrome.runtime.onMessage.addListener(function(message){
	console.log(message)
});
