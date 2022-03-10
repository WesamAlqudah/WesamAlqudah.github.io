"use strict";

import {person} from "./Module/person.js";
import { Employee } from "./Module/Employee.js";

const Person=[
    new person("Anna Smith",new Date(1998,11,15)),
    new person("Bob Jone",new Date(1945,10,16)),
    new person("Carlos Slim Helu",new Date(1976,8,24))
];
for(const Per of Person) {
    console.log(Per.toString());
}
//Q2:

const Emp=new Employee("Jim Hanson",null,245995.00 );
Emp.doJob("Software Engineer");