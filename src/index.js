const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const db = require("./db");
const cors = require("cors");

// Configuraciones
app.set("port", process.env.PORT || 4000);
app.set("view engine", "html");
app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile);
app.use(cors());

// Archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Middleware para parsear datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas
const userRoutes = require("./routes/userRoutes");
app.use("/", userRoutes);

app.listen(app.get("port"), () => {
  console.log("El servidor NODE está corriendo en el puerto", app.get("port"));
});
