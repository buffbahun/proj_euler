const prime = require("./soln3");

function getNthPrime(nthVal) {
	let count = 0;
	for (let i = 2; ;i++) {
		if (!prime.isPrime(i)) continue;

		count++;
		if (count >= nthVal) return i;
	}
}

console.log(getNthPrime(process.argv[2]));
