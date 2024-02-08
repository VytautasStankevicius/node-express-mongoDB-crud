const fs = require('fs');
const hotels = JSON.parse(fs.readFileSync(`${__dirname}/../data/hotels.json`));
//Callbacks

exports.checkHotel = (req, res, next) => {
    const hotel = hotels.find((hotel) => hotel.id == req.params.id);
    if (req.params.id > hotels.length)
    {
        res.status(404).json({
            status: 'failure',
            message: 'invalid ID',
        })
 
        return
    }
 
    req.hotel = hotel
    next()
}

exports.getAllHotels = (req,res)=>{
    res
    .status(200)
    .json({
        status:'sucess',
        results:hotels.length,
        data:{
          hotels
        }
    })
};
 
 
exports.createHotel = (req, res)=>{
    const newId = hotels[hotels.length-1].id+1;
    console.log(newId);
    const hotelData = Object.assign({id:newId}, req.body);
    hotels.push(hotelData);
    fs.writeFile(`${__dirname}/data/hotels.json`,JSON.stringify(hotels),err=>{
        res
        .status(201)
        .json({
            status:'success',
            message: "New hotel created",
            data: hotelData
        })
    })
};
 
exports.getHotel = (req,res)=>{
    console.log(req.params);
    const hotel = hotels.find(el=>el.id === Number(req.params.id));
    res
    .status(200)
    .json({
        status:'success',
        data:{
            hotel
        }
    })
 
};
 
exports.updateHotel = (req,res)=>{
    res
    .status(200)
    .json({
        status:'success',
        message: "Hotel Updated",
        data: '<UPDATED>'
    })
};
 
exports.deleteHotel = (req,res)=>{
    res
    .status(200)
    .json({
        status:'success',
        message: "Hotel deleted",
        data: null
    })
};
 