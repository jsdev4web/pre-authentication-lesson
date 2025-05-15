
const passport = require("passport");
const db = require("../db/queries");


async function indexHomeGet(req, res) {
    res.render("index", { user: req.user });
};


async function indexSignUpFormGet(req, res) {
    res.render("sign-up-form")
};


async function indexSignUpFormPost(req, res, next) {
    try {
        const { username, password } = req.body
        await db.insertUsername(username, password)
        res.redirect("/");
    } catch(err) {
        return next(err);
    }
};

async function indexAuthenticateLogin(req, res) {

    passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/"    
    })
};


module.exports = {
    indexHomeGet,
    indexSignUpFormGet,
    indexSignUpFormPost,
    indexAuthenticateLogin
};