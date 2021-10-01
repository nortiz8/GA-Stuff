// console.log(`
//     why did the programmer quit her job?
//     she didn't get a raise
// `)

const arr = []
// console.log(arr)

const num = 0
const string = 'strings are cool'
const bool = true

// console.log(typeof num)
// console.log(typeof string)
// console.log(typeof bool)
// console.log(typeof arr)

// console.log(Array.isArray(arr))

// make an array of strings made up of your 3 favorite foods

const favFoods = ['mayonaise', 'chicken feet', 'Kombucha SCOBY']
// console.log(favFoods[0])

const list = ["chair", "table", "candle", "map", "magnifying glass", "rupees"]

// console.log(list[0])
// console.log(list[1])

// access the first element
// access the third element
const ghostBusters = ["Venkman", "Spengler", "Stantz",
                        "Zeddemore", "Melnitz", "Barrett", "Tully"];

// console.log(ghostBusters[0], ghostBusters[2])


// access the last element in an array 
// console.log(ghostBusters[ghostBusters.length -1])

const veggies = ["red pepper", "leek", "pumpkin", "cauliflower"];

// console.log(veggies[1])
veggies[1] = 'spinach'

// console.log(veggies)

// log the third element
// change first element to be equal itself times ten
const numbers = [21, 18, 5, 1, 1];

// console.log(numbers[2])
// numbers[2] = null
// console.log(numbers)


numbers[0] *= 10

// console.log(numbers[0])

// 'middle' elemenet - if it is even
// console.log(list[list.length/2])


const shortArray = ['first', 'middle', 'last'];
// // get middle number
// // bummer this gets us the last element
// console.log(shortArray[Math.ceil(shortArray.length/2)])
// // try again still gets the last element
// console.log(shortArray[Math.round(shortArray.length/2)])
// // this method gets us the middle element
// console.log(shortArray[Math.floor(shortArray.length/2)])

const index = 1 + 1

// console.log(shortArray[index]);

const kitchenSink = ["Dirty spoon", "sponge", "plate with gunk", "soap", "water"];

// for (let i = 0; i < kitchenSink.length; i+=2){
//     console.log("This is in my sink", kitchenSink[i])
// }


const drSeuss = ["Cat in the Hat", "Green Eggs and Ham", "Grinch",
              "Thing One", "Thing Two", "Cindy Loo Who", "JoJo McDodd"];

// for (let i = 1;i < drSeuss.length; i+=2){
//     console.log(drSeuss[i]);
//     console.log(i)
    
// }

const foodSelections = ["pizza", "apple", "seaweed", "artichoke", "tea", "ice cream"];
// If we want to print the items in the array, but only if the index number is even OR 5:
// for(let i = 0; i < foodSelections.length; i++) {
//     if(i % 2 === 0 || i === 5) {
//         console.log(foodSelections[i], i)
//     } 
// }

const looneyTunesChars = ["Bugs Bunny", "Daffy Duck", "Tweety",
                        "Sylvester", "Elmer Fudd", "Porky Pig", "Taz"];
// for(let i = 0; i < looneyTunesChars.length; i++){
//     if (i % 2 !== 0 || i === 3) {
//         console.log(looneyTunesChars[i])
//     }
// }

const favMovies = ["Shawshank Redemption", "There will be Blood", "The Goonies",
 "Who Framed Roger Rabbit", "Clockwork Orange", "Harry Potter", "Godfather 2",
  "Coming to America", "Interstellar", "Terminator", "Lucky Number Slevin",
   "Happy Gilmore", "Goodfellas"]

// research your method

// index of
const indexOf = favMovies.indexOf("Shawshank Redemption")
// console.log(indexOf)
// push - add to array
// favMovies.push("Home Alone")
// console.log(favMovies)
// pop - remove last element
// favMovies.pop()
// console.log(favMovies)
// reverse - reverse the array - permanent reversal 
favMovies.reverse()
// console.log(favMovies)
// const reversedFavMovies = favMovies.reverse()
// console.log(reversedFavMovies)
// unshift - adds to the front of the array
// favMovies.unshift("Scarface", "Mean Girls")
// console.log(favMovies)
// shift alters the array adds to the front
const movie = favMovies.shift()
// console.log(movie)
// slice - gets some elements, doesn't change original array
const newArrMovies = favMovies.slice(0,3)
// console.log(newArrMovies)


const pairs = [["Snoopy", "Linus"], ["Peppermint Patty", "Woodstock"]];
// access snoopy
// console.log(pairs[0][0])



const confectionary = [["mounds", "almond joy"], ["lindt truffles", "easter egg", ["kitkat bar 1", "kitkat bar 2", 'kitkat bar 3', "kitkat bar 4"]]];

confectionary[1][0] = "musketeer"
// kit kat bar 3
console.log(confectionary[1][2][2]);








