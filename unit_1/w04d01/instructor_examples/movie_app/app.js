$(() => {
  const titleQuery = 'eraserhead'
  const endpoint = `http://www.omdbapi.com/?apikey=YOUR_API_KEY_HERE&t=${titleQuery}`

  console.log(endpoint)
})