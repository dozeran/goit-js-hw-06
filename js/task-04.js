const refs = {
  decrementButton: document.querySelector('[data-action="decrement"]'),
  incrementButton: document.querySelector('[data-action="increment"]'),
  spanValue: document.querySelector("#value"),
};
let counterValue = 0;

refs.decrementButton.addEventListener("click", onClickDecrement);
refs.incrementButton.addEventListener("click", onClickIncrement);

function onClickDecrement() {
  refs.spanValue.textContent = counterValue -= 1;
}

function onClickIncrement() {
  refs.spanValue.textContent = counterValue += 1;
}
