// /*1.a. Your logic should be based on factor count. i.e., prime number will have 0 factors (not
// counting 1 and itself), while composite will have 1 or more factors.
// b. This time think of a logic to use break statement so that you can break early from the
// loop, right when you know number is not prime. For example, you know number 8 is not
// prime right on the first loop because it is perfectly divisible by 2 itself, that's why further
// testing is not required. If the number is prime loop will proceed until the end.
//  */
 let prompt=require(`prompt-sync`)();
// a
// let input=+prompt("enter you the number : ")
// count=0;
// for(let i=2;i<input;i++){
    
//     if(input%i==0){
//         count++
//     }

// }
// console.log(count)
// if(count>0){
//     console.log( input+" is not prime number ")
// }else{console.log(input+"is  prime number")}

// // ///\\\\\\\\\\\\|\\\

// for(let i=2;i<input;i++){
//      if(input%i==0){
//     break;
//     }else{
//         console.log(input+"  is prime")
//     break;
// }
// }

// /*2. Write a Java program to calculate the factorial value of a given number. E.g., factorial 4 =
// 4*3*2*1 = 24
//  */
// let fact=prompt("enter a factorial number : ")
// let j=1;
// for(let i=1;i<=fact;i++){
// j*=i;
// }
// console.log(j)
// /*Write a JavaScript program that gives the user three tries to guess the correct pin of the
// account. You set the pin as a constant. When correct display “Correct, welcome back.” When
// incorrect display “Incorrect, try again.”. When run out of tries display “Sorry but you have been
// locked out.”
//  */
// let nubertry=0;
// const pin=5;
// let k=0;
// do{
//     k++
//     let guess=+prompt("enter your guess number :  ")//input
//     if(pin===guess){
//         console.log("correct  welcome back")
//         break;
    
//      }else{console.log("Incorrect try again")}
//      if(k===3){
//          console.log("sorry but you have been locked out ")
//      }

// }while(k<3)


// /*4. Write a defining table and JavaScript program to Display Fibonacci series up to N terms. N
// being positive integer from user input.
// The Fibonacci series is a sequence such that each number is the sum of the two preceding ones,
// starting from 0 and 1. That is, fib(0) = 0, fib(1) = 1, fib(n) = fib(n – 1) + fib(n – 2) for n > 1.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …
//  */

// let n=prompt("enter the number of fib.")
// let i=0;
// let j=1;
// let count=1;
// let result="";
// result=result+ i +","+ j+",";
// while(count<n){
// let nextNumber= i+j;
// result=result+nextNumber+",";
// i=j
// j=nextNumber;
// count++;
// }
// console.log(`The result will be :${result}`);
/*5 .. Write a JavaScript program to compute sum of all the digits in a given integer number.
// */

// let value=prompt("Enter a digit here")
// let sum=0
// for(let j=0;j<value.length;j++){
// sum+=parseInt(value[j]) 
// }
// console.log("The output is :"+ sum)

/*6.A..... */
// for(let i=1;i<=5;i++){
//     let row=""
//     for(let j=1;j<=i;j++){
//         row+=i;

//     }console.log(row)
// }
//  //B

// for(let i=1;i<=5;i++){
//  let result="";
//  for(let j=1;j<=i;j++){
//  result+=j; 
 
//  }console.log(result);

// }
// console.log("c")

// for(let i=5;i>=1;i--){
//     let result="";
//     for(let j=1;j<=i;j++){
//     result+=i;
//     }
//     console.log(result);
//    }


   


//  let pin = prompt(`Enter your pin number form 1 to 9 :`);
// const password =`123`;
// if(pin=== password){​​​​​​​
// console.log(`correct, welcom back`)
// }​​​​​​​
// else{​​​​​​​
// console.log(`incorrect, try again `)
// pin = prompt(`Enter the enter your pin again`);
// if(pin===password){​​​​​​​
// console.log(`correct, welcom back`)
// }​​​​​​​else{​​​​​​​
// console.log(`incorrect, try again `)
// pin = prompt(`Enter the enter your pin number`);
// if(pin===password){​​​​​​​
// console.log(`correct, welcom back`)
// }​​​​​​​else{​​​​​​​
// console.log(`You have been locked out`)
// }​​​​​​​
// }​​​​​​​
// }​​​​​​​
//0,0
function checkSta(num){ 
let sum=0;
for(let i=0;i<num;i++){
    sum+=i;
    if(sum<num){
        continue;
    }
    if(sum==num){
        return true
    }

}
return false;
}
console.log(checkSta(10))




