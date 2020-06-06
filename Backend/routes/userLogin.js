var express = require("express");
var router = express.Router();
var fs = require("fs");

// Check userlogin
router.post("/", function (req, res, next) {
  var userLoggingin = req.body;

  fs.readFile("users.json", (err, data) => {
    if (err) throw err;

    var users = JSON.parse(data);

    var userLoggingin = users.find((a) => a.name == req.body.name);
    // console.log("finduser ", finduser);
    // console.log(finduser[0].password);
    // console.log(req.body.password);

    if (userLoggingin[0].password == req.body.password) {
      var html = "";
      html += "<body>";
      html += "<h1>Välkommen till nyhetsbrevet!</h1>";
      html += "</body>";
      res.send(html);
    } else {
      res.redirect("/");
    }
  });
});

module.exports = router;
