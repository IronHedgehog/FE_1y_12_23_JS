// 1. Створити змінні для зберігання температури за Цельсієм та
// Фаренгейтом. Перевести температуру з Цельсія у
// Фаренгейти за допомогою формули та вивести результат в
// консоль.

const temperatureC = 22;
const temperatureF = (22 * 9) / 5 + 32;
console.log(temperatureF);

// 2. Створити змінну для зберігання кількості днів у місяці.
// Обчислити кількість годин та хвилин у цьому місяці за
// допомогою оператора множення та вивести результат в
// консоль.

const month = 30;

const hours = month * 24;
const minutes = hours * 60;
console.log(minutes);

// 3. Створити змінні для зберігання рівня здоровʼя та енергії
// гравця в грі. Зменшити рівень здоровʼя та енергії гравця за
// допомогою операторів віднімання та вивести результат в
// консоль.

// 4. Створити змінну для зберігання суми покупки в магазині.
// Застосувати знижку в розмірі 10% до цієї суми за
// допомогою оператора множення та вивести результат в
// консоль.

// 5. Створити змінну для зберігання числа з плаваючою комою.
// Використати метод Math.floor() для округлення числа до
// меншого та вивести результат в консоль.

// 6. Створити змінну для зберігання рядка, який містить числа з
// плаваючою комою. Використати метод parseFloat() для
// перетворення рядка у десяткове число та вивести
// результат в консоль.

// indexof -  завжди повертає число
// якщо не знайшов -1
// якщо знайшов то індекс елементу
// indexof() - запинається на першому збігу

const hello = "Hello!";

console.log(hello.toLowerCase().indexOf("e"));

const world = "world";
// console.log(object);

const string = hello + " " + world;

console.log(string);
const string1 = `${hello} ${world}`;

console.log(string1);
