const express = require('express')
const app = express()
const PORT = 3003
const mongoose = require('mongoose')
const cors = require('cors')

const holidaysController = require('./controllers/holidays.js')

//add middleware BEFORE the controllers
app.use(express.json());

const whitelist = ['http://localhost:3000', 'https://fathomless-sierra-68956.herokuapp.com']
const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

app.use(cors(corsOptions))


//controller
app.use('/holidays', holidaysController)




mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))

mongoose.connect('mongodb://localhost:27017/holidays', { useNewUrlParser: true })
mongoose.connection.once('open', () => {
    console.log('connected to mongoose...')
})

app.listen(PORT, () => {
    console.log('🎉🎊', 'celebrations happening on port', PORT, '🎉🎊')
})