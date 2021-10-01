<<<<<<< HEAD
//dependensies
const express = require('express');
const app = express();
const port = 3000;

//database
const budget = require('./models/budget.js');

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

//routes
//index
app.get('/budgets', (req, res) => {
  res.render('index.ejs', { budget: budget });
});

//new
app.get('/budgets/new', (req, res) => {
  res.render('new.ejs');
});

//show
app.get('/budgets/:index', (req, res) => {
  const currentItem = budget[req.params.index];
  res.render('show.ejs', { item: currentItem });
});

//post
app.post('/budgets', (req, res) => {
  budget.push(req.body);
  res.redirect('/budgets');
});

//listen
app.listen(port, () => {
  console.log('listening...');
});
=======
/* === === === require server dependencies === === === */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

/* === === === declare server port === === === */
const PORT = 3000;

/* === === === require data models === === === */
const budgetData = require('./models/budget');

/* === === === use middleware === === === */
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

/* === === === server route functions === === ===*/

// index routes
app.get(
  '/',
  (req, res) => res.send('My Budgtr App')
);

app.get(
  '/expenses', 
  (req, res) => {
    res.render(
      'index.ejs', 
      { budgetKey: budgetData }
    );
  }
);

app.post(
  '/expenses',
  (req, res) => {
    const formData = req.body;
    budgetData.push(formData);
    res.redirect('/expenses');
  }
);

// show routes
app.get(
  '/expenses/:id',
  (req, res) => {
    const expenseID = req.params.id;
    res.render(
      'show.ejs',
      { currentExpense: budgetData[expenseID] }
    );
  }
);

// create routes
app.get(
  '/new',
  (req, res) => {
    res.render('new.ejs');
  }
);

/* === === === bind port to listen for server connections === === === */
app.listen(
  PORT,
  () => console.log(`Listening on PORT=${PORT}.`)
);
>>>>>>> 4209c0a512f99eae74b1492c3b35a7b69eeb51aa
