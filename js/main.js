const button = document.querySelector('input');
const paragraph = document.querySelector('p');

button.addEventListener('click', updateButton);

function updateButton() {
  if (button.value === 'Calca') {
    button.value = 'Vendido';
    paragraph.textContent = '2 produtos disponiveis';
  } else {
    button.value = 'Calca';
    paragraph.textContent = '3 produtos disponiveis.';
  }
}
