"use strict";

export class person {
    constructor(name,dateOfBirth){
        this.name=name;
        this.dateOfBirth=dateOfBirth;
    }
    getName(){return this.name;}
    setName(name){this.name=name;}
    getDateOfBirth(){return this.dateOfBirth;}
    setDateOfBirth(dateOfBirth){ this.dateOfBirth=dateOfBirth;}
   toString = () => `Name: ${this.name}, Date Of Birth: ${this.dateOfBirth.getFullYear()}-${this.dateOfBirth.getMonth()+1}-${this.dateOfBirth.getDate()}`;
}