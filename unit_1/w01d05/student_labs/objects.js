// {} curly braces define the object
// something:   -- key - way to refernce data
// : "whatever"  - data being store

///////
// ME ME ME
////////
// const me = {
//   name: 'Nick Ortiz',
//   age: 27,
//   email: 'lessthennick@gmial.com'
// };
// console.log(me);
// console.log(me.name);
// me.age = 1000;
// console.log(me.age);
// me['place of residence'] = 'Norwalk';
// console.log(me['place of residence']);

///////
//SLIMER
////////
// const monster = {
//   name: 'Slimer',
//   color: 'greenish',
//   type: 'Plasm or ghost or something'
// };
// console.log(monster.name);
// monster.type = 'creature';
// monster.age = 6;
// console.log(monster);

///////
//  OGRES
///////
// const adventurer = {
//   name: 'Hero',
//   hitpoints: 10
// };
// const ogre = {
//   hitpoints: 10
// };

// const showHitpoints = () => {
//   alert(
//     `Adventurer has ${adventurer.hitpoints} HP left. Ogre has ${
//       ogre.hitpoints
//     } HP left`
//   );
//   console.log(1);
// };

// const whoHitsNext = () => {
//   showHitpoints();
//   const choice = prompt('Who hits next?', 'Adventurer / Ogre');
//   if (choice.toLowerCase() === 'adventurer') {
//     adventurerFight();
//   } else if (choice.toLowerCase() === 'ogre') {
//     ogreFight();
//   } else {
//     console.log('error');
//   }
// };

// const adventurerFight = () => {
//   console.log(2);
//   ogre.hitpoints -= 1;
//   whoHitsNext();
// };
// const ogreFight = () => {
//   console.log(3);
//   adventurer.hitpoints -= 1;
//   whoHitsNext();
// };
// whoHitsNext();

////////
// C A T S
// ////////
// const cat1 = {
//   name: 'Joe',
//   breed: 'Norwegian Forest Cat',
//   age: 19
// };
// // console.log(cat1.age);
// // console.log(cat1.breed);

// const cat2 = {
//   name: 'Jam',
//   breed: 'Siamese',
//   age: 45
// };
// const newCat = {};
// const combineCats = (mom, dad) => {
//   newCat.name = mom.name + dad.name;
//   newCat.age = 1;
//   newCat.breed = mom.breed + '-' + dad.breed;
//   console.log(newCat);
// };
// // combineCats(cat1, cat2);
// console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));
// console.log(
//   combineCats(
//     combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)),
//     combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))
//   )
// );
