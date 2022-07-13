const buttonRef = document.querySelector('.change-color');
const bodyRef = document.querySelector('body');
const colorRef = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColor(event) {
  console.log(getRandomHexColor());
  bodyRef.style.backgroundColor = getRandomHexColor();
  colorRef.textContent = bodyRef.style.backgroundColor;
}

buttonRef.addEventListener('click', changeColor);
