<<<<<<< HEAD
/*Common programming principles
As you are starting out, there may be things you are really worried about and other big gotchas that you aren't yet aware that are gotchas!

DRY
 - Don't repeat yourself. It is better to use loops and things that make it easier to know what is going on
KISS
 - Keep it simple, stupid. The simpler it is the better, dont use more lines of code than needed
Avoid creating a YAGNI
 - Don't create something youre not going to need, focus on what the immediate problem is, not what you think might be a problem in the future
Do the simplest thing that could possibly work
 - making it simple is better, its always possible to add more, but focus on the minimum it needs to work
Don't make me think
 - everything should be easy to read and understand what is going on in the code
Write code for the maintainer
 - good code will be maintained for a long time, make sure whoever maintains it can know what is going on
Single responsibility principle
 - focus on making code very good a specific thing
Avoid premature optimization
 - optimization comes after making it work, dont worry about it until your product is ready
Separation of concerns
 - seperate parts of code should control seperate things and should overlap as little as possible
Which ones surprise you (if any)? 
 - none really, sepeartion of concerns is interesting
Which one is currently giving you the most struggle?
 - i think i need to work on avoiding YAGNI - i tend to think ahead and don't always focus on the first thing and starting.
*/

// // /// // Commenting out code
const f = l => {
  //creates a function f with paramater l
  let es = 0, // variable es = 0
    p = 0, //variable p = 0
    c = 1, //variable c = 1
    n = 0; //variable n = 0
  while (c <= l) {
    //while loop for c less than or equal to l
    n = c + p; //variable n equals the sum of c + p (1)
    [c, p] = [n, c]; //variables c,p change to n,c
    es += c % 2 === 0 ? c : 0; // if c is even add it to es
  }
  return es; //final value is es - a number of even values
};
console.log(f(55));

//much easier to understand after looking at the semantic variable names
//I think its the even fibonacci sequence? wou
//I woudld rather start with f2, much easier to change the things needed
=======
const f = l => {
  let es = 0, p = 0, c = 1, n = 0
  while (c <= l) {
    n = c + p;
    [c, p] = [n, c]
    es += (c % 2 === 0) ? c : 0
  }
  return es
}

console.log(f(55))

// 1.
// declare four variables: es, p, c, n, and initialize their value;
// while loop runs as long as (c <= l) === true;
// n is the sum of c and p;
// reassign c as n, and p as c;
// add the value of c to es if c is an even number, zero if it's odd.
// return the value of es

const f2 = limit => {
  let evenSum = 0;
  let last = 0;
  let current = 1;
  while (current <= limit) {
    let next = current + last;
    [current, last] = [next, current]
    if (current % 2 === 0) {
      evenSum += current;
    }
  }
  return evenSum;
}

// console.log(f2(55))

// 2.
// this code snippet is way more legible compared to the previous example.
// variable names are semantic and provides context for what it's being used for
// a more semantic name for this function is sumEvens()
// I would rather work with f2
// The semi colon was absolutely necessary on line 4 of f() to partition the reassignment of variables.

>>>>>>> 75817652e8981529ea5e40c2de9c590f4082ed7d
