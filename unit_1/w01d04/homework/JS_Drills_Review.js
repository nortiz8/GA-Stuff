const checkPalindrome = (str) => {
    // Remove case-sensitivity
    str = str.toLowerCase()
    // Check if string equals reversed string
    if  (str === str.split('').reverse().join('')) {
        return true
    } else {
        return false
    }
    // Can also do instead of if-statement
    // return str === str.split('').reverse().join('')
}

/**************************/
/* ALTERNATE SOLUTION USING A FOR LOOP */
const checkPalindrome = (str) => {
    str = str.toLowerCase()
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false
        }
    }
    return true
}
/**************************/

// console.log(checkPalindrome('Racecar')) // true
// console.log(checkPalindrome('abcddcBa')) // true
// console.log(checkPalindrome('Hello')) // false
// console.log(checkPalindrome('poop')) // true


const sumArray = (array) => {
    // Store sum
    let sum = 0
    // Loop through array
    for (let i = 0; i < array.length; i++) {
        // Add each element of array to sum variable
        sum = sum + array[i]
    }
    // Return the sum
    return sum
}
// const arr = [1, 2, 3, 4, 5, 6]
// console.log(sumArray(arr))


const checkPrime = (num) => {
    // 1 divides into everything, so we have to start at 2, i < num to allow 2 to return as prime number as 2 < 2 will not fire loop
    for (let i = 2; i < num; i++) {
        // check num against all numbers in loop
        if (num % i === 0) {
            // number is not prime
            return false
        }
    }
    // If loop completes with no return false, number must be prime
    return true
}
// console.log(checkPrime(3)) // true
// console.log(checkPrime(5)) // true
// console.log(checkPrime(7)) // true
// console.log(checkPrime(8)) // false

const listPrimes = (num) => {
    // Loop through all numbers up to num
    for (let i = 0; i <= num; i++) {
        // Use checkPrime from above to check if i is a prime number, if true then log number
        if (checkPrime(i)) console.log(i)
    }
}
// console.log(listPrimes(97))


/********************/
// Rock Paper Scissors
/********************/

const randomMove = () => {
    // Returns a random move
    const moves = ['rock', 'paper', 'scissors']
    const randomIndex = Math.floor(Math.random() * moves.length)
    return moves[randomIndex]
}


const rpsGame = () => {
    // Runs one round of RPS
    let computerMove = randomMove()
    let userMove = randomMove()

    const results = ["Player wins!", "Computer wins!", "It's a tie!"]

    console.log("Let's play Rock, Paper, Scissors")
    console.log("======================")
    console.log(`Player throws ${userMove}`)
    console.log(`Computer throws ${computerMove}`)
    console.log("======================")

    // Check for a tie
    if (userMove === computerMove) {
        console.log(results[2])
    }

    // Compare moves and determine winner
    if (userMove === 'rock' && computerMove === 'paper') {
        console.log(results[1])
    } else if (userMove === 'rock' && computerMove === 'scissors') {
        console.log(results[0])
    } else if (userMove === 'paper' && computerMove === 'scissors') {
        console.log(results[1])
    } else if (userMove === 'paper' && computerMove === 'rock') {
        console.log(results[0])
    } else if (userMove === 'scissors' && computerMove === 'rock') {
        console.log(results[1])
    } else if (userMove === 'scissors' && computerMove === 'paper') {
        console.log(results[0])
    }
    console.log("==== Game Over ====")
}

// rpsGame() // run round
