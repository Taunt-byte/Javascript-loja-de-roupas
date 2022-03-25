const button = document.querySelector('input');
const paragraph = document.querySelector('p');

button.addEventListener('click', updateButton);

function updateButton() {
  if (button.value === 'Comprar') {
    button.value = 'Vendido';
    paragraph.textContent = '2 produtos disponiveis';
  } else {
    button.value = 'Comprar';
    paragraph.textContent = '3 produtos disponiveis.';
  }
}
