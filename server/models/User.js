const {Schema, model, ObjectId} = require('mongoose');

const User = new Schema({
    email: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    password: {type: String, required: true},
    avatar: {type: String},
    skills: [{type: ObjectId}]
})

module.exports = model('User', User);