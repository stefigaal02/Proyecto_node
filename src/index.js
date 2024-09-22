const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();  //variables 

const userRoutes = require("./routes/user");

const app = express();
const port = process.env.PORT || 9000;

app.use(cors({
    allowedHeaders: '*',
    origin: '*',
    methods: '*'
}));

//middlewarwe
app.use(express.json());
app.use('/api', userRoutes);


//rutas
app.get("/", (req, res) => {
    res.send("Bienvenidos a mi API")
});

//mogodb conexion
console.log(process.env.MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((error) => console.error(error));

app.listen(port, () =>
    console.log('Servidor iniciado en el puerto ', port)
);

