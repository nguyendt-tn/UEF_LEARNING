const { sendSuccess, sendError } = require('./../utils/error');
const Forum = require("./../models/forumModel");
const axios = require('axios');

exports.createForum = async (req,res,next) => {
    let { question } = req.body;
    try {
        let newForum = await Forum.create({
            question : question,
            poster_by : req.user._id
        });
        if(!newForum)  return sendError(res,"Something went wrong, try later",500);
        return sendSuccess(res,{ message : "create new post forum successfull", forum_id : newForum._id },200);
    } catch (error) {
        return sendError(res,`${error}`,500);
    }
}
const FormData = require('form-data');
exports.getAll = async(req,res,next) => {
    try {

        let forums = await Forum.find().populate("poster_by","fullname avatar").populate("answer.user_id","fullname avatar");
        return sendSuccess(res,{ forums : forums });
    } catch (error) {
        return sendError(res,`${error}`,500);
    }
}
exports.botResult = async(req,res,next) =>{
    let { question } = req.body;
    try {
        let form = new FormData();
        form.append("sentence",question);
        axios.create({
            headers: form.getHeaders()
            }).post('http://localhost:4000/resolve', form).then(response => {
            let listAnswer = [];
            for(let i=0;i<response.data.result.length;i++){
                listAnswer.push("Những đán áp của chỗ trống "+(i+1)+" là : "+response.data.result[i][0]+", "+response.data.result[i][1]+", "+response.data.result[i][2]+", "+response.data.result[i][3]);
            }
            return sendSuccess(res,{ result : listAnswer })
            }).catch(error => {
            if (error.response) {
            console.log(error.response);
            }
            console.log(error.message);
        });
    } catch (error) {
        return sendError(res,`${error}`,500);
    }
}
exports.getOne = async(req,res,next) => {
    const { forum_id } = req.params;
    try {
        let forum = await Forum.findById(forum_id).populate("poster_by","fullname avatar").populate("answer.user_id","fullname avatar");
        if(!forum) return sendError(res,"Something went wrong, try later",500);
        return sendSuccess(res,{ forum : forum },200);
    } catch (error) {
        return sendError(res,`${error}`,500);
    }
}
exports.answerForum = async (req,res,next) => {
    const { forum_id, user_id, text } = req.body;
    try {
        let answer = await Forum.findByIdAndUpdate(forum_id,{
            $push : {
                answer : {
                    user_id : user_id,
                    text : text
                }
            },
        });
        if(!answer) return sendError(res,"Something went wrong, try later",500);
        return sendSuccess(res,{ message : "answer question successfull" },200);
    } catch (error) {
        return sendError(res,`${error}`,500);
    }
}
exports.deleteForum = async(req,res,next) =>{
    const { forum_id } = req.body;
    try {
        let thisForum = await Forum.findById({ _id : forum_id, poster_by:  req.user._id });
        if(!thisForum) return sendError(res,"Cann't find this post",500);
        let deleteForum = await Forum.findByIdAndDelete(thisForum._id);
        if(!deleteForum) return sendError(res,"Something went wrong, try later",500);
        return sendSuccess(res,"Delete forum successfull",200);
    } catch (error) {
        return sendError(res,`${error}`,500);
    }
}