const fs = require('fs');
const Hotel = require('../models/hotelModel');
const hotels = JSON.parse(fs.readFileSync(`${__dirname}/../data/hotels.json`));
//Callbacks

exports.getAllHotels = async (req,res)=>{
    try{
        const hotels = await Hotel.find();
        res
        .status(200)
        .json({
            status:'sucess',
            results:hotels.length,
            data:{
              hotels
            }
        })
    }catch(err){
        res.status(404).json({
            status: 'failed',
            message:err
        })
    }
};
 
 
exports.createHotel = async (req, res)=>{
    try{
        const newHotel = await Hotel.create(req.body)
        res
        .status(201)
        .json({
            status:'success',
            message: "New hotel created",
            data: newHotel
        })
    }catch{
        res.status(404).json({
            status: 'failed',
            message:err
        })
    }    
};
 
exports.getHotel = async (req,res)=>{
    try{
        const hotel = await Hotel.findById(req.params.id)
        res
    .status(200)
    .json({
        status:'success',
        data:{
            hotel
        }
    })
    }catch{
        res.status(404).json({
            status: 'failed',
            message:err
        })
    }
    // const hotel = hotels.find(el=>el.id === Number(req.params.id));
    
 
};
 
exports.updateHotel = async(req,res)=>{
    try{
        const hotel = await Hotel.findByIdAndUpdate(req.params.id,req.body,{
            runValidators: true
        })
        res
    .status(200)
    .json({
        status:'success',
        message: "Hotel Updated",
        data: {
            hotel
        }
    })
    }catch(err){
        res.status(404).json({
            status: 'failed',
            message:err
        })
    }
    
};
 
exports.deleteHotel = async (req,res)=>{
    try{
        await Hotel.findByIdAndDelete(req.params.id);
        res
    .status(200)
    .json({
        status:'success',
        message: "Hotel deleted",
        data: null
    })
    }catch(err){
        res.status(404).json({
            status: 'failed',
            message:err
        })
    }
    
};