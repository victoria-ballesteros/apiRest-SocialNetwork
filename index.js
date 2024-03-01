//Importar dependencias
const { connection } = require("./database/connection");
//  pera crear el servidor de Node
const express = require("express");
const cors = require("cors");
const puerto = 8080;
//Para cargar las rutas
const userRoutes = require("./routes/user");

//Conexión a base de datos
console.log("Starting node application");
connection();

//Crear servidor Node
const app = express();

//Configurar cors (Middleware: algo que se ejecuta antes que las propias rutas de la api)
app.use(cors());

//Convertir los datos del body a objetos JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Cargar configuración de rutas
app.use("/users", userRoutes);

//Poner servidor a escuchar peticiones http
app.listen(puerto, () => {
  console.log("Server running in port " + puerto);
});
