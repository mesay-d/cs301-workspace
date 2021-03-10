"use strict";
/*calculate the power of any base */
/**
 * 
 * @param {number} bas enter your base number
 * @param {number} pow enter the power value
 * @returns {number};
 */
function power(bas,pow){
    if(pow===1){
        return bas;
    }else{
        return bas*power(bas,pow-1);
    }
}
console.log(power(2,3));

/* count the digits of a given number */
/**
 * 
 * @param {number} num enter your number
 * @returns {number};
 */
function CountDigit(num){
    if(num<9){
        return 1;
    }else
    {return 1+CountDigit(Math.floor(num/10));}
}
console.log(CountDigit(1243));
// /* reverse a given string */
/**
 * 
 * @param {string} string the value; 
 * @returns{string} ;
 */
function reverseString(string){
    let result="";
    if(string===""){
        return "";
    }else{
        result+=string.substring(string.length-1);
        return result+reverseString(string.substring(0,string.length-1));
    }
}
console.log(reverseString("mesay"));

