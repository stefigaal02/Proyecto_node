const mongoose = require('mongoose');

const TemaSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descripcion: { type: String, required: true },
    autor: { type: String, required: true },
    creadoEn: { type: Date, default: Date.now },
    respuestas: [
        {
            autor: { type: String, required: true },
            mensaje: { type: String, required: true },
            creadoEn: { type: Date, default: Date.now }
        }
    ]
});

const Tema = mongoose.model('Tema', topicSchema);

module.exports = Tema;