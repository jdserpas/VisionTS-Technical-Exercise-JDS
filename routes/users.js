const express = require('express');
const router = express.Router();
const ctrlUsers = require('../controllers/users');

/* GET users from db. */
/* Completes exercise 4 */
router.get('/', ctrlUsers.getUser);

/* POST users to db. */
/* Completes exercise 3 */
router.post('/', ctrlUsers.createUser);

module.exports = router;