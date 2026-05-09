window.onload = function () {
  const modes = [
  "high-contrast",
  "dyslexia",
  "large-text",
  "soft-mode",
  "blue-yellow",
  "red-black",
  "dark-mode"
];


  modes.forEach(mode => {
    if (localStorage.getItem(mode) === "on") {
      document.body.classList.add(mode);
    }
  });
};

function toggleContrast() {
  document.body.classList.toggle("high-contrast");
  saveMode("high-contrast");
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  saveMode("dark-mode");
}

function toggleDyslexia() {
  document.body.classList.toggle("dyslexia");
  saveMode("dyslexia");
}

function toggleLargeText() {
  document.body.classList.toggle("large-text");
  saveMode("large-text");
}

function toggleSoftMode() {
  document.body.classList.toggle("soft-mode");
  saveMode("soft-mode");
}

function toggleBlueYellow() {
  document.body.classList.toggle("blue-yellow");
  saveMode("blue-yellow");
}

function toggleRedBlack() {
  document.body.classList.toggle("red-black");
  saveMode("red-black");
}

// Save mode state to localStorage
function saveMode(mode) {
  if (document.body.classList.contains(mode)) {
    localStorage.setItem(mode, "on");
  } else {
    localStorage.setItem(mode, "off");
  }
}