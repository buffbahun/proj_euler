function sumSqrDiff(numBelow) {
	return squrOfSum(+numBelow) - sumOfSqur(+numBelow);
}

function sumOfSqur(nth) {
	return ( nth * (nth + 1) * (2 * nth + 1) ) / 6;
}

function squrOfSum(nth) {
	return ( ( nth * (nth + 1) ) / 2 ) ** 2;
}

console.log(sumSqrDiff(process.argv[2]));
