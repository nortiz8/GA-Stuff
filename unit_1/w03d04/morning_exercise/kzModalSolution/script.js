// Declaring variables for our jQuery selectors
const $openBtn = $('#openModal');
const $modal = $('#modal');
const $closeBtn = $('#close');


// Use a function to trigger showing the modal from (display) 'none' to 'block'
const openModal = () => {
  $modal.css('display', 'block');
}

// Use a function to trigger closing the modal from (display) 'block' to 'none'
const closeModal = () => {
  $modal.css('display', 'none');
}


// Our jQuery function to automatically run our code after the DOM has finished loading
$(() => {
  // Building good habits: use a basic console.log() to check file linking
  console.log('Hi this is jQuery');
  
  // Use jQuery event listeners to run the callback functions
  $openBtn.on('click', openModal);
  $closeBtn.on('click', closeModal);
  
  // Use setTimeout to auto trigger the modal window (setTimeout only runs once!)
  setTimeout(openModal, 2000);

});


/*
 * =====================================================
 * I just wanted to demonstrate the differences in syntax 
 * between jQuery and "vanilla" JS DOM manipulation. We're
 * using jQuery in the class, so only focus on that!
 * =====================================================
 */


// const openBtn = document.querySelector('#openModal');
// const modal = document.querySelector('#modal');
// const closeBtn = document.querySelector('#closeModal');

// const openModal2 = () => {
//   modal.style.display = 'block';
// }

// const closeModal2 = () => {
//   modal.style.display = 'none';
// }

// openBtn.addEventListener('click', openModal2);
// closeBtn.addEventListener('click', closeModal2);
