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
  let amount = someInput.value;
  let size = 30;
  let divs = Array.from({ length: amount }, () => {
    const div = document.createElement('div');
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    size += 10;
    return div;
  });
  base.append(...divs);
}

function destroyMajic() {
  base.innerHTML = '';
}
