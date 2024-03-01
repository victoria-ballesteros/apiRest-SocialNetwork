//LLamar a Express
const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

//Definir rutas
//Para users
router.post("/sign-up", userController.signUp);
router.post("/log-in", userController.logIn);

//Exportar rutas
module.exports = router;
