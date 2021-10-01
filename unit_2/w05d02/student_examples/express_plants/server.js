require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const plants = [
  'Monstera Deliciosa',
  'Corpse Flower',
  'Elephant-Foot Yam',
  "Witches' Butter"
];

//HELLO THINGS
app.get('/hello/:firstname/:lastname', (req, res) => {
  console.log('=========================================');
  console.log(
    'This is the entire Request Object sent from the browser to the server: '
  );
  console.log(req);
  console.log('========================================');
  res.send(`Hello ${req.params.firstname} ${req.params.lastname}`);
});

app.get('/howdy/:firstName', function(req, res) {
  console.log(req.params);
  console.log(req.query);
  res.send('hello ' + req.query.title + ' ' + req.params.firstName);
});

//PLANT THINGS
app.get('/plants', (req, res) => {
  res.send('I Love Plants');
});
app.get('/awesome', (req, res) => {
  res.send(`
      <h1>Plants are awesome!</h1>
      <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
    `);
});

app.get('/:indexOfPlantsArray', (req, res) => {
  if (plants[req.params.indexOfPlantsArray]) {
    res.send(plants[req.params.indexOfPlantsArray]);
  } else {
    res.send(
      'cannot find anything at this index: ' + req.params.indexOfPlantsArray
    );
  }
});

app.listen(port, () => {
  console.log('Listening on port', port);
});
