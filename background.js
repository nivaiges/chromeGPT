chrome.action.onClicked.addListener(function(tab) {
    // This code runs when the user clicks your extension's button.
    // You can perform any actions you want here.
    // For example, you could send a message to your content script
    // to execute a function on the current webpage.
    console.log("test");
    chrome.tabs.sendMessage(tab.id, {message: "hello"});
  });
  
  chrome.runtime.onInstalled.addListener(function() {
    // This code runs when the extension is installed or updated.
    // You can perform any actions you want here.
    // For example, you could set default settings or initialize
    // any required data structures.
    console.log("test");
  });
  
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    // This code runs when a message is received from another part
    // of your extension (e.g. from a content script).
    // You can perform any actions you want here.
    // For example, you could respond with a message of your own
    // or perform some other action based on the request.
    console.log("test");
    if (request.message === "hello") {
      sendResponse({message: "hi"});
    }
  });
  