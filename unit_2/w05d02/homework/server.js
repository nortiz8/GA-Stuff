const express = require('express');
const app = express();
const port = 3000;

// GREETING
app.get('/greeting', (req, res) => {
  res.send('Howdy, stranger. Awfully strange seeing you here');
});
app.get('/greeting/:name', (req, res) => {
  res.send(`${req.params.name}, What is UP MY DUUUDE`);
});

// TIP
app.get('/tip/:total/:tip', (req, res) => {
  const billTotal = parseInt(req.params.total);
  const tipPercent = parseInt(req.params.tip);
  const tip = billTotal * (tipPercent / 100);
  res.send(`${tipPercent}% tip on a $${billTotal} bill is: $${tip}`);
});

//MAGIC 8 BALL
app.get('/magic/:question', (req, res) => {
  const responses = [
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'Yes definitely',
    'You may rely on it',
    'As I see it yes',
    'Most likely',
    'Outlook good',
    'Yes',
    'Signs point to yes',
    'Reply hazy try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    "Don't count on it",
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful'
  ];
  const randomMagic = responses[Math.floor(Math.random() * responses.length)];
  res.send(
    `<html><body><h3>${
      req.params.question
    }</h3><h1>${randomMagic}</h1></body></html>`
  );
});

//listen
app.listen(port, () => {
  console.log('listening...');
});
