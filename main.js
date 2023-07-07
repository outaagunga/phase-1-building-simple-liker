// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


// Wait for the DOM content to load
document.addEventListener('DOMContentLoaded', () => {
  // Select the hidden modal element
  let modal = document.querySelector('.hidden');
  
  // Assert that the modal is not null using the Chai assertion library
  chai.assert.isNotNull(modal, 'Hidden modal not found');
});




















//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
