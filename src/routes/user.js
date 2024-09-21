const express = require("express");
const userSchema = require("../models/user");

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
    .updateOne({ _id: id}, { $set: {nombre, edad, email}})
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

module.exports = router;