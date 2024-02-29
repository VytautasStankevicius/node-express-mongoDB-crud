const express = require('express');
const router = express.Router();
const authControler = require("./../controlers/authControler");
const userControler = require("./../controlers/userControler");
// const reviewControler = require('./../controlers/reviewControler')
 
router.post("/signup", authControler.signup);
router.post("/login", authControler.login);
router
  .route("/")
  .get(authControler.protect,
    authControler.restrictTo("admin"),
    userControler.getAllUsers)
router
    .route("/:id")
    .get(authControler.protect, userControler.getUser)

module.exports = router