"use strict";
let emp1 = {
    id: 101,
    name: "A",
    salary: 879000,
    isActive: true
};
let emp2 = {
    id: 102,
    name: "B",
    salary: 89000,
    isActive: false
};
let emps = [emp1, emp2];
for (const e of emps) {
    console.log(e);
}
let s1 = {
    id: 1,
    age: 22,
    name: "AA",
};
let s2 = {
    id: 2,
    name: "BB",
    age: 22,
    phone: 9876543278
};
let s3 = {
    id: 3,
    name: "CC",
    age: 23
};
const s = [s1, s2, s3];
for (const v of s) {
    console.log(v);
}
let stus1 = {
    studentId: 101,
    Maths: 90,
    Science: 85,
    English: 88,
    studentName: "Stu1",
    kannada: 89
};
let stus2 = {
    phno: 9876543267,
    studentId: 102,
    studentName: "Stu2",
    Maths: 92,
    Science: 95,
    English: 98
};
let studs = [stus1, stus2];
for (const s of studs) {
    console.log(s);
}
//union
let user = {
    Name: "julian",
    email: "julian@gmail.com"
};
let user2 = {
    Name: "jessy",
    employeeId: 1234
};
console.log(user);
console.log(user2);
let user3 = {
    Name: "black",
    email: "black@gmail.com",
    employeeId: 19872
};
console.log(user3);
function displayDetails(details) {
    console.log(details);
}
displayDetails({ Name: "ppp", email: "ppp@gmail.com" });
displayDetails({ Name: "qqq", employeeId: 5646 });
function displayContent(details) {
    console.log(details.Name);
    console.log(details.email);
    console.log(details.employeeId);
}
displayContent({ email: "ique@gmail.com", Name: "ique", employeeId: 7686 });
