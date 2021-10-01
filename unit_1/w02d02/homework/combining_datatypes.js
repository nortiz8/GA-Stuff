// Section 1

// 1
const myBackpack = {
  mainCompartment: ['laptop', 'hoodie', 'chargers', 'snacks', 'notebook']
}

console.log(myBackpack.mainCompartment[0]);

// 2
const laptop = {
  company: {
    name: 'Apple',
    hq: 'Cupertino, CA'
  },
  model: {
    name: 'macbook pro 13',
    year: 2017    
  }
}

console.log(laptop.model.name);

// 3
const skynetInstructors = [
  { name: 'Donovan', dislikes: 'M&Ms' },
  { name: 'Leo', likes: 'Green looking smoothies' },
  { name: 'Kenny', dislikes: 'no Trader Joes in sight' },
  { name: 'Deva', likes: 'opening up cans of whoopasses in MMA' }
];

console.log(skynetInstructors[0].dislikes);

// 4
const classroom = [
  ['kenny', 'deva', 'leo', 'don'],
  [
    'Aaliyah',
    'Ben',
    'Bohdan',
    'Corey',
    'David C.',
    'David L.',
    'Elizabeth',
    'Gary',
    'Hannah',
    'Harold',
    'Joem',
    'Katelyn',
    'Laura',
    'Nick',
    'Peter D.',
    'Peter F.',
    'Ruby',
    'Samantha',
    'Winston',
    'Zach'
  ]
]

const randomIndex = Math.floor(Math.random() * classroom[1].length);
console.log(classroom[1][randomIndex]);


// Section 2

// 1
const funcThisObj = (key) => {
  const obj = { key: 'Hello, this is key' }
  return obj.key
}

console.log(funcThisObj('hi'));

// 2
const whatsJuice = (index) => {
  const grapeDrank = { ingredients: ['sugar','water','purple'] }
  return grapeDrank.ingredients[0];
}

console.log(whatsJuice())

// 3

const counter = (num) => {
  let count = 0;
  const incrementer = () => {
    count += num;
    console.log(count);
  };
  return incrementer;
}

const count = counter(9);
count();


// Vending Machine

const vendingMachine = {
  snacks: [
    { name: 'Fritos', price: 2 }, 
    { name: 'M&Ms', price: 1 }, 
    { name: 'Famous Amos', price: 3 }
  ],
  vend: function(payment) {
    const snacks = this.snacks;
    snacks.filter((snack) => {
      if (payment === snack.price) {
        console.log('Dispensing:',snack.name);
      }
    });
  }
}

vendingMachine.vend(1);


// Callbacks

const operateNums = (num, operation) => {
  return operation(num);
};

const multiplyByTwo = num => num * 2;

const squareNum = num => num * num;

console.log(operateNums(2, multiplyByTwo));
console.log(operateNums(3, squareNum));


//  Function Definition Placement

// const bar = () => {
//   console.log('bar here');
// };

// const foo = () => {
//   console.log('foo here');
// };

// bar();
// foo();

// SyntaxError: Missing initializer in const declaration
// forgot equal sign between foo and () for functional expression
// const foo = () => {
//   console.log('hi');
// };

// foo();
