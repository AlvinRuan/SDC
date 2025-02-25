import fs from "fs";
import client from "../model/dbConnection.js";

const csvFilePath = "/Users/caskg/Documents/GitHub/SDC/product.csv";

fs.readFile(csvFilePath, "utf8", (err, data) => {
  if (err) {
    console.log("Error retreiving csv File", err);
  } else {
    const rows = data.split("\n");

    for (let i = 1; i < rows.length; i++) {
      var split_by_comma = rows[i].split(",");

      const id = split_by_comma[0];
      const name = split_by_comma[1];
      const slogan = split_by_comma[2];
      const description = split_by_comma[3];
      const category = split_by_comma[4];
      const default_price = split_by_comma[5];

      const query = `INSERT INTO product(id, name, slogan, description, category, default_price) VALUES ($1, $2, $3, $4, $5, $6)`;
      const values = [id, name, slogan, description, category, default_price];

      client
        .query(query, values)
        .then((result) => {
          console.log("Successfully inserted!", result.rows[0]);
        })
        .catch((err) => {
          console.log("Unfortunately, there's an error", err);
        });
    }
  }
});

// Close Client after insertion
// client.end();
