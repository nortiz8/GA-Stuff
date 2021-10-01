// dependencies
const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const Product = require('./models/products.js');
const methodOverride = require('method-override');

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));

// routes
// index
app.get('/store', (req, res) => {
  Product.find({}, (err, allProducts) => {
    res.render('index.ejs', { products: allProducts });
  });
});
// new
app.get('/store/new', (req, res) => {
  res.render('new.ejs');
});
// buy
app.put('/store/buy/:id', (req, res) => {
  Product.findByIdAndUpdate(
    req.params.id,
    { $inc: { qty: -req.body.buy } },
    { new: true },
    (err, updatedProduct) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect(`/store/${updatedProduct.id}`);
      }
    }
  );
});

// show
app.get('/store/:id', (req, res) => {
  Product.findById(req.params.id, (err, foundProduct) => {
    res.render('show.ejs', { product: foundProduct });
  });
});
// edit
app.get('/store/:id/edit', (req, res) => {
  Product.findById(req.params.id, (err, foundProduct) => {
    res.render('edit.ejs', { product: foundProduct });
  });
});

// create
app.post('/store', (req, res) => {
  Product.create(req.body, (err, newProduct) => {
    res.redirect('/store');
  });
});

// update
app.put('/store/:id', (req, res) => {
  Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedProduct) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect(`/store/${updatedProduct.id}`);
      }
    }
  );
});

// delete
app.delete('/store/:id', (req, res) => {
  Product.findByIdAndRemove(req.params.id, (err, deletedProduct) => {
    if (err) {
      console.log(err);
    } else res.redirect('/store');
  });
});

// seed
app.get('/seed', async (req, res) => {
  const newProducts = [
    {
      name: 'Guyliner',
      description:
        'Emphasize the sadness in your eyes with fresh eyeliner - made for guys!',
      img: 'https://i.imgur.com/Nid7vGF.png?1',
      price: 25,
      qty: 2
    },
    {
      name: 'Defend Pop Punk',
      description: 'The greatest shirt to defend the greatest genre.',
      img: 'https://i.imgur.com/sjPRTUD.jpg',
      price: 30,
      qty: 16
    },
    {
      name: 'Chucks',
      description: 'Everyone needs a fresh pair of Chucks!',
      img: 'https://i.imgur.com/00DUSk4.jpg',
      price: 70,
      qty: 15
    },
    {
      name: 'Riot! Vinyl',
      description:
        'One of the best pop-punk albums of all time! Available now!',
      img: 'https://i.imgur.com/BGabsBl.jpg',
      price: 45,
      qty: 0
    }
  ];

  try {
    const seedItems = await Product.create(newProducts);
    res.send(seedItems);
  } catch (err) {
    res.send(err.message);
  }
});

// connect to mongoose
mongoose.connect('mongodb://localhost:27017/store', {
  useNewUrlParser: true
});
mongoose.connection.once('open', () => {
  console.log('connected to mongo');
});

// listen
app.listen(port, () => {
  console.log('listening in on ', port);
});
