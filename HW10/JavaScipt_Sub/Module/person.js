//class
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
    
//     setDateOfBirth(dateOfBirth){var strArray=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//     var d = dateOfBirth.getDate();
//     var m = strArray[dateOfBirth.getMonth()];
//     var y = dateOfBirth.getFullYear();
//     this.dateOfBirth=dateOfBirth= '' + (d <= 9 ? '0' + d : d) + '-' + m + '-' + y;
//    }
    //toString = ()=>`Name: ${this.name}, Date Of Birth: ${this.dateOfBirth.toLocaleDateString()}`
    toString = ()=>`Name: ${this.name}, Date Of Birth: ${this.dateOfBirth.toISOString().slice(0,10)}`
}