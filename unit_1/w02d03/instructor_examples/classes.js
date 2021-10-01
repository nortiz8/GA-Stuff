class Person {
    constructor (name, age, eyes, hair, lovesCats = false, lovesDogs ) {
        this.legs = 2;
        this.arms = 2;
        this.name = name;
        this.eyes = eyes;
        this.hair = hair
        this.age = age
        this.lovesCats = lovesCats
        this.lovesDogs = lovesDogs || false
    }
    classyGreeting(classyPerson) {
        console.log(`Greetings! ${classyPerson.name}`)
    }
    greet(otherPerson) {
        console.log(`hi ${otherPerson}!!`)
    }
    setHair (hair) {
        this.hair = hair
    }
    walk () {
        console.log('I hate when my Segway is in the shop')
    }
}
const me = new Person('Karolin', 41, 'green', 'copper dark ash blond', true, true)
const you = new Person('Matt', 26, 'blue', 'hazel')
// me.classyGreeting(you)
// you.classyGreeting(me)
// me.greet('you')
// you.greet('me')
// me.walk()
// you.walk()
// console.log(Person) // is a function
// not best practice
// me.hair = 'supernova red'
// console.log(me)
// you.setHair('frosted blond tips')
// console.log(you)

const supermanPerson = new Person( 'Clark Kent', 30, 'blue', 'black')

// console.log(supermanPerson)

class SuperHero extends Person {
  constructor(name2, age, eyes, hair){
    super(name2, age, eyes, hair)
    this.superpowers =  ['flight', 'superhuman strength', 'x-ray vision', 'heat vision', 'cold breath', 'super-speed', 'enhanced hearing', 'nigh-invulnerability'];
  }
  fly(){
    console.log('Up up and away!');
  }
  greet (otherPerson) {
    console.log(`Greetings Earthl- Oops, I mean ${otherPerson}`);
  }
  walk () {
    super.walk()
    this.fly()
  }
}

const superman = new SuperHero('Clark Kent', 30, 'blue', 'black')
// console.log(superman);
// superman.walk()
// superman.fly()
// superman.greet('Bob')







const vendingMachine = {
    snacks : [
        {
            name: 'kit kat',
            price: 6
        },
        {
            name: 'sun chips',
            price: 7
        },
        {
            name: 'apple',
            price: 12
        }
    ],
    vend (input) {
        console.log('vending', this.snacks[input])
    }
}

// vendingMachine.vend(2)




class Car {
  constructor (maker, serialNumber) {
    this.serialNumber = serialNumber
    this.maker = maker
  }
  drive () {
    console.log('Vroom Vroom');
  }
}


const newCar = new Car ('Mazda', 12345)
// console.log(newCar);
// newCar.drive()

class Factory {

  constructor (company) {
    this.company = company
    this.cars = []
  }
  generateCar () {
    const newCar = new Car(this.company, this.cars.length)
    this.cars.push(newCar)
  }
  findCar(index) {
    return this.cars[index]
  }
}

const tesla = new Factory('Tesla')
tesla.generateCar()
tesla.generateCar()
tesla.generateCar()
tesla.generateCar()
tesla.generateCar()
// console.log(tesla);
// console.log(tesla.findCar(0))


const porche = new Factory('Porche')
porche.generateCar()
porche.generateCar()
console.log(porche)
console.log(porche.findCar(1))
