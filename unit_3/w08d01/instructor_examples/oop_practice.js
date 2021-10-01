class Hero {
    constructor() {
        this.name = 'Superman'
        this.secretIdentity = 'Clark Kent'
        this.city = 'Metropolis'

        this.greeting = this.greeting.bind(this)
    }

    catchphrase() {
        console.log('Up and Up away!')
    }

    greeting() {
        console.log(`Hello, I'm ${this.name} from ${this.city}`)
    }
}

const superman = new Hero()
// superman.catchphrase()
// console.log(superman.name)
// superman.greeting()
// const supermansCatchprase = superman.catchphrase
// supermansCatchprase() // Up up and away!
const supermansGreeting = superman.greeting
supermansGreeting()