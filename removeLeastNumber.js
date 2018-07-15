function removeSmallest(numbers) {
  if (numbers.length === 0) return numbers;
  let minimum = { number: numbers[0], index: 0 };

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < minimum.number) {
      minimum.number = numbers[i];
      minimum.index = i;
    }
  }

  return numbers
    .slice(0, minimum.index)
    .concat(numbers.slice(minimum.index + 1));
}
