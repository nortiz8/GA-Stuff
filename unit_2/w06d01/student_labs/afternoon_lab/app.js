/**********************************************************************
Set up and Configuration
**********************************************************************/
// Dependencies
const mongoose = require('mongoose');
const seedData = require('./models/seed_vampires.js');
const Vampire = require('./models/vampire.js');

// Configuration
const mongoURI = 'mongodb://localhost:27017/' + 'vampires';
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect(mongoURI);

// Connection Error/Success
db.on('error', err => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

db.on('open', () => {
  console.log('Connection made!');
});

/**********************************************************************
Write Your Code Below
**********************************************************************/

// Vampire.insertMany(seedData, (err, vampires) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log('added provided vampire data', vampires);
//   db.close();
// });

// const vamp1 = {
//   name: 'Caleb Widoghast',
//   title: 'Wizard',
//   hair_color: 'Red-Brown',
//   eye_color: 'Blue',
//   loves: ['Cats', 'Magic', 'Fire'],
//   location: 'Zadash',
//   gender: 'm',
//   victims: 51
// };
// const vamp2 = {
//   name: 'Acula',
//   title: 'Doctor',
//   hair_color: 'Black',
//   eye_color: 'Brown',
//   loves: ['Science', 'Creating'],
//   location: 'Laboratory',
//   gender: 'f',
//   vicitms: 2
// };
// const vamp3 = {
//   name: 'Arthur',
//   title: 'Aardvark',
//   hair_color: 'Brown',
//   eye_color: 'Brown',
//   loves: ['The Library', 'Learning'],
//   gender: 'm',
//   victims: 42
// };
// const vamp4 = {
//   name: 'Gabby',
//   title: 'HER',
//   hair_color: 'Black',
//   eye_color: 'Brown',
//   loves: ['Helping', 'The Dark'],
//   location: 'Bridgeport, CT',
//   gender: 'f',
//   victims: 3
// };
// Vampire.create(vamp1, (err, vamp) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log('Added a new vampire', vamp);
//   db.close();
// });
// Vampire.create(vamp2, (err, vamp) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log('Added a new vampire', vamp);
//   db.close();
// });
// Vampire.create(vamp3, (err, vamp) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log('Added a new vampire', vamp);
//   db.close();
// });
// Vampire.create(vamp4, (err, vamp) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log('Added a new vampire', vamp);
//   db.close();
// });

// Vampire.find({ gender: 'f' }, (err, vamps) => {
//   // console.log(vamps);
//   db.close();
// });
// Vampire.find({ victims: { $gt: 500 } }, (err, vamps) => {
//   // console.log(vamps);
//   db.close();
// });
// Vampire.find({ victims: { $lte: 150 } }, (err, vamps) => {
//   // console.log(vamps);
//   db.close();
// });
// Vampire.find({ victims: { $ne: 210234 } }, (err, vamps) => {
//   // console.log(vamps);
//   db.close();
// });
// Vampire.find({ victims: { $gt: 150, $lt: 500 } }, (err, vamps) => {
//   // console.log(vamps);
//   db.close();
// });

// Vampire.find({ title: { $exists: true } }, (err, vamps) => {
//   // console.log(vamps);
//   db.close();
// });
// Vampire.find({ victims: { $exists: false } }, (err, vamps) => {
//   // console.log(vamps);
//   db.close();
// });
// Vampire.find(
//   { title: { $exists: true, victims: { $exists: false } } },
//   (err, vamps) => {
//     // console.log(vamps);
//     db.close();
//   }
// );
// Vampire.find({ victims: { $gt: 1000 } }, (err, vamps) => {
//   // console.log(vamps);
//   db.close();
// });

// OR

// Vampire.find(
//   {
//     $or: [
//       { location: 'New York, New York, US' },
//       { location: 'New Orleans, Louisiana, US' }
//     ]
//   },
//   (err, vamps) => {
//     console.log(vamps);
//     db.close();
//   }
// );
// Vampire.find(
//   { $or: [{ loves: 'brooding' }, { loves: 'being tragic' }] },
//   (err, vamps) => {
//     console.log(vamps);
//     db.close();
//   }
// );
// Vampire.find(
//   { $or: [{ loves: 'marshmallows' }, { vicitms: { $gt: 1000 } }] },
//   (err, vamps) => {
//     console.log(vamps);
//     db.close();
//   }
// );
// Vampire.find(
//   { $or: [{ eye_color: 'green' }, { hair_color: 'red' }] },
//   (err, vamps) => {
//     console.log(vamps);
//     db.close();
//   }
// );

// in

// Vampire.find(
//   { loves: { $in: ['frilly shirts', 'frilly collars'] } },
//   (err, vamps) => {
//     console.log(vamps);
//     db.close();
//   }
// );
// Vampire.find({ loves: { $in: ['brooding'] } }, (err, vamps) => {
//   console.log(vamps);
//   db.close();
// });
// Vampire.find(
//   {
//     loves: {
//       $in: [
//         'fancy cloaks',
//         'frilly shirtsleeves',
//         'appearing innocent',
//         'being tragic',
//         'brooding'
//       ]
//     }
//   },
//   (err, vamps) => {
//     console.log(vamps);
//     db.close();
//   }
// );
Vampire.find(
  { loves: { $in: ['fancy cloaks', { nin: ['top hats', 'virgin blood'] }] } },
  (err, vamps) => {
    console.log(vamps);
    db.close();
  }
);
