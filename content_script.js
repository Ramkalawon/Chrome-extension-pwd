
console.log("Hello from content_script.js")

window.addEventListener('mouseup',wordSelected);

function wordSelected(){
  console.log("word selected");
  let selectedText = window.getSelection().toString();
  console.log(selectedText)
  
  let message ={
      text: selectedText,
  }
  chrome.runtime.sendMessage(message);

}

