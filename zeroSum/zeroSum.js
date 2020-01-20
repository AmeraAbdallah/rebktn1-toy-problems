/*
Zero Sum
Given an array of negative/positive integers, return true if there exists two numbers whose sum is zero.

Constraints: Solve this linear time complexity O(n)

zeroSum([ 1, 3, 2, -3 ]) // true
zeroSum([ 5, 7, 2, 9 ]) // false
*/

function zeroSum(arr){
    let col = {};
    for(let i = 0; i < arr.length; i++){ // O(n)
        if(arr[i] < 0){
            if(col[arr[i] * -1] !== undefined){
                col[arr[i] * -1] = arr[i] 
            } else if(col[arr[i]] === undefined){
                col[arr[i]] = 0; 
            } 
        } else {
            if(col[arr[i] * -1] !== undefined){
                col[arr[i] * -1] = arr[i]; 
            } else if(col[arr[i]] === undefined){
                col[arr[i]] = 0;
            } 
        }
    }
    for(let key in col){ // O(n)
        if(!key + col[key]) return true;
    }
    return false; // O(n) + O(n) = O(n)
}

//another sollution
function zeroSum(arr){
    let col = {};
    for(let i = 0; i < arr.length; i++){ // O(n)
        col[arr[i]] = true;
    }
    for(let key in col){ // O(n)
        if(col[key * -1]) return true;
    }
    return false; // O(n) + O(n) = O(n)
}
