const mongoose = require("mongoose");

const clienteSchema = new mongoose.Schema({
  cedula: {
    type: String,
    required: true,
    unique: true,
  },
  nombreCompleto: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  telefonoMovil: {
    type: String,
    required: true,
  },
  fechaNacimiento: {
    type: Date,
    required: true,
  },
  // aceptaTerminos: {
  //   type: Boolean,
  //   required: true,
  // },
});

const Cliente = mongoose.model("Cliente", clienteSchema);

module.exports = Cliente;
