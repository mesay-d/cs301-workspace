/*. Write a JavaScript program that ask a user for a volume in quarts then converts that value in
liters. */
let prompt=require(`prompt-sync`)();
let volumeOfquart=prompt("enter the qurter value: ")
const ConvetedValue=0.94635;
let convetedInToLitter=volumeOfquart*ConvetedValue;
console.log(convetedInToLitter);
/*Write a JavaScript program that asks a user for a distance in kilometers and then convert that
value in miles.*/
let distance=prompt("enter your distance")
let convetValue=0.62137
let valueInMile=distance*convetValue;
console.log(valueInMile);
/*3. An employee at a grocery store must frequently place boxes of cans in stacks. Write a program
that allows him to enter the total number of boxes and the number of boxes he will place in
each stack. Your program must output the number of stacks he will have to make. All the stacks
except the last one must have the exact number of boxes that the employee specifies. The last
stack must have the exact number or fewer boxes. For example, if the employee enters 74 total
boxes and 6 boxes in each stack your program must output 13. */
let totalNumb=prompt("enter tpotal nuber of boxes");
let contianOFstack=prompt("enter the number of box contain in each stack")
let theNumStack=Math.ceil(totalNumb/contianOFstack)
console.log(theNumStack);
/*Write JavaScript program to compute the mileage of a vehicle. Your program should allow the
user to enter the beginning and ending odometer readings and the number of gallons of gas
used and should output the mileage in miles per gallon.  */
let beginningRe=prompt("enter a beginning the odometer reading ")
let endingRe=prompt("enter endining odometer reading ")
let GasUsed=prompt("enter the gallons of gas")
let TheDiffernceOd=endingRe-beginningRe
let OUtputMillage=TheDiffernceOd/GasUsed
console.log(OUtputMillage)
/* When you exercise to strengthen your heart, you should maintain your heart rate within a
range. To find that range, subtract your age from 220. This difference is your maximum heart
rate per minute. Your heart simply will not beat faster than this maximum (220 − age). When
exercising to strengthen your heart, you should keep your heart rate between 65% and 85% of
your heart’s maximum. Write a JavaScript program that asks for a person’s age and computes
and outputs the slowest and fastest rates necessary to strengthen his heart.
 */
let agePerson=prompt("enter the age of a person")
let maxHeartbeat=220-agePerson
let SlowestHeartBeat=0.65*maxHeartbeat
let fastestHeartBeat=0.85*maxHeartbeat
console.log(`slowest heat beat ${SlowestHeartBeat} and fastest heart beat ${fastestHeartBeat}`)