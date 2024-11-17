document.addEventListener("mouseup", () => {
  const selectedText = window.getSelection().toString().trim();
  if (!selectedText) return;

  const button = document.createElement("button");
  button.textContent = "Save Text";
  button.style.position = "absolute";
  button.style.top = `${event.pageY}px`;
  button.style.left = `${event.pageX}px`;
  button.style.zIndex = 1000;

  button.addEventListener("click", () => {
    chrome.runtime.sendMessage({
      text: selectedText,
      url: window.location.origin,
    });
    button.remove();
  });

  document.body.appendChild(button);

  setTimeout(() => button.remove(), 2000);
});
