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
var anc = JSON.stringify(ANCESTRY_FILE);
var ancestry = JSON.parse(anc);

//function code
function map(array, transform){
	var mapped = [];
	for(var i = 0; i < array.length; i++){
		mapped.push(transform(array[i]));
		//console.log(mapped);
	}
	return mapped;
};

var overNinety = ancestry.filter(function(person){
	return person.died - person.born < 88
});
//console.log(overNinety);

console.log(map(overNinety, function(person){
		return person.name;
}));

