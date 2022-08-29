import 'notiflix/dist/notiflix-3.2.5.min.css';
import '../css/03-promises.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refForm = document.querySelector('.form');
const refImputs = document.querySelectorAll('input');

//   default values  //
refImputs[0].value = 700;
refImputs[1].value = 300;
refImputs[2].value = 10;
//   default values  //

Notify.init({
  useIcon: false,
  position: 'center-top',
});

refForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  let formData = {};
  evt.preventDefault();

  for (let imput of refImputs) {
    formData[imput.name] = Number(imput.value);
  }
  const { delay, step, amount } = formData;

  for (let i = 0; i < amount; i += 1) {
    let promicePosition = i + 1;
    let promiceDelay = step * i + delay;
    createPromise(promicePosition, promiceDelay)
      .then(({ position, delay }) => {
        setTimeout(
          Notify.success,
          delay,
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        setTimeout(
          Notify.failure,
          delay,
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const data = {
      position,
      delay,
    };
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve(data);
    } else {
      reject(data);
    }
  });
}
