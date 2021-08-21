const mongoose = require('mongoose');

/*
    This module manages the connection to the database.
    It's meant to create the connection on app startup and gracefully close it on app close
    It adds 3 event listeners that log when the connections starts, ends, and encounters an error
*/
const dbURI = 'mongodb://localhost:27017/test';
mongoose.connect(dbURI, {useNewUrlParser: true});

mongoose.connection.on('connected', ()=> {
    console.log(`Mongoose connected to ${dbURI}`);
});

mongoose.connection.on('error', err => {
    console.log('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', ()=> {
    console.log('Mongoose disconnected');
});

/* CONNECTION CLOSING CODE */

// Function to be passed to event listners to close connection gracefully
const shutdown = (msg, callback) => {
    mongoose.connection.close(()=>{
        console.log(`Mongoose disconnected through ${msg}`);
        callback();
    });
};

process.once('SIGINT', () => {
    shutdown('app termination', ()=>{
        process.exit(0);
    });
});

/* Set up of user model */
require('./users');