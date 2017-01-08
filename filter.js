ANCESTRY_FILE =[
{
		'name': 'Emma de Milliano',
		'sex':	'f',
		'born':	'1876',
		'died':	'1956',
		'father':	'Petrus de Milliano',
		'mother':	'Sophia van Damme'
	},
		{
		'name':	'Carlos Heverbeke',
		'sex':	'm',
		'born':	'1832',
		'died':	'1905',
		'father':	'Carel Heverbeke',
		'mother':	'Maria van Brussel'
	}];
var ancestry = JSON.stringify(ANCESTRY_FILE);
var outputJSON = JSON.parse(ancestry);

function filter(array, test){
	tmp_array = [];
	for(var i = 0; i < array.length; i++){
		if(test(array[i])){
			tmp_array.push(array[i]);
		}
	}
	return tmp_array;
}

var lookAtTheValue = filter(outputJSON, function(arg){
	if(arg.born > 1830 && arg.born < 1876){
		return arg.name;
	}
});
console.log(lookAtTheValue);