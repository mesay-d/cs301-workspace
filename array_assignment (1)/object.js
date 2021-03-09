"use strict";
let car = {};
car.make = "toyat";
car.model = "camery";
console.log(car);
car.model = "RAV4";
console.log(car);
delete car.make;
console.log(car);
/**
 * 
 * @param {object} obj enter your object 
 * @returns {object};
 */
function countProperties(obj) {
    let count = 0;
    for (let prop in obj) {
        if (obj.hasOwnProperity(prop))
            count++;
    }
    return count;
}
/**
 * 
 * @param {number} str enter the string
 * @returns {boolean};
 */
function checkSpam(str) {
    let lowestr = str.toLowerCase();
    return lowestr.includes("lottory") || lowestr.includes("prize");
}
/**
 * 
 * @param {string} strg1 enter string
 * @param {string} strg2 enter string
 * @returns {string};
 */
function commonSuffix(strg1, strg2) {
    let index = 0;
    let jen = strg2.length - 1;
    for (let i = strg1.length - 1; i >= 0; i--) {
        if (strg1[i] === strg2[jen]) {
            jen--;
            index++;
            continue;
        }
        break;
    }
    let charStart = strg1.length - index;
    let result = strg1.slice(charStart, strg1.length);
    return result;
}
console.log(commonSuffix("teaching", "learning"));
/**
 * 
 * @param {String} string ;
 * @returns {string};
 */
function tittleCase(string) {
    let firstChar = string.slice(0, 1);
    let afterFirstChar = string.slice(1);
    let toUpperFirstChar = firstChar.toUpperCase();
    let result = toUpperFirstChar.concat(afterFirstChar);
    return result;

}
/**
 * 
 * @param {number} num enter number
 * @param {number} num2 enter number
 * @returns{number};
 */
function swap(num, num2) {
    let temp = num;
    num = num2;
    num2 = temp;
    console.log(num, num2);
}
console.log(swap(5, 4));



/**
 * 
 * @param {object} users enter object 
 * @returns {number};
 */
function getAverageAge(users) {

    let sum = 0;
    for (let i = 0; i < users.length; i++) {
        sum += users[i].age;
    }
    return sum / users.length;
}

let object1 = {
    name: "Abc",
    age: 20
};
let object2 = {
    name: "xyz",
    age: 10
};
let users = [];
users[0] = object1;
users[1] = object2;

console.log(getAverageAge(users));