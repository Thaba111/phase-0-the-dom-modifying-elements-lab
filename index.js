// Assuming there's an existing 'main' element with id 'main'
const mainElement = document.getElementById("main");

// Check if the 'main' element exists before removing it
if (mainElement) {
  // Remove the 'main' element
  mainElement.remove();
}

// Create the 'h1#victory' element
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = "YOUR-NAME is the champion";

// Append the 'h1#victory' element to the body or another container
document.body.appendChild(newHeader);

// Document.querySelector to get 'h1#victory' element
const selectedHeader = document.querySelector('h1#victory');

// if the 'newHeader' variable points to the correct node
if (selectedHeader) {
  console.log("newHeader variable points to the correct node:", selectedHeader);
} else {
  console.error("newHeader variable is not defined or does not point to the correct node.");
}
