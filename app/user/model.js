import bcrypt from "bcrypt";
import { DataTypes } from "sequelize";
import config from "../config.js";
import sequelize from "../conn.js";

const User = sequelize.define(
  "User",
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: { msg: "Username must be alphanumeric" },
        notNull: {
          msg: "Username cannot be null",
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [8],
          msg: "Password must be at least 8 characters long",
        },
        notNull: {
          msg: "Password cannot be null",
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: { msg: "Email must be valid" },
        notNull: {
          msg: "Email cannot be null",
        },
      },
    },
  },
  {
    timestamps: false,
    sequelize,
    underscored: true,
  }
);

await User.sync().catch((err) => {
  console.error(`Error syncing User model/table: ${err.message}`);
  process.exit(1);
});

// Hash password before saving to database
User.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt(config.saltRounds);
  user.password = await bcrypt.hash(user.password, salt);
});

export default User;
