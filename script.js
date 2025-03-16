const daysFlipCardSpan = document.querySelector(".flip-card #days");
const hoursFlipCardSpan = document.querySelector(".flip-card #hours");
const minutesFlipCardSpan = document.querySelector(".flip-card #minutes");
const secondsFlipCardSpan = document.querySelector(".flip-card #seconds");

console.log(daysFlipCardSpan);
console.log(hoursFlipCardSpan);
console.log(minutesFlipCardSpan);
console.log(secondsFlipCardSpan);

const countDownTimer = setInterval(() => {
  let currentTime = new Date();

  let countDown = new Date("Mar 31,2034 22:55:05");

  let intervalTime = countDown - currentTime;
  let intervalDay = Math.floor(intervalTime / 1000 / 60 / 60 / 24);
  let intervalHours = Math.floor((intervalTime / 1000 / 60 / 60) % 24);
  let intervalMinutes = Math.floor((intervalTime / 1000 / 60) % 60);
  let intervalSeconds = Math.floor((intervalTime / 1000) % 60);

  daysFlipCardSpan.textContent = String(intervalDay).padStart(2, "0");
  hoursFlipCardSpan.textContent = String(intervalHours).padStart(2, "0");
  minutesFlipCardSpan.textContent = String(intervalMinutes).padStart(2, "0");
  secondsFlipCardSpan.textContent = String(intervalSeconds).padStart(2, "0");

  if (intervalTime < 0) {
    clearInterval(countDownTimer);
    daysFlipCardSpan.textContent = `00`;
    hoursFlipCardSpan.textContent = `00`;
    minutesFlipCardSpan.textContent = `00`;
    secondsFlipCardSpan.textContent = `00`;
  }
}, 1000);
