function unless(test, then){
	if(!test){								//when !(n % 2 = 0) = 1, we run then() function 
		then();
	}
}

function repeat(times, body){
	for(var i = 0; i < times; i++){
		body(i);
	}
}

repeat(10, function(n){
	unless(n % 2, function(){
		console.log(n, 'is even');
	});
});