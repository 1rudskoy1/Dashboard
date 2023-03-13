const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const PORT = process.env.PORT || config.get('PORT');
const app = express();
var bodyParser = require('body-parser')
const authRouters = require('./routers/auth.routers');
const skillsRoutes = require('./routers/skills.routers');
const changeRoutes = require('./routers/change.routers');
const cookieParser = require('cookie-parser');
const cors = require('cors')
app.use(cors())

app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/auth', authRouters);
app.use('/api/skills', skillsRoutes);
app.use('/api/change', changeRoutes);

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