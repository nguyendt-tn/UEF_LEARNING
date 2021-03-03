const { sendError } = require("./error");

module.exports = {
    isProtect :  (req,res,next) => {
        const token = req.headers.protection;
        if(!token || token != process.env.API_SECRET)
            return sendError(res,'You do not have access to this api',400);
        next();
    },
    notFound : (req,res,next) => {
        return sendError(res,'Not found this api',400);
    }
}