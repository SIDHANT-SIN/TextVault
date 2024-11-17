document.addEventListener("DOMContentLoaded", () => {
    
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentURL = new URL(tabs[0].url).origin; 
      chrome.storage.local.get("savedTexts", (data) => {
        const savedTexts = data.savedTexts || [];
        const displayDiv = document.getElementById("savedTexts");
  
        displayDiv.innerHTML = ""; 
        const siteTexts = savedTexts.filter((item) => item.url === currentURL);
  
        if (siteTexts.length === 0) {
          displayDiv.textContent = `No saved texts for ${currentURL}.`;
        } else {
          displayDiv.textContent = `Saved texts for ${currentURL}:`;
          siteTexts.forEach((item, index) => {
            const textElement = document.createElement("p");
            textElement.textContent = `${index + 1}. "${item.text}"`;
            displayDiv.appendChild(textElement);
          });
        }
      });
    });
  });
  