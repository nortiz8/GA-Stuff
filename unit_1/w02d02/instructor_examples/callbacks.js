// const capitalize = (input) => {
//   const firstLetter = input.slice(0, 1).toUpperCase()
//   const restOfTheString = input.slice(1)

//   return firstLetter + restOfTheString
// }

// console.log(capitalize('something is wrong here'))

// const printGreeting = () => {
//   console.log('Hello, there!')
// }

// setTimeout(printGreeting, 4000)

// setTimeout(() => {
//   console.log('Hello, there!')
// }, 4000)

// const socky = () => {
//   console.log('I will happily iron your socks!')
// }

// const foodie = () => {
//   console.log('I will sort your M&Ms so that you never encounter a green one!')
// }

// const pr = () => {
//   console.log('I will make sure everyone knows you are the best boss ever')
// }

// const boss = (employee) => {
//   employee()
//   console.log('I am the boss and you will do as I say!')
// }

// boss(socky)
// boss(pr)

// const capitalize = (word) => {
//   return word[0].toUpperCase() + word.substring(1)
// }

// const excitedWords = (word) => {
//   return word + '!'
// }

// const handleWords = (sentence, modifier) => {
//   const words = sentence.split(' ')
//   let result = ''
//   for (let i = 0; i < words.length; i++) {
//     const currentWord = words[i]
//     const modifiedWord = modifier(currentWord)
//     result = result + `${modifiedWord} `
//   }
//   return result
// }

// console.log(handleWords('hello how are you?', capitalize)) // Hello How Are You?
// handleWords('I am doing mighty fine', excitedWords) // I! am! doing! mighty! fine!

// const iceCreams = ['Vanilla', 'Chocolate', 'Strawberry', 'Rocky Road']

// const upperCase = (item) => {
//   return item.toUpperCase()
// }

// console.log(iceCreams.map(upperCase))

// const arr = [2, 4, 6, 8, 10]

// const doubleArray = arr.map((num) => {
//   return num * 2
// })

// console.log(arr)
// console.log(doubleArray)

// const forEach = (arr, callback) => {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i])
//   }
// }

// const logger = (item) => {
//   console.log(item)
// }

// forEach(iceCreams, logger)
