const mongoose = require("mongoose");

// Define el esquema de bebida
const bebidaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  categoria: {
    type: String,
    enum: ["Cocteles", "Cervezas Importadas", "Shots", "Gaseosas"],
    required: true,
  },
  descripcion: String,
  precio: {
    type: Number,
    required: true,
  },
  imagen: String,
  // Otros campos que desees agregar
});

// Crea el modelo de bebida
const Bebida = mongoose.model("Bebida", bebidaSchema);

module.exports = Bebida;
