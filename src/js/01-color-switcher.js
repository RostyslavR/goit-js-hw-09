const refStartbtn = document.querySelector('[data-start]');
const refStopbtn = document.querySelector('[data-stop]');
let intervalID = null;

refStopbtn.disabled = true;
refStartbtn.addEventListener('click', startProcess);
refStopbtn.addEventListener('click', stopProcess); //

function startProcess() {
  //   refStartbtn.removeEventListener('click', startProcess);
  //   refStopbtn.addEventListener('click', stopProcess);
  refStopbtn.disabled = false;
  refStartbtn.disabled = true;
  intervalID = setInterval(changeBodyColor, 1000);
}

function stopProcess() {
  //   refStopbtn.removeEventListener('click', stopProcess);
  //   refStartbtn.addEventListener('click', startProcess);
  clearInterval(intervalID);
  refStartbtn.disabled = false;
  refStopbtn.disabled = true;
}

function changeBodyColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
