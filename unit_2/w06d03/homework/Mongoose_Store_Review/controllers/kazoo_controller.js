// DEPENDENCIES
const express = require('express')
const kazoo = express.Router()

// SCHEMA
const Kazoo = require('../models/kazoo.js')


// KAZOO INDEX
kazoo.get('/', (req, res) => {
    // Get data from database
    // Send to index
    Kazoo.find({}, (err, allKazoo) => {
        if (err) {
            console.log(err)
        }
        res.render('index.ejs', {
            allKazoo: allKazoo
        })
    })
})

// NEW
kazoo.get('/new', (req, res) => {
    res.render('new.ejs')
})

// SHOW
kazoo.get('/:id', (req, res) => {
    // get document from db
    // if no error send to show page as data
    Kazoo.findById(req.params.id, (err, foundKazoo) => {
        if (err) {
            console.log(err)
        }
        res.render('show.ejs', {
            foundKazoo: foundKazoo
        })
    })
})

// EDIT
kazoo.get('/:id/edit', (req, res) => {
    // get data from db
    // if no error, send to ejs
    Kazoo.findById(req.params.id, (err, foundKazoo) => {
        if (err) {
            console.log(err)
        }
        res.render('edit.ejs', {
            foundKazoo: foundKazoo
        })
    })
})

// CREATE
kazoo.post('/', (req, res) => {
    // Add item to database
    // On success, redirect to index
    Kazoo.create(req.body, (err, createdKazoo) => {
        if (err) {
            console.log(err)
        }
        console.log('added kazoo to database')
        res.redirect('/kazoo')
    })
})

// UPDATE
kazoo.put('/:id', (req, res) => {
    // find item in database
    // update base on what's coming in from params
    Kazoo.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedKazoo) => {
        if (err) {
            console.log(err)
        }
        res.redirect(`/kazoo/${req.params.id}`)
    })
})


// Buy
kazoo.put('/:id/buy', (req, res) => {
    // find kazoo in database
    // decrement qty by one
    Kazoo.findByIdAndUpdate(req.params.id, {$inc: {qty: -1}}, (err, updatedKazoo) => {
        if (err) {
            console.log(err)
        }
        res.redirect(`/kazoo/${req.params.id}`)
    })
})

// DELETE
// TODO: Make delete route
// need id so /kazoo/:id
// find doc in db by id
// if no error, then delete
// not a GET, so redirect to somewhere -> Index page

module.exports = kazoo