"use strict";

var fs = require("fs"),
  readStream = fs.createReadStream("assets/nombres.txt"),
  writeStream = fs.createWriteStream("assets/nombres_copia.txt");

// readStream.pipe(writeStream);

// readStream.on("data", (chunk) => {
//   console.log("He leido ", chunk.length, " caracteres");
// });

// readStream.on("end", () => {
//   console.log("Termine de leer los caracteres");
// });
readStream.pipe(writeStream);

readStream
  .on("data", (chunk) => {
    console.log("He leido ", chunk.length, " caracteres");
  })
  .on("end", () => {
    console.log("Termine de leer los caracteres");
  });
