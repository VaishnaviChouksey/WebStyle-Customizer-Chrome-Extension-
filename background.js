chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action === 'apply1' || message.action === 'apply2' || message.action === 'apply3' || message.action === 'apply4'|| message.action === 'apply5') {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, message);
    });
  }
});
