let Name: string ="mounika";
console.log(Name);

//Create a number array containing five numbers and print all elements.
const arr1:number[]=[10,20,30,40,50]
for(const num of arr1){
    console.log(num)
}
//Create a string array containing five city names and print only the first and last city.
const arr2:string[]=["bangalore","hydrabad",'pune',"dehli","goa"]
console.log(arr2[0])
console.log(arr2[arr2.length-1])

//Create a boolean array and count how many values are true.
const arrB :boolean[]=[true,true,true,false,true,false,true,false,false, true]
let count :number=0;
for(const a of arrB){
    if(a===true){
        count++;
    }
}
console.log("count of true is :"+count)

const tups:[number,string]=[101,"A"]
console.log(tups)

const emp:[number,string,number,boolean]=[102,"c",300000,true]
console.log("id: "+emp[0])
console.log("name :"+emp[1])
console.log("salary :"+emp[2])
console.log("working :"+emp[3])

type student =[number,string,number]
let stu1 : student=[101,"AA",98]
let stu2 : student=[102,"BB",88]
let stu3 : student=[103,"CC",89]
let students:student[]=[stu1,stu2,stu3]
console.log(students);

let items:[number,string,number][]=[[101,"laptop",89000],[102,"phone",50000],[103,"bag",3000]]
for(const item of items){
    for(const value of item){
        console.log(value);
    }
}