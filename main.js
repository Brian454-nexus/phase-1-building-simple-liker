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