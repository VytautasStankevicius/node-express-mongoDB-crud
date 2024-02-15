const express = require('express');
const router = express.Router();
const authControler = require('./../controlers/authControler')

router.post('/signup',authControler.signup);

module.exports = router;