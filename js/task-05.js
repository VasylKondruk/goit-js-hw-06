const refs = {
  inputRef: document.querySelector('#name-input'),
  outputRef: document.querySelector('#name-output'),
};

// const inputRef = document.querySelector('#name-input');
// const outputRef = document.querySelector('#name-output');

refs.inputRef.addEventListener('input', inputChange);

function inputChange(event) {
  if (event.currentTarget.value === '') {
    return (refs.outputRef.textContent = 'Anonymous');
  }
  refs.outputRef.textContent = event.currentTarget.value;
}
