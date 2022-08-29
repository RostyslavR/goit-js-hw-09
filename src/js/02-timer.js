import 'flatpickr/dist/flatpickr.min.css';
import 'notiflix/dist/notiflix-3.2.5.min.css';
import '../css/02-timer.css';
import flatpickr from 'flatpickr';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const TIMER_INTERVAL = 1000;
let selectedDate = 0;
let intervalID = null;

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

const refTimer = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

const timer = {
  time: 0,

  start() {
    refStartBtn.disabled = true;
    intervalID = setInterval(() => {
      this.time = checkDate(selectedDate);
      this.time
        ? timer.updateTime(convertMs(this.time))
        : timer.stop('Time is up.');
    }, TIMER_INTERVAL);
  },

  stop(message) {
    if (intervalID) {
      clearInterval(intervalID);
      Notify.info(message);
    }
    timer.updateTime(convertMs(0));
  },

  updateTime({ days, hours, minutes, seconds }) {
    refTimer.days.textContent = days;
    refTimer.hours.textContent = hours;
    refTimer.minutes.textContent = minutes;
    refTimer.seconds.textContent = seconds;
  },
};

Notify.init({
  position: 'center-top',
});
flatpickr('#datetime-picker', options);
refStartBtn.disabled = true;

refStartBtn.addEventListener('click', timer.start);

function checkDate(date) {
  let result = 0;
  const time = date - Date.now();
  if (time > 0) result = time;
  return result;
}

function handleData(date) {
  timer.stop('the date has been changed');

  selectedDate = date;
  checkDate(date)
    ? (refStartBtn.disabled = false)
    : Notify.failure(' Please choose a date in the future.');
}

function addLeadingZero(value, bits = 2) {
  return String(value).padStart(bits, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
