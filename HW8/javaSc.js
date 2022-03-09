"use strict";

//Q1

let person = {
  name: "",
  dateOfBirth: "",

  setName: function (name) {
    this.name = name;
  },
  getName: function () {
    return this.name;
  },
};

function isPerson() {
  let Jo = Object.create(person);
  Jo.setName("johan");
  Jo.dateOfBirth = "1998-12-10";
  console.log("The person's name is " + Jo.getName());
  console.log("John was born on " + Jo.dateOfBirth);
}
isPerson();
//Q2
let Empo = {
  __proto__: person,
  Salary: "0",
  hireDate: "Mar,8,2022",
  dojob: function (job) {
    console.log(this.getName() + " is a " + job + " who earns $" + this.Salary);
  },
};
function isEmployee() {
  let Emp = Object.create(Empo);
  Emp.setName("Anna");
  Emp.Salary = "249,995,50";
  Emp.dojob("Programmer");
}
isEmployee();

//Q3

