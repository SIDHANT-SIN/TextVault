# TextVault - Chrome Text Storage Extension

A simple Chrome Extension that allows users to store and manage text locally on their browser using Chrome's local storage. This extension provides a lightweight solution for saving text-based notes directly in the browser without needing an external server or cloud service.

## Features

- **Local Text Storage**: Store and retrieve text data in the browser's local storage.
- **Persistent Data**: Data persists even after closing the browser or restarting the computer.
- **Simple UI**: Easy-to-use interface for adding, viewing, and clearing stored text.
- **Privacy**: All data is stored locally in your browser, and no data is sent to external servers.

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/SIDHANT-SIN/TextVault.git
```
### 2. Load the extension in Chrome

1. Open Chrome and navigate to `chrome://extensions/`.
2. Enable **Developer mode** (toggle in the top right corner).
3. Click on the **Load unpacked** button.
4. Select the directory where you cloned the repository.

### 3. Use the Extension

After loading the extension, an icon will appear in the Chrome toolbar. Click on the icon to open the extension's popup interface. You can enter text in the input area, store it, and view previously stored text.

## Usage

1. **Save Text**: Select your text and click the "Save" button.
2. **View Stored Text**: The stored text can be reviewed by clicking on the icon.
3. **Different Domain - Different Storage**: The stored texts will belong to that specifc domain, which changes as we shift the website.

## How It Works

The extension uses Chrome's `localStorage` API to store text data directly on your machine. The text is saved as a key-value pair in the browser's local storage, and you can retrieve or clear it at any time.

I also plan to sending the text snippets into a Google Doc file through Google OAuth 2.0 authentication through API communication in upcoming time.
Till then Stay Safe...
