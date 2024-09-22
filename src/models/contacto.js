const mongoose = require("mongoose");

const contactoSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    email: {
        type: String,
        required: true
    },
    mensaje: {
        type: String,
        require: false
    }
});


module.exports = mongoose.model('contacto', contactoSchema);