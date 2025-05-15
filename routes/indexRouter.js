const { Router } = require("express");
const indexController = require("../controllers/indexController")
const indexRouter = Router()

indexRouter.get("/", indexController.indexHomeGet);
indexRouter.get("/sign-up", indexController.indexSignUpFormGet);
indexRouter.post("/sign-up", indexController.indexSignUpFormPost);
indexRouter.post("/log-in", indexController.indexAuthenticateLogin);

module.exports = indexRouter