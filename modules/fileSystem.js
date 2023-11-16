const fs = require("fs");

const createNewFile = (fileName, content) => {
  fs.writeFile(fileName, content, (err) => {
    if (err) {
      console.error(err);
    }
    console.log("file written successfully");
  });
};

module.exports = {
  createNewFile,
};
