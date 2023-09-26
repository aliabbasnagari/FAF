// Listen for navigation events
chrome.webNavigation.onHistoryStateUpdated.addListener(function (details) {
    chrome.tabs.sendMessage(details.tabId, { action: "reloadContentScript" });
});
