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
  let editIcon = document.createElement("i");

  parent.className = "item";
  parent.innerHTML = `<div class= "task"> ${input.value} </div>`;
  checkIcon.className = "fa-solid fa-square-check";
  checkIcon.addEventListener("click", function () {
    console.log("Check icon clicked");

    checkIcon.classList.toggle("checked");
    saveTodos();
  });
  child.appendChild(checkIcon);

  editIcon.className = "fa-solid fa-pen-to-square";
  editIcon.addEventListener("click", function () {
    const task = parent.querySelector(".task");
    if (task.contentEditable === "true") {
      task.contentEditable = false;
      editIcon.classList.remove("fa-floppy-disk");
      editIcon.classList.add("fa-pen-to-square");
      saveTodos();
    } else {
      task.contentEditable = true;
      editIcon.classList.remove("fa-pen-to-square");
      editIcon.classList.add("fa-floppy-disk");
      task.style.outline = "none";
      task.style.border = "none";
      task.focus();
      setTimeout(() => {
        moveCursorToEnd(task);
      });
    }
  });

  child.appendChild(editIcon);

  trashIcon.className = "fa-solid fa-trash";
  trashIcon.style.color = "black";
  trashIcon.addEventListener("click", function () {
    parent.remove();
    saveTodos();
  });
  child.appendChild(trashIcon);
  parent.appendChild(child);
  todoitems.appendChild(parent);

  input.value = "";
  saveTodos();
}

const saveTodos = () => {
  localStorage.setItem("data", todoitems.innerHTML);
};
document.addEventListener("DOMContentLoaded", function () {
  getTodos();
});

const getTodos = () => {
  todoitems.innerHTML = localStorage.getItem("data");

  const checkIcons = document.querySelectorAll(".fa-square-check");
  checkIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
      icon.classList.toggle("checked");
      saveTodos();
    });
  });

  const trashIcons = document.querySelectorAll(".fa-trash");
  trashIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
      icon.parentElement.parentElement.remove();
      saveTodos();
    });
  });

  const editIcons = document.querySelectorAll(".fa-pen-to-square");
  editIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
      const parent = icon.parentElement.parentElement;
      const task = parent.querySelector(".task");
      if (task.contentEditable === "true") {
        task.contentEditable = false;
        icon.classList.remove("fa-floppy-disk");
        icon.classList.add("fa-pen-to-square");
        saveTodos();
      } else {
        task.contentEditable = true;
        icon.classList.remove("fa-pen-to-square");
        icon.classList.add("fa-floppy-disk");
        task.style.outline = "none";
        task.style.border = "none";
        task.focus();
        setTimeout(() => {
          moveCursorToEnd(task);
        });
      }
    });
  });
};


function moveCursorToEnd(el) {
  const range = document.createRange();
  const selection = window.getSelection();
  range.selectNodeContents(el);
  range.collapse(false);
  selection.removeAllRanges();
  selection.addRange(range);
}
