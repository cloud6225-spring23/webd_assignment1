import { app } from "./app.js";
import { sq } from "./db/db.js";
import { sync } from "./model/User.js";

const PORT = "8000" || process.env.PORT;

const start = async () => {
  sq
    .authenticate()
    .then(() => {
      console.log("Connected to the Database successfully");
    })
    .catch((err) => {
      console.error("Unable to connect to DB");
    });

  sync();

  app.listen(PORT, () => {
    console.log(`Running on PORT: ${PORT}`);
  });
};

start();