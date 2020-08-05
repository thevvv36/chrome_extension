const iconRules = [{
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
