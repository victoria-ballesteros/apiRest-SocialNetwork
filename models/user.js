const { Schema, model } = require("mongoose");

//Objeto JSON
const UserSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  //apellido
  surname: String,
  //username
  nick: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "role_user",
  },
  //avatar
  image: {
    type: String,
    default: "default.png",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

//Exportarlo devolviendo un model para usarlo con la base de datos
module.exports = model("User", UserSchema);
//colection: users por defecto (en minusculas y plural)
