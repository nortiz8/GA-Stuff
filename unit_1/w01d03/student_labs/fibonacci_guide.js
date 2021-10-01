// The Fibonacci Sequence
// A mathematical relationship where a number N is calculated by summing the two numbers that came before it:
// 0 1 1 2 3 5 8 13 21 34 55


// Task:
// Calculate the sum of the EVEN Fibonacci numbers that do not exceed 4 million

let prevNumber = 0 // set previous number variable
let currentNumber = 1 // set current number variable
let evenNumberSum = 0 // hold the even numbers from the sequence that we find (the sum)

// While our fibonacci number is less than 4 million
while (currentNumber < 4000000) {
    console.log(currentNumber) // logs the current number in Fibonacci sequence
    // Check if our current number is even
    if (currentNumber % 2 === 0) {
        evenNumberSum += currentNumber // if yes, add it to our even number holder
    }
    let nextNumber = currentNumber + prevNumber // Calculate and hold next number in sequence
    prevNumber = currentNumber // move previous number up to current number
    currentNumber = nextNumber // move current number up to the next number we calculated
}

console.log("The sum of fibonacci numbers is ",evenNumberSum) // logs sum of even numbers

/*******************************************************/
// Logging first 10 Fibonacci numbers with a for-loop  //
/*******************************************************/
let prevNumber = 0 // hold first number
let currentNumber = 1 // hold second number

// (i = 0; i < 10; i++) will cause loop to run 10 times
for (let i = 0; i < 10; i++) {
    console.log(currentNumber) // log current number of sequence
    let nextNumber = currentNumber + prevNumber // calculate the next number of sequence
    prevNumber = currentNumber // set previous number to current number
    currentNumber = nextNumber // set current number to the next number in sequence
}

// I encourage you to write out each iteration of the loop to see how the numbers all change and update