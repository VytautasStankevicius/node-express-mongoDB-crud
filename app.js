const express = require('express');
const app = express();
const router = express.Router();
app.use(express.json())
const hotelRoutes = require('./routes/hotelRoutes')
userRoutes = require('./routes/userRoutes')
const morgan = require('morgan')

app.use(morgan('dev'));
//Mounting router
app.use('/api/v1/hotels',hotelRoutes);
app.use('/api/v1/users',userRoutes);

module.exports = app;
 