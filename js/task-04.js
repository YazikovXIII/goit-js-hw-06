const counterValue = document.querySelector('#value');
counterValue.value = 0;

const increase = document.querySelector('[data-action="increment"]');
// console.log(increase);
const decrease = document.querySelector('[data-action="decrement"]');
// console.log(decrease);


increase.addEventListener('click', onClick);
decrease.addEventListener('click', onClick);

function onClick(evt) {
    // console.log(evt.currentTarget.textContent);
let number = Number(evt.currentTarget.textContent)
    
    counterValue.value += number

    return counterValue.textContent = counterValue.value;
}