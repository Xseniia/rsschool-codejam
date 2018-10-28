const sum = function(accumulator, current) {
	return accumulator + current;
}

const make = function(...argsFirst) {
	let arr = [];
	if(typeof argsFirst[0] === 'function') return null;
	arr.push(...argsFirst);

	const func = function(...argsSecond) {
		if(typeof argsSecond[0] === 'function') {
			return arr.reduce(sum);
		}
		arr.push(...argsSecond);
		return func;
	}

	return func;
}
