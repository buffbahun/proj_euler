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

function primeFactor(num) {
	let grtstNum = 0;

	for (let i = 2; i < num; i++) {
		if (isPrime(num)) {
			grtstNum = grtstNum > num ? grtstNum : num;
			break;
		}
		if (isPrime(i) && (num % i <= 0)) {
			grtstNum  = grtstNum > i ? grtstNum : i;
			num = num / i;
			i = 2
		}
	}

	return grtstNum;
}

console.log(primeFactor(600851475143));
