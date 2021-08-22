const fileApi = require('../models/file');

const getFile = (req, res) => {
    const fileName = req.query.name;
  
    // User must provide name query parameter
    if (fileName === undefined || fileName === '') {
        return res
          .status(400)
          .json({
            "Bad Request" : "File name is invalid or incorrectly formatted. See documentation"
          });
    }
  
    // Calls Model
    fileApi.call(fileName, (hadError, data) =>{
      // Runs if file read ran into trouble. Sets Response Code accordingly
      if (hadError){
        return res
            .status(500)
            .json(data);
      }
      else {
        res.set({
          'Content-Type': 'text/plain; charset=utf-8'
        })
        .send(data);
      }
    });
}

module.exports = {
    getFile
}