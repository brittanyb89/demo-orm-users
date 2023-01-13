// use 'define' to define a model

import { DataTypes } from "sequelize";
import sequelize from "../conn.js";

const User = sequelize.define(
  "User",
  {
    // Model attributes are defined here
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: { msg: "Username must be alphanumeric" },
        notNull: { msg: "Username cannot be null" },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [8, 16],
          msg: "Password must be between 8 and 16 characters",
        },
        notNull: { msg: "Password cannot be null" },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: { msg: "Email must be valid" },
        notNull: { msg: "Email cannot be null" },
      },
    },
  },
  await sequelize.sync()
);
