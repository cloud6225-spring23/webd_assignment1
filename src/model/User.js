import { DataTypes } from "sequelize";
import { sq } from "../db/db.js";

const User = sq.define("user", {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },

  firstName: {
    type: DataTypes.STRING,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
  
});

const sync = () => {
  sq
    .sync()
    .then(() => {
      console.log("User Table Created");
    })
    .catch((err) => {
      console.error("Unable to create table: " + err);
    });
};

export { sync, User };