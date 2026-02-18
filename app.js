const fs = require("fs");

fs.writeFile("file.txt", "Hello World im onella!", function (err) {
  if (err) throw err;
  console.log("File saved!");
});
