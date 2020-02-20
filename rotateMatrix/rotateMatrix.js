/*
Write a function that rotates a NxN matrix 90 degrees clockwise. A matrix, also called a 2-D array, is simply an array of arrays of values.
2x2 MATRIX EXAMPLE:
[ 
  [1, 2],  0,0 0,1
  [3, 4]   1,0 1,1
]
Rotated:
[ 
  [3, 1], 
  [4, 2] 
]
4x4 MATRIX EXAMPLE:
[ 
  [ 1, 2, 3, 4], 
  [ 5, 6, 7, 8], 
  [ 9, "A","B","C"], 
  ["D","E","F","G"] 
]
Rotated:
[ 
  ["D", 9, 5, 1], 
  ["E", "A", 6, 2], 
  ["F","B", 7, 3], 
  ["G","C", 8, 4] 
]
EXTRA CREDIT
  • Make your function operate on rectangular matrices (MxN rather than NxN).
  • Make your function accept a parameter for the direction of rotation (1 = clockwise, -1 = counterclockwise)
Important note: In mathematics, and generally in CS, matrices are identified as m-by-n, where m is the number of rows and n is the number of columns. 
So an [i][j] address in a matrix will be i places down, and j places over. 
This usually matches the way arrays are addressed in code, but keep in mind that it differs from use in geometry and computer graphics, where coordinates of the form (x,y) are usually x units over, and y units down.
*/

function rotateMatrix(matrix) {
  let counter = matrix.length - 1;
  let result = [];

  for(let i = 0; i < matrix.length; i++) {
    result.push([]);
    for(let j = 0; j < matrix.length; j++) {
      // i = j, j = length - i - 1
      result[i].push(matrix[matrix.length-1-j][i])
      // result[j][matrix.length - 1 - i] = matrix[i][j];
    }
  }
  return result;
}

rotateMatrix([ 
  ["D", 9, 5, 1],          
  ["E", "A", 6, 2], 
  ["F","B", 7, 3], 
  ["G","C", 8, 4] 
]);

/* i,j i,j
 * 0,0 0,3  i = j, j = length - i - 1
 * 0,1 1,3
 * 0,2 2,3
 * 0,3 3,3
 */

 /*
 * 1,0 0,2
 * 1,1 1,2
 * 1,2 2,2
 * 1,3 3,2
 */

  /*
   i,j i,j
 * 3,0 0,0  i =j, j = length-1-i
 * 3,1 1,0
 * 3,2 2,0
 * 3,3 3,0
 */