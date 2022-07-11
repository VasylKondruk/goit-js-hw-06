const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', blur);

function blur(event) {
  if (event.currentTarget.value.length === Number(inputRef.dataset.length)) {
    inputRef.classList.remove('invalid');
    return inputRef.classList.add('valid');
  } else {
    inputRef.classList.remove('valid');
    return inputRef.classList.add('invalid');
  }
}
