// Importa la biblioteca mongoose
const mongoose = require("mongoose");

// URL de conexión a tu base de datos MongoDB
const dbUrl = "mongodb://127.0.0.1:27017/cocktailcove"; // Ajusta la URL y el nombre de la base de datos según tus necesidades

// Conecta a la base de datos
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// Manejador de eventos para la conexión exitosa
db.on("connected", () => {
  console.log("Conexión exitosa a la base de datos MongoDB");
});

// Manejador de eventos para errores de conexión
db.on("error", (err) => {
  console.error("Error en la conexión a la base de datos MongoDB:", err);
});

// Exporta la conexión para que pueda ser utilizada en otros archivos
module.exports = db;
