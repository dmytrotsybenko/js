function range(start, finish, step=1){
	var tmp_arr = [];
	if(start > finish){
		if(step < 0){
			step = Math.abs(step);
		}
		for(i = start; i >= finish; i-=step){
		tmp_arr.push(i);
}
	console.log('Array is: ' + tmp_arr);
	}
	else{
		for(i = start; i <= finish; i+=step){
			tmp_arr.push(i);
		}
		console.log('Array is: ' + tmp_arr);
	}
	return tmp_arr;
};


function sum(mass){
	var tmp_mass = 0;
	for(var num in mass){
		tmp_mass += mass[num];
	}
	console.log('Sum is: ' + tmp_mass);
	return tmp_mass;
};
sum(range(10,2,2));