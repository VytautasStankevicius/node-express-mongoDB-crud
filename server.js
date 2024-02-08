const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({path:'./config.env'});
const port = process.env.PORT;
 
const DB = process.env.DATABASE.replace('<password>',process.env.DATABASE_PASSWORD);

mongoose.connect(DB)
.then(con=>{
    console.log(con.connections);
    console.log('Connected to DATABASE')
})

//**DB demo */

const hotelSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true,'A hotel must have a name'],
        unique:true
    },
    address:{
        type:String,
        required:[true, 'Must have an adress']
    },
    room_price:{
        type:Number,
        required:[true, 'A hotel must have a price']
    }
})
    
const Hotel = mongoose.model('Hotel',hotelSchema);

const testHotel = new Hotel({
    "name": "Grand Hotel",
    "adress": "adress palceholder",
    "room_price": 200
})

testHotel.save()
.then(doc=>console.log(doc))
.catch(err=>{
    console.log(err)
})





app.listen(port,()=>{
    console.log(`Server runing at port: ${port}`);
})