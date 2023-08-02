function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  bodyBackground: document.body,
  spanColor: document.querySelector(".color"),
  buttonChangeColor: document.querySelector(".change-color"),
};

refs.buttonChangeColor.addEventListener("click", onClickGenerateBgColor);

function onClickGenerateBgColor() {
  refs.bodyBackground.style.backgroundColor = getRandomHexColor();
  refs.spanColor.textContent = getRandomHexColor();
}
