function sumTwo(array, sum) {
  let collection = [];
  let targetIndex;
  for (let [index, el] of array.entries()) {
    targetIndex = array.indexOf(sum - el);
    // or targetIndex > index
    if (targetIndex > -1 && targetIndex !== index) {
      collection.push([el, array[targetIndex]]);
    }
  }
  return collection;
}

sumTwo([1, 2, 3, 4, 5, 2, 1, 2, 2], 3);
