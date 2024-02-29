//Sukurti atsiliepimu modeli, kuriame butu galimybe saugoti DB sia informacija
//review, rating, createdAt, hotel, user

const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
    {
    review: {
        type:String,
        required: [true, 'Must have a review text'],
    },
    rating: {
        type:Number,
        min: [1, 'Ranking must be above or equal to 1'],
        max: [5, 'Ranking must be below or equal to 5'],
        required:[true, 'Please provide a rating']
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    hotel: {
        type: mongoose.Schema.ObjectId,
        ref:'Hotel',
        required: [true, 'Must have a hotel name'],
    },
    users: {
        type:mongoose.Schema.ObjectId,
        default: 'user'
    }
}
)

reviewSchema.pre(/^find/,function(next){
    this.populate({
        path:'hotel',
        select:'name'
    }).populate({
        path:'user',
        select:'name'
    })
    next()
})

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review;