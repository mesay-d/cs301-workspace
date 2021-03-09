"use strict";
/**
 * @author MESAY ERBETO;
 * @since 3/4/2021;
 * @param {array} arr1 first array
 * @param {array} arr2 second array
 * @returns {boolean} true if equal else false
 */
function isArrayEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}


/**
 * 
 * @param {array} arr enter the type of array;
 * @returns {number} result of addition of first and last elements of the array 
 */
function addends(arr) {
    let first = arr.shift();
    let end = arr.pop();
    let sum = first + end;
    return sum;
}
console.log(addends([1, 2, 4]));
/**
 * 
 * @param {array} arr enter any array
 * @returns{number} return the middle number.
 * 
 */
function getMiddle(arr) {
    let middle;
    if (arr.length % 2 == 0) {
        middle = (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;
    } else {
        let mee = Math.floor(arr.length / 2);
        middle = arr[mee];

    }

    return middle;
}
console.log(getMiddle([1, 2, 3, 4]));
console.log(getMiddle([1, 2, 3, 4, 5]));

/**
 * 
 * @param {array} arr entery any array 
 * @returns{array};
 */
function rotateLeft(arr) {
    let copy = [];
    let temp = arr.shift();
    copy = arr;
    copy.push(temp);
    return copy;
}
/**
 * 
 * @param {array} arr enter the array
 * @param {number} num enter the number of shifting
 * @returns{array};
 */
function rotateNRight(arr, num) {

    for (let i = 1; i <= num; i++) {
        arr.unshift(arr.pop());
    }
    return arr;
}
console.log(rotateNRight([1, 2, 3, 4], 2));
/**
 * 
 * @param {array} arr1 enter
 * @param {array} arr2 enter
 * @returns{array};
 */
function mergeArr(arr1, arr2) {
    if (arr1[0] > arr2[0]) {
        let temp = arr1;
        arr1 = arr2;
        arr2 = temp;
    }
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] >= arr1[i]) {
            let temp = arr1;
            arr1[i] = arr2[i];
            arr2 = temp[i];
        }
    }

    for (let index = 0; index <= arr2.length; index++) {
        let temp = arr2.shift();
        arr1.push(temp);
    }
    let mUU = arr2[0];
    arr1.push(mUU);
    return arr1;
}

console.log(mergeArr([9, 10, 11], [1, 2, 3, 8]));


/**
 * 
 * @param {array} arr1 input youer array
 * @returns {boolean} return true or false;
 */
function checkBalance(arr1) {
    let newArray = [];
    if (arr1.length % 2 !== 0) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === "{" || arr1[i] === "[" || arr1[i] === "(") {
            newArray.push(arr1[i]);
        } else if (newArray[newArray.length - 1] === "{" && arr1[i] === "}") {
            newArray.pop();
        } else if (newArray[newArray.length - 1] === "[" && arr1[i] === "]") {
            newArray.pop();
        } else if (newArray[newArray.length - 1] === "(" && arr1[i] === ")") {
            newArray.pop();
        }
    }
    if (newArray.length === 0) {
        return true;
    }
    return false;
}
let exp = [")", "(", ")", "[", "{", "}", "]"];



console.log(checkBalance(exp));
/**
 * 
 * @param {array} arr1 enter the array.
 * @param {array} arr2 enter the array
 * @returns{array} ;
 */
function checkSorted(arr1, arr2) {
    let length = (arr1.length + arr2.length);
    let array1 = [];
    //for (let i = 0; i <= l; i++) {
    // if(arr1[c]<arr2[d]){
    //     array1[i]=arr1[c];
    //     c++;
    // }else{
    //     array1[i]=arr2[d];
    //     d++;
    // }


    // }
    let i = 0;
    while (i < length) {
        if (arr1.length == 0 && arr2.length !== 0) {
            array1.push(arr2.shift());
        } else if (arr2.length === 0 && arr1.length !== 0) {
            array1.push(arr1.shift());
        }

        if ((arr1[0] < arr2[0])&&(arr1.length!==0&&arr2.length!==0)) {
            array1.push(arr1.shift());

        } else if(arr1.length!==0&&arr2.length!==0) {
            array1.push(arr2.shift());
        }
        i++;

    }
    return array1;
}
console.log(checkSorted([1, 3, 4, 70, 80], [1, 3, 4]));
/**
 * 
 * @param {array} arr the any array 
 * @returns {array};
 */
function transforms(arr) {
    let newArray = [];
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let temp = arr.pop();
        newArray.push(temp);
    }
    let str = newArray.join("_");
    return str;
}
console.log(transforms(["mes", "da", "er", "lem", "ch"]));
/**
 * 
 * @param {array} arr enter the
 * @param {number} val value;
 * @returns {array} return array.
 */
function enhancedIncludes(arr, val) {
    let resu = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            resu[0] = true;
            resu.push(i);
        }

    }
    if (resu.length === 0) {
        resu = [false, -1, -1];
    } if (resu.length === 2) {
        resu.push(-1);
    }
    return resu;
}
console.log(enhancedIncludes([1, 2, 3, 4], 2));
/**
 * 
 * @param {array} arr anter the array
 * @returns {array} reversed the orginal array;
 */
function reversedCopy(arr) {
    let copy = arr.slice();
    let rev = [];
    for (let i = 0; i < arr.length; i++) {
        let yee = copy.pop();
        rev.push(yee);
    }
    return rev;
}
console.log(reversedCopy([1, 2, 3, 4]));

/**
 * 
 * @param {array} arr enter any array
 * @returns {array} negative array.
 */
function returnnegative(arr) {
    let negativearr = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negativearr[count] = arr[i];
            count++;
        }
    }
    return negativearr;
}
/**
 * 
 * @param {array} arr enter any array
 * @param {valu} opd1 enter any value
 * @param {value} opd2 enter any value
 * @returns {array} range of two value.
 */
function filterRange(arr, opd1, opd2) {
    const newArr = [];
    let arrLngth = arr.length;
    let count = 0;
    for (let i = 0; i < arrLngth; i++) {
        if (arr[i] >= opd1 && arr[i] <= opd2) {
            newArr[count++] = arr[i];
        }

    }
    return newArr;
}
let arrr = [0, 100, 3, 6, -555];
console.log(filterRange(arrr, 6, 120));

/**
 * 
 * @param {array} arr enter the array
 * @returns {array} return the array.
 */
function filterPalindromes(arr) {
    const newArr = [];
    let ArLn = arr.length;
    let count = 0;
    for (let i = 0; i < ArLn; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i].charAt(j) === arr[i].charAt((arr[i].length - 1) - j)) {
                newArr[count] = arr[i];
            }

        }
        count++;
    }
    return newArr;
}

let arry = ["a", "kayak", "racecr"];
console.log(filterPalindromes(arry));

/**
 * 
 * @param {number} matr1 takes matrix as parameter; 
 * @param {number} matr2 takes matrix as parameter;
 * @returns {matrix} return matrix array; 
 */
function matrixAddition(matr1, matr2) {

    let newm = [];
    for (let i = 0; i < matr1.length; i++) {
        //let sum=0;
        for (let j = 0; j < matr1[i].length; j++) {
            //sum+=matr1[i][j]+matr2[i][j];
            newm.push(matr1[i][j] + matr2[i][j]);
        }
        console.log();
    }
    return newm;
}

let matr1 = [[0, 1, 2],
[9, 8, 7]];
let matr2 = [[6, 5, 4],
[3, 4, 5]];
console.table(matrixAddition(matr1, matr2));

 //module.exports= {isArrayEqual,addends,getMiddle,rotateLeft,rotateNRight};