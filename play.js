
const prompt=require("prompt-sync")();//calling of function;
const x=prompt("enter youer luckey number: ")
const y=prompt("enter another number ")
let sum=Math.sqrt(Math.pow(Math.pow(x,2)-x,2)+Math.pow(Math.pow(y,2)-y,2))
console.log(sum)