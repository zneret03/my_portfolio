const nodeMailer = require('nodemailer');
const { message } = require('./message');
require("dotenv").config();

    const sendMail = (name, email, callBack) =>
    {
        const transport = nodeMailer.createTransport({
            service : "Gmail",
            auth:{
                user : process.env.NODE_ENV_EMAIL,
                pass:  process.env.NODE_ENV_PASSWORD
            }
        });
        
       const mailOption = {
            from: 'iandrilon2@gmail.com',
            to : email,
            subject:`Hello ${name}`,
            html : message()
        };

       return transport.sendMail(mailOption, (err, data) => {
            if(err){
                callBack(null, err.response);
            }
            else{
                callBack(data.response, null);
            }
       });
    } 

module.exports = { sendMail };