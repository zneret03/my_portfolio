const express = require('express');
const cookieParser = require('cookie-parser');
const { sendMail } = require('./mail');

const app = express();

//to get body request
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//middle ware
app.use(cookieParser());


app.post("/api/sendMail",  (req, res) => {
    sendMail(req.body.name, req.body.email, (err, data) =>
    {
        if(err){
            res.status(500).json({ message: 'Internal Error'});
        }
        else{   
            res.json({ message: 'Email sent successfully' });
        }
    });
});

app.listen(5000, ()=>{
    console.log("server listen to port 5000");
});

