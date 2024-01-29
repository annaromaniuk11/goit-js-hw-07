document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('#controls input[type="number"]');
  const createButton = document.querySelector('#controls button[data-create]');
  const destroyButton = document.querySelector('#controls button[data-destroy]');
  const boxesContainer = document.getElementById('boxes');

  function createBoxes(amount) {
    const boxes = [];
    let size = 30;
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxes.push(box);
      size += 10;
    }
    boxesContainer.append(...boxes);
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }

  createButton.addEventListener('click', () => {
    const amount = parseInt(input.value, 10);
    if (amount >= 1 && amount <= 100) {
      destroyBoxes();
      createBoxes(amount);
      input.value = '';
    }
  });

  destroyButton.addEventListener('click', () => {
    destroyBoxes();
  });
});
