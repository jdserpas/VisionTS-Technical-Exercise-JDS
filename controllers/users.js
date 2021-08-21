const mongoose = require('mongoose');
const Usr = mongoose.model('User');

const createUser = (req, res) =>{ 
    res
      .status(200)
      .json({"status" : "success"});
};

const getUser = (req, res) => {
    Usr
      .find({userId : req.query.uid})
      .exec((err, user) => {
        console.log(user);
        if (!user) {
            return res
                .status(404)
                .json({
                    "message" : "user not found"
                })
        }
        else if (err) {
            return res
                .status(500)
                .json(err);
        }
        console.log(user);
        res
          .status(200)
          .json(user);
      });
};

module.exports = {
    createUser,
    getUser
};