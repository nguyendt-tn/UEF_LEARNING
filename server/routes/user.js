const router = require("express").Router();
const { login,googleLogin,logout,signup,getOneHs, updateAvt,isAuth, isLogged, getMe, addHistory, pushNoti } = require("./../controllers/authController");  

// Login user
router.post("/signup",signup);
router.post("/login",login); // raw user
router.post("/google-login",googleLogin);  // google user
router.post("/notification/push",isAuth,isLogged,pushNoti);
router.put("/avatar/update",isAuth,isLogged,updateAvt);
// Logout
router.post("/logout",isAuth,isLogged,logout);  // logout

// User
router.get("/me",isAuth,isLogged,getMe);    // get user

router.post("/history/add",isAuth,isLogged,addHistory);
router.get("/history/:history_id",isAuth,isLogged,getOneHs);
module.exports = router;