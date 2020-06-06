var express = require("express");
var router = express.Router();
var fs = require("fs");

router.get("/", function (req, res, next) {
  fs.readFile("users.json", (err, data) => {
    if (err) throw err;

    var users = JSON.parse(data);
    var userEmail = [];

    users.forEach((users) => {
      if (users.isSubscribing === true) {
        userEmail.push(users.userEmail);
      }
    });
    res.send(userEmail);
  });
});

module.exports = router;
