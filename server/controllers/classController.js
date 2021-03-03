const { sendSuccess, sendError } = require('./../utils/error');
const Class = require("./../models/mainClassModel");

exports.createClass = async(req,res,next) => {
    const { title, description } = req.body;
    try {
        let newClass = await Class.create({
            title : title,
            description : description
        });
        if(!newClass)   return sendError(res,"Something went wrong, try later",500);
        return sendSuccess(res,{ message : "create class successfull" },200);
    } catch (error) {
        return sendError(res,`${error}`,500);
    }
}
exports.addMessage = async(req,res,next) => {
    const { class_id, text } = req.body;
    try {   
        
        let newMess = await Class.findByIdAndUpdate(class_id,{
            $push : {
                message : {
                    user_id : req.user._id,
                    text : text
                }
            }
        });
        if(!newMess)   return sendError(res,"Something went wrong, try later",500);
        return sendSuccess(res,{ message : "create mess successfull" },200);
    } catch (error) {
        return sendError(res,`${error}`,500);
    }
}
exports.getOneClass = async(req,res,next) => {
    const { class_id }  = req.params;
    try {
        let classes = await Class.findById(class_id).populate("message.user_id","fullname avatar");
        return sendSuccess(res,{ classes  : classes },200);
    } catch (error) {
        return sendError(res,`${error}`,500);
    }
}