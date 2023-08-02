const refs = {
  inputEl: document.querySelector("#font-size-control"),
  textEl: document.querySelector("#text"),
};

refs.inputEl.addEventListener("input", changeFontSize);

function changeFontSize() {
  let currentSize = refs.inputEl.value;
  refs.textEl.style.fontSize = `${currentSize}px`;
}
