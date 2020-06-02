var express = require('express');
var router = express.Router();
var fs = require('fs');

// GET users list.
router.get('/', function(req, res, next) {
  var users;
  fs.readFile("Users.json", (err, data) =>{
    if (err) throw err;
    users = JSON.parse(data);
    console.log(users);
  })
  res.send(users);
 });
  
 // GET allusers list.
 router.get('/allusers', function(req, res, next) {
  var users;
  fs.readFile("users.json", (err, data) =>{
    if (err) throw err;
    users = JSON.parse(data);
    console.log(users);
  })
  res.send(users);
 });
  
 // GET admin list.
 router.get('/admin', function(req, res, next) {
  var admin;
  fs.readFile("admin.json", (err, data) =>{
    if (err) throw err;
    admin = JSON.parse(data);
    console.log(admin);
  })
  res.send(admin);
 });
  
 router.post('/login', function(req, res, next){
  console.log(req.body);
   var tryAdmin = req.body;
  console.log("Try Admin ", tryAdmin.name);
   //var currentAdmins;
  fs.readFile("admin.json", (err, data) =>{
    var loginResult = "Testal logga in: "
    if (err) throw err;
    var admin = JSON.parse(data);
    console.log("admin ", admin);
    var findadmin = admin.filter(a => a.name == req.body.name);
    console.log("findadmin ", findadmin);
   
    console.log(findadmin[0].password);
    console.log(req.body.password);
   
    if(findadmin[0].password == req.body.password){
      console.log("Lösenordet stämmer");
      loginResult += "success";
    };
  }) 
 })
 
module.exports = router;
