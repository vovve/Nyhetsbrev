var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

// var bodyParser = require("body-parser");
// var urlencodedParser = bodyParser.urlencoded({ extended: true });

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var userRegistrationRouter = require("./routes/userRegistration");
var userLoginRouter = require("./routes/userLogin");
var emailadressesRouter = require("./routes/emailadresses");
var adminRouter = require("./routes/admin");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/userRegistration", userRegistrationRouter);
app.use("/userLogin", userLoginRouter);
app.use("/emailadresses", emailadressesRouter);
app.use("/admin", adminRouter);

module.exports = app;
