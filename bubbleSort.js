function bubbleSort(originalArray) {
	for (i = originalArray.length; i > 0; i--) {
		for (j = 0; j < i; j++) {
			if (originalArray[j] > originalArray[j + 1]) {
				let temp = originalArray[j];
				originalArray[j] = originalArray[j + 1];
				originalArray[j + 1] = temp;
			}
		}
	}
}

bubbleSort([13, 4, 2, 4, 5, 44, 100]);
