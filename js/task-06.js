const someInput = document.querySelector('#validation-input')
console.log(someInput.dataset.length);
console.dir(someInput);
const reqLength = Number(someInput.dataset.length)
console.log(reqLength);

someInput.addEventListener('change', onChange)

function onChange(evt) {
    console.log(evt);
    console.log(evt.currentTarget.value.length);
    let inpLength = Number(evt.currentTarget.value.length)
    if (inpLength !== reqLength && inpLength > 0) {
        someInput.classList.remove('valid')
        someInput.classList.add('invalid')
        return       
    } else if (inpLength === reqLength) { 
        someInput.classList.remove('invalid')
        someInput.classList.add('valid')
        return 
    }
    someInput.classList.remove('valid')
    someInput.classList.remove('invalid')
    return
}