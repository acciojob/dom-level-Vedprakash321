//your JS code here. If required.
// Function to determine the DOM level of an element
function getDomLevel(elementId) {
    const targetElement = document.getElementById(elementId);

    if (!targetElement) {
        alert("Element not found.");
        return;
    }

    let domLevel = 0;
    let currentNode = targetElement;

    while (currentNode !== document.documentElement) {
        currentNode = currentNode.parentNode;
        domLevel++;
    }

    // Add 1 to include the root html element
    domLevel++;

    alert(`The level of the element is: ${domLevel}`);
}

// Call the function with the element id "level"
getDomLevel("level");
