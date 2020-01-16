/*
Prime Tester
A prime number is an integer greater than 1 that has no divisors other than itself and 1. 
Write a function that accepts a number and returns true if it’s a prime number, false if it’s not. 
The grader is looking at the efficiency of your solution (number of operations) as well as correctness!

primeTester(2) // true
primeTester(1) // false

*/

function primeTester(n) {
    if(n === 1) return false;
    let numbers = [2, 3, 4, 5, 6, 7, 8, 9];

    for(let i = 0; i < numbers.length; i++){
        if(n !== numbers[i]) {
            if(Math.floor(n / numbers[i]) === n/numbers[i]){
                return false;
            }
        }
    }

    return true;
}
