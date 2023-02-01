const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const PORT = process.env.PORT || config.get('PORT');
const app = express();
const authRouters = require('./routers/auth.routers');

app.use('/api/auth', authRouters);

const start = async() => {
    try{
        await mongoose.connect(config.get('mongooseUrl'));
        app.listen(PORT, () => {
            console.log("Started server " + PORT)
        });
    }catch(e){
        console.log(e)
    }
}

start();