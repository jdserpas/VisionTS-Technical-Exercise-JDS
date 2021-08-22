const mongoose = require('mongoose');
const Usr = mongoose.model('User');

const createUser = (req, res) =>{ 
    //Make sure we only accept JSON
    if(req.get('Content-Type') !== 'application/json') {
        return res
            .status(400)
            .json({
                "Bad Request" : "Content must be JSON"
            });
    }
    Usr.create(req.body, (err, user)=> {
        if (err) {
            res
              .status(400)
              .json(err)
        }
        else {
            res
              .status(201)
              .json(user);
        }
    });
};

const getUser = (req, res) => {
    Usr
      .find({userId : req.query.uid})
      .exec((err, user) => {
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
        res
          .status(200)
          .json(user);
      });
};

module.exports = {
    createUser,
    getUser
};