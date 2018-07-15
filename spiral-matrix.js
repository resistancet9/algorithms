function spiralMatrix(num) {
  let matrix = Array.from({ length: num }, () => []);

  let row_start = 0;
  let row_end = num - 1;

  let col_start = 0;
  let col_end = num - 1;

  let counter = 0;

  while (row_start <= row_end && col_start <= col_end) {
    //col start
    for (let i = col_start; i <= col_end; i++) {
      matrix[row_start][i] = ++counter;
    }
    row_start++;

    //row down
    for (let i = row_start; i <= row_end; i++) {
      matrix[i][col_end] = ++counter;
    }
    col_end--;

    //col back
    for (let i = col_end; i >= col_start; i--) {
      matrix[row_end][i] = ++counter;
    }
    row_end--;

    //row back
    for (let i = row_end; i >= row_start; i--) {
      matrix[i][col_start] = ++counter;
    }
    col_start++;
  }

  console.table(matrix);
}

spiralMatrix(5);
