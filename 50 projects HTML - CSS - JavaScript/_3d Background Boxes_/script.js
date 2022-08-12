const boxesContainer = document.getElementById("boxes");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => boxesContainer.classList.toggle("big"));

function createBoxes() {
  for (let index = 0; index < 4; index++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.backgroundPosition = `
            ${-j * 125}px  ${-index * 125}px
        `;
      boxesContainer.appendChild(box);
    }
  }
}

createBoxes();
