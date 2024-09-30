const mongoose = require('mongoose');

const ComentarioSchema = new mongoose.Schema({
    temaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tema', required: true },
    autor: { type: String, required: true },
    mensaje: { type: String, required: true },
    creadoEn: { type: Date, default: Date.now }
});

const Comentario = mongoose.model('Comentario', ComentarioSchema);

module.exports = Comentario;
