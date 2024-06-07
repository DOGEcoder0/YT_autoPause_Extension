# YouTube Auto Pause Chrome Extension

## Overview

The **YouTube Auto Pause** Chrome extension is a tool designed to automatically pause YouTube videos when you switch tabs or windows and resume playback when you return to the YouTube tab. This extension enhances your YouTube watching experience by ensuring you don't miss any part of the video when you're multitasking.

## Features

- Automatically pauses YouTube videos when you switch tabs or windows.
- Automatically resumes YouTube videos when you return to the tab.
- Easy to install and use.

## Installation

To use this extension, follow these steps:

1. **Clone the Repository**:
   ```sh
   git clone https://github.com/DOGEcoder0/YT_autoPause_Extension.git
   ```
2. **Open Chrome Extension Page**:
   - Open Chrome and go to `chrome://extensions/`.
   - Enable **Developer mode** by clicking the toggle switch at the top right corner.

3. **Load Unpacked Extension**:
   - Click the **Load unpacked** button.
   - Select the directory where you cloned the repository.

4. The extension is now installed and ready to use on YouTube.

## Usage

1. Navigate to [YouTube](https://www.youtube.com) and play any video.
2. Switch to another tab or window; the video will automatically pause.
3. Return to the YouTube tab, and the video will automatically resume playing.

## How It Works

The extension uses Chrome's tab and window focus events to detect when you switch away from or return to the YouTube tab. It then controls the YouTube player using JavaScript to pause and resume playback as needed.


## Notes

- **Publishing to Chrome Web Store**:
  - To publish this extension to the Chrome Web Store, i need a Google Developer account, which costs $5. You can still use it by loading it as an unpacked extension.
  
