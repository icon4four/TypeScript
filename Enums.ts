
enum Role {
    Admin = "ADMIN",
    Developer = "DEVELOPER",
    Tester = "TESTER",
    Manager = "MANAGER"
}
interface Employees{
    id:number;
    role:Role;
    name:String
}
let employee1={
    id:101,
    role: Role.Admin,
    name:"Alex"
}
let employee2={
    id:102,
    role: Role.Developer,
    name:"Alya"
}
let employee3={
    id:103,
    role: Role.Manager,
    name:"Alexa"
}
let employee4={
    id:104,
    role: Role.Tester,
    name:"laila"
}
console.log(employee1)
console.log(employee2)
console.log(employee3)
console.log(employee4)


//type of
function printValue(value: string | number): void {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    if (typeof value === "number") {
        console.log(value * 2);
    }
}
printValue(34)
printValue("hello")

//in

interface Emp{
    name:string;
    salary:number;
}
interface Student{
    name:string;
    marks:number
}
function display(person:Emp | Student) : void{
    if("salary" in person){
        console.log("Emp")
        console.log(person.name)
        console.log(person.salary)
        console.log( "----------------")
    }
    else{
        console.log("Student")
        console.log(person.name)
        console.log(person.marks)
        console.log( "----------------")
    }
}
display({salary:40000,name:"abc"})
display({name:"xyz",marks:95})
