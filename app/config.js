import dotenv from "dotenv";
dotenv.config();

export default {
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
};
