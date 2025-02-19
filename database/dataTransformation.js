const fs = require("fs");

const csvFilePath = "/Users/caskg/Documents/GitHub/SDC/product.csv";

fs.readFile(csvFilePath, "utf8", (err, data) => {
  if (err) {
    console.log("Error retreiving csv File", err);
  } else {
    const current_selection = [];

    const rows = data.split("\n");

    for (let i = 0; i < 10; i++) {
      console.log(rows[i]);
      //   current_selection.push(i);
    }

    // console.log(current_selection);
  }
});
