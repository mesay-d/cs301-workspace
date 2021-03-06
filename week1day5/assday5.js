"use strict";
/*. Write a function named checkPrime that accepts a parameter and returns true if the argument
is a prime number otherwise returns false.
a. Now write a program that prompts user to input a number and calls the function
checkPrime to see if the entered number is a prime number or not. */

let prompt=require("prompt-sync")();
/**
 * 
 * @param {number} num any number;
 * @returns{number};
 */
function isPrime(num) {
    let count = 0;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            count++;
        }
    }
    console.log(count);
    return count === 0;
}
console.log(isPrime(5));
/*. Write a function that computes and returns area of a circle based on the value of input radius.
a. Write a function that compute volume of a cylinder and making use of function that
computes area of a circle.
 */
let radius=prompt("enter the radius of value ?  :  ");
let height=prompt("enter the height of ");
/**
 * 
 * @param {number} radius enter the value of radius. 
 * @returns{number};
 */
function areaOfCircle(radius){
    return Math.PI*radius*radius;
}
/**
 * 
 * @param {number} height enter the number
 * @returns{number}; 
 */
function volumeCylider(height){
    return areaOfCircle(radius)*height;
}
let computeArea=areaOfCircle(radius);
let computeVolume=volumeCylider(height);
console.log(computeArea);
console.log(computeVolume);

/*3. Write a program that calculates the total volume of a house, including the volume of the roof
space. Your program must allow the user to enter width, depth, height and sweep as shown in
figure below.  */
let width=+prompt("enter the width of the house ? : ");
let depth=+prompt("enter the depth of the house ? : "  );
let Height=+prompt("enter the height  : ");
let sweep=+prompt("enter the sweep of the roof : ") ;
 /**
  * 
  * @param {number} width it takes number;
  * @returns{number} ;
  */
function volumeRoof(width){
    let roofVolume = triangleArea (sweep,width)*width;
    return roofVolume;
}
/**
 * 
 * @param {number} sweep ;
 * @param {number} width ;
 * @returns{number};
 */
function triangleArea (sweep,width){
    let averageofSide=(2*sweep+width)/2;
  
    let TriAngle = Math.sqrt(averageofSide*(averageofSide-sweep)*(averageofSide-sweep)*(averageofSide-width))
    return TriAngle;
}
/**
 * 
 * @param {number} width enter the width;
 * @param {number} height the value
 * @param {number} depth .
 * @returns{number};
 */
function livingVolume(width,height,depth){
    return  width * height * depth;

}
/**
 * 
 * @param {number} width enter your number 
 * @param {number} height enter your number 
 * @param {number} depth ;
 *  @returns{number};
 */
function houseVolume(width,height,depth){
    
    return livingVolume(width,height,depth) + volumeRoof(width);
}
//console.log(total);
/*Q 4.Write a function to compute HCF of two numbers. Write it as a function expression.*/
/**
 * 
 * @param {inpute the first number} first 
 * @param {inpute second number} second 
 * @returns {number};
 */
 
    let comput1=function (first,second){  let HCF ;
        for(let i=1;i<=second;i++){
            if(second%i===0&&first%i===0){
                HCF=i;
            }
        }
        return HCF;};
        /**
         * add two number;
         * @param {number} firstNumber number 
         * @param {number} secondNumber number 
         * @returns {number};
         */
    function computeHcf(firstNumber,secondNumber){
         let HCF ;
        for(let i=1;i<=secondNumber;i++){
            if(secondNumber%i===0&&firstNumber%i===0){
                HCF=i;
            }
        }
        return HCF;
    }
console.log(comput1(6,12));
console.log(computeHcf(6,12));

/*5. Write a function to find LCM of any two numbers using the HCF function from previous
question. Write it as a function expression.
a. Now write a program that asks two numbers from the user and displays HCF and LCM of
the two numbers.
Hint: search for relation between HCF and LCM. */
/**
 * 
 * @param {number} number1 any number
 * @param {number} number2 any number;
 * @returns{number};
 */
function computeLcm(number1,number2){
    let lcm=1;
        if(number1<number2){
            let temp=number1;
            number1=number2;
            number2=temp;
}       
    for(let i=1;i<=number1;i++){
          if(lcm%number1===0&&lcm%number2===0){
           return lcm;
        }
        if(number2%i===0&&number1%i===0){
            lcm*=i;
        }else{
            if(number1%i===0||number2%i===0){
                lcm*=i;
            }
        }
      
     
    }
    return lcm;
}

console.log(computeLcm(3,4));
/**
 * add two number
 * @param {number} firstNumber; 
 * @param {number} secondNumber integer number;
 * @return{numbere};
 */
function compLcm(firstNumber,secondNumber){
    let producat=firstNumber*secondNumber;
    let lcm=producat/computeHcf(firstNumber,secondNumber);
    return lcm;
}

// console.log(compLcm(3,4))
/*Write a function compute, that takes three parameters. First parameter is a call back function
that does the actual operation, second and third are the operands.
For e.g., compute (add, 2,3) should return 5
- Write compute function as a function expression.
- Write add function as a function expression and call compute passing add as a callback.
o Refactor to pass add logic as an anonymous function. (Make a copy first)
o Refactor to pass add logic as an arrow function. (Make a copy first) */
/**
 * 
 * @param {number} add some number
 * @param {number} num12 any number
 * @param {number} num21 ;
 * @returns{number};
 */
function compute(add,num12,num21){
return add(num12,num21);
 
}
 /**
  * 
  * @param {number} num12 enter some number
  * @param {number} num21 ;
  * @returns{number};
  */
function add(num12,num21){
return num12+num21;
 }
 
 console.log(compute(add,2,3));


 
console.log("***************** function expression /anonymous function**********************");
/**
 * 
 * @param {number} add;
 * 
 * @param {number} num1 is any type of number
 * @param {number} num2 is any integer number;
 * @returns{Number};
 */
let computeRes=function(add,num1,num2){
 
return add2(num1,num2);
 
};
 
let add2=function(num1,num2){
return num1+num2;
}
 ;
console.log(compute(add,6,3));
console.log("***************** Arrow function **********************");
let ComputArray=(add,firstNumber,secondNumber)=>add(firstNumber,secondNumber);
let addN=(firstNumber,secondNumber)=>firstNumber+secondNumber;
console.log(compute(add,6,3));




    
