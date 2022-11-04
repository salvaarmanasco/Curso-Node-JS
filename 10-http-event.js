"use strict";
const http = require("http").createServer();

function webServer(req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hola Mundo</h1>");
}

http.on("request", webServer).listen(3000, "localhost");

console.log("Servidor corriendo actualmente en http://localhost:3000/");
