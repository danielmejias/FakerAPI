const { ModalsPluginWeb } = require("@capacitor/core");
const usersCtrl = {};
const User = require("../models/User");

usersCtrl.createUser = async (req, res) => {
  const { carnet, primerNombre, apellido, numeroTelefono, email, contrasenia } =
    req.body;
  const newUser = new User({
    carnet,
    primerNombre,
    apellido,
    numeroTelefono,
    email,
    contrasenia,
  });
  const doc = await newUser.save();
  if (!doc) res.status(404).json({ message: "Error creating user" });
  res.json("User created");
};
usersCtrl.getUsers = async (req, res) => {
  const users = await User.find();
  if (!users) res.status(404).json({ message: "Not found" });
  res.json(users);
};
usersCtrl.getUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) res.status(404).json({ message: "Not found" });
  res.json(user);
};
usersCtrl.editUser = async (req, res) => {
  const { primerNombre, apellido, numeroTelefono, email, contrasenia } =
    req.body;
  const doc = await User.findByIdAndUpdate(req.params.id, {
    primerNombre: primerNombre,
    apellido: apellido,
    numeroTelefono: numeroTelefono,
    email: email,
    contrasenia: contrasenia,
  });
  if (!doc) res.status(404).json({ message: "Error updating user" });
  res.json({ message: "User Updated" });
};
usersCtrl.deleteUser = async (req, res) => {
  const doc = await User.findByIdAndDelete(req.params.id);
  if (!doc) res.status(404).json({ message: "Error deleting user" });
  res.json("User Deleted");
};
module.exports = usersCtrl;
