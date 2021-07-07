var today = new Date();
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var time = today.toLocaleTimeString().toLowerCase();
document.querySelectorAll('#date').forEach(dateElement => {
  dateElement.innerHTML += ' ' + 'Today is' + ' ' + months[today.getMonth()] + ' ' + today.getDate() + ', ' + today.getFullYear();

});

// let date = new Date();  
// let options = {  
//     weekday: "long", year: "numeric", month: "long",  
//     day: "numeric", hour: "2-digit", minute: "2-digit"  
// };  

document.querySelectorAll('#date').forEach(dateElement => {
  dateElement.innerHTML += ' ' + 'Today is' + ' ' + date.toLocaleTimeString('en-us', options);
});

  const birthday = document.querySelector('.date');
  let day = new Date();
  if (day.getDay() == 0) {
    birthday.classList.add('birthday')
    birthday.textContent = 'today is may 9th which is the most special day. happy birthday :)';
  }




const blue = document.querySelector('.imfdsfnjsage');

blue.addEventListener('mouseover', (e) => {
  e.preventDefault();
  blue.innerText = (' ');
  blue.classList.add('blue-list');
})

blue.addEventListener('mouseout', (e) => {
  e.preventDefault();
  blue.innerText = '~*-_^.,,.^_-*~';
  blue.classList.remove('blue-list');
})

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

const button = document.querySelector('.blue');
const audio = new Audio('./assets/sound.mp3');
const isPlaying = false;

function myPlay() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
};

button.addEventListener('click', myPlay);

