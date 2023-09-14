const express = require("express");
const router = express.Router();
const path = require("path"); // Importa el módulo path
const ClienteController = require("../controllers/clienteController");

// Rutas API para clientes
router.post("/register", ClienteController.registrarCliente);
router.post("/login", ClienteController.iniciarSesion);

// Ruta para renderizar la página de inicio
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
});
// Ruta para renderizar la página de login
router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/login.html"));
});
router.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/register.html"));
});
router.get("/menu", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/menu.html"));
});
router.get("/reservar", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/reservar.html"));
});
router.get("/nosotros", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/nosotros.html"));
});
router.get("/contacto", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/contacto.html"));
});
router.get("/blog", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/blog.html"));
});
router.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/dashboard.html"));
});

module.exports = router;
