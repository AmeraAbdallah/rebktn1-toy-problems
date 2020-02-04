/*
In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:
1p
2p
5p
10p
20p
50p
£1 (100p)
£2 (200p)

Given a given number of pence, return the possible number of ways someone could make change.
It is possible to make 5 pence in the following ways:
5 * 1p
3 * 1p + 1 * 2p
1 * 1p + 2 * 2p
1 * 5p
In other words, find all the possible combinations of coins that sum to a given pence value.
*/

// HELPERS
let coins = [1, 2, 5, 10, 20, 50, 100, 200];

function multiplyPossiblities(total, coin, result){
  let possibility1 = total / coin;
  if(possibility1/ parseInt(possibility1) === 1 && total !== coin){
    result.push(`${possibility1} * ${coin}p`);
  }
}

function getSumPossiblities(number, coins, result = []){
  if(coins.length === 0) return result;
  if(number - coins[coins.length-1] >= 0) {
    result.push(number - coins[coins.length-1]);
  }
  for(let i = coins.length - 1; i >= 0; i--){
    //do recursion here
  }
}

function coinSums(total) {
  if (total <= 0) return 'please enter valid number';
  let possibleCoins = [];
  let result = [];

  for(let i = 0; i < coins.length; i++){
    if(coins[i] <= total){
      possibleCoins.push(coins[i]);
    } else break;
  }

  for(let i = 0; i < possibleCoins.length; i++){
    multiplyPossiblities(total, possibleCoins[i], result);
  }
  
  return result;
}
