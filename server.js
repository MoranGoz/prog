// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();

const data = require ('./dist/lock/data.json');

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));
 
// Catch all other routes and return the index file
app.get('/data', function (req, res){
    res.json(data);
  })

    // app.get('/', (req, res) => {
    //     res.sendFile(path.join(__dirname, 'dist/lock/data.json'));
    //     });

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/lock/index.html'));
});
 
const port = process.env.PORT || '4000';
app.set('port', port);
 
const server = http.createServer(app);
server.listen(port, () => console.log(`API running on localhost:${port}`));