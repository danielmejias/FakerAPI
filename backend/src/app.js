const express = require("express");
const cors = require("cors");
const app = express();
module.exports = app;

//settings
app.set("port", process.env.PORT || 6000);

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use("/api/users", require("./routes/users"));
app.use("/api/notes", require("./routes/notes"));

const faker = require("faker");

for (let i = 0; i < 8; i++) {
  const carnet = faker.uuid;
  const primerNombre = faker.name.firstName();
  const apellido = faker.name.lastName();
  const numeroTelefono = faker.uuid;
  const email = faker.email();
  const contrasenia = faker.name.jobTitle();

  console.log(`${suffix} ${firstName}
    ${lastName} works as '${jobTitle}'`);
}

module.exports = app;
