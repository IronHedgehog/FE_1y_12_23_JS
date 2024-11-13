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

// document.body.append(img);
// document.body.prepend(img);
img.width = "479";
// img1.width = "479";

// document.body.after(img);
document.body.before(img);
