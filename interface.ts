//Employee Interface
interface emplyee{
    id:number;
    name:string;
    salary:number;
    isActive:boolean;
}
let emp1:emplyee={
    id:101,
    name:"A",
    salary:879000,
    isActive:true
}
let emp2:emplyee={
    id:102,
    name:"B",
    salary:89000,
    isActive:false
}
let emps:emplyee[]=[emp1,emp2]
for(const e of emps){
    console.log(e)
}

type students={
    id:number,
    name:string,
    age:number,
    phone?:number
}

let s1:students={
    id:1,
     age:22,
    name:"AA",
   
}
let s2:students={
    id:2,
    name:"BB",
    age:22,
    phone:9876543278
}
let s3:students={
    id:3,
    name:"CC",
    age:23
}
const s:students[]=[s1,s2,s3]
for(const v of s){
    console.log(v)
}


//Index Signatures , READONLY , optionals
interface ExamResult {
    readonly studentId: number;
    studentName: string;    
    [subject: string]: string | number|undefined;
    phno?:number;
    
}
let stus1: ExamResult={
    studentId:101,
    
    Maths: 90,
    Science: 85,
    English: 88,
    studentName:"Stu1",
    kannada:89
}
let stus2: ExamResult={
    phno:9876543267,
    studentId:102,
    studentName:"Stu2",
    Maths: 92,
    Science: 95,
    English: 98
    
}
let studs:ExamResult[]=[stus1,stus2]

for(const s of studs){
    console.log(s)
}
//stus1.studentId=103  // allowed 
//stus2.studentName="stu3" //not allowed


//Union , Intersection
interface Customer {
    Name: string;
    email: string;
}
interface Employee {
    Name: string;
    employeeId: number;
}
//union
let user:Customer | Employee={
    Name:"julian",
    email:"julian@gmail.com"
}

let user2:Customer | Employee={
    Name:"jessy",
    employeeId:1234
}
console.log(user)
console.log(user2)

let user3:Customer & Employee={
    Name:"black",
    email:"black@gmail.com",
    employeeId:19872
}
console.log(user3)

function displayDetails(details : Customer | Employee): void{
    console.log(details);
}
displayDetails({Name:"ppp",email:"ppp@gmail.com"});
displayDetails({Name:"qqq",employeeId:5646})

function displayContent(details : Customer & Employee):void{
    console.log(details.Name)
    console.log(details.email)
    console.log(details.employeeId)
}
displayContent({email:"ique@gmail.com",Name:"ique",employeeId:7686})