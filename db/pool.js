const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost", // or wherever the db is hosted
  user: "jsdev4web",
  database: "pre_auth",
  password: "password",
  port: 5432 // The default port
});