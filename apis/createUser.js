const mongoose = require('mongoose');
const userModel = require('../models/userModel');

const db = mongoose.connection;

/*
    Argument:  
    [Type: OBJECT] obj
        Object to be stored in database. Must comply with the Schema
    [Type: FUNCTION] fn
        Callback function to be called once database gives a result
        Argument:
        [Type: BOOLEAN] err
            Tells wether there was an error or not.
        [Type: OBJECT] result
            Result of database call, wether the error or the document that was added.
*/
const call = (obj, fn) => {
    mongoose.connect('mongodb://localhost:27017/coldwar', (err)=>{
        //This will most often be called if mongo service isn't running
        if(err)    
            fn(true, err);

        //Attempt to store doc in DB
        const userDoc = new userModel.user(obj);
        userDoc.save((err, product)=>{
            if(err)
                fn(true, err);

            fn(false, product);
            //Close the connection properly
            mongoose.disconnect();
        });
    });
};

module.exports = {
    call
};