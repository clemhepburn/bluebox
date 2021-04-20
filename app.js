var today = new Date();
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
document.querySelectorAll('#date').forEach(dateElement => {
  dateElement.innerHTML += ' ' + months[today.getMonth()] + ' ' + today.getDate() + ', ' + today.getFullYear();
});
