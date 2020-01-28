/*
Power Set

Return an array that contains the power set of a given string. 
The power set is a set of all the possible subsets, including the empty set.

Make sure your code does the following:

  1. All characters in a subset should be sorted alphabetically, and the array of subsets should be sorted alphabetically.
  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. ‘ab’ and ‘ba’ are the same.
  3. Duplicate characters in strings should be ignored; for example, ‘obama’ should be evaluated as if it only contained one ‘a’.

Example: 

powerSet("a") // [ "", "a" ]
powerSet("ab") // [ "", "a", "ab", "b" ]
powerSet("obama") // [ "", "a", "ab", "abm", "abmo", "abo", "am", "amo", "ao", "b", "bm", "bmo", "bo", "m", "mo", "o" ]
powerSet("horse") // [ "", "e", "eh", "eho", "ehor", "ehors", "ehos", "ehr", "ehrs", "ehs", "eo", "eor", "eors", "eos", "er", "ers", "es", "h", "ho", "hor", "hors", "hos", "hr", "hrs", "hs", "o", "or", "ors", "os", "r", "rs", "s" ]
*/
function generate(array, i = 0, result = []) {
  if(array.length === 0){
    return result;
  }
  i;
  let current = array[i];
  console.log(current)
  array = array.slice(++i)
  console.log(array)
  result.push(current);
  for(let j= 0; j< array.length; j++){
    result.push(current+array[j]);
  }
  return generate(array, i, result)
}

function powerSet(string) {
  let sorted = string.split('').sort();
  let unique = new Set(sorted);
  
  return generate([...unique]);
}
