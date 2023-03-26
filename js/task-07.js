const sizeControl = document.querySelector('#font-size-control')
const textElement = document.querySelector('#text')

// console.dir(sizeControl);
// console.dir(textElement);


sizeControl.addEventListener('input', onInput)

function onInput(event) {
    // console.log(event.currentTarget.value);
    let sizeChange = event.currentTarget.value
    textElement.style.fontSize = `${sizeChange}px`
    return
}