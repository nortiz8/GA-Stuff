const express = require('express')
const app = express()

const fruits = require('./models/fruits')

app.get('/fruits', (req, res) => {
    res.send(fruits)
})

app.get('/fruits/:index', (req, res) => {
    const currentFruit = fruits[req.params.index]
    res.render('show.ejs', {
        fruit: currentFruit
    })
})

app.listen(3000, (req, res) => {
    console.log(`listening on PORT 3000`)
})