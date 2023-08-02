const refs = {
  inputEl: document.querySelector("#validation-input"),
};

refs.inputEl.addEventListener("blur", inputValidation);

function inputValidation(event) {
  if (
    event.currentTarget.value.length !==
    Number(refs.inputEl.getAttribute("data-length"))
  ) {
    refs.inputEl.classList.remove("valid");
    refs.inputEl.classList.add("invalid");
  } else {
    refs.inputEl.classList.remove("invalid");
    refs.inputEl.classList.add("valid");
  }
}
