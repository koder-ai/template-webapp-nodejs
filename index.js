const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'views', 'index.html'))
})

// The preview routes exactly one port and supplies it as PORT. Binding a
// different one starts the app where nothing outside can reach it.
const port = process.env.PORT || 4001

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${port}`)
})
