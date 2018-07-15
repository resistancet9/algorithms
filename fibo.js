// using cache(memoization)
function fibonacci(position, cache) {
	cache = cache || [];
	if (cache[position]) return cache[position];
	else {
		if (position < 3) return 1;
		else
			cache[position] =
				fibonacci(position - 1, cache) + fibonacci(position - 2, cache);
	}
	return cache[position];
}

console.log(fibonacci(100));

// crappy code
function fibonacci(position) {
	if (position < 3) return 1;
	else return fibonacci(position - 1) + fibonacci(position - 2);
}

console.log(fibonacci(100));
