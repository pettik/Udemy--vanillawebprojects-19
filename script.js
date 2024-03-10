const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const year = document.getElementById('year');
const countdown = document.getElementById('countdown');
const loading = document.getElementById('loading');

// Current year
const currentYear = new Date().getFullYear();

const newYearTime = new Date(`Januar 01 ${currentYear + 1} 00:00`);
console.log(newYearTime);


// Set background year
year.innerText = currentYear + 1;

function updateCountDown() {
   const currentTime = new Date();
   const diff = newYearTime - currentTime;

   // Count days,hours,minutes and seconds
   const d = Math.floor(diff / 1000 / 60 / 60 / 24);
   const h = Math.floor(diff / 1000 / 60 / 60) % 24;
   const m = Math.floor(diff / 1000 / 60) % 60;
   const s = Math.floor(diff / 1000) % 60;

   // Write time values to DOM
   days.innerText = d;
   hours.innerText = h < 10 ? '0' + h : h;
   minutes.innerText = m < 10 ? '0' + m : m;
   seconds.innerText = s < 10 ? '0' + s : s;
}


// Show spinner before countdown
setTimeout(() => {
   loading.remove();
   countdown.style.display = 'flex';
}, 1000);

// Run every second
setInterval(updateCountDown, 1000);