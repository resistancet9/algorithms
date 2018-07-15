function divider(arr) {
	if (arr.length < 2) return arr;
	let mid = Math.floor(arr.length / 2);
	return merger(divider(arr.slice(0, mid)), divider(arr.slice(mid)));
}

function merger(arr1, arr2) {
	let result = [];
	while (arr1.length && arr2.length) {
		if (arr1[0] < arr2[0]) result.push(arr1.shift());
		else result.push(arr2.shift());
	}
	return arr1.length ? result.concat(arr1) : result.concat(arr2);
}

divider([13, 4, 2, 1, 24]);
