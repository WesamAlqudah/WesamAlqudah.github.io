"use strict";

import { person } from "./person.js";

export class Employee extends person {
  #Salary = 0.0;
  #hireDate = null;
  constructor(name, dateOfBirth, Salary, hireDate) {
    super(name, dateOfBirth);
    this.#Salary = Salary;
    this.#hireDate = hireDate;
  }
  getSalary() {
    return this.#Salary;
  }
  getHireDate() {
    return this.#hireDate;
  }
  doJob(jobTitle) {
    console.log(
      `${this.name} is a ${jobTitle} who earns ${new Intl.NumberFormat(
        "en-US",
        { style: "currency", currency: "USD" }
      ).format(this.#Salary)}`
    );
  }
}
