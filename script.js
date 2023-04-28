// Use childNodes to list all the children from the <ul>
const ulElement = document.querySelector('ul');
const childNodes = ulElement.childNodes;

// Iterate over every child node with a for loop(use child.nodeType === 1)
for (let i = 0; i < childNodes.length; i++) {
  const child = childNodes[i];

  if (child.nodeType === 1) {

    // Check if the child node contains "Fast and Furious" and move it to the top-list
    if (child.textContent === "Fast and Furious" && i !== 1) {
      ulElement.insertBefore(child, ulElement.firstChild);
    }

    // Add the class "important" to this element
    if (child.textContent === "Fast and Furious") {
      child.classList.add("important");
    }

    // Add an event listener 'click' to the child node and display the name of this element
    child.addEventListener('click', function() {
        alert(this.textContent);

      // If the clicked element is Fast and Furious, display a special alert message
      if (this.textContent === "Fast and Furious") {
        alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.");
      }
    });
  }
}

