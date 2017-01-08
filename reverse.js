function reverse(mass){
	console.log('Input array: ' + mass);
	var tmp_mass = [];
	var tmp_pop = [];
	for(var i = mass.length; i > 0; i--){
		tmp_pop = mass.pop();
		tmp_mass.push(tmp_pop);
	}
	for(var i = tmp_mass.length; i > 0; i--){
		tmp_pop = tmp_mass.shift();
		mass.push(tmp_pop);
	}	
	console.log('Output array: ' + mass);
	return mass;
}
a = [1,2,3,4,5];
reverse(a);
console.log(a);