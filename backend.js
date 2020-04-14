const express = require('express');
const cookieParser = require('cookie-parser');
const { sendMail } = require('./mail');

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());

app.post("/api/sendMail",  (req, res) => {
    sendMail(req.body.name, req.body.email, req.body.message, (err, data) =>{
        if(err){
            console.log(res.status(500).json({message : "Internal error"}));
        }
        else{
            console.log(res.status(200).json({message : "Email sent properly"}));
        }
    });
});

app.listen(5000, ()=>{
    console.log("server listen to port 5000");
});

