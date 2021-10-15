let completedCount = 0;

const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");
const error = document.querySelector("small");
const counter = document.querySelector("p");

// WHEN BUTTON CLICK
button.addEventListener("click", () => {

    const input_Text = input.value;
    
    // WHEN NO TEXT ENTERED OUTPUT MESSAGE AND ADD CLASS
    // ELSE REMOVE CLASS
    if (input_Text.length == 0) {
      document.querySelector("small").innerText = "Input must not be empty";
      error.classList.add("visible");
      return;
    }
    else {
      error.classList.remove("visible");
    }

    // ADD / APPEND LIST ITEM (li) TO PARENT (ul)
    const item = document.createElement("li");
    list.appendChild(item);

    // APPEND INPUT-TEXT AS SPAN ELEMENT TO ALREADY ADDED LIST ITEM
    const itemText = document.createElement("span");
    itemText.innerText = input_Text;
    item.appendChild(itemText);

    // ADD TRASHCAN AS SPAN ELEMENT + SET CLASS W/ setAttribute TO "trashcan"
    const trashcan = document.createElement("span");
    trashcan.innerHTML = "&#x1F5D1;";
    trashcan.setAttribute("class", "trashcan");
    item.appendChild(trashcan);

    //WHEN TRASHCAN CLICK REMOVE "item" i.e. "li"
    trashcan.addEventListener("click", function () {
      item.remove();
    });

    // WHEN INPUT-TEXT SPAN CLICK
    itemText.addEventListener("click", function () {

      // IF CLASS COMPLETED, REMOVE CLASS COMPLETED
      // ELSE ADD COMPLETED -- why not classList.add/remove("completed")?
      // Increase counter
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
    // RESET INPUT VALUE / TEXT
    input.value = "";
  });