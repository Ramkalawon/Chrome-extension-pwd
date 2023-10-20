

console.log('background running')

chrome.runtime.onMessage.addListener(receiver);

window.pwd="";

function receiver(request, sender, sendResponse){
    console.log(request)
    window.pwd=request.text;

    console.log(window.pwd)
    
}


// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//     if (request.event === "openPopup") {
//       chrome.tabs.create({ url: chrome.extension.getURL("popup.html") });
//     }
//   });
  

  // background.js

// Listen for a message from a content script or another part of your extension

// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {

    

//     if (message.action === "triggerIcon") {
//       // Open the popup associated with the browser action or page action
//       console.log('Trigger!!!!!!!!!!!!!!!')
//     //   chrome.action.setPopup();

//     if (typeof chrome.action.openPopup === 'function') {
//         console.log("The `openPopup()` method is available.")
//       } else {
//         console.log("The `openPopup()` method is NOT available.")
//       }

//     //   console.log(chrome.action.openPopup);
       
//     chrome.action.setPopup("popup.html");
//        chrome.action.openPopup();
//       //chrome.tabs.create({ url: "popup.html" });

//     }
//   });

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.openPopup) {
      // Open the extension popup.

      //chrome.action.setPopup("popup.html");
      chrome.action.openPopup();

    }
});


 // "default_popup": "popup.html",

 //browser_

//  "background": {
//     "scripts": ["background.js"]
//   },





// const condition = true;
// chrome.action.setPopup({ popup:condition ?  "popup_1.html": "popup_2.html"  });
// chrome.action.openPopup();
  