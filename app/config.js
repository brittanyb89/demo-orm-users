import dotenv from "dotenv";
dotenv.config();

export default {
  db: {
    name: process.env.DB_NAME,
    username: process.env.DB_USER,
  },
  port: process.env.PORT,

  // make sure that this is a number
  saltRounds: process.env.SALT_ROUNDS,
};
