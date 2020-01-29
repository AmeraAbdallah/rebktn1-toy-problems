/*
Implement a function that finds the longest palindrome in a given string. 
For example, in the string "My dad is a racecar athlete", the longest palindrome is "a racecar a". 
Count whitespaces as valid characters. 
Other palindromes in the above string include "dad", "ete", " dad " (including whitespace on each side of dad).
*/

function longestPalindrome(string) {
  let palindrome = [];
  let counter = 1;
  while(counter < string.length){
    let loopLength = (counter < (string.length - counter)) ? counter : (string.length - counter); 
    console.log(loopLength, 'bbbbbb')
    let palindromeItem = '';
    console.log(palindromeItem, 1)
    for(let i = 1; i <= loopLength; i++){
      if(string[counter - i] === string[counter + i]){
        palindromeItem = string[counter + i] + palindromeItem;
        console.log(palindromeItem, 2)
      } else {
        let reversed = palindromeItem.split('').reverse().join('');
        console.log(palindromeItem, reversed, 'oooooo');
        palindromeItem += reversed;
  
        palindrome.push(palindromeItem);
        console.log(palindromeItem, 3);
        palindromeItem = "";
        ++counter;
      }
      console.log(palindromeItem, 4)
    }
    ++counter;
  }
  console.log(palindrome)
  return palindrome.sort(function (a, b) { return b.length - a.length; })[0];
}
