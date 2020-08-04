console.log("content script running ...");
const FIND = "the";
const REPLACE_WITH = "aghiles";

const regex = new RegExpt(FIND, "gi");
const content = document.querySelectorAll("p,li,span,h1,h2,h3");


for(const snippet in contents){
	snippet.textContent = snippet.textContent.replace(regex, REPLACE_WITH);
}


