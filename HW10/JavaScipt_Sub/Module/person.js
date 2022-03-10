//class
"use strict"

class person {
    constructor(name,dateOfBirth){
        this.name=name;
        this.dateOfBirth=dateOfBirth;
    }
    getName(){return this.name;}
    setName(name){this.name=name;}
    getDateOfBirth(){return this.dateOfBirth;}
    setDateOfBirth(dateOfBirth){this.dateOfBirth=dateOfBirth;}
    toString = ()=>`Name: ${this.name}, DateOfBirth: ${this.dateOfBirth.getFullYear()}-${this._dateOfBirth.getMonth() + 1}-${this._dateOfBirth.getDay() + 1}`
}