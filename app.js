const degrees = document.querySelector('#degrees');
const finalTemp = document.querySelector('#finalTemp');

degrees.addEventListener('input', calc);

function calc() {
  const foo = 'Celsius';
  const temperature = (degrees.value - 32) * 0.5556;
  finalTemp.innerText = `${Math.round(temperature)}\u00B0 ${foo}`;
}

calc();
