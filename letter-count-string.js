/*
  @input: "aaavvvbbffff"
  @output: "a3v3b2f4"
*/

function letterCount(str) {
  let finalString = "";
  let arr = str.split("");
  let count = 0;
  let currentChar = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (currentChar === arr[i]) {
      count++;
    } else {
      finalString += currentChar + ++count;
      currentChar = arr[i];
      count = 0;
    }
  }

  finalString += currentChar + ++count;
  console.log(finalString);
}

letterCount("aaavvvbbffffc");
