const mongoose = require('mongoose');

/*
    This Module is meant to provide the basic Model that a User will have
    All fields are required to make sure all stored users have all values
*/
const userSchema = mongoose.Schema({
    userId: {type: Number, required: true},
    name: {type: String, required: true},
    lastName: {type: String, required: true}
});

const user = mongoose.model('User', userSchema);

module.exports = {
    user
};