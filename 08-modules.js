// const Clock = require("./clock-ES5");
const Clock = require("./clock-ES6");

("use strict");

const myData = require("./my-data");

console.log(myData);

let cucu = new Clock();

cucu.on("tictac", function () {
  cucu.theTime();
});
