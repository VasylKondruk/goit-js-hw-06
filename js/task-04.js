const decrementBtnRef = document.querySelector('[data-action="decrement"]');
const incrementBtnRef = document.querySelector('[data-action="increment"]');
const counterRef = document.querySelector('#value');

let counterValue = Number(counterRef.textContent);

decrementBtnRef.addEventListener('click', event => {
  counterValue += Number(decrementBtnRef.textContent);
  counterRef.innerHTML = counterValue;
});

incrementBtnRef.addEventListener('click', event => {
  counterValue += Number(incrementBtnRef.textContent);
  counterRef.innerHTML = counterValue;
});
