const car = {
  color: 'blue',
  hp: 4000,
  year: 1989
};
// console.log(car.color);

const house = {
  doors: 9
};

house.windows = 20;
house.hasGarden = true;
// console.log(house);
house.windows = 30;
// console.log(house);

const bar = {};
for (let i = 0; i < 10; i++) {
  bar['key' + i] = 'open';
}
// console.log(bar);

const whatevs = {
  greet: 'hi',
  count: 4
};
if (whatevs.greet === 'hi') {
  console.log('Great');
}
if (whatevs.greet !== 'bye') {
  whatevs.greet = 'bye';
  console.log(whatevs.greet);
}

for (let i = 0; i < whatevs.count; i++) {
  console.log(i);
}
