const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/hey', function (req, res) {
    res.send('fuck U')
})

  app.get('*', function (req, res) {
    res.send('Not found')
})
 
app.listen(3000)