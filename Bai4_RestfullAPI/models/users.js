const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    mssv: {
        type: String,
        require: true,
    },
    class: {
        type: String,
        require: true,
    },
});

module.exports = mongoose.model('Users', userSchema);
