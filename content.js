// content.js

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    const video = document.querySelector('video');
    if (video) {
        if (message.action === "pauseVideo" && !video.paused) {
            video.pause();
        }
        if (message.action === "resumeVideo" && video.paused) {
            video.play();
        }
    }
});
