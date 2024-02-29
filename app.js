const express = require('express');
const app = express();
const router = express.Router();
app.use(express.json())
const hotelRoutes = require('./routes/hotelRoutes')
userRoutes = require('./routes/userRoutes')
const morgan = require('morgan')
const reviewRoutes = require('./routes/reviewRoutes')

app.use(morgan('dev'));
//Mounting router
app.use('/api/v1/hotels',hotelRoutes);
app.use('/api/v1/users',userRoutes);
app.use('api/v1/reviews', reviewRoutes)

module.exports = app;
 