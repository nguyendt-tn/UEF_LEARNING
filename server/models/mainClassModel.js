const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator")
mongoose.plugin(slug)

const mainClassSchema =  new mongoose.Schema({
    title : {
        type : String
    },
    description : {
        type : String
    },
    message : [{
        time : {
            type : Date,
            default : Date.now()
        },
        user_id : {
            type : mongoose.Schema.Types.ObjectId,
            ref  : "User"
        },
        text : {
            type : String
        }
    }]
},{collection: "classes", timestamps: true})

module.exports = mongoose.model("Class",mainClassSchema);