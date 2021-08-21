const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({ 
    userId: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
});

mongoose.model('User', userSchema);