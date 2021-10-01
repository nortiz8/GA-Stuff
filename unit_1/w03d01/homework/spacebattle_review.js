class Ship {
    constructor(name, hull, firepower, accuracy) {
        this.name = name
        this.hull = hull
        this.firepower = firepower
        this.accuracy = accuracy
    }
    // Pass ship we want to attack as function argument
    attack(targetShip) {
        // Announce attack
        console.log(`${this.name} is getting ready to attack!`)

        // Announce damage (in red!)
        console.log(`%c${this.name} attacks ${targetShip.name} for ${this.firepower} damage!`, 'color:red')

        // Decrease attacked ship's hull based on our firepower
        targetShip.hull -= this.firepower

        // Announce remaining health of attacked ship
        console.log(`${targetShip.name} hull integrity is now ${targetShip.hull}`)
    }
}


const createAlienShip = () => {
    // hull 0-3 
    let randomHull = Math.floor(Math.random() * 4) + 3
    // firepower 2 - 4
    let randomFirepower = Math.floor(Math.random() * 3) + 2
    // accuracy .6 - .8
    let randomAccuracy = (Math.floor(Math.random() * 3) + 6) / 10
    // return alien ship with randomized values
    return new Ship("Alien Ship", randomHull, randomFirepower, randomAccuracy)
} 

// Instantiate new ship object
const heroShip  = new Ship('USS Schwarzenegger', 20, 5, 0.7)

// Instantiate new ship object through createAlienShip() return value
const alienShip = createAlienShip()


// console.log(heroShip)
// console.log(alienShip)

// Use built-in class method to attack each other
heroShip.attack(alienShip)
alienShip.attack(heroShip)

// Check if heroShip survived, if our health is 0 we lose :(, else we win :D
if (heroShip.hull <= 0) {
    alert("Game Over! Humanity has been wiped out!")
} else {
    alert("You win! Earth is saved!")
}
