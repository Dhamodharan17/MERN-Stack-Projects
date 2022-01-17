const express = require('express')
const app = express()
const port = 3002
const fs = require('fs')

app.get('/', (req, res) => {
  res.end('Hello World!');
});

app.get("/employee", (req, res) => {
    
    fs.readFile(__dirname + '/' + 'employee.json', 'utf8', (err, data) => {
        res.end(data);
    });
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });