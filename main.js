// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Get the modal and message elements from the DOM
const modal = document.getElementById("modal");
const modalMessage = document.getElementById("modal-message");

// Add click event listeners to all like-glyph hearts
document.querySelectorAll(".like-glyph").forEach(heart => {
  heart.addEventListener("click", function() {