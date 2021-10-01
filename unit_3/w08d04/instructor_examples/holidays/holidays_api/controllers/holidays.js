const express = require('express')
const holidays = express.Router()
const Holiday = require('../models/holidays.js')

holidays.get('/', (req, res) => {
    Holiday.find({}, (err, foundHolidays) => {
        if (err) {
            res.status(400).json({ error: err.message })
        }
        res.status(200).json(foundHolidays)
    })
})

holidays.post('/', (req, res) => {
    Holiday.create(req.body, (error, createdHoliday) => {
        if(error) {
            res.status(400).json({ error: message })
        }
        res.status(200).send(createdHoliday)
    })
})

holidays.delete('/:id', (req, res) => {
    Holiday.findByIdAndRemove(req.params.id, (err, deletedHoliday) => {
        if (err) {
            res.status(400).json({ error: err.message })
        }
        res.status(200).json(deletedHoliday)
    })
})

holidays.put('/:id', (req, res) => {
    Holiday.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedHoliday) => {
        if(err) {
            res.status(400).json({ error: err.message })
        }
        res.status(200).json(updatedHoliday)
    })
})

module.exports = holidays