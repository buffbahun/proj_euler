function isPrime(num) {
	if (num < 2) {
		console.error("Number should be greater than 1");
		return -1;
	}

	// if (num === 2) return true;

	for (let i = 2; i <= Math.trunc(num / i); i++) {
		if ( !(num % i) ) return false;
	}

	return true;
}

console.log(isPrime(process.argv[2]));
