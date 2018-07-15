function binarySearch(array, sum) {
  let middleIndex = Math.floor(array.length / 2);
  let middleElement = array[middleIndex];
  if (middleElement === sum) {
    return true;
  } else if (sum < middleElement && array.length > 1) {
    return binarySearch(array.splice(0, middleIndex), sum);
  } else if (sum > middleElement && array.length > 1) {
    return binarySearch(array.splice(middleIndex + 1, array.length), sum);
  } else {
    return false;
  }
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 1));
