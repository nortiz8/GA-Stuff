// console.log('I love math')

let cartTotal = 16.07
let roundedUpCart = Math.ceil(cartTotal)
// console.log(roundedUpCart)

let donation = (roundedUpCart - cartTotal).toFixed(2)
console.log(donation)
