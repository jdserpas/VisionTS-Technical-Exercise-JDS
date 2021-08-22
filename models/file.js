const fs = require('fs');
const path = require('path');

const textDir = path.join(__dirname, '..', 'txt_files');

/*
    helper function meant to isolate file reading functionality
*/
const getText = (file, fn) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            fn(true, err)
        }
        else {
            fn(false, data);
        }
    });
};

/*  Argument:  
    [Type: STRING] fileName
        absolute name of the file to be read. Can only be one of the 4 files on txt_files directory
    [Type: FUNCTION] fn(err, data)
        Callback function to be called once the file is read from local storage
        Argument:
        [Type: OBJ] err
            Error object returned if file read fails
        [Type: OBJ] String
            Data object in utf8 format representing contents of .txt file
*/
const call = (fileName, fn) => {
    let text;
    
    console.log(fileName);
    switch(fileName) {
        case 'hamlet':
            text = path.join(textDir, 'hamlet.txt');
            getText(text, fn)
            break;
        case 'lorem':
            text = path.join(textDir, 'lorem.txt');
            getText(text, fn)
            break;
        case 'pi':
            text = path.join(textDir, 'pi.txt');
            getText(text, fn)
            break;
        case 'quixote':
            text = path.join(textDir, 'quixote.txt');
            getText(text, fn)
            break;
        default:
            error = new Error();
            fn(true, error);
    }
};

module.exports = {
    call
};