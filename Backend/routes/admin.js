var express = require("express");
var router = express.Router();
var fs = require("fs");

var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: true });

//Admin login
router.get("/admin", function (req, res) {
  var html = "";
  html += "<body>";
  html += "<form action='/admin/adminLogin' method 'post' name='form1'>";
  html += "Namn: <input type='text' name='name'><br/>";
  html += "Lösenord: <input type='text' name='password'><br/>";
  html += "<input type='submit' value='Logga in'>";
  html += "</form>";
  html += "</body>";
  res.send(html);
});

router.post("/adminLogin", urlencodedParser, function (req, res, next) {
  console.log(req.body);
  var tryAdmin = req.body;
  console.log("Try Admin ", tryAdmin.name);
  //var currentAdmins;
  fs.readFile("admin.json", (err, data) => {
    var loginResult = "Testar att logga in: ";
    if (err) throw err;
    var admin = JSON.parse(data);
    console.log("admin ", admin);
    var findadmin = admin.filter((a) => a.name == req.body.name);
    console.log("findadmin ", findadmin);

    console.log(findadmin[0].password);
    console.log(req.body.password);

    if (findadmin[0].password == req.body.password) {
      console.log("Lösenordet stämmer");
      loginResult += "success";
    }
  });
});

module.exports = router;
