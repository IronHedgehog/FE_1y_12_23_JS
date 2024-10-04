// для того щоб створити обʼєкт ми маємо записати фігурні дужки
// ключ-характеристика яку ви описуєте
//всередині обʼєкту все записується парами (ключ значення)

const petro = {
  name: "Petro",
  age: 20,
  height: 179,
  weight: 73,
};

// {} - літерал обʼєкту(всередені фігурних дужок ми з вами розписуєм властивості та занчення обʼєкту)

console.log({});
const mouse = {
  gameMode: true,
  material: "metal",
  sideButtons: true,
  dpi: [200, 400, 600, 800, 1000],
};

const airPods = {
  // В обʼєкт завжди записуєм пари ключ(властивість) значення
  volume: 100,
};

const laptop = {
  // Властивість
  _1: "asd",
  processor: "intel",
  GPU: "NVIDIA",
  RAM: "",
  power: 100,
  //method (функція яка записана як значення ключа)
  on: function (power) {
    if (power > 0) {
      console.log("Ноутбук стартує");
    } else {
      console.log("Ноут не стартує");
    }
  },
};

// щоб отримати доступ до властиаості та її значення ви маєте звернутись по імені до обʼєкту та через крапку обрати ключ який вам необхіжний

laptop.on(laptop.power);
// старий синтаксис для старих методів
console.log(laptop["_1"]);
// щоб створити властивість обʼєкту поза обʼєктом ми маємо звернутись до властивості якої не існує  ( .ssd) та присвоїти значення через = ("DDR5")
laptop.ssd = "DDR5";
console.log(laptop);
// видалення властивості обʼєкту
delete laptop.ssd;

console.log(laptop.battery);
console.log(laptop);

const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = form.elements.email.value;
  const password = form.elements.password.value;
  const confirmPassword = form.elements.confirm.value;

  const signUp = {
    // Створиться ключ з назвою вашої змінної а значення змінної підставиться як значення ключа
    email,
    password,
    confirmPassword,
  };

  console.log(signUp);
});

const signUp = {
  email: "Petro@gmail.com",
  password: "qwerty12345",
  confirmPassword: true,
};
