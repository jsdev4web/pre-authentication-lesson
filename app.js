////app.js

const path = require("node:path"); //gets the path of a folder or set one
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const { loginApp } = require("./auth/passport")
loginApp(passport)

const indexRouter = require("./routes/indexRouter");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(session({ secret: "cats", resave: false, saveUninitialized: false}));
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));



app.use("/", indexRouter);


app.listen(3000, () => console.log("app is listening on port 3000"));