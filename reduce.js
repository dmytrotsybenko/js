function reduce(array, combine, start){
	var current = start;
	for(var i = 0; i < array.length; i++){
		current = combine(current, array[i]);
	}
	return current;
}

var o = reduce([1,2,3,4], function(a, b){
	//console.log(a,b);
	return a * b;
}, 1);
console.log(o);