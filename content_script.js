
console.log("Hello Ashiv! from pwd strength checker.")

window.addEventListener('mouseup',wordSelected);


function wordSelected(){
  console.log('word selected');
  let selectedText = window.getSelection().toString();
  console.log(selectedText)
  
  let message ={
      text: selectedText,
  }
  chrome.runtime.sendMessage(message);
  // chrome.runtime.sendMessage({ action: "triggerIcon" });

}


document.addEventListener("mouseup", function(event) {
  var selectedText = window.getSelection().toString().trim();
  if (selectedText !== "") {
    // Send a message to your background script to open the extension popup.
    chrome.runtime.sendMessage({ openPopup: true, selectedText: selectedText });
  }
});





  // Content script or other part of your extension
// Trigger the browser action or page action icon
  
  // chrome.runtime.sendMessage({ event: "openPopup" });





// window.addEventListener('mouseup', function(event){
//   // When the event occurs, send a message to the background script
//   chrome.runtime.sendMessage({ event: "openPopup" });

// });








// // Content script or where the event occurs
// document.addEventListener("click", function() {
//   // When the event occurs, send a message to the background script
//   chrome.runtime.sendMessage({ event: "openPopup" });
// });




// var currentInput = "";

// // Add a keydown event listener to the window
// window.addEventListener('keydown', function(event) {
//     // Get the key code of the pressed key
//     var keyCode = event.keyCode || event.which;

//     // Check if the pressed key is a space (key code 32) or Enter (key code 13)
//     if (keyCode === 32 || keyCode === 13) {
//       // Split the current input into words using whitespace as the delimiter
//       var words = currentInput.split(/\s+/);

//       // Display the extracted words in the output div
//       console.log( "Words: " + words.join(', '));

//       // Clear the current input
//       currentInput = "";
//     } else {
//       // Append the pressed key to the current input
//       currentInput += event.key;
//     }
//   });