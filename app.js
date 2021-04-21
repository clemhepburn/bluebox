var today = new Date();
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
document.querySelectorAll('#date').forEach(dateElement => {
  dateElement.innerHTML += ' ' + months[today.getMonth()] + ' ' + today.getDate() + ', ' + today.getFullYear();
});

const blue = document.querySelector('.blue');

blue.addEventListener('mouseover', () => {
  blue.innerText = 'sky ocean blueberry hydrangea pansy butterfly blue jay blue starling grape hyacinth forget-me-not macaw special chair  cornflower hibiscus painting from a dear friend borage morning glory blue heron dart frog flax ';
  blue.classList.add('blue-list');
})

blue.addEventListener('mouseout', () => {
  blue.innerText = 'blue';
  blue.classList.remove('blue-list');
})