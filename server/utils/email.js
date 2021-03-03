const nodemailer = require("nodemailer");


exports.sendEmail = (mailOption) => {
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.EMAIL_USER,
            pass:process.env.EMAIL_PASSWORD
        }
    });
    return transporter.sendMail(mailOption);
}