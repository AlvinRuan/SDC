require("dotenv").config({ path: __dirname + "/../.env" });
const { Client } = require("pg");

const client = new Client({
  user: process.env.dbUser,
  password: process.env.dbPw,
  database: process.env.dbName,
  host: "localhost",
  port: 5432,
});

client
  .connect()
  .then(() => {
    console.log("✅ Connected to the database successfully!");
    // return client.end(); // Close the connection after testing
  })
  .catch((err) => console.error("Error connecting to database", err));

module.exports = client;
