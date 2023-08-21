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

  for (const square of squareEl) {
    square.addEventListener("mouseover", () => {
      square.classList.add("hover");
    });

    // if (totalRow == 16 || totalColumn == 16) {
    //   for (const square of squareEl) {
    //     square.setAttribute("style", "width:40px;height:40px;");
    //     square.addEventListener("mouseover", () => {
    //       square.classList.add("hover");
    //     });
    //   }
    // } else if (totalRow == 32 || totalColumn == 32) {
    //   for (const square of squareEl) {
    //     square.setAttribute("style", "width:25px;height:20px;");
    //     square.addEventListener("mouseover", () => {
    //       square.classList.add("hover");
    //     });
    //   }
    // } else {
    //   for (const square of squareEl) {
    //     square.setAttribute("style", "width:12px;height:10px;");
    //     square.addEventListener("mouseover", () => {
    //       square.classList.add("hover");
    //     });
    //   }
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
}
