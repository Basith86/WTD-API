const express = require('express');
const router = express.Router();

const ctrlUSer = require('../controllers/user.controller');

router.post('/register', ctrlUSer.register);

module.exports = router;