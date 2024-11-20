const ul = document.querySelector("#categories");

// ul.addEventListener("click", onClick);

document.addEventListener("keydown", onKeyDown);

function onKeyDown(e) {
  e.preventDefault();
  console.log(e);
  console.log(e.code === "ShiftLeft" && e.code === "KeyU");
  if (e.code === "ShiftLeft") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "red";
  }

  onSpecialButtonClick(e);
}

function onSpecialButtonClick(e) {
  console.log(e);
  if ((e.code.metaKey || e.code.ctrlKey) && e.code === "KeyS") {
    location.href = "https://google.com";
  }
}

// function onClick(event) {
//   console.log(event);
//   if (event.code === "MetaLeft") {
//     location.href = "https://google.com";
//   }
// }
