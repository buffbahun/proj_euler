const prime = require("./soln3");

function eachNumDiv(rangeMin, rangeMax) {
	let numAry = [];
	let powVal;

	for (let i = +rangeMin; i <= +rangeMax; i++) {
		if (!prime.isPrime(i)) continue;
		
		powVal = i;
		while (powVal <= rangeMax) {
			powVal = powVal * i;
		}
		numAry.push(powVal / i);
	}

	return numAry.reduce((pev, cur) => pev * cur, 1);
}

console.log(eachNumDiv(process.argv[2],process.argv[3]));
