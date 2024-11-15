// DOM
// class="input"
const list = document.querySelector("#ul");
const input = document.querySelector(".input");
// const list = document.querySelectorAll;
// const list = document.getElementById;

list.style.backgroundColor = "red";

list.classList.add("list");
list.classList.remove("list");
console.log(list.classList.contains("list"));
input.classList.replace("input", "wrong-input");

const img = document.createElement("img");
// const img1 = document.createElement("img");

img.src =
  "https://gptchat.in.ua/wp-content/uploads/2023/02/iryna_kunichenko_many_colored_balloons_over_the_grand_canyon_hd_06263781-130a-4137-a4c8-2e7454b401c7-1024x585.jpg";

img.alt = "Тут має буть зображення";
// img1.src =
//   "https://gptchat.in.ua/wp-content/uploads/2023/02/iryna_kunichenko_many_colored_balloons_over_the_grand_canyon_hd_06263781-130a-4137-a4c8-2e7454b401c7-1024x585.jpg";

// img1.alt = "Тут має буть зображення";

console.log(img);

// document.body.prepend(img);
img.width = "479";
// img1.width = "479";

// document.body.after(img);
document.body.before(img);
document.body.append(img);

list.appendChild(img);

const data = [
  {
    src: "https://gptchat.in.ua/wp-content/uploads/2023/02/iryna_kunichenko_many_colored_balloons_over_the_grand_canyon_hd_06263781-130a-4137-a4c8-2e7454b401c7-1024x585.jpg",
    alt: "Тут має буть зображення",
  },
  {
    src: "https://gptchat.in.ua/wp-content/uploads/2023/02/iryna_kunichenko_many_colored_balloons_over_the_grand_canyon_hd_06263781-130a-4137-a4c8-2e7454b401c7-1024x585.jpg",
    alt: "Тут має буть зображення",
  },
  {
    src: "https://gptchat.in.ua/wp-content/uploads/2023/02/iryna_kunichenko_many_colored_balloons_over_the_grand_canyon_hd_06263781-130a-4137-a4c8-2e7454b401c7-1024x585.jpg",
    alt: "Тут має буть зображення",
  },
  {
    src: "https://gptchat.in.ua/wp-content/uploads/2023/02/iryna_kunichenko_many_colored_balloons_over_the_grand_canyon_hd_06263781-130a-4137-a4c8-2e7454b401c7-1024x585.jpg",
    alt: "Тут має буть зображення",
  },
  {
    src: "https://gptchat.in.ua/wp-content/uploads/2023/02/iryna_kunichenko_many_colored_balloons_over_the_grand_canyon_hd_06263781-130a-4137-a4c8-2e7454b401c7-1024x585.jpg",
    alt: "Тут має буть зображення",
  },
  {
    src: "https://gptchat.in.ua/wp-content/uploads/2023/02/iryna_kunichenko_many_colored_balloons_over_the_grand_canyon_hd_06263781-130a-4137-a4c8-2e7454b401c7-1024x585.jpg",
    alt: "Тут має буть зображення",
  },
  {
    src: "https://gptchat.in.ua/wp-content/uploads/2023/02/iryna_kunichenko_many_colored_balloons_over_the_grand_canyon_hd_06263781-130a-4137-a4c8-2e7454b401c7-1024x585.jpg",
    alt: "Тут має буть зображення",
  },
  {
    src: "https://gptchat.in.ua/wp-content/uploads/2023/02/iryna_kunichenko_many_colored_balloons_over_the_grand_canyon_hd_06263781-130a-4137-a4c8-2e7454b401c7-1024x585.jpg",
    alt: "Тут має буть зображення",
  },
  {
    src: "https://gptchat.in.ua/wp-content/uploads/2023/02/iryna_kunichenko_many_colored_balloons_over_the_grand_canyon_hd_06263781-130a-4137-a4c8-2e7454b401c7-1024x585.jpg",
    alt: "Тут має буть зображення",
  },
  {
    src: "https://gptchat.in.ua/wp-content/uploads/2023/02/iryna_kunichenko_many_colored_balloons_over_the_grand_canyon_hd_06263781-130a-4137-a4c8-2e7454b401c7-1024x585.jpg",
    alt: "Тут має буть зображення",
  },
];

const imagesHTML = data.map((item) => {
  const li = document.createElement("li");
  const img = document.createElement("img");
  li.classList.add("list-item");
  img.src = item.src;
  img.alt = item.alt;
  li.appendChild(img);
  return li;
});

const imgs = data.map(
  (img) =>
    `<li class="li"><img class="img" src=${img.src} alt=${img.alt} /></li>`
);

console.log(imagesHTML);
// Додавання на сторінку(Робота з DOM) дуже дорога тому виконується один раз поза циклом

list.append(...imagesHTML);

console.log(imgs);

const ull = document.querySelector(".ull");

ull.insertAdjacentHTML("beforeend", imgs);

const li = document.querySelectorAll("#ul > .list-item");
console.log("Кількість елементів :", li.length);

const liArr = Array.from(li);

console.log(liArr);

li.forEach((li) => {
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  h3.textContent = "img.alt";
  p.textContent = "img.src";
  console.log(h3);
  console.log(p);
});
// Дуже класно видаляти
// list.innerHTML = "";

list.innerHTML = `<img src="https://gptchat.in.ua/wp-content/uploads/2023/02/iryna_kunichenko_many_colored_balloons_over_the_grand_canyon_hd_06263781-130a-4137-a4c8-2e7454b401c7-1024x585.jpg" alt="laksmdlkasdlkalmsdlk"> `;

// innerHTML - спочатку очищує весь елемент і додає те що ви попросили

const htmlCode = `<ol>
      <li>
        <a href=""><span>a</span></a>
      </li>
      <li>
        <a href=""><span>b</span></a>
      </li>
      <li>
        <a href=""><span>c</span></a>
      </li>
      <li>
        <a href=""><span>d</span></a>
      </li>
    </ol>`;

document.body.insertAdjacentHTML("beforeend", htmlCode);
