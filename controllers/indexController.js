
const passport = require("passport");
const db = require("../db/queries");
const bcrypt = require("bcryptjs");
const pool = require("../db/pool");


async function indexHomeGet(req, res) {
    res.render("index", { user: req.user });
};


async function indexSignUpFormGet(req, res) {
    res.render("sign-up-form")
};


async function indexSignUpFormPost(req, res, next) {
    try {
        //const { username, password } = req.body
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        await pool.query("insert into users (username, password) values ($1, $2)", [req.body.username, hashedPassword]);
        res.redirect("/");
    } catch(err) {
        console.error(error);
        next(error);
    }
};

 



module.exports = {
    indexHomeGet,
    indexSignUpFormGet,
    indexSignUpFormPost,
    
};