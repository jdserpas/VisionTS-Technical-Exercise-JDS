const mongoose = require('mongoose');

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

/* Function to be passed to event listners to close connection gracefully */
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