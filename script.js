// Deklarera en variabel för att använda till att visa antal uppgifter som är klara
let completedCount = 0;

// Deklarera och hänvisa variabler i JS till HTML-element genom querySelector
// för att på så vis kunna koppla JS till HTML och påverka vad som händer och visas för användaren

const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");
const error = document.querySelector("small");
const counter = document.querySelector("p");

// FUNCTIONS FOR BUTTON-CLICK
button.addEventListener("click", () => {

    error.classList.add("visible");

    // För att koppla en "value" på input till variabeln "text" inom denna funktion
    const text = input.value;

    // För att köra en check på om input är 0, och om den är det -- 
    if (text.length == 0) {
      document.querySelector("small").innerText = "Input must not be empty";
      return;
    }
    else {
      error.innerText = "";
    }

    // Man kan även använda regexp för att kontrollera om någon skriver in enbart mellanslag.
    // Eller form validation
    // Pusha input till arrayen som vi deklarerade tidigare.
    // Lägg till element: punkt (li) + text (som span-element eftersom det har display: inline?) i listan / ul i HTML
    const item = document.createElement("li");
    // item.classList.add("todo-item");
    list.appendChild(item);

    const itemLabel = document.createElement("span");
    itemLabel.innerText = list;
    item.appendChild(itemLabel);

    const trashcan = document.createElement("span");
    trashcan.innerHTML = "&#x1F5D1;";
    trashcan.setAttribute("class", "trashcan");
    item.appendChild(trashcan);

    trashcan.addEventListener("click", function () {
      item.remove();
    });

    // Lägg till funktion för klick på li-elementen
    // Toggle-funktion finns också, men nedanstående demonstrerar
    // att vi kan hämta och sätta nya attribut på HTML-element
    itemLabel.addEventListener("click", function () {

      if (item.getAttribute("class") == "completed") {
        item.setAttribute("class", "");
        completedCount--;
      }
      else {
        item.setAttribute("class", "completed");
        completedCount++;
      }

      counter.innerText = `${completedCount} completed`;

    });

    // Nollställ input-variabeln -- varför?
    input.value = "";
  });