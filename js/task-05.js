const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', onInput)

function onInput(event) {
    // console.log(event.currentTarget.value);
    let inputCont = event.currentTarget.value
    if (inputName.value) {
        outputName.textContent = inputCont
        
        return 
    }

    outputName.textContent = 'Anonymous'
}