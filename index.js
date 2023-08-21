const mainContainerEl = document.querySelector(".main-container");
const buttonEl = document.querySelector("button");
const resetButtonEl = document.querySelector(".reset");
const paraEl = document.createElement("p");
document.body.appendChild(paraEl);

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function divGenerator(totalRow, totalColumn) {
  removeAllChildNodes(mainContainerEl);

  for (let i = 0; i < totalRow; i++) {
    const createDiv = document.createElement("div");
    createDiv.classList.add("parent");
    mainContainerEl.appendChild(createDiv);

    for (let i = 0; i < totalColumn; i++) {
      const divChild = document.createElement("div");
      divChild.classList.add("square");
      createDiv.appendChild(divChild);
    }
  }

  const squareEl = document.querySelectorAll(".square");

  // Default Hover
  // for (const square of squareEl) {
  //   square.addEventListener("mouseover", () => {
  //     square.classList.add("hover");
  //   });
  // }

  // Colorful Hover
  for (const square of squareEl) {
    square.addEventListener("mouseover", () => {
      let randomizer = Math.floor(Math.random() * 16777215).toString(16);
      square.setAttribute("style", `background-color:#${randomizer};`);
    });
  }

  // Increase Darkening Effect Hover
  // for (const square of squareEl) {
  //   let increaseEffect = 0;
  //   square.addEventListener("mouseover", () => {
  //     increaseEffect += 0.1;
  //     square.setAttribute(
  //       "style",
  //       `background-color:rgba(0,0,0,${increaseEffect});`
  //     );
  //   });
  // }
}

buttonEl.addEventListener("click", function () {
  const numberValue = document.getElementById("quantity").value;

  if (numberValue >= 16 && numberValue <= 100) {
    console.log("Berhasil");
    divGenerator(numberValue, numberValue);
    paraEl.textContent = `Grid of ${numberValue} x ${numberValue}`;
  } else {
    console.log("salah");
    paraEl.textContent = "Please Enter Correct Value (16-100 Grid Only)";
  }
});
