// Stage 1: show the current website name in the popup.
// Later stages will use this same detection to find saved passwords.

async function showCurrentSite() {
  const el = document.getElementById("current-site");
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!tab || !tab.url) {
      el.textContent = "This page is not a website";
      return;
    }
    const url = new URL(tab.url);
    if (!url.hostname) {
      el.textContent = "This page is not a website";
    } else {
      el.textContent = url.hostname;
    }
  } catch (error) {
    el.textContent = "This page is not a website";
  }
}

document.addEventListener("DOMContentLoaded", showCurrentSite);
