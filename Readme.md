**Content Scripts

the content scripts let you modify the webpage DOM,
working in isolation from the original webpage javascript

we can inject the script programmtically (from a background or popup file) or declaratively(execute the script automatically or particular page)


** Background Script

this script listen to specific events in the background

unlike content script , it works as a whole for the browser instrad of separate instances we can have multiple background script for an extension

background script get executed as soon as the browser launch, whereas
content scripts get executed when the webpage on wich the script is to be executed loads

the persistent key nedd to be set to true when we use the chrome.webRequest api to block or modify network requests
