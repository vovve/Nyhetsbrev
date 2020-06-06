var express = require("express");
var router = express.Router();
var fs = require("fs");

// GET users list.
router.get("/", function (req, res, next) {
  fs.readFile("users.json", (err, data) => {
    if (err) throw err;
    var users = JSON.parse(data);
    res.send(users);
  });
});

// Check if user wants to subscribe
router.put("/:userId", function (req, res) {
  var userId = req.params.userId;
  console.log(userId);
  fs.readFile("users.json", (err, data) => {
    if (err) throw err;
    users = JSON.parse(data);
    var userChangeSubscription = users.filter((a) => a.id == req.body.userId);
    console.log(userChangeSubscription);
    userChangeSubscription.isSubscribing = req.body.isSubscribing;

    var saveUsers = JSON.stringify(users, null, 2);
    fs.writeFile("users.json", saveUsers, (err, data) => {
      if (err) throw err;
    });

    console.log(userChangeSubscription);
    res.send("Du har ändrat din prenumeration på nyhetsbrevet");
  });
});

module.exports = router;
