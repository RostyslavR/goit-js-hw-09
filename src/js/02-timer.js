import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const TIMER_INTERVAL = 1000;
let selectedDate = 0;
let intervalID = null;
// let timerOn = false;

const options = {
  enableTime: true,
  time_24hr: true,
  // defaultDate: new Date(),
  defaultDate: Date.now(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    handleData(selectedDates[0].getTime());
  },
};

const refStartBtn = document.querySelector('[data-start]');

flatpickr('#datetime-picker', options);
refStartBtn.disabled = true;
refStartBtn.addEventListener('click', startTimer);

// console.log(refs.btnStart);
// const refDataInput = document.querySelector('imput');
// const messageOn = false;

function startTimer() {
  refStartBtn.disabled = true;
  timer(selectedDate);
}

function timer(date) {
  intervalID = setInterval(() => {
    time = checkDate(date);
    time ? showTime(time) : stopShowTime();
  }, TIMER_INTERVAL);
}

function showTime(time) {
  console.log(convertMs(time));
}

function stopShowTime() {
  clearInterval(intervalID);
  showTime(0);
  sendMessage('Time is up.');
  // sendMessage(' Please choose a date in the future.');
}

function checkDate(date) {
  let result = 0;
  time = date - Date.now();
  if (time > TIMER_INTERVAL) result = time;
  return result;
}

function handleData(date) {
  selectedDate = date;
  if (intervalID) {
    clearInterval(intervalID);
    showTime(0);
  }
  checkDate(date)
    ? (refStartBtn.disabled = false)
    : sendMessage(' Please choose a date in the future.');
}

function sendMessage(message) {
  console.log(message);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
