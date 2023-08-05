function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  inputNumber: document.querySelector("#controls input"),
  createButton: document.querySelector("[data-create]"),
  destroyButton: document.querySelector("[data-destroy]"),
  boxesDiv: document.querySelector("#boxes"),
};

refs.createButton.addEventListener("click", createBoxes);
refs.destroyButton.addEventListener("click", destroyBoxes);

function createBoxes() {
  let boxesCount = refs.inputNumber.value;
  let startSizeBox = 30;
  for (let i = 0; i < boxesCount; i += 1) {
    refs.boxesDiv.insertAdjacentHTML(
      "beforeend",
      `<div style="width:${startSizeBox}px; height:${startSizeBox}px; background-color:${getRandomHexColor()}"></div>`
    );
    startSizeBox += 10;
  }
}

function destroyBoxes() {
  refs.boxesDiv.innerHTML = "";
  refs.inputNumber.value = null;
}
