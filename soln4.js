function numToDigit(num) {
	let numLength = 0;
	let digitAry = [];

	if (isNaN(+num)) {
		console.error("Please enter only positive integer");
		return -1
	}

	while (num / 10 >= 1) {
		digitAry.push(num % 10);
		num = Math.trunc(num / 10);
	}
	digitAry.push(+num);
	return digitAry;
}

function isPalindromNum(num) {
	let digitAry = numToDigit(num);
	let aryLnth = digitAry.length;

	if (!Array.isArray(digitAry)) return -1;

	for(let i = 0; i < Math.trunc(aryLnth/2); i++) {
		if (digitAry[i] !== digitAry[aryLnth-1-i]) {
			return false;
		}
	}

	return true;
}

// console.log(isPalindromNum(process.argv[2]))

function palindromeFinder(digitsBelow) {
	let minNum = 10 ** (digitsBelow - 1);
	let maxNum = 10 ** digitsBelow - 1;
	let gtrNum = 0;

	for (let i = maxNum; i >= minNum; i--) {
		for (let j = maxNum; j >= minNum; j--) {
			if((i * j > gtrNum) && isPalindromNum(i*j)) {
				gtrNum = i * j;
			}
		}
	}

	return gtrNum;
}

console.log(palindromeFinder(process.argv[2]));
