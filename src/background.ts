// https://github.com/duongduckien/typescript-chrome-extension.git
chrome.runtime.onMessage.addListener((request, sender) => {});

// Open sidepanel on toolbar click
chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));
