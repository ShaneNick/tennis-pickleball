// backend/src/models/user.model.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: { type: String, required : true},
    lastName: { type:String, required: true},
    username: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true, trim: true },
    handOrientation: { type: String, required: true, enum: ['left', 'right'] },
    sport: { type: [String], enum: ['tennis', 'pickleball'], required: true },
    level: {type:String,
            enum:[
                'Novice',
                'Beginner',
                'Advanced Beginner',
                'Low Intermediate',
                'Intermediate'
            ],
        required: true
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});


const User = mongoose.model('User', userSchema);

module.exports = User;
