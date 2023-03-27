function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const back = document.querySelector('body')
const colorId = document.querySelector('.color')
const btnCntrl = document.querySelector('.change-color')
btnCntrl.addEventListener('click', onClick)


function onClick(event) {
  const randomClr = getRandomHexColor()
  back.style.backgroundColor = randomClr;
  colorId.textContent = randomClr;
  console.log(randomClr);
}