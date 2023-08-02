const refs = {
  inputEl: document.querySelector("#name-input"),
  spanName: document.querySelector("#name-output"),
};

refs.inputEl.addEventListener("input", updateName);

function updateName(event) {
  if (event.currentTarget.value === "") {
    refs.spanName.textContent = "Anonymous";
  } else {
    refs.spanName.textContent = event.currentTarget.value;
  }
}
