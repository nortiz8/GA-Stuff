class Dog {
    constructor(name) {
        this.legs = 4
        this.name = name
    }

    bark() {
        console.log('bark!')
    }
    
    codeWord() {
        console.log('Blitzkrieg...')
    }
}

// create instance
const fido = new Dog('Fido')
// call bark
fido.bark()
// read name
console.log(fido.name)
// write name
fido.name = "Lucky"
console.log(fido.name)
// try to call secret method
fido.codeWord() // it runs...