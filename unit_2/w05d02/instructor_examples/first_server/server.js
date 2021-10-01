// Dependencies

const express = require('express')
// shorthand for express()
const app = express()

// hey express, when someong goes to localhost/3000/
// send this response
app.get('/', (request, response) => {
  console.log('Oh hey, I got a request. Let me respond with something')
  response.send('Hello World!')
})

app.get('/somedata', (request, response) => {
  response.send('here is your information you awesome person you!')
})

// express! listen to port 3000, by default this will be localhost from the browser
app.listen(3000, () => {
  console.log('I am listening for reuqests on port', 3000)
})
