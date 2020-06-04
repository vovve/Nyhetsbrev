var express = require("express");
var router = express.Router();
var fs = require("fs");

// GET users list.
router.get("/", function (req, res, next) {
  var users;
  fs.readFile("users.json", (err, data) => {
    if (err) throw err;
    users = JSON.parse(data);
    console.log(users);
  });
  res.send(users);
});

// Check userlogin
router.post("/tryUser", function (req, res, next) {
  var users;
  fs.readFile("users.json", (err, data) => {
    if (err) throw err;
    var loginResult = "Testar att logga in: ";
    users = JSON.parse(data);
    console.log("users ", users);
    var finduser = users.filter((a) => a.name == req.body.name);
    console.log("finduser ", finduser);
    console.log(finduser[0].password);
    console.log(req.body.password);

    if (finduser[0].password == req.body.password) {
      console.log("Lösenordet stämmer");
      loginResult += "success";
    } else {
      Response.sendStatus(404);
    }
  });
});

// Save new user registration
router.post("/newUser", function (req, res, next) {
  var users;
  var newUser;
  fs.readFile("users.json", (err, data) => {
    if (err) throw err;
    users = JSON.parse(data);
    newUser = {
      id: req.body.id,
      userName: req.body.userName,
      userEmail: req.body.userEmail,
      userPassword: req.body.userPassword,
      isSubscribing: req.body.isSubscribing,
    };
    console.log(newUser);
    // Save registration to JSON file
    userPassword.push(newUser);
    var saveUsers = JSON.stringify(users, null, 2);
    fs.writeFile("users.json", saveUsers, (err, data) => {
      if (err) throw err;
    });
    res.send("Registrerad", newUser);
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
