
const newUser = new User({ name: 'asmaa', email: 'asmaaatahaa@gmail.com', age: '22', gender: 'Female', country: 'Cairo' });


const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }

});
const User = mongoose.model('User', userSchema);
module.exports = User;