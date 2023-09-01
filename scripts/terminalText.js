// Wait until the HTML document is fully loaded before running the JavaScript
document.addEventListener("DOMContentLoaded", function() {

  // Select all elements that have a 'text-to-type' class nested within an element with a 'delayedText' class
  // and store them in the 'textElements' variable.
  const textElements = document.querySelectorAll(".delayedText .text-to-type");

  // Loop through each of the selected elements to apply the typewriter effect.
  // 'textElement' will be each individual element that the loop is currently iterating over.
  textElements.forEach(function(textElement) {

    // Grab the original text inside the current element and store it in 'textToDisplay'.
    let textToDisplay = textElement.innerText;

    // Clear the text inside the current element so we can type it out letter by letter.
    textElement.innerText = "";

    // Initialize a variable 'index' to 0. This will be used to keep track of which character we're on.
    let index = 0;

    // Define a function 'typeCharacter' that will type out each character one at a time.
    function typeCharacter() {

      // If 'index' is less than the total number of characters in 'textToDisplay',
      // continue typing.
      if (index < textToDisplay.length) {

        // Add the next character from 'textToDisplay' to the current element.
        textElement.innerHTML += textToDisplay[index];

        // Increment 'index' to move on to the next character.
        index++;

        // Call 'typeCharacter' again after a 25ms delay to continue typing.
        // This creates the typewriter effect.
        setTimeout(typeCharacter, 25);
      }
    }

    // Call 'typeCharacter' to start the typewriter effect for the current element.
    typeCharacter();
  });
});
