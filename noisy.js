function noisy(some_func) {
	return function(arg){
		console.log('calling with', arg);
		var val = some_func(arg);							//boolean funct here
		console.log('called with', arg, '- got', val);
		return val;
	}
};

noisy(Boolean)(2);