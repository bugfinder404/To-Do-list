let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let tasks = document.querySelector(".container");
const addTask = () => {
  const newDiv = document.createElement("div");
  newDiv.innerHTML = ` <div class="task">
        <div class="tasks">
          <input type="checkbox" class="checkbox">
          <p class="p">${input.value}</p>
        </div>
        <i class="fa-solid fa-xmark"></i>
      </div>`
  if (input.value !== "") {
    tasks.prepend(newDiv);
  }
  let removeBtn = document.querySelector(".fa-solid");
  let checkBox = document.querySelector(".checkbox")
  removeBtn.addEventListener("click", () => {
    newDiv.remove();
  })
  checkBox.addEventListener("change", function() {
    if (this.checked) {
      let p = document.querySelector(".p");
      p.style.textDecoration = "line-through";
    } else {
       let p = document.querySelector(".p");
       p.style.textDecoration = "none";
    }
  })
}

btn.addEventListener("click", () => {
  addTask();
  input.value = "";
})
input.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    addTask();
    input.value = "";
  }
})