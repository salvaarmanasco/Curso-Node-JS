"use strict";
const http = require("http").createServer(webServer),
  path = require("path"),
  url = require("url"),
  urls = [
    { id: 1, route: "/", output: "<h2>Home</h2>" },
    { id: 2, route: "contact", output: "<h2>Contact</h2>" },
    { id: 3, route: "about", output: "<h2>Acerca</h2>" },
  ];

function webServer(req, res) {
  const message = "<h1>Hola Node JS</h1>",
    pathURL = path.basename(req.url),
    id = url.parse(req.url, true).query.id;

  console.log(`path: ${pathURL} id: ${id}`);
  urls.forEach(function (pos) {
    if (pos.route == pathURL || pos.id == id) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(message + pos.output);
    }
  });

  if (!res.finished) {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 not found</h1>");
  }
}

http.listen(3000);
console.log("Servidor corriendo actualmente en http://localhost:3000/");
