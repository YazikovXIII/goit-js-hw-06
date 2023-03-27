function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const base = document.querySelector('#boxes');
const create = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-destroy]');
const someInput = document.querySelector('input')

create.addEventListener('click', createMajic);
destroy.addEventListener('click', destroyMajic);

function createMajic() {
  let amount = someInput.value
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    base.append(div);
    size += 10;
  }
}

function destroyMajic() {
  base.innerHTML = '';
}