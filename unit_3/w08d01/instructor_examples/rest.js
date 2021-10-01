// const dimensions = [10, 5, 2]
// const volume = (height, width, length) => {
//     return height * width * length
// }

// ES5
// console.log(volume(dimensions[0], dimensions[1], dimensions[2]))

// ES6
// console.log(volume(...dimensions))

// const arr1 = ['a', 'b', 'c', 'd']

// const arr2 = [...arr1, 'e', 'f', 'g']
// console.log(arr1)
// console.log(arr2) // ['a', 'b', 'c', 'd', 'e', 'f', 'g']

// const arr2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
// const arr3 = ['h', 'i', 'j', 'k']

// const arr4 = [...arr2, ...arr3]
// console.log(arr2)
// console.log(arr3)
// console.log(arr4)

// const obj1 = { a: 1, b: 2 }
// const obj2 = { b: 3, c: 4 }
// const obj5 = { b: 5, f: 4}


// const obj3 = { ...obj1, ...obj2, ...obj5 }
// console.log(obj3) // { a: 1, b: 2, c: 3, d: 4 }

// const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
// const reversedDays = (arr) => {
//     return arr.reverse()
// }
// console.log(reversedDays(days))
// // => Returns the reversed array of days.

// console.log(days)
// // => But now `days` is reversed as well.
// ES6

// const [,,myElement] = [1, 2, 3, 4]

// console.log(myElement)
// => 1

// console.log(second)
// => 2

// const bob = {
//     id: 1,
//     name: "Bob",
//     age: 43,
//     profileUrl: "http://api.co/users/1",
//     location: "DC"
// }

// const { name, age } = bob

// console.log(name)
// // => "Bob"

// console.log(age)
// // => 43

// ES6
// const greetUser = ({ name, location }) => {
//     console.log("Hello " + name + ", how's the weather in " + location)
// }

// greetUser(bob)