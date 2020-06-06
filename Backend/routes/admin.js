var express = require("express");
var router = express.Router();

//Admin login
router.post("/", (req, res) => {
  var username = req.body.adminUsername;
  var password = req.body.adminPassword;

  if (username == "test" && password == "1234") {
    var html = "";
    html += "<body>";
    html += "<h1>Välkommen admin</h1>";
    html += '<a href="/users">Visa alla registrerade användare</a><br/>';
    html += '<a href="/emailadresses">Visa alla Email adresser</a>';
    html += "</body>";
    res.send(html);
  } else {
    res.redirect("/");
  }
});

module.exports = router;
