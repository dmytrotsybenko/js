/*
				arr1 = [8,4,5,5,6];
				arr2 = [111111];
				var arr3 = arr1.concat(arr2);
*/

function reduce(array, combine, start=0){
	var current = [start];
	for(var i = 0; i < array.length; i++){
		current = combine(array[i], current);
	}
	return current;
}

var res = reduce([1,2,3, [1,2,3]], function(arrVal, curr){
	var val = curr.concat(arrVal);
	return val;
}, 111);
console.log(res);
