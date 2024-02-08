const express = require('express');
const app = express();
const router = express.Router();
app.use(express.json())
const hotelRoutes = require('./routes/hotelRoutes')
const morgan = require('morgan')

app.use(morgan('dev'));
//Mounting router
app.use('/api/v1/hotels',hotelRoutes);

 

 

module.exports = app;
 