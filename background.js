
//iconRules contains all the rules for our extension
//every rule is an object with two key : conditions and actions

const iconRules = [{
	conditions:[
		new chrome.declarativeContent.PageStateMatcher({
			pageUrl:{hostEquals:'medium'};
		})
	],
	actions:[new chrome.declarativeContent.ShowPageAction()]
}];

//remove all existing rules on the page when we change the page 
//by passing undefined to chrome.declarativeContent.onPageChanged.removeRules

chrome.declarativeContent.onPageChanged.remvoeRules(undefined, function(){
	chrome.declarativeContent.onPageChanged.addRules(iconRules);
});

//the chrome.pageAction.onClicked api takes a callback which is fired 
//whenever the extension icon in the browser toolbar is clicked

chrome.pageAction.onClicked.addListener(function(){
	chrome.tabs.qery({active:true, currentWindow:true},
			function(tabs){
				chrome.tabs.sendMessage(tabs[0].id, {action:"REPLACE_TEXT"});
			});
