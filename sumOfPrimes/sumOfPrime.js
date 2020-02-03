/*
Sum of Primes
Given a positive number, return the sum of all positive primes that are less than or equal to that number.
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

function sumOfPrimes(n) {
    if( n < 0) return 'number is negative !';
    if( n === 0 ) return 'unvalid number !'; 
    let sumOfPrimes = 0;
    for(let i = 1; i <= n; i++){
        if(primeTester(i)){
            if(sumOfPrimes+i <= n){
                sumOfPrimes = sumOfPrimes + i;
            }
            else if(sumOfPrimes+i > n){
                return sumOfPrimes;
            }
        }
    }
}
