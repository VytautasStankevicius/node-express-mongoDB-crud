const mongoose = require('mongoose');


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
    rankingAverage:{
        type:Number,
        default:4.5,
        min:[1,'Ranking must be above 1'],
        max:[5,'Ranking must be below 5']
    },
    room_price:{
        type:Number,
        required:[true, 'A hotel must have a price']
    },
    price_discount:{
        type:Number,
    },
    comfort:{
        type:String,
        required:[true,'A hotel must have a star rating'],
        enum:{
            values:['1','2','3','4','5']
        }
    },
    summary:{
        type:String,
        trim: true,
        require:[true, 'A hotel must have a summary']
    },
    description:{
        type:String,
        trim: true
    },
    image_cover:{
        type:String,
        required:[true, 'A hotel must have an image cover']
    },
    createdAt:{
        type:Date, 
        default:Date.now(),
        select:false
    }
});
    
const Hotel = mongoose.model('Hotel',hotelSchema);

module.exports = Hotel;

// Objektas kopijavimui i postman
// {
//     "name":"Resort mongoose",
//     "address":"mongoose street",
//     "rankingAverage":5,
//     "room_price":100,
//     "price_discount":20,
//     "comfort":3,
//     "summary":"Amazing goose hotel",
//     "image_cover":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Domestic_Goose.jpg/1200px-Domestic_Goose.jpg",

// }