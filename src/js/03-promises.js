const refForm = document.querySelector('.form');
const refImputs = document.querySelectorAll('input');

refForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  let formData = {};
  evt.preventDefault();
  console.log('submit');

  for (let imput of refImputs) {
    formData[imput.name] = Number(imput.value);
  }
  const { delay, step, amount } = formData;
  for (let i = 0; i < amount; i += 1) {
    createPromise(i + 1, step * i + delay);
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    sendMessage('resolve' + position + '   ' + delay);

    // Fulfill
  } else {
    sendMessage('Reject' + position + '  ' + delay);
    // Reject
  }
}

//developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Using_promises

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

https: function sendMessage(message) {
  console.log(message);
}
