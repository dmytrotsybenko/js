function equal(first, second){
	if(typeof(first) == typeof(second) && first == second){
		return true;
	}else if(first === second){
		return true;
	}else{
		return false;
	}
};
a = 1;
b = 1;
var obj = {here: {is: 'in'}, object: 2};
console.log(typeof(obj));
console.log(a == b);
console.log(typeof(b));
console.log(equal(obj, obj));
console.log(equal({here: {is: 'in'}, object: 2}, {here: {is: 'in'}, object: 2}));