function sumOfOther(array) {
	let fullSum = 0;
	for(let i = 0; i < array.length; i++) {
		fullSum += array[i];
	}
	let sumArr = array.map(function(n) { 
		return fullSum - n;
	})
	return sumArr;
}

