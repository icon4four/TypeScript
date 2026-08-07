"use strict";
var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["Developer"] = "DEVELOPER";
    Role["Tester"] = "TESTER";
    Role["Manager"] = "MANAGER";
})(Role || (Role = {}));
let employee1 = {
    id: 101,
    role: Role.Admin,
    name: "Alex"
};
let employee2 = {
    id: 102,
    role: Role.Developer,
    name: "Alya"
};
let employee3 = {
    id: 103,
    role: Role.Manager,
    name: "Alexa"
};
let employee4 = {
    id: 104,
    role: Role.Tester,
    name: "laila"
};
console.log(employee1);
console.log(employee2);
console.log(employee3);
console.log(employee4);
//type of
function printValue(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    if (typeof value === "number") {
        console.log(value * 2);
    }
}
printValue(34);
printValue("hello");
function display(person) {
    if ("salary" in person) {
        console.log("Emp");
        console.log(person.name);
        console.log(person.salary);
        console.log("----------------");
    }
    else {
        console.log("Student");
        console.log(person.name);
        console.log(person.marks);
        console.log("----------------");
    }
}
display({ salary: 40000, name: "abc" });
display({ name: "xyz", marks: 95 });
