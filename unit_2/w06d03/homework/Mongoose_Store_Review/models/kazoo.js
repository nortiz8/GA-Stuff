const mongoose = require('mongoose')

// build schema
const kazooSchema = mongoose.Schema({
    name: {type: String},
    price: {type: Number, min: 0},
    qty: {type: Number, min: 0}
})

// instantiate schema
const Kazoo = mongoose.model('Kazoo', kazooSchema)

// export schema
module.exports = Kazoo