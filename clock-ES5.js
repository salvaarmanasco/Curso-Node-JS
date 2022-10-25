"use strict";

let Clock = (function () {
  let EventEmitter = require("events").EventEmitter,
    inherits = require("util").inherits;

  let Clock = function () {
    let self = this;
    setInterval(function () {
      // console.log("hola");
      self.emit("tictac");
    }, 1000);
  };

  inherits(Clock, EventEmitter);

  Clock.prototype.theTime = function () {
    let date = new Date(),
      hrs = addZero(date.getHours()),
      min = addZero(date.getMinutes()),
      sec = addZero(date.getSeconds()),
      ampm = hrs < 12 ? "am" : "pm",
      msg = (hrs > 12 ? hrs - 12 : hrs) + ":" + min + ":" + sec + ampm;

    function addZero(num) {
      return num < 10 ? "0" + num : num;
    }
    console.log(date + " | " + msg);
  };

  return Clock;
})();

module.exports = Clock;
