"use strict";
let stdin = process.stdin,
  stdout = process.stdout,
  person = {
    name: null,
    age: 0,
  };

let saveAge = (age) => {
  person.age = age;
  if (person.age >= 18) {
    stdout.write(
      person.name + " es mayor de edad, tiene " + person.age + " anios\n"
    );
  } else {
    stdout.write(
      person.name + " es menor de edad, tiene " + person.age + " anios\n"
    );
  }
  process.exit();
};
let saveName = (name) => {
  person.name = name;
  var question = "Hola " + person.name + ", cuantos anios tienes?";
  quiz(question, saveAge);
};
let quiz = (question, callback) => {
  stdin.resume();
  stdout.write(question + ": ");
  stdin.once("data", (res) => {
    callback(res.toString().trim());
  });
};

stdin.setEncoding("utf-8");
quiz("Como te llamas?", saveName);
