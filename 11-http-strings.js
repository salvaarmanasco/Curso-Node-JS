"use strict";
const http = require("http").createServer(webServer);
const fs = require("fs");
const index = fs.createReadStream("./assets/index.html");

function webServer(req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  index.pipe(res);
}

http.listen(3000);

console.log("Servidor corriendo actualmente en http://localhost:3000/");
