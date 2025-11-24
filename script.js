//your JS code here. If required.
// Get DOM elements
const fontSizeInput = document.getElementById("fontsize");
const fontColorInput = document.getElementById("fontcolor");
const form = document.querySelector("form");

// -------------------------------
// Helper to set a cookie
// -------------------------------
function setCookie(name, value) {
  document.cookie = `${name}=${value}; path=/`;
}

// -------------------------------
// Helper to read a cookie
// -------------------------------
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [key, val] = cookie.split("=");
    if (key === name) return val;
  }
  return null;
}

// -------------------------------
// Apply saved preferences on page load
// -------------------------------
window.addEventListener("DOMContentLoaded", () => {
  const savedFontSize = getCookie("fontsize");
  const savedFontColor = getCookie("fontcolor");

  if (savedFontSize) {
    document.documentElement.style.setProperty("--fontsize", savedFontSize + "px");
    fontSizeInput.value = savedFontSize;
  }

  if (savedFontColor) {
    document.documentElement.style.setProperty("--fontcolor", savedFontColor);
    fontColorInput.value = savedFontColor;
  }
});

// -------------------------------
// Save preferences when form is submitted
// -------------------------------
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const size = fontSizeInput.value;
  const color = fontColorInput.value;

  // Save cookies
  setCookie("fontsize", size);
  setCookie("fontcolor", color);

  // Apply immediately to page
  document.documentElement.style.setProperty("--fontsize", size + "px");
  document.documentElement.style.setProperty("--fontcolor", color);
});
