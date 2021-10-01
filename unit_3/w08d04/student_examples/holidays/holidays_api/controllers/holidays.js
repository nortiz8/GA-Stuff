const express = require('express');
const holidays = express.Router();
const Holiday = require('../models/holidays');

// index
holidays.get('/', (req, res) => {
  Holiday.find({}, (err, allHolidays) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).send(allHolidays);
  });
});

// create
holidays.post('/', (req, res) => {
  Holiday.create(req.body, (error, createdHoliday) => {
    if (error) {
      res.status(400).json({ error: error.message });
    }
    res.status(200).send(createdHoliday);
  });
});

// delete
holidays.delete('/:id', (req, res) => {
  Holiday.findByIdAndRemove(req.params.id, (error, deletedHoliday) => {
    if (error) {
      res.status(400).json({ error: error.message });
    }
    res.status(200).json(deletedHoliday);
  });
});

// update
holidays.put('/:id', (req, res) => {
  Holiday.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedHoliday) => {
      if (err) {
        res.status(400).json({ error: err.message });
      }
      res.status(200).json(updatedHoliday);
    }
  );
});

module.exports = holidays;
