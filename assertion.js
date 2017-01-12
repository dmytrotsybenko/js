function assertionFailed(message){
	this.message = message;
}
assertionFailed.prototype = Object.create(Error.prototype);

function assert(test, message){
	if(!test){
		throw new assertionFailed(message);
	}
}

function lastElement(array){
	assert(array.length > 0, 'unfull array');
	return array.pop();	
}
for(var i = 0; i < 10; i++ ){
console.log(lastElement([1,2,3,4]));
}