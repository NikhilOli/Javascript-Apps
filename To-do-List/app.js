const todoitems = document.getElementsByClassName("to-do-items")[0];
const input = document.getElementById("input");

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addItem();
  }
});
function addItem() {
  let parent = document.createElement("div");
  let child = document.createElement("div");
  var checkIcon = document.createElement("i");
  let trashIcon = document.createElement("i");

  parent.className = "item";
  parent.innerHTML = `<div> ${input.value} </div>`;
  checkIcon.className = "fa-solid fa-square-check";
  checkIcon.style.color = "lightgray";
  checkIcon.addEventListener("click", function () {
    checkIcon.style.color = "limegreen";
  });
  child.appendChild(checkIcon);

  trashIcon.className = "fa-solid fa-trash";
  trashIcon.style.backgroundColor = "darkgray";
  trashIcon.addEventListener("click", function () {
    parent.remove();
  });
  child.appendChild(trashIcon);

  parent.appendChild(child);
  todoitems.appendChild(parent);

  input.value = "";
}
const a = 3.6;
console.log(Math.floor(a));
