const express = require('express')
const router = express.Router()

// MODEL
const Fruit = require('./../models/fruits')

// INDEX
router.get('/', (req, res) => {
    Fruit.find({}, (error, allFruits) => {
        res.render('index.ejs', {
            fruits: allFruits
        });
    });
})

// NEW (CLIENT)
router.get('/new', (req, res) => {
    res.render('new.ejs')
})

// EDIT (CLIENT)
router.get('/:id/edit', (req, res) => {
    Fruit.findById(req.params.id, (err, foundFruit) => { //find the fruit
        if (err) {
            console.log(err)
        } else {
            res.render('edit.ejs', {
                fruit: foundFruit //pass in found fruit
            });
        }
    });
});

// SHOW
router.get('/:id', (req, res) => {
    Fruit.findById(req.params.id, (err, foundFruit) => {
        res.render('show.ejs', {
            fruit: foundFruit
        });
    });
})

// CREATE (SERVER)
router.post('/', (req, res) => {
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    Fruit.create(req.body, (error, createdFruit) => {
        if (error) {
            res.send(error)
        } else {
            res.redirect('/fruits');
        }
    });
})

// UPDATE (SERVER)
router.put('/:id', (req, res) => {
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    // logic to edit fruit using mongoose
    Fruit.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedFruit) => {
        if (err) {
            console.log(err)
        } else {
            res.redirect('/fruits');
        }
        // res.send(updatedFruit);
    });
});

// DELETE
router.delete('/:id', (req, res) => {
    // deletion logic goes here (remember, before we spliced from our fruits array)
    Fruit.findByIdAndRemove(req.params.id, (err, deletedFruit) => {
        if (err) {
            console.log(err)
        } else {
            //redirect back to fruits index
            res.redirect('/fruits');
        }
    });
});

module.exports = router