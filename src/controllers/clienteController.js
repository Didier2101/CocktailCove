// Importa el modelo de Cliente
const { renderFile } = require("ejs");
const Cliente = require("../models/clienteModel");

// Controlador para registrar un nuevo cliente
exports.registrarCliente = (req, res) => {
  // Obtiene los datos del formulario
  const cedula = req.body.cedula;
  const nombreCompleto = req.body.nombre;
  const correo = req.body.correo;
  const password = req.body.password;
  const telefonoMovil = req.body.telefono;
  const fechaNacimiento = req.body["fecha-nacimiento"];
  // const aceptaTerminos = req.body["terminos-condiciones"];

  // Crea un nuevo cliente
  const nuevoCliente = new Cliente({
    cedula: cedula,
    nombreCompleto: nombreCompleto,
    correo: correo,
    password: password,
    telefonoMovil: telefonoMovil,
    fechaNacimiento: fechaNacimiento,
    // aceptaTerminos: aceptaTerminos,
  });
  // console.log(nuevoCliente);
  // Guarda el nuevo cliente en la base de datos
  nuevoCliente
    .save()
    .then((cliente) => {
      // Muestra los datos del cliente en la consola
      console.log("Inicio de sesión exitoso:", cliente);
      res.redirect("/login");
    })
    .catch((error) => {
      // Maneja errores y muestra un mensaje en caso de fallo
      console.error("Error al registrar el cliente:", error);
      res.status(500).json({ message: "Error al registrar el cliente" });
    });
};

exports.iniciarSesion = (req, res) => {
  const correo = req.body.correo;
  const password = req.body.password;
  console.log(correo);
  console.log(password);
  // Buscar el cliente en la base de datos por correo y contraseña
  Cliente.findOne({ correo: correo, password: password })
    .then((cliente) => {
      if (cliente) {
        // Iniciar sesión exitosamente
        res.redirect("/dashboard");
      } else {
        // Credenciales incorrectas
        res.status(401).json({ message: "Credenciales incorrectas" });
      }
    })
    .catch((error) => {
      console.error("Error al iniciar sesión:", error);
      res.status(500).json({ message: "Error al iniciar sesión" });
    });
};
