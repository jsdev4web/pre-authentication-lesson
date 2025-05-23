////app.js

const path = require("node:path"); //gets the path of a folder or set one
const express = require("express");
const app = express();
const session = require("express-session");
const passport = require("passport");
const { loginApp } = require("./auth/passport")
loginApp(passport);
const bcryptjs = require("bcryptjs")

const indexRouter = require("./routes/indexRouter");


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false })); //this gets form data to work

app.use(session({ secret: "cats", resave: false, saveUninitialized: false}));
app.use(passport.session());



app.use("/", indexRouter);


app.listen(3000, () => console.log("app is listening on port 3000"));