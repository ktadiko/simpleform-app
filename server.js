// dependencies
const express = require('express');
const http = require('http');
const path = require('path');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// express backend
const app = express();

// serve prod files statically
app.use(express.static('dist'))

// port setup
const port = process.env.PORT || '3000';
app.set('port', port);

// enable CORS
app.use(cors());

// parse the request body as JSON
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// routes
const api = require('./routes/form-api');
app.use('/api', api);

app.get('*', (req,res) => {
    res.send("Page doesn't exist");
})

// mongodb connection
dotenv.load({ path: '.env' });
mongoose.connect(process.env.MONGODB_URI);

// If the connection throws an error
mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {  
  console.log('Mongoose default connection disconnected'); 
});

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));