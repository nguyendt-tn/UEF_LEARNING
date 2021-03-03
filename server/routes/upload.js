const { upload, view } = require("./../utils/uploads");
const router = require("express").Router();

router.post("/upload",upload);
router.get("/image",view);

module.exports = router;