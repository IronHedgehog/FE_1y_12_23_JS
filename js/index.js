const rock = document.querySelector("#rock");

const choices = ["ножиці", "каміння", "папір"];
let computerScore = 0;
let userScore = 0;

rock.addEventListener("click", onClick);

function onClick(eventObject) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  console.log(computerChoice);
}
