function forEach(array, action){
	for(var i=0; i < array.lenght; i++){
		action(array[i]);
	}
};

forEach(["dasasd",1,2,3,4], console.log);