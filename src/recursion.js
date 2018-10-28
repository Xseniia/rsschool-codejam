const recursion = function(tree) {
	let array = [];
	const start = function(arg, depth) {
		if(!array[depth]) array[depth] = [];
		array[depth].push(arg.value);
		let innerDepth = depth + 1;
		if(arg.left) {start(arg.left, innerDepth)}
		if (arg.right) {start(arg.right, innerDepth)}
	}
start(tree, 0)
return array;
}