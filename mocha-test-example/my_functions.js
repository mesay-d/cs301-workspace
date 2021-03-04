
/**
 * 
 * @param {number} n number to be tested if prime
 * @return {boolean} 
 */
function checkPrime(n){
    for(let i=2; i<n;i++){
        if(n%i===0) return false;
    }
    return true;
}

/**
 * 
 * @param {number} n number to be test if odd
 * @return {boolean} 
 */
function isOdd(n){
    return n%2!==0;
}

module.exports = {checkPrime, isOdd};