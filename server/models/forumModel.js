const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator")
mongoose.plugin(slug)

const forumSchema = new mongoose.Schema({
    question : {
        type : String
    },
    poster_by : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    isAwserd : {
        type : Boolean,
        default : false
    },
    answer : [{
        user_id : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User"
        },
        text : {
            type : String
        }
    }]
},{collection: "forums", timestamps: true})

module.exports = mongoose.model("Forum", forumSchema);