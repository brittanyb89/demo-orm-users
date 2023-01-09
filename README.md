# Node ORM Demo - Users

## Get Started

```sql
DROP DATABASE IF EXISTS user_db;

CREATE DATABASE user_db;
```

1. Install dependencies: `npm install`
1. Install additional dependencies: `npm i mysql2 sequelize express dotenv`
1. Add a script for `node --watch app/index.js` to `package.json`
1. Set up `.env`.
1. Set up `app/config.js` with `dotenv`.
1. Set up `app/conn.js` with `sequelize`. Use `await` to `authenticate` the connection and `export default`.

---

## Create a Model

Use `define` to create a model: `const User = sequelize.define(`

Don't forget to `sync`.

---

## Create a Controller

It's for `User`. For now, just set up a `create`. For the `create`, receive `data` as a parameter.

## Add [Validation](https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/) to the Model

1. No nulls for `username` and `password`.
1. Only allow alphanumeric characters for `username`.
1. `password` must be at least 8 characters long.

## `User.test.js`

This will be in `tests` directory.
