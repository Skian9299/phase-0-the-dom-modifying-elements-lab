// Write your code here!
// Remove the <main> element with id 'main'
const mainElement = document.querySelector('main#main');
if (mainElement) {
  mainElement.remove();
}

// Create a new <h1> element and assign it to 'newHeader'
const newHeader = document.createElement('h1');

// Set the id of the <h1> element to 'victory'
newHeader.id = 'victory';

// Set the text of the <h1> element to 'YOUR-NAME is the champion'
newHeader.innerHTML = 'IanE is the champion'; // Replace 'YOUR-NAME' with your actual name

// Append the new <h1> element to the body (optional, if needed in your document)
document.body.appendChild(newHeader);
