// Calling DOM
const mainContainerEl = document.querySelector(".main-container");
const buttonEl = document.querySelector("button");
const resetButtonEl = document.querySelector(".clear");
const paraEl = document.createElement("p");
document.body.appendChild(paraEl);
const randomButtonEl = document.querySelector(".random");
const darkenButtonEl = document.querySelector(".darken");
const colorPickerEl = document.querySelector("#color-picker");
const eraserButtonEl = document.querySelector(".eraser");

divGenerator(16, 16);
paraEl.textContent = `Grid of ${16} x ${16}`;

// Remove all child nodes from the container parents
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

// Generate div based from the row and column number, and then adding the hover effect
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
  start();
  let down = false;

  // Pick Hover
  colorPickerEl.addEventListener("click", start);

  function start() {
    console.log("Dipencet");
    for (const square of squareEl) {
      square.addEventListener("mousedown", () => {
        down = true;
      });
      square.addEventListener("mouseover", () => {
        if (!down) return;
        square.setAttribute("style", `background-color:${colorPickerEl.value}`);
      });
      square.addEventListener("mouseup", () => {
        down = false;
      });
    }
  }

  // Colorful Hover
  randomButtonEl.addEventListener("click", function () {
    for (const square of squareEl) {
      square.addEventListener("mousedown", () => {
        down = true;
      });
      square.addEventListener("mouseover", () => {
        if (!down) return;
        let randomize = Math.floor(Math.random() * 16777215).toString(16);
        square.setAttribute("style", `background-color:#${randomize};`);
      });
      square.addEventListener("mouseup", () => {
        down = false;
      });
    }
  });

  darkenButtonEl.addEventListener("click", function () {
    for (const square of squareEl) {
      let increaseEffect = 0;
      square.addEventListener("mousedown", () => {
        down = true;
      });
      square.addEventListener("mouseover", () => {
        if (!down) return;
        increaseEffect += 0.1;
        square.setAttribute(
          "style",
          `background-color:rgba(0, 0, 0, ${increaseEffect})`
        );
      });
      square.addEventListener("mouseup", () => {
        down = false;
      });
    }
  });

  eraserButtonEl.addEventListener("click", function () {
    for (const square of squareEl) {
      square.addEventListener("mousedown", () => {
        down = true;
      });
      square.addEventListener("mouseover", () => {
        if (!down) return;
        square.setAttribute("style", `background-color:rgb(255, 255, 255)`);
      });
      square.addEventListener("mouseup", () => {
        down = false;
      });
    }
  });

  for (const square of squareEl) {
    resetButtonEl.addEventListener("click", function () {
      square.setAttribute("style", `background-color:white;`);
    });
  }
}

// Button function to create div based on input value from user
buttonEl.addEventListener("click", function () {
  const numberValue = document.getElementById("quantity").value;

  if (numberValue >= 16 && numberValue <= 100) {
    divGenerator(numberValue, numberValue);
    paraEl.textContent = `Grid of ${numberValue} x ${numberValue}`;
  } else {
    paraEl.textContent = "Please Enter Correct Value (16-100 Grid Only)";
  }
});

// Test Function
