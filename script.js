// Use childNodes to list all the children from the <ul>
const ulElement = document.querySelector("ul");
const childNodes = ulElement.childNodes;

// Iterate over every child node with a for loop(use child.nodeType === 1)
for (let i = 0; i < childNodes.length; i++) {
  const child = childNodes[i];

  if (child.nodeType === 1) {

    // Check if the child node contains "Fast and Furious" and move it to the top-list
    if (child.textContent === "Fast and Furious" && i !== 1) {
      ulElement.insertBefore(child, ulElement.firstChild);
      console.log(child +" in top list");
    }

    // Add the class "important" to this element
    if (child.textContent === "Fast and Furious") {
      child.classList.add("important");
      console.log(child +" is class = important")
    }

    // Add an event listener "click" to the child node and display the name of this element
    child.addEventListener("click", function() {
        // If the clicked element is Fast and Furious, display a special alert message
        if (this.textContent === "Fast and Furious") {
            alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.")
        }
      else {
        alert("the click element is " + this.textContent)
        }
    });
  }
}
//(*) Remove duplicates using removeChild
const listItems = ulElement.getElementsByTagName('li');
for (let i = 0; i < listItems.length; i++) {
  const currentItem = listItems[i];
  for (let j = i + 1; j < listItems.length; j++) {
    const nextItem = listItems[j];
    if (currentItem.textContent === nextItem.textContent) {
      ulElement.removeChild(nextItem);
      j--;
    }
  }
}

/* (*) Add an eventListener on the document body, listening for keyup.
* When pressing the r key of the keyboard the list should get sorted in a random order,
* however Fast and Furious should remain the first element ( class=important )
* Modify the previous function so that when you press the letter d of your keyboard,
* the Fast and Furious element gets cloned
*/

const liList = document.querySelectorAll('li');

// Get the index of the Fast and Furious element
const fastAndFuriousIndex = Array.from(liList).findIndex(li => li.textContent === "Fast and Furious");

document.body.addEventListener("keyup", event => {
  if (event.key === "r") {
    // Shuffle the array using Fisher-Yates algorithm
    for (let i = liList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      if (j !== fastAndFuriousIndex) { // Skip the first element
        ulElement.insertBefore(liList[j], liList[i]);
        ulElement.insertBefore(liList[i], liList[j]);
      }
    }  
  } else if (event.key === "d") {
//(*) Clone the first Fast and Furious element
    const fastAndFuriousElement = liList[fastAndFuriousIndex];
    const clone = fastAndFuriousElement.cloneNode(true);
    ulElement.insertBefore(clone, liList[1]); // Insert the clone after the first element
  }
})

// Create a new div element and insert it before the ul element
const newDivElement = document.createElement('div');
ulElement.parentNode.insertBefore(newDivElement, ulElement);

// Create a select element and add it to the new div element
const selectElement = document.createElement('select');
newDivElement.appendChild(selectElement);

// Create two option elements and add them to the select element
const optionImportant = document.createElement('option');
optionImportant.textContent = "Important franchises";
selectElement.appendChild(optionImportant);

const optionNormal = document.createElement('option');
optionNormal.textContent = "Normal franchises";
selectElement.appendChild(optionNormal);

// Add an event listener to the select element
selectElement.addEventListener('change', function() {
  const selectedOption = this.value;
  const listItems = ulElement.getElementsByTagName('li');
  
  // Iterate over every item in the list and toggle its visibility based on the selected option
  for (let i = 0; i < listItems.length; i++) {
    const item = listItems[i];
    
    if (selectedOption === "Important franchises" && item.classList.contains("important")) {
        item.style.visibility = "visible";
      } 
      else if (selectedOption === "Important franchises" && !item.classList.contains("important")) {
        item.style.visibility = "hidden";
      } 
      else if (selectedOption === "Normal franchises" && !item.classList.contains("important")) {
        item.style.visibility = "visible";
      }
      else if (selectedOption === "Normal franchises" && item.classList.contains("important")) {
        item.style.visibility = "hidden";  
      }
    }
});
