const router = require("express").Router();
const { isAuth, isLogged } = require("./../controllers/authController");
const { createForum,getAll, getOne,answerForum, deleteForum,botResult } = require("./../controllers/forumController");


router.post("/create",isAuth,isLogged,createForum);
router.get("/all",getAll);
router.get("/forum/:forum_id",getOne);
router.post("/answer",answerForum);
router.delete("/delete",deleteForum);
router.post("/bot",botResult);
module.exports = router;

