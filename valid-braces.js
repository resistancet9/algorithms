function validBraces(str) {
  let strArray = str.split("");
  let obj = {};
  let temp = [];

  strArray.map(brace => {
    switch (brace) {
      case "(":
        temp.push(brace);
        break;
      case "{":
        temp.push(brace);
        break;
      case "[":
        temp.push(brace);
        break;
      case "]":
        temp.push(brace);
        if (temp[temp.length - 2] === "[") temp.splice(temp.length - 2, 2);
        break;
      case ")":
        temp.push(brace);
        if (temp[temp.length - 2] === "(") temp.splice(temp.length - 2, 2);
        break;
      case "}":
        temp.push(brace);
        if (temp[temp.length - 2] === "{") temp.splice(temp.length - 2, 2);
        break;
      default:
        break;
    }
  });

  return temp.length ? false : true;
}

console.log(validBraces("([{}])"));
