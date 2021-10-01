// Require dependencies
const express = require('express');
const app = express();

// Initialize the localhost server port
const PORT = 3000;

// Route Function for a GET request to the root endpoint of your server
app.get('/', (req, res) => {
  res.send(`
    <h1> 99 Bottles of Beer on the wall </h1>
    <a href="/98">Take one down, pass it around</a>
    `)
});

// Route Function for a GET request to an endpoint with request.params
app.get('/:numberOfBottles', (req, res) => {
  if (parseInt(req.params.numberOfBottles) === 0){
    res.send(`
        <a href='/'>No more beer!! Take me to moar beer!</a>
      `)
  } else {
    res.send(`
      <h1> ${req.params.numberOfBottles} Bottles of Beer on the wall </h1>
      <a href="${req.params.numberOfBottles - 1}">Take one down, pass it around</a>
      `)
  }
});

// Listen on the designated port
app.listen(
  PORT, 
  ()=> { console.log(`Server is listening on Port: ${PORT}.`); }
);
