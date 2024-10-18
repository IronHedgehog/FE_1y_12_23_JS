const string = "string";
const number = 5;
const number1 = 5;
console.log(number === number1); // true
const nulll = null;
const undefinedd = undefined;
const bollean = true;

// примітивні типи данних (1: зберігаються та порівнюються за значенням)

const obj1 = {
  a: 10,
};

const obj2 = {
  a: 10,
};

const obj3 = obj1;

console.log(obj3 === obj1); // true,true,true

// обʼєкти, масиви, функції, - це складний тип даних object (1: порівнюються за посиланням в памʼяті)

console.log(obj1 === obj2); //true , false ,false, false

// Object.keys(); // дозволяє отримати у вигляді масиву всі ключі обʼєкта
// Object.values();
// Object.entries();
// for in - створений тільки для перебору властивостей обʼєктів отримує ключі обʼєкта та за ними може виводити значення
for (const key in obj1) {
  const element = obj1[key];
  console.log(element);
}

// ----------------------------------------ДЕСТРУКТУРИЗАЦІЯ ------------

const books = [
  {
    author: "Artem",
    year: "2024",
    title: "Book",
    description: "qweasdzxc",
    genre: "fantasy",
  },
  {
    author: "Artem",
    year: "2024",
    title: "Book",
    description: "qweasdzxc",
    genre: "romance",
  },
  {
    author: "Artem",
    year: "2024",
    title: "Book",
    description: "qweasdzxc",
    genre: "horor",
  },
  {
    author: "Artem",
    year: "2024",
    title: "Book",
    description: "qweasdzxc",
    genre: "adventure",
  },
];

function filterBooksByGenre(books, genre) {
  const filteredArr = [];
  // [] - ви маєте його перебрати (цикли, методами масиву)
  for (let index = 0; index < books.length; index++) {
    const element = books[index];
    //  const
    // {},[] - маємо вписати які властивості ми хочемо
    //= element; - хочемо розпакувати з обʼєкта element
    //: - вказати нове імʼя змінної за якою буде сберігатися жанр книги
    const { genre: bookGenre } = element;
    if (bookGenre === genre) {
      filteredArr.push(element);
    }
  }
  return filteredArr;
}

console.log(filterBooksByGenre(books, "adventure"));

const human = {
  name: "Artem",
  height: 200,
  weight: 100,
};
const weight = 101;

const { weight: humanWeight } = human;

console.log(humanWeight);
