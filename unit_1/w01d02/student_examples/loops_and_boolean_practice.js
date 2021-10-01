// for (let i = 1; i <=15; i++) {
//     console.log("hi");
// }

// for (let i = 1; i <= 30; i++) {
//     console.log("YEP!");
// }

// let sum_num = 18;

// for (i =1; i <= 10; i++) {
//     if (sum_num < 10) {
//         console.log("That's a small number");
//     };
// }

// for (i = 1; i < 10; i++) {
//     if (sum_num > 20) {
//         console.log("That's a big number");
//     };
// }

// for (i = 1; i < 10; i++) {
//     if (sum_num < 10) {
//         console.log("That's a small number");
//     }
//     else if (sum_num > 20) {
//         console.log("That's a big number");
//     }
//     else {
//         console.log("That is a number");
//     };
//     sum_num = (Math.random() * 30);
// }



/*
Equator drive: 
know how many miles the earth is around the equator
know mpg: 15 miles per gallon
know price: $3 per gallon
divide total miles by mpg
multiply by $3 to get cost


PBJ:
Get peanut butter, jelly, 2 slices of bread, knife, plate
dip knife in jelly
spread on one side of one slice of bread
put bread on plate, jelly facing up
dip knife in peanut butter
spread on one side of the other slice of bread
place second slice of bread on top of first slice, peanut butter facing down
put sandwich in mouth, enjoy?


Sarcophagus:
get distance
convert distance to miles
do math to figure out how fast you need to go to go that distance in 1 second

*/




/*
Have a favorite day of the week
if the favorite day is a saturday or sunday - "i like the weekend"
if the favorite day is monday-friday - "give me a good 'ol weekday"
if its not a day of the week - thats not a day
*/

let fave_day = "Saturday";

for (i = 0;i < 1; i++) {
    if (fave_day === "Saturday" || fave_day === "Sunday") {
        console.log("I like the weekend");
    }
    else if (fave_day === "Monday" || fave_day === "Tuesday" || fave_day === "Wednesday" || fave_day === "Thursday" || fave_day === "Friday") {
        console.log("Give me a good 'ol weekday");
    }
    else {
        console.log("That isnt a day");
    };
}