const express = require("express");
const userSchema = require("../models/user");
const contactoSchema = require("../models/contacto");
const temaSchema = require("./models/Tema"); 

const router = express.Router();

//definir ruta para crear usuario
router.post('/users', (req, res) => {
    const user = userSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//obtener todos los usuarios
router.get('/users', (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//buscar usuario
router.get("/users/:id", (req, res) => {
    const { id } = req.params;
    userSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//actualizar usuario
router.put("/users/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, edad, email } = req.body;
    userSchema
        .updateOne({ _id: id }, { $set: { nombre, edad, email } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//eliminar usuario
router.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    console.log(userSchema);
    userSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// ruta para crear y almacenar un mensaje de contacto del portafolio
router.post("/contactoMensaje", (request, response) => {
    console.log(request.body);
    contactoSchema(request.body).save().then(result => {
        const { nombre, email, mensaje } = request.body;
        userSchema({ nombre, email, edad: 0 }).save().then((data) => {
            response.json({ user: data, contacto: result });
        }).catch((error) => {
            response.json({ message: error, contacto: result })
        });
    }).catch(err => {
        console.log(err);
        response.json({ message: err })
    })

})

//crear un nuevo tema de discusion
router.post('/temas', (req, res) => {
    const tema = new temaSchema(req.body);
    tema
        .save()
        .then((data) => res.status(201).json(data))
        .catch((error) => res.status(500).json({ message: error }));
});

// obtener todos los temas
router.get('/temas', (req, res) => {
    temaSchema
        .find()
        .then((data) => res.status(200).json(data))
        .catch((error) => res.status(500).json({ message: error }));
});

// obtener un tema por id
router.get('/temas/:id', (req, res) => {
    const { id } = req.params;
    temaSchema
        .findById(id)
        .then((data) => res.status(200).json(data))
        .catch((error) => res.status(500).json({ message: error }));
});

// actualizar un tema de discusion
router.put('/temas/:id', (req, res) => {
    const { id } = req.params;
    const { titulo, descripcion, autor } = req.body;
    temaSchema
        .updateOne({ _id: id }, { $set: { titulo, descripcion, autor } })
        .then((data) => res.status(200).json(data))
        .catch((error) => res.status(500).json({ message: error }));
});

// eliminar un tema de discusion
router.delete('/temas/:id', (req, res) => {
    const { id } = req.params;
    temaSchema
        .deleteOne({ _id: id })
        .then((data) => res.status(200).json(data))
        .catch((error) => res.status(500).json({ message: error }));
});

module.exports = router;