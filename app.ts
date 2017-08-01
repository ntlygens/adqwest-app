const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

const mainApiRoutes = require('./routes/main-api-routes.ts');



// connect to mongodb
mongoose.connect('mongodb://localhost:27017/contactlist');

// on connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database mongodb @port 27017');
});

// on connection
mongoose.connection.on('error', (err) => {
    console.log( 'Error in connecting to database mongodb @port 27017' );
});



// port number
const port = 3000;



// add middleware - cors
app.use(cors());

// body - parser
app.use(bodyparser.json());

// static files
app.use(express.static(path.join(__dirname, 'public')));

// main api routes
app.use('/api', mainApiRoutes);

// test server
app.get('/', (req, res) => {
    res.send('Were at the Start');
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
