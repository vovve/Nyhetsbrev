var express = require("express");
var router = express.Router();
var fs = require("fs");

// Check userlogin
router.post("/", function (req, res, next) {
  var users = req.body;

  fs.readFile("users.json", (err, data) => {
    if (err) throw err;
    let users = JSON.parse(data);

    users.forEach(user => {

      console.log(user.userName, user.userPassword);
      if (req.body.userName == user.userName && req.body.userPassword == user.userPassword) {
        console.log(user);
        res.send(
          user= { 
            userId: user.userId,
            userName: user.userName,
            email: user.email,
            isSubscribing: user.isSubscribing
            // wantsNewsletter: user.wantsNewsletter
          });
      }
    });
  });
});

module.exports = router;
