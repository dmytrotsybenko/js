function promptDirection(question){
	var result = prompt(question, '');
	if(result.toLowerCase() == 'left') return 'L';
	if(result.toLowerCase() == 'right') return 'R';
	else throw new Error('Incorrect way' + result);
}

function look(){
	if(promptDirection('Where?') == 'L') 
		return 'comeback to house';
	else(promptDirection('Where?') == 'R') 
		return 'to the cinema';
}

try{
	console.log('You looking', look());

}catch(error){
	console.log('Hmm, something happend ' + error);
}