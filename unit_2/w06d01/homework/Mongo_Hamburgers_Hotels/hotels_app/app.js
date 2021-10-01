//depend
const mongoose = require('mongoose');
const db = mongoose.connection;

//config
const mongoURI = 'mongodb://localhost:27017/hotel';

//models
const Hotel = require('./models/hotel.js');
const hotelSeed = require('./models/seed.js');

//connect
mongoose.connect(mongoURI, { useNewUrlParser: true }, () =>
  console.log('Mongo running at', mongoURI)
);
//checks
db.on('error', err => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

db.on('open', () => {
  console.log('Connection made!');
});

// CODE
// Hotel.create(hotelSeed, (err, data) => {
//   if (err) {
//     console.log(err.message);
//   }
//   console.log('added hotel data');
// });

// Hotel.count({}, (err, data) => {
//   if (err) {
//     console.log(err.message);
//   }
//   console.log(`There are ${data} hotels in the database`);
//   db.close();
// });

// C

// const newHotel = {
//   name: 'Hostel California',
//   location: 'California',
//   rating: 2,
//   tags: ['Such a lovely place', 'You never leave!'],
//   rooms: [
//     {
//       roomNumber: 1,
//       size: 'Suite',
//       price: 300,
//       booked: false
//     },
//     {
//       roomNumber: 2,
//       size: 'King',
//       price: 200,
//       booked: false
//     }
//   ]
// };
// Hotel.create(newHotel, (err, data) => {
//   if (err) {
//     console.log(err.message);
//   }
//   console.log('Added hotel');
//   db.close();
// });

// R
// Hotel.find({}, (err, hotels) => {
//   console.log(hotels);
//   db.close();
// });
// Hotel.find({}, { name: 1, _id: 0 }, (err, hotels) => {
//   console.log(hotels);
//   db.close();
// });
// Hotel.find({ name: 'Hostel California' }, (err, hotel) => {
//   console.log(hotel);
//   db.close();
// });
// Hotel.find({ vacancies: true }, '-rating', (err, hotels) => {
//   console.log(hotels);
//   db.close();
// });

// D
// Hotel.findOneAndRemove({ name: 'Hotelicopter' }, (err, hotel) => {
//   console.log(`Goodbye ${hotel}`);
//   db.close();
// });
// Hotel.findOneAndRemove({ name: "Hilbert's Hotel" }, (err, hotel) => {
//   console.log(`Goodbye ${hotel}`);
//   db.close();
// });
// Hotel.findOneAndRemove({ location: 'Colorado Rockies' }, (err, hotel) => {
//   console.log(`Goodbye ${hotel}`);
//   db.close();
// });

// U
// Hotel.findOneAndUpdate(
//   { name: 'The Great Northern' },
//   { rating: 5 },
//   { new: true },
//   (err, hotel) => {
//     console.log(hotel);
//     db.close();
//   }
// );
// Hotel.findOneAndUpdate(
//   { name: 'Motel Bambi' },
//   { vacancies: false },
//   { new: true },
//   (err, hotel) => {
//     console.log(hotel);
//     db.close();
//   }
// );
// Hotel.findOneAndUpdate(
//   { location: 'White Bay, Oregon' },
//   { rating: 2 },
//   { new: true },
//   (err, hotel) => {
//     console.log(hotel);
//     db.close();
//   }
// );
