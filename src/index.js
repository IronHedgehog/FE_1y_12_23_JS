// let random = Math.floor(Math.random() * 10);
// console.log(random);
// const promise = new Promise((resolve, reject) => {
//   if (random >= 6) {
//     // resolve- все кул, проміс виконано успішно
//     resolve('Проміс виконано з успіхом');
//   } else {
//     reject('Проміс виконано але без успіху');
//   }
// });
// // then - На практиці працює тільки першим параметром тоб то з успіхом
// promise
//   .then(
//     // 1-й параметр then(колбек який відповідає за успішне виконання промісу)
//     valueResolve => {
//       console.log(valueResolve);
//       console.log('Відпрацював then');
//     }
//     // // 2-й параметр then(колбек який відповідає за не успішне виконання промісу)
//     // valueReject => {
//     //   throw new Error(valueReject);
//     // }
//   )
//   .catch(error => {
//     console.log(error);
//     console.log('Відпрацював catch');
//   })
//   .finally(() => {
//     // Метод finally виконується в будь-якому разі не залежно від результату
//     console.log('Виконання промісу завершено');
//   });

// const promise1 = new Promise((resolve, reject) => {
//   if (random >= 6) {
//     // resolve- все кул, проміс виконано успішно
//     resolve('Успіх');
//   } else {
//     reject('Не успіх');
//   }
// });

// console.log(promise1);

// promise1
//   .then(value => {
//     console.log(value);
//   })
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log('Finish');
//   });

// Промісифікація функції

// const fetchPosts = (user, onSuccess, onError) => {
//   setTimeout(() => {
//     const isOk = false;

//     if (isOk) {
//       onSuccess('Cool');
//     } else {
//       onError('not cool');
//     }
//   }, 1000);
// };

// const onSuccess = user => {
//   console.log(user);
// };

// const onError = user => {
//   console.log(user);
// };

// console.log(fetchPosts({ name: 'Artem' }, onSuccess, onError));

// const fetchPosts = user => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       const isOk = false;

//       if (isOk) {
//         res('Cool');
//       } else {
//         rej('not cool');
//       }
//     }, 1000);
//   });
// };

// fetchPosts({ name: 'Artem' })
//   .then(value => {
//     console.log(value);
//   })
//   .catch(error => {
//     console.log(error);
//   });
