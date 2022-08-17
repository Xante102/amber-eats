const express = require('express');
const router = express.Router();

const ctrlUsers = require('../controllers/users.controller');

const jwtHelper = require('../config/jwtHelper');

router.post('/register',ctrlUsers.register);
router.post('/authenticate',ctrlUsers.authenticate);
router.get('/userProfile', jwtHelper.verifyJwtToken, ctrlUsers.userProfile);

module.exports = router;
