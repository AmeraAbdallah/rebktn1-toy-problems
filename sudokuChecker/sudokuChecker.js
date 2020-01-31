/*
Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.

A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9.

Input: A String representing the board. 
Output: 'solved' if the board is valid, 'invalid' if it isn't

Example input: 
"735814296\n
896275314\n
214963857\n
589427163\n
362189745\n
471356982\n
923541678\n
648792531\n
157638429"
*/

function checkNineNumbers(string) {
  return string.split('').sort((a, b) => parseInt(a) - parseInt(b)).join('') === '123456789';
}


function sudokuChecker(board) {
  let rows = board.split('\n');
  let columns = ['', '', '', '', '', '', '', '', ''];
  let squers = ['', '', '', '', '', '', '', '', ''];

  for(let i = 0; i < rows.length; i++){
    let squersCounter = 0;

    if(i >= 3 && i < 6) squersCounter = 3;
    if(i >= 6) squersCounter = 6;

    if(!checkNineNumbers(rows[i])){
      return 'invalid';
    }

    columns[0] += rows[i][0];
    columns[1] += rows[i][1];
    columns[2] += rows[i][2];
    columns[3] += rows[i][3];
    columns[4] += rows[i][4];
    columns[5] += rows[i][5];
    columns[6] += rows[i][6];
    columns[7] += rows[i][7];
    columns[8] += rows[i][8];

    squers[squersCounter + 0] += rows[i][0] + rows[i][1] + rows[i][2];
    squers[squersCounter + 1] += rows[i][3] + rows[i][4] + rows[i][5];
    squers[squersCounter + 2] += rows[i][6] + rows[i][7] + rows[i][8];

  }

  for(let i = 0; i < columns.length; i++){
    if(!checkNineNumbers(columns[i])){
      return 'invalid';
    }
  }

  for(let i = 0; i < squers.length; i++){
    if(!checkNineNumbers(squers[i])){
      return 'invalid';
    }
  }

  return 'solved';
}
