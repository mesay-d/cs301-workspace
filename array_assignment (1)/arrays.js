"use strict";
/**
 * @author MESAY ERBETO;
 * @since 3/4/2021;
 * @param {array} arr1 first array
 * @param {array} arr2 second array
 * @returns {boolean} true if equal else false
 */
function isArrayEqual(arr1, arr2){
    if(arr1.length!==arr2.length){
        return false;
    }
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]!==arr2[i]){
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
function addends(arr){
    let first=arr.shift();
    let end=arr.pop();
    let sum=first+end;
    return sum;
}
/**
 * 
 * @param {array} arr enter any array
 * @returns{number} return the middle number.
 * 
 */
function  getMiddle(arr){
    let middle;
    if(arr.length%2==0){
        middle=(arr[arr.length/2-1]+arr[arr.length/2])/2;
    }else{
        let mee=Math.floor(arr.length/2);
        middle=arr[mee];
        
     }

return middle;
}
console.log(getMiddle([1,2,3,4]));
console.log(getMiddle([1,2,3,4,5]));

/**
 * 
 * @param {array} arr entery any array 
 * @returns{array};
 */
function  rotateLeft(arr){
    let copy=[];
    let temp=arr.shift();
    copy=arr;
    copy.push(temp);
    return copy;
}
/**
 * 
 * @param {array} arr enter the array
 * @param {number} num enter the number of shifting
 * @returns{array};
 */
function rotateNRight(arr,num){
    let copy=[];
    
    for (let i = 1; i <= num; i++) {
     let temp=arr.pop(); 
     copy=arr;
    copy.unshift(temp);  
 }
    return copy;
}
/**
 * 
 * @param {array} arr1 enter
 * @param {array} arr2 enter
 * @returns{array};
 */
function mergeArr(arr1,arr2){
    for (let index = 0; index <=arr2.length; index++) {
        let temp=arr2.shift();
        arr1.push(temp);
        } 
        let mUU=arr2[0];
       arr1.push(mUU);
        return arr1;
}


 module.exports= {isArrayEqual,addends,getMiddle,rotateLeft,rotateNRight};