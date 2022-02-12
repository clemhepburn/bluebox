var dateWithoutSecond = new Date();
dateDiv = document.querySelector(".date");
dateDiv.innerHTML = dateWithoutSecond.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});

