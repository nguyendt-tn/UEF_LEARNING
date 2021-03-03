const User = require("./../models/userModel");
const { sendSuccess, sendError } = require('./../utils/error');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Email = require('./../utils/email');
const {OAuth2Client} = require("google-auth-library");

exports.signup = async(req,res,next) => {
    const { fullname, email, password, phone_number, birth, avatar, user_key, classes, falculty } = req.body;
    try {
        let newUser = await User.create({
            fullname : fullname,
            email  : email,
            password : bcrypt.hashSync(password,bcrypt.genSaltSync(parseInt(process.env.SALT_ROUND))),
            phone_number : phone_number,
            birth : birth,
            avatar : avatar,
            user_key : user_key,
            classes : classes,
            falculty : falculty
        });
        if(!newUser)    return sendError(res,"Something went wrong, try later",400);
        return sendSuccess(res,{ message : "Signup successfull" },200);
    } catch (error) {
        return sendError(res,`${error}`,500);
    }
}

exports.login = async (req,res,next) => {
    const { user_key, password } = req.body;
    try {   
    
        let user = await User.findOne({ user_key : user_key});
        if(!user || !bcrypt.compareSync(password,user.password))
            return sendError(res,'Username or Password incorrect',400);
        let token = jwt.sign({ user_key : user.user_key } , process.env.JWT_SECRET, { expiresIn : process.env.JWT_EXPIRES_IN });
        res.cookie('token_auth', token, {
            expires: new Date( Date.now() +  process.env.JWT_EXPIRES_IN * 24 * 60 * 60 * 1000 ),
            httpOnly: true  
        });
        return sendSuccess(res,{ token_auth : token, user_key : user.user_key, user_name : user.fullname },200);
    } catch (error) {
        return sendError(res,`${error}`,500);
    }
}

exports.googleLogin = async (req,res,next)=>{
    const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
    try {
        const { idToken } = req.body;
        let respone = await client.verifyIdToken({ idToken : idToken, audience : process.env.GOOGLE_CLIENT_ID });
        let {email, email_verified} = respone.payload;
        if(!email_verified)
            return sendError(res,'Google login failed, try later',400);
        let user = await User.findOne({ email : email });
        if(!user)
            return sendError(res,'User not found',400);
        let token = jwt.sign({ user_key : user.user_key } , process.env.JWT_SECRET, { expiresIn : process.env.JWT_EXPIRES_IN });
        res.cookie('token_auth', token, {
            expires: new Date( Date.now() +  process.env.JWT_EXPIRES_IN * 24 * 60 * 60 * 1000 ),
            httpOnly: true  
        });
        return sendSuccess(res,{ token_auth : token, user_key : user.user_key, user_name : user.fullname },200);
    } catch (error) {
        return sendError(res,`${error}`,500)
    }
}


exports.logout = async (req,res,next) => {
    try {
        res.cookie('token_auth', 'loggedout', {
            expires: new Date(Date.now() + 10 * 1000),
            httpOnly: true
        });
        return sendSuccess(res,{ message : "Logout successfull" },200);
    } catch (error) {
        return sendError(res,`${error}`,500);   
    }
}
exports.pushNoti = async(req,res,next) => {
    const { title , time } = req.body;
    try {
        let newNoti = await User.findByIdAndUpdate(req.user._id,{
            $push : {
                notification : {
                    title : title,
                    time : Date.now()
                }
            }
        });
        if(!newNoti)    return sendError(res,"Something went wrong, try later",500);
        return sendSuccess(res,"Push notification successfull",200);
    } catch (error) {
        return sendError(res,`${error}`,500);
    }
}

