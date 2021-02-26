
let prompt=require(`prompt-sync`)();
let weather=prompt("enter weather type")
if(weather==="hot"){
    console.log("footwear")
}else if(weather==="rain"){
    console.log("galoshes")
}else if(weather==="snow"){
    console.log("boots")
}else{
    console.log("sneakers")
}
/* Write a program that reads from the keyboard a student's name and number of completed
credits and then outputs the student's name and label on following rules:
a. "Freshman" if 0<credits<30
b. "Sophomore" if 30<=credits<60
c. "Junior" if 60<=credits<90
d. "Senior" if credits>90
 */
let studentNam=prompt("enter student name")
let stucredit=+prompt("enter the student credit")
if(0<stucredit&&stucredit<30){
    console.log(studentNam+"is a freshman")
}
 if(30<=stucredit&&stucredit<60){
console.log(`${studentNam} is a sophomer`)
} 
if(60<=stucredit&&stucredit<90){
    console.log(`${studentNam} is a junior`)
}
if(stucredit>90){
    console.log(`${studentNam} is a senior`)
}
/*Write a program that calculates down payment for a home loan based on following rules.
Cost of House Down Payment
$0 to less than 50K 5% of the cost
$50K to less than 100K $1000 + 10% of (cost - $50K)
$100K to less than 200K $2000 + 15% of (cost - $100K)
$200K and above $5000 + 10% of (cost - $200K)
 */
let costOFhouse=prompt("pleas enter the cost of house")
if(costOFhouse<50000){
   console.log( 0.05*costOFhouse+" is Down payment ")
}
else if(costOFhouse<100000){
    console.log(1000+0.01*(costOFhouse-50000)+" is Down payment ")
}
else if(costOFhouse<200000){
    console.log(2000+0.15*(costOFhouse-100000)+" is Down payment ")
}else{
    console.log(5000+0.01(costOFhouse-200000)+" is Down payment ")
}
/* A university library that loans book to students, faculty, and the public has a written policy that
determines how long someone may borrow a book before it is due, which is shown on the table
below. Write a defining table and JavaScript program that determines how long a person may
borrow a book.
Status Number of books Overdue Loan duration in weeks
Student 0 6
fewer than 3 4
3 or more 2
Faculty 0 12
fewer than 3 10
3 or more 8
Other 0 4
fewer than 3 3
3 or more 2 */
let loansBook=prompt("enter the the name of loan  ")
let Overdue=prompt("enter Number of book Overdue Loan")
if(loansBook==="student"){
    if(Overdue===0){
        console.log(`loan duration of week is 6`)
    }
    else if(Overdue<3){
        console.log(`loan duration of week is 4`)
    }
    console.log(`loan duration of week is 6`)

}else if(loansBook==="Faculty"){
    if(Overdue==0){
        console.log(`loan duration of week is 12`)
    }else if(Overdue<3){
        console.log(`loan duration of week is 10`)
    }
    console.log(`loan duration of week is 8`)
}else{
    if(Overdue==0){
        console.log(`loan duration of week is 4`)
    }else if(Overdue<3){
        console.log(`loan duration of week is 3`)
    }
    console.log(`loan duration of week is 2`)
}
/*. Write a defining table and then a program that determines what time a child should go to bed.
Your program must read a child’s age and the season (winter, spring, summer, or fall) from the
keyboard and output the child’s bedtime according to this table: */
let childAge=prompt("enter a child age :  ")
let season=prompt("enter the season :  ")
let bedtime;
if(childAge<5){
    if(season==="summer"||season==="fall"){
        bedtime="8:30"
 }else if(season==="winter"||season==="spring"){
     bedtime="8:00"

 }
}else if(childAge<12){
    if(season==="summer"){
        bedtime="9:30"
 }else if(season==="winter"||season==="spring"||season==="fall"){
     bedtime="8:30"

 }
}else{
    if(season==="summer"){
        bedtime="10:30"
 }else if(season==="winter"||season==="spring"||season==="fall"){
     bedtime="9:30"

 }
    
}
console.log(`thechild age ${childAge} in ${season} season bedtime is ${bedtime}`)