var express = require("express");
var router = express.Router();
var fs = require("fs");
var cors = require('cors');

router.use(cors())

// GET users list.
router.get("/", function (req, res, next) {
  fs.readFile("users.json", (err, data) => {
    if (err) throw err;
    var users = JSON.parse(data);
    res.send(users);
  });
});

// Check if user wants to subscribe
router.put("/:userId", function (req, res, next) {

  fs.readFile("users.json", (err, data) => {
    if (err) throw err;
    let users = JSON.parse(data);
    
    let user = users.find(a => a.userId == req.params.userId);
    user.isSubscribing = req.body.isSubscribing;

    // users.forEach(user => {
    // if (req.body.userId == user.userId && req.body.isSubscribing == user.isSubscribing) 
    //     console.log(user);

    
    var saveUsers = JSON.stringify(users, null, 2);
    fs.writeFile("users.json", saveUsers, (err, data) => {
        if (err) throw err; 
        res.send("Du har ändrat din prenumeration på nyhetsbrevet");
      })
//  });
  })
});

// // Check if user wants to subscribe
// router.post("/:userId", function (req, res, next) {
//   var users = req.body;

//   fs.readFile("./users.json", (err, data) => {
//     if (err) throw err;
//     let users = JSON.parse(data);
//     users.forEach(user => {
//       console.log(user.userId, user.isSubscribing);
//       if (req.body.userId == user.userId && req.body.isSubscribing == user.isSubscribing) {
//         console.log(user);
//         res.send(
//           user= { 
//             userId: user.userId,
//             isSubscribing: user.isSubscribing
//           });
//           users.push(isSubscribing);
//           var saveUsers = JSON.stringify(users, null, 2);
//           fs.writeFile("./users.json", saveUsers, (err, data) => {
//             if (err) throw err;
//         });
//       }
//     });
//   });
module.exports = router;
