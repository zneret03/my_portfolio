const nodeMailer = require("nodemailer");
const mailgun = require('nodemailer-mailgun-transport');
require("dotenv").config();

    const sendMail = (name, email, message, callBack) =>
    {
        
        const auth = {
            auth: {
                api_key: process.env.api_key,
                domain: process.env.domain
            }   
        }
         
        const transport = nodeMailer.createTransport(mailgun(auth));
        
        const mailOption = {
            from: email,
            to : 'DrilonIan@yahoo.com',
            subject: name,
            text :  message
        }

        transport.sendMail(mailOption, (err, data) => {
            if(err){
                callBack(err.response, null);
            }
            else{
                callBack(null, data.response);                                                              
            }
        })
    } 

module.exports = { sendMail };