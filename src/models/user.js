const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    edad: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('User', userSchema);