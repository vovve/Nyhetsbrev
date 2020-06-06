var express = require("express");
var router = express.Router();
var fs = require("fs");

// Save new user registration
router.post("/", function (req, res, next) {
  var newUser;
  fs.readFile("users.json", (err, data) => {
    if (err) throw err;
    var users = JSON.parse(data);
    var newUserId = number(users.length + 1);
    newUser = {
      id: newUserId,
      userName: req.body.userName,
      userEmail: req.body.userEmail,
      userPassword: req.body.userPassword,
      isSubscribing: req.body.isSubscribing,
    };
    console.log(newUser);
    // Save registration to JSON file
    users.push(newUser);
    var saveUsers = JSON.stringify(users, null, 2);
    fs.writeFile("users.json", saveUsers, (err, data) => {
      if (err) throw err;
    });
    res.send("Registrerad", newUser);
  });
});

module.exports = router;
