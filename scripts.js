const toggleThemeButton = document.querySelector("#toggletheme");
const body = document.querySelector("body");

toggleThemeButton.addEventListener("click", () => {
  body.classList.toggle("lighttheme");

  if (document.body.classList.contains("lighttheme")) {
    toggleThemeButton.textContent = "Dark Theme";
  } else {
    toggleThemeButton.textContent = "Light Theme";
  }
});