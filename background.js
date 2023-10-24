

console.log('background.js running')

chrome.runtime.onMessage.addListener(receiver);

function receiver(request, sender, sendResponse){
    console.log(request)
    let pwd = request.text;
    console.log(pwd)
    // sendResponse({ message: "Message received in the background script" }); 
    // console.log(sender)  
}


