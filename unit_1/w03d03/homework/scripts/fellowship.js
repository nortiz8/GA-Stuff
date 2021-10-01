console.log('LINKED');

// Dramatis Personae
const hobbits = [
  'Frodo Baggins',
  "Samwise 'Sam' Gamgee",
  "Meriadoc 'Merry' Brandybuck",
  "Peregrin 'Pippin' Took"
];

const buddies = ['Gandalf the Grey', 'Legolas', 'Gimli', 'Strider', 'Boromir'];

const baddies = ['Sauron', 'Saruman', 'The Uruk-hai', 'Orcs'];

// Our Setting
const lands = ['The-Shire', 'Rivendell', 'Mordor'];

// ====================================
//           Chapters
// ====================================

// ============
// Chapter 1
// ============
const makeMiddleEarth = () => {
  // HINT: Make a console.log for each of your functions to make sure that, when you click, the correct function is being called!
  console.log('making Middle Earth');
  // console.log("Trying to make middle earth.");
  console.log('Trying to make middle earth.');
  // 1. create a section tag with an id of middle-earth
  const $middleEarth = $('<section>').attr('id', 'middle-earth');
  // 2. append the section to the body of the DOM.
  $('body').append($middleEarth);
  // 3. use a for loop to iterate over the lands array that does the following:
  for (land of lands) {
    let $article = $('<article>').attr('id', land);
    let $h1 = $('<h1>').text(land);
    $article.append($h1);
    $middleEarth.append($article);
  }
  //   3a. creates an article tag (there should be one for each land when the loop is done)

  //   3b. gives each land article an `id` tag of the corresponding land name

  //   3c. includes an h1 with the name of the land inside each land article

  //   3d. appends each land to the middle-earth section
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============
const makeHobbits = () => {
  // Goal: display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // 1. create a 'ul'
  const $hobbits = $('<ul>');
  // 2. make each hobbit an li element and append it to the 'ul' you just created
  for (names of hobbits) {
    let $line = $('<li>').text(names);
    $line.addClass('hobbit');
    $hobbits.append($line);
  }
  // hint: use the given 'hobbits' array and use a for loop
  // 3. also, give each hobbit (`li`) a class of "hobbit"
  // 4. append the ul to the shire
  $('#The-Shire').append($hobbits);
  // hint: get 'The-Shire' by using its id
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============
const keepItSecretKeepItSafe = () => {
  // 1. create an empty div with an id of 'the-ring'
  const $ring = $('<div>').attr('id', 'the-ring');
  // 2. add the ring as a child of Frodo
  // hint: Frodo does not have an id, but there is a command to retrieve all elements with a certain class. This should give you an array for you to access . . .
  // when you think you have given Frodo the ring, check in your Elements tab to see that it works correctly
  const $hobbitses = $('.hobbit');
  $hobbitses[0].append($ring[0]);
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============
const makeBaddies = () => {
  // 1. display an unordered list of baddies in Mordor
  const $baddies = $('<ul>');
  for (names of baddies) {
    let $bad = $('<li>').text(names);
    $bad.addClass('baddy');
    $baddies.append($bad);
  }
  // 2. give each of the baddies a class of "baddy"
  // 3. remember to append the ul to Mordor
  $('#Mordor').append($baddies);
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============
const makeBuddies = () => {
  // 1. create an aside tag and append it to middle-earth below mordor
  const $buds = $('<aside>');
  $('#Mordor').after($buds);
  // 2. display an unordered list of buddies in the aside
  const $buddies = $('<ul>');
  for (names of buddies) {
    let $friend = $('<li>').text(names);
    $friend.addClass('buddy');
    $buddies.append($friend);
  }
  $buds.append($buddies);
  // 3. give each of the buddies a class of "buddy"
  // 4. don't forget to append them to the aside
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

const leaveTheShire = () => {
  // 1. grab the hobbits (the ul in which they reside) and move them to Rivendell
  const $hobbitsUL = $('#The-Shire').children()[1];
  $('#Rivendell').append($($hobbitsUL));
  // hint: the hobbits ul is a childNode of The-Shire-- there is way to get a list of childNodes
  //Stretch: add an event handler/listener so that when you click on the `h1` The Shire, this function will be called (be sure to do it in the window.onload/document.ready function)
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============
const beautifulStranger = () => {
  // 1. change the buddy 'Strider' textnode to "Aragorn"
  // hint: You can get a list of elements by tag name, such as 'aside'
  const $friends = $('.buddy');
  // console.log($friends);
  const $strider = $($friends[3]);
  // console.log($strider);
  $strider.text('Aragorn');
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============
const forgeTheFellowShip = () => {
  // 1. create a new div with an id 'the-fellowship'
  const $fellows = $('<div>').attr('id', 'the-fellowship');
  // 2. add an h1 with the text 'The Fellowship' to this new div
  const $h1 = $('<h1>').text('The Fellowship');
  $fellows.append($h1);
  // 3. append the fellowship to middle-earth
  $('#middle-earth').append($fellows);
  // 4. add the unordered lists of hobbits and buddies to 'the-fellowship'
  const $hobbits = $('#Rivendell').children()[1];
  const $pals = $('aside').children();
  $fellows.append($hobbits, $pals);
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============
const theBalrog = () => {
  // 1. change the 'Gandalf' text to 'Gandalf the White'
  const $friends = $('.buddy');
  const $gandalf = $($friends[0]);
  $gandalf.text('Gandalf the White');
  // 2. add a class "the-white" to this element
  $gandalf.addClass('the-white');
  // 3. in the style.css file, add a css rule to make elements of the class "the-white" have a white background and a grey border
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============
const hornOfGondor = () => {
  // 1. create a pop-up alert that the horn of gondor has been blown
  alert('The Horn of Gondor has been blown!');
  // 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name
  const $friends = $('.buddy');
  const $boromir = $($friends[4]);
  $boromir.css('text-decoration', 'line-through');
  // 3. Tricky: Remove the Uruk-Hai from the Baddies on the page
  const $bads = $('.baddy');
  const $uruk = $($bads[2]);
  $uruk.remove();
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============
const itsDangerousToGoAlone = () => {
  // 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside a ul in Mordor)
  const $hobs = $('.hobbit');
  const $frodo = $($hobs[0]);
  const $sam = $($hobs[1]);
  $('#Mordor').append($frodo, $sam);
  // 2. add a div with an id of 'mount-doom' to Mordor
  const $doom = $('<div>')
    .attr('id', 'mount-doom')
    .text('Mount Doom');
  $('#Mordor').append($doom);
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============
const weWantsIt = () => {
  // 1. Create a div with an id of 'gollum' and add it to Mordor
  const $gollum = $('<div>')
    .attr('id', 'gollum')
    .text('Gollum');
  // 2. Move the ring from Frodo and give it to Gollum
  const $ring = $('#the-ring');
  $gollum.append($ring);
  // 3. Move Gollum into Mount Doom
  $('#mount-doom').append($gollum);
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============
const thereAndBackAgain = () => {
  // 1. remove Gollum and the Ring from the DOM
  $('#gollum').remove();
  // 2. remove all the baddies from the DOM
  $('.baddy').remove();
  // 3. Move all the hobbits back to the shire
  const $hobits = $('.hobbit');
  $('#The-Shire').append($hobits);
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".

// =====================================
// Don't change anything below this line
// =====================================
// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

$(() => {
  $('#1').on('click', makeMiddleEarth);
  $('#2').on('click', makeHobbits);
  $('#3').on('click', keepItSecretKeepItSafe);
  $('#4').on('click', makeBaddies);
  $('#5').on('click', makeBuddies);
  $('#6').on('click', leaveTheShire);
  $('#7').on('click', beautifulStranger);
  $('#8').on('click', forgeTheFellowShip);
  $('#9').on('click', theBalrog);
  $('#10').on('click', hornOfGondor);
  $('#11').on('click', itsDangerousToGoAlone);
  $('#12').on('click', weWantsIt);
  $('#13').on('click', thereAndBackAgain);
});
