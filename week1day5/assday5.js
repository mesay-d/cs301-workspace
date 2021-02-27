/*. Write a function named checkPrime that accepts a parameter and returns true if the argument
is a prime number otherwise returns false.
a. Now write a program that prompts user to input a number and calls the function
checkPrime to see if the entered number is a prime number or not. */
let prompt=require(`prompt-sync`)();
function isPrime(n) {
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            count++;
        }
    }
    console.log(count)
    return count === 0;
}
console.log(isPrime(5))
/*. Write a function that computes and returns area of a circle based on the value of input radius.
a. Write a function that compute volume of a cylinder and making use of function that
computes area of a circle.
 */
let radius=prompt("enter the radius of value ?  :  ")
let height=prompt("enter the height of ")
function areaOfCircle(radius){
    return Math.PI*radius*radius
}
function volumeCylider(height){
    return areaOfCircle(radius)*height
}
let computeArea=areaOfCircle(radius);
let computeVolume=volumeCylider(height);
console.log(computeArea);
console.log(computeVolume);

/*3. Write a program that calculates the total volume of a house, including the volume of the roof
space. Your program must allow the user to enter width, depth, height and sweep as shown in
figure below.  */
let width=+prompt("enter the width of the house ? : ")
let depth=+prompt("enter the depth of the house ? : "  )
let Height=+prompt("enter the height  : ")
let sweep=+prompt("enter the sweep of the roof : ") 
 
function volumeRoof(width){
    roofVolume = triangleArea (sweep,width)*width
    return roofVolume;
}
function triangleArea (sweep,width){
  
    let TriAngle = Math.sqrt(s*(s-sweep)*(s-sweep)*(s-width))
    return TriAngle
}
function livingVolume(width,height,depth){
   let s=(sweep+sweep+width)/2
    return  width * height * depth

}
function houseVolume(){
    
    return livingVolume(width,height,depth) + volumeRoof(width)
}
let total=houseVolume()
console.log(total);