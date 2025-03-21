let random = Math.floor(Math.random() * 10);
console.log(random);
const promise = new Promise((resolve, reject) => {
  if (random >= 6) {
    // resolve- все кул, проміс виконано успішно
    resolve('Проміс виконано з успіхом');
  } else {
    reject('Проміс виконано але без успіху');
  }
});
// then - На практиці працює тільки першим параметром тоб то з успіхом
promise
  .then(
    // 1-й параметр then(колбек який відповідає за успішне виконання промісу)
    valueResolve => {
      console.log(valueResolve);
      console.log('Відпрацював then');
    }
    // // 2-й параметр then(колбек який відповідає за не успішне виконання промісу)
    // valueReject => {
    //   throw new Error(valueReject);
    // }
  )
  .catch(error => {
    console.log(error);
    console.log('Відпрацював catch');
  })
  .finally(() => {
    // Метод finally виконується в будь-якому разі не залежно від результату
    console.log('Виконання промісу завершено');
  });
