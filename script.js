// script.js
// script.js

function showTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  let timeDiv = document.getElementById('time');
  if (!timeDiv) {
    timeDiv = document.createElement('div');
    timeDiv.id = 'time';
    timeDiv.style.marginTop = '20px';
    document.body.appendChild(timeDiv);
  }
  timeDiv.textContent = '当前时间：' + timeString;
}

setInterval(showTime, 1000);
showTime();