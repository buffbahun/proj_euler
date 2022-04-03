// Function for calculating HCF between two numbers
function hcf(num0, num1) {
	if ((num0 < 0) || (num1 < 0)) {
		console.error("Numbers should be positive integers.");
		return -1;
	}

	if ((num0 <= 1) || (num1 <= 1)) {
		return 1;
	}

	let gtrNum = num0 > num1 ? num0 : num1;
	let remender = gtrNum === num0 ? num1 : num0;

	while ((gtrNum % remender) >= 1) {
		let tmp = gtrNum % remender;
		gtrNum = remender;
		remender = tmp;
	}

	return remender;
}

// console.log(hcf(process.argv[2],process.argv[3]));

function nHcf(...nums) {
	if (nums.length < 2) {
		console.error("Enter more than one number.");
		return -2;
	}
	
	let tmpHcf = hcf(nums[0],nums[1]);
	for (let i = 2; i < nums.length; i++) {
		if (tmpHcf < 1) return tmpHcf;
		tmpHcf = hcf(tmpHcf,nums[i]);
	}

	return tmpHcf;
}

// console.log(nHcf(14,49,343));

function nLcm(...nums) {
	let hcfVal = nHcf(...nums);

	if (hcfVal <= 0) {
		console.error("Numbers should be positive integers.");
		return -1
	}
	
	let accMul = 1;
	for (let val of nums) {
		accMul *= (val / hcfVal);	
	}

	return accMul * hcfVal;
}

// console.log(nLcm(3))

// console.log(lcm(3,5))

function multiplesAdder(numBelow, num0, num1) {
	let lcm = nLcm(num0, num1);

	let itemNum0 = Math.trunc( (numBelow - 1) / num0);
	let itemNum1 = Math.trunc( (numBelow - 1) / num1);
	let itemNumLcm = Math.trunc( (numBelow - 1) / lcm);

	let value = ( (num0 * itemNum0 * (itemNum0 + 1)) / 2 ) +
		    ( (num1 * itemNum1 * (itemNum1 + 1)) / 2 ) -
                    ( (lcm * itemNumLcm * (itemNumLcm + 1)) / 2 );

	return value;
}

console.log(multiplesAdder(1000,3,5));
