/*
Implement Operators

Write three functions to replace the multiply, divide, and modulo operators. 
The only operators you may only use in your solution are addition and subtraction. 
Your functions will only have to handle integer math.

EXAMPLES:
  multiply(5, 2) // 10
  divide(5, 2) // 2
  modulo(5, 2) // 1
*/

var multiply = function(x, y) {
  // your code here...
  let result = 0;
  for(let i = 0; i < y; i++){
    result += x;
  }
  return result;
};
multiply(5, 2);

var divide = function(x, y) {
  let result = 0;
  while(x > 0){
    result++;
    x = x - y;
  }
  if(x < 0) return result - 1;
  return result;
};
divide(5, 2) // 2

var modulo = function(x, y) {
  let result = 0;
  while(x > 0){
    result++;
    x = x - y;
  }
  return x * -1;
};
modulo(5, 2) // 1
