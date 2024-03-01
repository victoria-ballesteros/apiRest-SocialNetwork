//Importar dependencias y módulos
const User = require("../models/user");
const bCrypt = require("bcrypt");

//Crear acciones

//1. Registro de usuarios

const signUp = (req, res) => {
  //Recoger datos de la petición
  const params = req.body;
  //Validación de los datos
  if (params.name && params.email && params.password && params.nick) {
    //Controlar usuarios duplicados
    let userToSave = new User(params);
    User.find({
      $or: [
        { email: userToSave.email.toLowerCase() },
        { nick: userToSave.nick.toLowerCase() },
      ],
    })
      .exec()
      .then((users) => {
        //existe al menos un usuario con alguno de los datos introducidos
        //Si hay users y son mayores a 1 (aunque siempre habrán users)
        if (users && users.length >= 1) {
          return res.status(404).json({
            status: "success",
            message: "Data alredy exists.",
          });
        } else {
          //No retorna usuarios repetidos

          //Cifrar la contraseña
          bCrypt.hash(userToSave.password, 10, (err, pwd) => {
            userToSave.password = pwd;
            //Guardar usuario en la base de datos
            userToSave
              .save()
              .then((user) => {
                return res.status(200).json({
                  message: "User enroled succesfully.",
                  user,
                });
              })
              .catch((err) => {
                return res.status(500).json({
                  message: "Error at saving data.",
                  user,
                });
              });
          });
        }
      })
      .catch((err) => {
        return res.status(500).json({
          status: "error",
          message: "Unknonw error, please try again.",
        });
      });
  } else {
    return res.status(404).json({
      message: "There's data missing.",
    });
  }
};

//2. Acceso de usuario
const logIn = (req, res) => {
  //Recoger parámetros
  //Buscar en la base de datos al usuario
  //Si existe, validar contraseña
  //Devolver token
  //Devolver datos del usuario
};

//Exportar acciones

module.exports = {
  signUp,
  logIn,
};
