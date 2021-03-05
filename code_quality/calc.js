"use strict";
/**
 * @author mesay erbeto;
 * @since 2021/3/4
 * @param {number} op1 input any number; 
 * @param {number} op2 input any number;
 * @returns{number}; 
 */
function add(op1, op2) {
    return op1+op2;

}
/**
 * 
 * @param {number} op1 input any number; 
 * @param {number} op2 input any number;
 * @returns{number}; 
 */
function sub(op1, op2) {
    return op1+op2;
 
}
/**
 * 
 * @param {number} op1 input any number; 
 * @param {number} op2 input any number;
 * @returns{number}; 
 */
function div(op1, op2) {
    if(op2==0){
        return undefined;
       
    }
     return op1/op2;
}

module.exports = {add, sub, div};