import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const M_SECOND = 1000;
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
    if (intervalID) {
      clearInterval(intervalID);
      showTime(0);
    }
    handleData(selectedDates[0]);
  },
};

const refs = {
  btnStart: document.querySelector('[data-start]'),
};

refs.btnStart.disabled = true;
refs.btnStart.addEventListener('click', startTimer);

// console.log(refs.btnStart);
// const refDataInput = document.querySelector('imput');
// const messageOn = false;
const datePicker = flatpickr('#datetime-picker', options);

function startTimer() {
  refs.btnStart.disabled = true;
  timer(selectedDate);
}
function timer(date) {
  // timerOn = true;
  intervalID = setInterval(() => {
    time = checkDate(date);
    time ? showTime(time) : stopShowTime();
  }, 1000);
  // timerOn = false;
}

function showTime(time) {
  console.log(time);
}

function stopShowTime() {
  clearInterval(intervalID);
  showTime(0);
  console.log('Time is up.');
  // sendMessage(' Please choose a date in the future.');
}

function checkDate(date) {
  let result = 0;
  time = date - Date.now();
  if (time > 0) result = time;
  return result;
}

function handleData(date) {
  selectedDate = Number(datePicker.formatDate(date, 'U')) * M_SECOND;
  checkDate(selectedDate)
    ? (refs.btnStart.disabled = false)
    : sendMessage(' Please choose a date in the future.');
}

function sendMessage(message) {
  console.log(message);
}
