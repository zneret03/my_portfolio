const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const serviceAccount = require('./permissions.json');
const { sendMail } = require('./mail');


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://my-portfolio-9cf20.firebaseio.com"  
});

const db = admin.firestore();

const app = express();
app.use(express.urlencoded({ extended : true }));
app.use(cors({ origin : true }));
app.use(express.json());
app.use(cookieParser());

//create data
app.post('/api/sendMail', async(request, response) => {
    
    try {
        const documents = db.collection('email').doc();
        await documents.create({
            name : request.body.name,
            email : request.body.email,
            message : request.body.message
        });

        let email = sendMail(request.body.name, request.body.email, (err, data) =>{
            if(err){
                response.status(500).json({message : 'Internal Error'});
            }else{
                response.status(200).send('Email sent successfully');
            }
        })

        return response.status(200).send(email);
    } 
    catch (error) {
        console.log(error.message);
        return response.status(500).send(error.message);
    }
});

exports.app = functions.https.onRequest(app);