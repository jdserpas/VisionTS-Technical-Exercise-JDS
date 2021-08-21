const express = require('express');
const router = express.Router();
const ctrlUsers = require('../controllers/users');

/* GET users listing. */
router.get('/', ctrlUsers.getUser);

router.post('/', ctrlUsers.createUser);

module.exports = router;