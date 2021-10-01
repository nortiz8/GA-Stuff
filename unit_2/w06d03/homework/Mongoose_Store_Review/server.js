// DEPENDENCIES
const express = require('express')
const app = express()
const PORT = 3000
const mongoose = require('mongoose')
const methodOverride = require('method-override')

// DATABASE CONNECTION
mongoose.connect('mongodb://localhost:27017/store', { useNewUrlParser: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});


// CONTROLLER
const kazooController = require('./controllers/kazoo_controller.js')

// MIDDLEWARE
// Take data from URL and allow us to see/use it (for create route)
app.use(express.urlencoded({extended: false}))
// Override forms to allow PUT and DELETE requests
app.use(methodOverride('_method'))
// All the kazoo routes
app.use('/kazoo', kazooController)

// INDEX
app.get('/', (req, res) => {
    res.send('This is the index page!')
})

// APP LISTEN
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})