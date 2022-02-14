// var dateWithoutSecond = new Date();


// setInterval(function() {
//   dateWithoutSecond = new Date();
// }, 60000);

// dateDiv = document.querySelector(".date");
// dateDiv.innerHTML = dateWithoutSecond.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});



function updateClock() {
  var now = new Date(), // current date
      months = ['January', 'February', '...']; // you get the idea
      time = now.getHours() + ':' + now.getMinutes(), // again, you get the idea

      // a cleaner way than string concatenation
      date = [now.getDate(), 
              months[now.getMonth()],
              now.getFullYear()].join(' ');

  // set the content of the element with the ID time to the formatted string
  document.querySelector('.date').innerHTML = [date, time].join(', ');

  // call this function again in 1000ms
  setTimeout(updateClock, 1000);
}
updateClock(); // initial call