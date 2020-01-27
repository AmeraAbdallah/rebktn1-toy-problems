/*
Number to English

Write a function numberToEnglish, it should take a number and return the number as a string using English words.


numbertoEnglish(7) // "seven"
numberToEnglish(575) // "five hundred seventy-five"
numberToEnglish(78193512) // "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*/

// HELPERS

var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',

  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety'
};

var numbersToPlace = [
  [10, 'ten', 2], //2
  [100, 'hundred', 3], //3
  [1000, 'thousand', 4], //4
  [1000000, 'million', 7], //7
  [1000000000, 'billion', 10], //10
  [1000000000000, 'trillion', 13], //13
  [1000000000000000, 'quadrillion', 16], //16
  [1000000000000000000, 'quintillion', 19] //19
];

function numberToEnglish(number, numbersToPlace, result = ''){
  let stringNumber = number.toString();
  if(stringNumber.length === numbersToPlace[0][2]){ 
    result += numbersToWords[stringNumber[0]] + numbersToPlace[0][1]
  }
  return result;
}
