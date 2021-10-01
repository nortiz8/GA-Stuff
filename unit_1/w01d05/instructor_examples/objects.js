// console.log('everything is an object')


// const obj = {}

// console.log(obj);

const car = {
    color: "blue",
    hp: 4000,
    year: 1989
}

// console.log(car);

// console.log(car.color)


// const a = 9 
// const house = {a} // fancy shorthand - may see on stack overflow but don't worry about it
// console.log(house)

// const house = {
//     doors: 9
// }

// console.log(house)

// house.windows = 30

// console.log(house)

// house.hasGarden = true

// console.log(house)

// can change properties of keys
const bicycle = {
    isATricycle: true
}

bicycle.isATricycle = false

// console.log(bicycle)


// assignment with const
const mogwai =  {}

// can add properties
mogwai.name = 'Gizmo'
// console.log(mogwai)
// cannot reassign entire object
// mogwai = { name: 'Gizmo'}

// keys must be unique or else their property will be overwritten
const boroughs = {
    name: "Brooklyn",
    name: "Bronx"
}

// console.log(boroughs)

const goblin = { badGuy : true }

// console.log(goblin.badGuy)
// alternate way to access property
// console.log(goblin['badGuy'])


const strangeObj = {}
strangeObj['a key with spaces'] = 9999
// console.log(strangeObj)

const obj = {}

for (let i = 0; i < 10; i++) {
    obj['key' + i] = 'foo'
}

// console.log(obj)

const subway = {
    line1: 'one'
}

// console.log(subway.line1)

// can have keys with the same name as object (though not a great idea)
const whatevs = {
    whatevs: 'hi',
    count: 4
}

// access property and test in if statement
// if (whatevs.whatevs === 'hi') {
//     console.log('ok')
// }
// access property to use in a for loop control panel
// for (let i = 0; i < whatevs.count; i++) {
//     console.log(i)
// }

// test if an object has a key
if (whatevs.wutt) {
    console.log('ok it does exist')
}
// undefined
console.log(whatevs.wutt)






