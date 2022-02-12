var dateWithoutSecond = new Date();

//update the time every minute
setInterval(function() {
  dateWithoutSecond = new Date();
}, 60000);

dateDiv = document.querySelector(".date");
dateDiv.innerHTML = dateWithoutSecond.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});

