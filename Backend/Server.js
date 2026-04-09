const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect("mongodb://localhost:27017/dal", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

console.log("🟢 Base de datos conectada");

// Rutas
app.use("/api/planos", require("./routes/planos"));

app.listen(5000, () => {
  console.log("🚀 Backend corriendo en puerto 5000");
});
const mongoose = require("mongoose");

const PlanoSchema = new mongoose.Schema({
  nombre: String,
  datos: Object, // coordenadas, muros, etc.
  fecha: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Plano", PlanoSchema);
const router = require("express").Router();
const Plano = require("../models/Plano");

// Crear plano
router.post("/", async (req, res) => {
  const nuevoPlano = new Plano(req.body);
  const guardado = await nuevoPlano.save();
  res.json(guardado);
});

// Obtener planos
router.get("/", async (req, res) => {
  const planos = await Plano.find();
  res.json(planos);
});

module.exports = router;
const guardarPlano = async () => {
  await fetch("http://localhost:5000/api/planos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nombre: "Plano DAL",
      datos: objetos,
    }),
  });

  alert("Plano guardado");
};
app.post("/ia", async (req, res) => {
  const prompt = req.body.prompt;

  // Aquí conectas con IA real (OpenAI)
  const respuesta = await generarPlanoIA(prompt);

  res.json(respuesta);
});
// usuarios.js
const users = [];

export function registrar(usuario) {
  users.push(usuario);
}

export function login(nombre) {
  return users.find(u => u.nombre === nombre);
    }
