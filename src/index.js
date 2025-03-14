const date = new Date('April 15,1970');

console.log(date);
// 2030-05-01T10:20:30 - YYYY-MM-DDTHH:MM:SS:MS
console.log(Date.parse('2026-01-01T00:00:00')); //(1682925630000) - мс з 1970р
console.log(Date.parse('2026-01-01T00:00:00') - Date.now()); // проміжок часу від зараз до  2026-01-01

const time = new Date('2025-03-01');

console.log(time.getDate()); // число місяця
console.log(time.getDay()); // видає значення по індексу з 0 до 6 (Починає відлік з неділі, субота 6)

console.log(time.getMonth()); // видає значення по індексу з 0 до 11

console.log(time.getFullYear()); // рік

console.log(time.getHours());
console.log(time.getMinutes());
console.log(time.getSeconds());
console.log(time.getMilliseconds());

console.log(time.getTime());

console.log(time.toUTCString());
console.log(time.getUTCDay());
console.log(time.getUTCMonth());

const newYear = Date.parse('2026-01-01T00:00:00');

// console.log(newYear.toLocaleString());

console.log(
  time.toLocaleString('Uk-uk', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
);
// dayPeriod: 'short',
// hour12: true,
