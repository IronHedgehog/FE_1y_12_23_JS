const random = Math.floor(Math.random() * 10);

const makePromise = (text, errorText, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (random > 5) {
        resolve(text);
      } else {
        reject(errorText);
      }
    }, delay);
  });
};

const promise1 = makePromise('promise1', 'Error1', 500);
const promise2 = makePromise('promise2', 'Error2', 2000);
const promise3 = makePromise('promise3', 'Error3', 1000);

// Promise.all - повертає проміс

// Promise.all([promise1, promise2, promise3])
//   .then(value => {
//     console.log(value);
//   })
//   .catch(error => console.log(error));

// Promise.race([promise1, promise2, promise3])
//   .then(value => console.log('race', value))
//   .catch(error => console.log('race', error));

// Promise.any([promise1, promise2, promise3])
//   .then(value => console.log('any', value))
//   .catch(error => console.log('any', error.errors));

// new Promise(resolve => resolve('успіх')).then(value => console.log(value));
// Promise.resolve('Успіх').then(value => console.log(value));

// new Promise((res, rej) => {
//   rej('Не успіх');
// }).catch(error => console.log(error));

// Promise.reject('Не успіх').catch(error => console.log(error));

const promises = [promise1, promise2, promise3];

Promise.allSettled(promises).then(results =>
  results.forEach(result => console.log(result.value))
);
