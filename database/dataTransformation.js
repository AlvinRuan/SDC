const fs = require("fs");

const csvFilePath = "/Users/caskg/Documents/GitHub/SDC/product.csv";

fs.readFile(csvFilePath, "utf8", (err, data) => {
  if (err) {
    console.log("Error retreiving csv File", err);
  } else {
    console.log("Successfully retreived csv File");
  }
});
