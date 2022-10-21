"use strict";
let EventEmitter = require("events").EventEmitter,
  pub = new EventEmitter();

pub
  .on("myEvent", (message) => {
    console.log(message);
  })
  .once("myEvent", (message) => {
    console.log("Este mensaje solo aparecera una vez: " + message);
  })
  .emit("myEvent", "Que onda");

pub.emit("myEvent", "Que onda 2");
pub.removeAllListeners("myEvent");
pub.emit("myEvent", "Que onda 3");
