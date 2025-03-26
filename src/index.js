const makePromise = (text, delay) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(text);
    }, delay);
  });
};

const promise1 = makePromise('promise1', 10000);
const promise2 = makePromise('promise2', 2000);
const promise3 = makePromise('promise3', 1000);

// Promise.all - повертає проміс
Promise.all([promise1, promise2, promise3]).then(value => {
  console.log(value);
});

Promise.race([promise1, promise2, promise3]).then(value => console.log(value));
