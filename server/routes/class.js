const router = require("express").Router();
const { createClass, addMessage, getOneClass } = require("./../controllers/classController")
const { isAuth, isLogged } = require("./../controllers/authController")

router.post("/create",createClass);
router.post("/message/create",isAuth,isLogged,addMessage);
router.get("/class/:class_id",getOneClass);

module.exports = router;