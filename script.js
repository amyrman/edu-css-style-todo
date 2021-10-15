let completedCount = 0;

const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");
const error = document.querySelector("small");
const counter = document.querySelector("p");

// BUTTON CLICK
button.addEventListener("click", () => {

    const text = input.value;
    
    // NO TEXT ENTERED
    if (text.length == 0) {
      document.querySelector("small").innerText = "Input must not be empty";
      error.classList.add("visible");
      return;
    }
    else {
      error.classList.remove("visible");
    }

    // ADD LIST ITEM
    const item = document.createElement("li");
    list.appendChild(item);

    const itemText = document.createElement("span");
    itemText.innerText = text;
    item.appendChild(itemText);

    const trashcan = document.createElement("span");
    trashcan.innerHTML = "&#x1F5D1;";
    trashcan.setAttribute("class", "trashcan");
    item.appendChild(trashcan);

    trashcan.addEventListener("click", function () {
      item.remove();
    });

    // LIST ITEM CLICK
    itemText.addEventListener("click", function () {

      if (itemText.getAttribute("class") == "completed") {
        itemText.setAttribute("class", "");
        completedCount--;
      }
      else {
        itemText.setAttribute("class", "completed");
        completedCount++;
      }

      counter.innerText = `${completedCount} completed`;

    });

    input.value = "";
  });