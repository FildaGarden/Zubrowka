const minElement = document.getElementById('minutes');
const secElement = document.getElementById('seconds');
const hourElement = document.getElementById('hours');
const dayElement = document.getElementById('days');

let countDownDate = new Date("Dec 30, 2021 21:00:00").getTime();

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
    let now = new Date().getTime();

  // Find the distance between now and the count down date
    let distance = now - countDownDate;

  // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    dayElement.innerHTML = days;
    hourElement.innerHTML = hours;
    minElement.innerHTML = minutes;
    secElement.innerHTML = seconds;

}, 1000);
