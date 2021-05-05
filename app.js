var today = new Date();
var months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'cctober', 'november', 'december'];
document.querySelectorAll('#date').forEach(dateElement => {
  dateElement.innerHTML += ' ' + months[today.getMonth()] + ' ' + today.getDate() + ', ' + today.getFullYear();

});

// const blue = document.querySelector('.blue');

// blue.addEventListener('mouseover', () => {
//   blue.innerText = 'sky ocean blueberry hydrangea pansy butterfly blue jay blue starling grape hyacinth marble forget-me-not macaw special chair  cornflower hibiscus painting from a dear friend borage morning glory blue heron dart frog flax ';
//   blue.classList.add('blue-list');
// })

// blue.addEventListener('mouseout', () => {
//   blue.innerText = 'blue';
//   blue.classList.remove('blue-list');
// })

const wordArray = ['sky', 'ocean', 'blueberry', 'hydrangea', 'pansy', 'butterfly', 'blue jay', 'blue starling', 'grape hyacinth', 'marble', 'forget-me-not', 'macaw', 'special chair', 'cornflower', 'hibiscus', 'painting from a dear friend', 'borage', 'morning glory', 'blue heron', 'dart frog', 'flax'];

function randomWord(wordArray) {
  let word = wordArray[Math.floor(Math.random() * wordArray.length)];
return word;
}

let newWord = randomWord(wordArray);

function blueGenerator() {

  let newWord = randomWord(wordArray);

document.querySelector('.blue').textContent = `${newWord}`;}

window.setInterval(function() {
  blueGenerator();
}, 3000);


blueGenerator();