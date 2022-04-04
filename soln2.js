function fibonacciGen(numBelow, num0, num1) {
	if ( (numBelow < num0) || (numBelow < num1) ) {
		console.error("Enter correct number range");
		return -1;
	}

	let gtrNum = (num0 > num1) ? num0 : num1;
	let smlNum = (gtrNum === num0) ? num1 : num0;
	let strAry = [smlNum, gtrNum];

	while (strAry[strAry.length - 1] <= numBelow) {
		strAry.push(strAry[strAry.length - 1] + 
			    strAry[strAry.length - 2]);
	}
	strAry.pop();

	return strAry;
}

// console.log(fibonacciGen(100,1,2));

function fiboEvenAdder(numBelow, num0, num1) {
	let fiboArray = fibonacciGen(numBelow, num0, num1);
	
	let nthVal = 0;
	let evnSum = 0;
	while( (3 * nthVal + 1) < fiboArray.length) {
		evnSum += fiboArray[3 * nthVal + 1];
		nthVal++;
	}

	return evnSum;
}

console.log(fiboEvenAdder(4_000_000, 1, 2));
