//4 - I feel pretty good about the material, but some extra review would help


////////////////////////////////
// Easy Going
////////////////////////////////
// for (i = 1; i <= 20; i++) {
//     console.log(i);
// }

////////////////////////////////
// Get Even
////////////////////////////////
// for (i = 0; i <= 200; i++) {
//     if (i === 0) {
//     } 
//     else if (i % 2 === 0) {
//         console.log(i);
//     }
// }

////////////////////////////////
// Fizz Buzz
////////////////////////////////
// for (i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

////////////////////////////////
// Wild Wild Life
////////////////////////////////
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
// // Plantee just had her birthday; change Plantee's array to reflect her being a year older.
// plantee[2] = 5001;
// // Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
// wolfy[3] = "Gotham City"
// // Give D'Art a second hometown by adding "Hawkins"
// dart.push("Hawkins")
// // Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
// delete wolfy[0];
// wolfy.push("Gameboy");


////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
// const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
// for (let i of ninjaTurtles) {
//     console.log(i.toUpperCase());
// }


////////////////////////////////
// Methods, Revisited
////////////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
// Console log: the index of Titanic
// console.log(favMovies.indexOf('Titanic'));
// Do the following and console.log the final results (I have included some thought questions, you don't have to write out an answer for those marked as such):
// Note: if you have to add to the array, feel free to add any movie you'd like
// use the .sort method Thought question: what did this do to the array? Did it permanently alter it?
// favMovies.sort();
// console.log(favMovies);
// Use the method pop
// favMovies.pop()
// console.log(favMovies);
// push "Guardians of the Galaxy"
// favMovies.push("Guardians of the Galaxy")
// console.log(favMovies);
// Reverse the array
// favMovies.reverse()
// console.log(favMovies);
// Use the shift method
// favMovies.shift()
// console.log(favMovies);
// unshift - what does it return?
// favMovies.unshift();
// console.log(favMovies);
// splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
// console.log(favMovies.splice(3, 1, "Avatar"));
// slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?
// console.log(FavMovies.slice((favMovies.length/2), favMovies.length));
// store the value of your slice in a variable, console.log it - Thought question: what is going on here?
// let movieSlice = favMovies.slice((favMovies.length/2), favMovies.length)
// console.log(movieSlice)
// console.log your final results
// console.log(favMovies);

////////////////////////////////
// Where is Waldo
////////////////////////////////
// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert", ["Lucinda", "Jacc", "Neff", "Snoop"], ["Petunia", ["Baked Goods", "Waldo"]]];
// // Remove Eggbert (hint look at the slice/splice method(s))
// whereIsWaldo.splice(1, 1);
// console.log(whereIsWaldo);
// // Change "Neff" to "No One"
// whereIsWaldo[1][2] = "No One";
// console.log(whereIsWaldo);
// // Access and console.log "Waldo"
// console.log(whereIsWaldo[2][1][1])


////////////////////////////////
//  Excited Kitten
////////////////////////////////
// const kittyTalk = ["... human... why you taking pictures of me? ...", "....the catnip made me do it...", "...why does the red dot always get away..."]
// let meow = 0;

// for (i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(kittyTalk[Math.floor((Math.random() * 3))])
//     } else {
//     console.log("Love me, pet me! HSSSS")
//     }
// }


////////////////////////////////
//  Find the Median
////////////////////////////////
// const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
// console.log((nums.length -1) / 2);
// let median = (nums.length -1) / 2;
// console.log(nums[median]);
