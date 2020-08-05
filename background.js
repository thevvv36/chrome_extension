
//iconRules contains all the rules for our extension
//every rule is an object with two key : conditions and actions
//
const iconRules = [{
console.log('background script ');
	conditions:[
		new chrome.declarativeContent.PageStateMatcher({
			pargeUrl:{hostEquals:'medium'};
		})
	],
	actions:[new chrome.declarativeContent.ShowPageAction()]
}];

chrome.declarativeContent.inPageChanged.remvoeRules(undefined, function(){
	chrome.declarativeContent.onPageChanged.addRules(iconRules);
});