exports.isAuth = async (req,res,next) => {
    let token;
    try {
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer'))
            token = req.headers.authorization.split(' ')[1];
        else if (req.cookies.token_auth)
            token = req.cookies.token_auth;
        if(!token)
            return sendError(res, 'Not found token',400 );
        jwt.verify(token,process.env.JWT_SECRET, (err,decoded) => {
            if(err)
                return sendError(res,'Token is invalid or expires In, Please login and try again',400 );
            req.decoded = decoded;
            next();
        });
    } catch (error) {
        return sendErorr(res,`${error}`);
    }
}
exports.isLogged = async(req,res,next) => {
    try {
        let user = await User.findOne({ user_key : req.decoded.user_key });
        if(!user)
            return sendError(res, 'User not found',400 );
        user.password = undefined;
        req.user = {
            _id : user._id,
        };
        return next();
    } catch (error) {
        return sendError(res, 'User key invalid',400);
    }
}
exports.getMe = async(req,res,next) => {
    try {
        let user  = await User.findById(req.user._id);
        if(!user)   return sendError(res,"Something went wrong, try later",500);
        return sendSuccess(res,{ user : user },200);
    } catch (error) {
        return sendError(res,`${error}`,500);
    }
}
exports.updateAvt = async (req,res,next) => {
    const { avatar } = req.body;
    try {
        let ftechUser = await User.findByIdAndUpdate(req.user._id,{
            avatar : avatar
        });
        if(!ftechUser)  return sendError(res,"Something went wrong, try later",500);
        return sendSuccess(res,"update user successfull",200);
    } catch (error) {
        return sendError(res,`${error}`,500);
    }
}
exports.addHistory = async(req,res,next) => {
    const { type, guest, doctor, hospital, glucose, gan, bmi, note, drug } = req.body;
    try {
        let newHistory = await User.findByIdAndUpdate(req.user._id,{
            $push : {
                history : {
                    type : type,
                    guest : guest,
                    doctor : doctor,
                    hospital : hospital,
                    glucose : glucose,
                    gan : gan,
                    bmi : bmi,
                    note : note,
                    drug : drug
                }
            }
        });
        if(!newHistory) return sendError(res,"Something went wrong, try later",500);
        return sendSuccess(res,{ message : "add successfull" },200)
    } catch (error) {
        return sendError(res,`${error}`,500);
    }
}
exports.getOneHs = async(req,res,next ) => {
    let {history_id} = req.params;
    try {
        let history = await User.findOne({ _id : req.user._id});
        let hs =  history.history.filter(e=>e._id == history_id);
        if(!history)    return sendError(res,"Something went wrong, try later",500);

        return sendSuccess(res,{ history : hs[0] });
    } catch (error) {
        return sendError(res,`${error}`,"Something went wrong, try later",500);
    }
}
exports.checkRole = (...roles) => {
    return (req,res,next) => {
        if (!roles.includes(req.user.role))
            return sendError(res,'You do not have permission to perform this action',400);
        next();
    }
}
// exports.forgot_PW = async (req,res,next) => {
//     let { email } = req.body;
//     try {
//         let user = await User.findOne({ email : email });
//         if(!user)
//             return sendError(res,'User not found');
//         let token = jwt.sign({ email : user.email },process.env.JWT_PASSWORD, { expiresIn : "1d" });
//         let mailOption = {
//             from: 'noreply@tn.dev', 
//             to: user.email, 
//             subject: 'Reset Your Password', 
//             text: 'Hello,\n\n' + 'Please verify your account by clicking the link: \nhttp:\/\/' + process.env.URL_CLIENT + '\/auth/reset-password\/' + token 
//         };
//         try {
//             Email.sendEmail(mailOption);
//             return sendSuccess(res, { success :  'Send mail reset password successfull' });
//         } catch {
//             return sendError(res,`${error}`);
//         }
//     } catch (error) {
//         return sendError(res,`${error}`);
//     }
// }

// exports.reset_PW = async (req,res,next) => {
//     let {token ,password} = req.body;
//     try {
//         jwt.verify( token, process.env.JWT_ACTIVE, async (err,result) => {
//             if(err)
//                 return sendError(res,'Token is invalid or expires in');
//             let updateUser = await User.findByIdAndUpdate({ _id : result.id },{
//                 password : bcrypt.hashSync(password,bcrypt.genSaltSync(Math.random(10,20)))
//             });
//             if(!updateUser)
//                 return sendError(res,'Something went wrong, try later');
//             return sendSuccess(res, { success : 'Update new password successfull' });
//         });
//     } catch (error) {
//         return sendError(res,`${error}`);
//     }
// }




