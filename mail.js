const nodeMailer = require("nodemailer");
const mailgun = require('nodemailer-mailgun-transport');
//require("dotenv").config();

    const sendMail = (name, email, message, callBack) =>
    {
        
        const auth = {
            auth: {
                api_key: "256555756898430f3329b57f751a72fe-915161b7-98fa2fe5",
                domain: "sandbox6ea0c70cd72648b9851e80ff0856acbe.mailgun.org"
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