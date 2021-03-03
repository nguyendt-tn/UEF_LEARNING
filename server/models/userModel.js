const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator")
mongoose.plugin(slug)
const userSchema = new mongoose.Schema(
    {
        slug : {
            type : String,
            slug : "fullname",
            unique: true
        },
        user_key : {
            type : String
        },
        classes : {
            type : String
        },
        falculty : {
            type : String
        },
        fullname: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 8,
        },
        phone_number:  {
            type : String
        },
        birth : {
            type : Date
        },
        avatar: String,
        notification : [{
            title : {
                type : String
            },
            time : { 
                type : Date
            }
        }],
        mainClass: {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Class"
        }
    },
    {collection: "users", timestamps: true}
);

module.exports = mongoose.model("User", userSchema);
