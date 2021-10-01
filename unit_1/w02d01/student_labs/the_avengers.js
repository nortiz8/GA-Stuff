// const ironMan = {
//   regularName: 'Anthony Edward "Tony" Stark',
//   abilities: [
//     'genius-level intellect',
//     'proficient scientist and engineer',
//     'powered armor suit'
//   ],
//   marvelMovieAppearances: {
//     ironMan: true,
//     theHulk: true,
//     ironManTwo: true,
//     thor: false,
//     captainAmerica: false,
//     theAvengers: true,
//     ironManThree: true,
//     thorTwo: false,
//     captainAmericaTwo: false,
//     guardiansOfTheGalaxy: false,
//     avengersTwo: true,
//     antMan: false,
//     captainAmericaThree: true,
//     doctorStrange: false,
//     guardiansOfTheGalaxyTwo: false,
//     spiderManHomecoming: false,
//     thorThree: false,
//     blackPanther: false,
//     avengersThree: true
//   },
//   jarvisAreYouThere: () => {
//     console.log('At your service, sir');
//   }
// };

// // Log Iron Man's third ability
// console.log(ironMan.abilities[2]);
// // Log all of Iron Man's abilities by looping through the array
// for (let abilities of ironMan.abilities) {
//   console.log(abilities);
// }
// // Log whether or not Iron Man appeared in spiderManHomecoming
// console.log(ironMan.marvelMovieAppearances.spiderManHomecoming);
// // Wait, that's not right -- he did appear in that movie! Change the value to true without editing the object itself and log it again to verify it changed
// ironMan.marvelMovieAppearances.spiderManHomecoming = true;
// console.log(ironMan.marvelMovieAppearances.spiderManHomecoming);
// // Check if jarvis is there by calling on the jarvisAreYouThere function
// ironMan.jarvisAreYouThere();

// const createCaptain = () => {
//   return {
//     aliases: {
//       superheroName: 'Captain America'
//     },
//     abilities: ['Super American', 'Super Dude', 'peak human strength'],
//     sayPhrase: () => {
//       return 'I can do this all day';
//     }
//   };
// };
// console.log(createCaptain().aliases.superheroName);
// console.log(createCaptain().abilities[2]);
// console.log(createCaptain().sayPhrase());

// const blackWidow = {
//   aliases: {
//     realName: 'Natalia Alianovna Romanova',
//     otherNotableAliases: ['HER', 'Natalie Rushman']
//   }
// };
// console.log(blackWidow.aliases.realName);
// console.log(blackWidow.aliases.otherNotableAliases[1]);

// const theAvengers = [
//   { name: 'Tony Stark', superheroName: 'Iron Man' },
//   { name: 'Steve Rogers', superheroName: 'Captain America' },
//   { name: 'Bruce Banner', superheroName: 'The Hulk' },
//   { name: 'Thor' },
//   { name: 'Natasha Romanoff', superheroName: 'Black Widow' },
//   { name: 'Clint Barton', superheroName: 'Hawkeye' }
// ];
// for (let names of theAvengers) {
//   console.log(names.name);
// }
// const mcuMovies = [
//   ['ant-man', 'ant-man and the wasp'],
//   [
//     'the avengers',
//     'avengers: age of ultron',
//     'avengers: infinity war',
//     'avengers: end game'
//   ],
//   ['black panther'],
//   [
//     'captain america: the first avenger',
//     'captain america: the winter soldier',
//     'captain america: civil war'
//   ],
//   ['doctor strange'],
//   ['guardians of the galaxy', 'guardians of the galaxy vol.2'],
//   ['the hulk'],
//   ['iron man', 'iron man 2', 'iron man 3'],
//   ['spiderman: homecoming'],
//   ['thor', 'thor: the dark world', 'thor: ragnarok']
// ];
// for (let movies of mcuMovies) {
//   for (let list of movies) {
//     console.log(list);
//   }
// }

// const instruments = {
//   banjo: ['1920 gibson', 'deering', 'washburn'],
//   guitar: {
//     acoustic: ['martin', 'taylor', 'santa cruz', 'gibson'],
//     electric: ['fender Strat', 'telecaster', 'PRS', 'languedoc'],
//     nylon: ['baldwin', 'cordoba']
//   },
//   mandolin: ['eastman', 'weber', 'collings']
// };

// // Log all of the following:
// // telecaster, santa cruz, washburn ,weber
// console.log(instruments.guitar.electric[1]);
// console.log(instruments.guitar.acoustic[2]);
// console.log(instruments.banjo[2]);
// console.log(instruments.mandolin[1]);
// // Loop through all the electric guitars and log them
// for (electricg of instruments.guitar.electric) {
//   console.log(electricg);
// }
// // Add a vocals property to the object that includes a list of your favorite singers
// instruments.vocals = ['Brendon Urie', 'Jake', 'a'];
// console.log(instruments.vocals);

// const garmonbozia = {
//   meltedFace: true,
//   wobblyArms: true,
//   mysteryMeats: [
//     'Schlimmbinooks',
//     'blangs',
//     { place: 'Akrotiri', treasures: ['Minoan temples', 'volcanoes'] },
//     {
//       type: 'Yuck-tops',
//       deliverables: [
//         'Nevermind',
//         { zone: 'safety-zone' },
//         { zone: false, true: true },
//         () => {
//           return () => {
//             return () => {
//               return () => {
//                 return () => {
//                   return {
//                     website: 'Gossipcop.com',
//                     what: {
//                       offering: 'creamed corn',
//                       location: 'dark'
//                     }
//                   };
//                 };
//               };
//             };
//           };
//         }
//       ]
//     }
//   ]
// };
// console.log(
//   garmonbozia.mysteryMeats[3].deliverables[3]()()()()().what.offering
// );

const person = {
  jump: () => {
    console.log('fly!');
  }
};
person.jump();

const generateCar = () => {
  return {
    drive() {
      console.log('Vroom');
    }
  };
};
generateCar().drive();

const account = {
  tweet: () => {
    return {
      message: 'fun'
    };
  }
};
console.log(account.tweet().message);

const me = {
  foo: () => {
    return {
      array: [2.5, 7, true]
    };
  }
};
console.log(me.foo().array[1]);

const baz = {
  foo: () => {
    return {
      matt: {
        travel: 'boat'
      }
    };
  }
};
console.log(baz.foo().matt.travel);

const factory = {
  createCar: () => {
    return {
      startEngine: () => {
        console.log('hi');
      }
    };
  }
};
factory.createCar().startEngine();

const matt = {
  blink: () => {
    return () => {
      console.log('hi');
    };
  }
};
matt.blink()();

const list = [
  'dogs',
  false,
  3.5,
  () => {
    return {
      funStuff: () => {
        console.log('yaaassss');
      }
    };
  }
];
list[3]().funStuff();

const foo = [
  'asdfasdf',
  'matt',
  false,
  6,
  () => {
    return () => {
      console.log('yes!');
    };
  },
  {
    dog: 'blue'
  }
];
foo[4]()();
