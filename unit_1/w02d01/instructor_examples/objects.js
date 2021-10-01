const adventurer = {
	name: 'Timothy',
	hitpoints: 10,
	belongings: ['sword', 'potion', 'Tums']
}


console.log(adventurer.belongings[0])
const adventurerBelongings = adventurer.belongings
console.log(adventurerBelongings[0])

const movies = [ { title: 'Tokyo Story' },  { title: 'Paul Blart: Mall Cop' }, { title: 'L\'Avventura' } ];

const tokyoStory = movies[0]

for (let i=0; i < movies.length; i++) {
    const movie = movies[i]
    console.log(movie.title);
}

const dog = {
    name: 'Fido',
    legs: 4,
    bark: () => {
        console.log('Woof woof!')
    }
}

console.log(dog.bark)
dog.bark()

console.log(console)