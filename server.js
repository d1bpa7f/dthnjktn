const express = require('express')
const fs = require('fs')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/hey', function (req, res) {
    const myIndexFile = fs.readFileSync('./index.html').toString()

    res.send(myIndexFile)
})

  app.get('*', function (req, res) {
    res.send('Not found')


})
 
app.listen(3000)