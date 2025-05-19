const { Router } = require("express");
const indexController = require("../controllers/indexController")
const indexRouter = Router()
const passport = require("passport");


indexRouter.get("/", indexController.indexHomeGet);
indexRouter.get("/sign-up", indexController.indexSignUpFormGet);
indexRouter.post("/sign-up", indexController.indexSignUpFormPost);
indexRouter.post("/log-in", passport.authenticate('local', {
        successRedirect: "/",
        failureRedirect: "/"
}));
indexRouter.get("/log-out", (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        res.redirect("/")
    });
});

module.exports = indexRouter