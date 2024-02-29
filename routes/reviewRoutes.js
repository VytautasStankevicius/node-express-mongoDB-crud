const express = require('express');
const router = express.Router({mergeParams:true})
const authControler = require('./../controlers/authControler')
const reviewControler = require('./../controlers/reviewControler')

router.use(authControler.protect)

router
    .route("/")
    .post(reviewControler.createReview)
    .get(reviewControler.getAllReviews, authControler.restrictTo("user"))



module.exports = router;

