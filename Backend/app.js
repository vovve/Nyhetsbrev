var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//Hur man gör en post
app.post('/....', (req, res) =>{
    console.log(req.body.name);
    res.send("Tagit emot en POST");
 })
 //Hur man gör en put
 app.put('/....../:.....Id', (req, res) =>{
    console.log(req.params._______Id);
    return res.send("Tagit emot en PUT med id " + req.params._______Id + " data!");
 })
 //Hur man gör en delete
 app.delete('/....../:.....Id', (req, res) =>{
    console.log(req.params._______Id);
    return res.send("Delete av id " + req.params._______Id + " data!");
 }) 

module.exports = app;
