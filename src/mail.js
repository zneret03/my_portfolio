const nodeMailer = require("nodemailer");
require("dotenv").config();

var transport = nodeMailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
});

var mailOption = {
    from: "iandrilon2@gmail.com",
    to : "DrilonIan@yahoo.com",
    subject: "test test 123",
    text : "It works!!!"
}

transport.sendMail(mailOption).then(function(data){
    console.log("Email has been sent" + data.response);
}).catch(function(error){
    console.log("Email has not been sent" + error.response);
});
   
