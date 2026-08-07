// Typed Parameters
function add(a:number , b:number):number{
    return a+b;
}
console.log(add(89,77))

function sub(a:number , b: number){
    return a-b;
}
console.log(sub(87,55))

function mul(a:number , b: number){
    return `multiply value is ${a*b}`;
}
console.log(mul(8,67))

function div(a:number , b:number):string{
    return `division value is : ${a/b}`
}
console.log(div(6742,87))

function greet(a:string,b?:string):void{
    console.log(a);
    if(b!=undefined){
    console.log(b)
    }
}
greet("hi")
greet("hello","nice to meet you")
