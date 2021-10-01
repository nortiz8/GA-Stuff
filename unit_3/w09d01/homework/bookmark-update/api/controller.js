const express = require('express');
const appRouter = express.Router();
const BookmarkModel = require('./model');

appRouter.get('/', (req, res) => {
  BookmarkModel.find({}, (err, collection) => {
    if (err) console.log('GET Error:', err);
    res.status(200).json(collection);
  });
});

appRouter.put('/:id', (req, res) => {
  const documentID = req.params.id;
  const documentFormData = req.body;
  console.log('Received:', documentID, documentFormData);

  BookmarkModel.findById(documentID, (err, foundDoc) => {
    if (err) console.log('findById Error:', err.message);
    foundDoc.updateOne(documentFormData, (err, updatedDoc) => {
      if (err) console.log('Update Error:', err.message);
      console.log('Updated Successfully:', updatedDoc);
      res.status(200).json(updatedDoc);
    });
  });
});

// appRouter.delete('/:id', (req, res) => {
//   const documentID = req.params.id;
//   console.log('Received:', documentID);
//   BookmarkModel.findById(documentID, (err, foundDoc) => {
//     if (err) console.log('findById Error:', err.message);
//     foundDoc.delete({}, (err, deletedDoc) => {
//       if (err) console.log('Delete Error:', err.message);
//       console.log('Deleted Successfully:', deletedDoc);
//       res.status(200).redirect('/');
//     })
//   });
// })

module.exports = appRouter;
