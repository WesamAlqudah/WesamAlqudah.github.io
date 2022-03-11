"use strict";

export class Patients {
    #PatientID=null;
    #FirstName=null;
    #MiddleInitial=null;
    #LastName=null;
    #DateOfBirth=null;
    #Department=null;
    #OutPatient=null;
    constructor(PatientID,FirstName,MiddleInitial,LastName,DateOfBirth,Department,OutPatient){
        this.#PatientID=PatientID;
        this.#FirstName=FirstName;
        this.#MiddleInitial=MiddleInitial;
        this.#LastName=LastName;
        this.#DateOfBirth=DateOfBirth;
        this.#Department=Department;
        this.#OutPatient=OutPatient;

    }
    getPatientID(){return this.#PatientID;}
    getFirstName(){return this.#FirstName;}
    getMiddleInitial(){return this.#MiddleInitial;}
    getLastName(){return this.#LastName;}
    getDateOfBirth(){return this.#DateOfBirth;}
    getDepartment(){return this.#Department;}
    getOutPatient(){return this.#OutPatient;}

    setPatientID(PatientID){this.#PatientID=PatientID;}
    setFirstName(FirstName){this.#FirstName=FirstName;}
    setMiddleInitial(MiddleInitial){this.#MiddleInitial=MiddleInitial;}
    setLastName(LastName){this.#LastName=LastName;}
    setDateOfBirth(DateOfBirth){this.#DateOfBirth=DateOfBirth;}
    setDepartment(Department){this.#Department=Department;}
    setOutPatient(OutPatient){this.#OutPatient=OutPatient;}
    
    toString = ()=> `Patient ID No	${this.#PatientID} First Name${this.#FirstName} Middle Initial(s)${this.#MiddleInitial}	Last Name${this.#MiddleInitial}	Date of birth${this.#DateOfBirth}	Department${this.#Department}	Out-patient?${this.#OutPatient}`;
}