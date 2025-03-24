// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Get the modal and message elements from the DOM
const modal = document.getElementById("modal");
const modalMessage = document.getElementById("modal-message");

// Add click event listeners to all like-glyph hearts
document.querySelectorAll(".like-glyph").forEach(heart => {
  heart.addEventListener("click", function() {
    // If the heart is empty, try to "like" it
    if (heart.innerHTML === EMPTY_HEART) {
       // Call the mock server to simulate a request
       mimicServerCall()
       .then(() => {
         // Success: Fill the heart and turn it red
         heart.innerHTML = FULL_HEART;
         heart.classList.add("activated-heart");
     })
     .catch(error => {
       // Failure: Show the error modal
       modalMessage.innerHTML = error; // Set the error message
       modal.classList.remove("hidden"); // Make modal visible
       // Hide the modal after 3 seconds
       setTimeout(() => {
        modal.classList.add("hidden");
    }, 3000);
});
}
// If the heart is full, "unlike" it
else if (heart.innerHTML === FULL_HEART) {
  // Change back to empty heart and remove red color
  heart.innerHTML = EMPTY_HEART;
  heart.classList.remove("activated-heart");
}
});
});