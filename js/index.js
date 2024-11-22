const ul = document.querySelector("#categories");

// ul.addEventListener("click", onClick);

// document.addEventListener("keydown", onKeyDown);

// function onKeyDown(e) {
//   e.preventDefault();
//   console.log(e);
//   console.log(e.code === "ShiftLeft" && e.code === "KeyU");
//   if (e.code === "ShiftLeft") {
//     document.body.style.backgroundColor = "black";
//     document.body.style.color = "red";
//   }

//   onSpecialButtonClick(e);
// }

// function onSpecialButtonClick(e) {
//   console.log(e);
//   if ((e.code.metaKey || e.code.ctrlKey) && e.code === "KeyS") {
//     location.href = "https://google.com";
//   }
// }

// function onClick(event) {
//   console.log(event);
//   if (event.code === "MetaLeft") {
//     location.href = "https://google.com";
//   }
// }

// Mouse
// mousemove - рух курсором

const cursor = document.querySelector(".cursor");
const block = document.querySelector(".block");

document.addEventListener("mousemove", onMouseMove);

function onMouseMove(e) {
  console.log(e.clientX); // clientX - left
  console.log(e.clientY); // clientY - top

  // cursor.style.top = "100px";
  // cursor.style.left = "200px";

  console.log(cursor.offsetWidth);

  // cursor.offsetWidth - розмір елементу)(ширина)
  // cursor.offsetWidth - розмір елементу)(ширина)

  //  / 2 - поділ навпіл

  cursor.style.top = `${e.clientY - cursor.offsetWidth / 2}px`;
  cursor.style.left = `${e.clientX - cursor.offsetWidth / 2}px`;

  console.log("Я вожу мишкою");
}

block.addEventListener("mouseover", onMouseOver);

function onMouseOver(e) {
  // console.log(e);

  cursor.style.backgroundColor = "white";
}

block.addEventListener("mouseout", onMouseOut);

function onMouseOut(e) {
  cursor.style.backgroundColor = "red";
}

block.addEventListener("mousedown", onMouseDown);
block.addEventListener("mouseup", onMouseUp);
block.addEventListener("click", onClick);

function onMouseDown(e) {
  console.log("Я натиснув на елемент");
  console.log(e.button);
}

function onMouseUp(e) {
  console.log("я Відпустив мишку");
  console.log(e.button);
}

function onClick(e) {
  console.log("клік");
  console.log(e.button);
}

document.addEventListener("contextmenu", onContextMenu);

function onContextMenu(e) {
  console.log(e.button);
  // e.preventDefault();
}

document.addEventListener("dblclick", onDblClick);

function onDblClick(e) {
  console.log(e);
}
