const clock = document.querySelector('#clock');
const counter = document.querySelector('#counter span:last-child');
const now = new Date();

function currentTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

function datecounter() {
  const now = new Date();
  const dDay = new Date('2023-01-01 00:00:00');
  const count = dDay - now;
  const days = Math.floor(count / (1000 * 60 * 60 * 24));

  counter.innerHTML = `D - ${days}!`;
}

currentTime();
setInterval(currentTime, 1000);

datecounter();
setInterval(datecounter, 1000);
