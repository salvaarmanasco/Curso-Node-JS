const Clock = require("./clock-ES5");

("use strict");

const myData = require("./my-data");

console.log(myData);

let cucu = new Clock();

cucu.on("tictac", function () {
  cucu.theTime();
});
