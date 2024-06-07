// background.js

chrome.tabs.onActivated.addListener((activeInfo) => {
    chrome.tabs.get(activeInfo.tabId, (tab) => {
        if (tab.url.includes('youtube.com')) {
            chrome.tabs.sendMessage(activeInfo.tabId, { action: "resumeVideo" });
        } else {
            chrome.tabs.query({ url: "*://*.youtube.com/*" }, (tabs) => {
                tabs.forEach((ytTab) => {
                    chrome.tabs.sendMessage(ytTab.id, { action: "pauseVideo" });
                });
            });
        }
    });
});

chrome.windows.onFocusChanged.addListener((windowId) => {
    if (windowId === chrome.windows.WINDOW_ID_NONE) {
        chrome.tabs.query({ url: "*://*.youtube.com/*" }, (tabs) => {
            tabs.forEach((tab) => {
                chrome.tabs.sendMessage(tab.id, { action: "pauseVideo" });
            });
        });
    } else {
        chrome.windows.get(windowId, { populate: true }, (window) => {
            window.tabs.forEach((tab) => {
                if (tab.active && tab.url.includes('youtube.com')) {
                    chrome.tabs.sendMessage(tab.id, { action: "resumeVideo" });
                }
            });
        });
    }
});
