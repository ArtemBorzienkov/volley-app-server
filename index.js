const express = require('express')
const fs = require('fs')

const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/bot-config.json')
})

app.put('/', (req, res) => {
  fs.writeFile(__dirname + '/bot-config.json', JSON.stringify(req.body), (err) => {
    if (err) console.warn('error writing file');
    console.log('Data written to file');
  });
  res.send('OK')
})

app.listen(port, () => {
  console.log(`server listening port ${port}`)
})