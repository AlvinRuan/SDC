import fs from "fs";

const csvFilePath = "/Users/caskg/Documents/GitHub/SDC/styles.csv";

fs.readFile(csvFilePath, "utf8", (err, data) => {
  if (err) {
    console.log("An Error has occured: ", err);
  } else {
    const rows = data.split("\n");

    for (let i = 0; i < rows.length; i++) {
      const column = rows[i].split(",");

      if (column[3] === "null") {
        column[3] = "0";
      }

      const modifiedRow = column.join(",");

      rows[i] = modifiedRow;
    }
    const finalData = rows.join("\n");

    fs.writeFile(csvFilePath, finalData, "utf8", (err) => {
      if (err) {
        console.log("An Error has occured! ", err);
        return;
      }
      console.log("Successfully re-written file!");
    });
  }
});
