ANCESTRY_FILE =[
{
		'name': 'Emma de Milliano',
		'sex':	'f',
		'born':	'1776',
		'died':	'1856',
		'father':	'Petrus de Milliano',
		'mother':	'Sophia van Damme'
	},
		{
		'name':	'Carlosa Heverbeke',
		'sex':	'f ',
		'born':	'1912',
		'died':	'1988',
		'father':	'Carel Heverbeke',
		'mother':	'Maria van Brussel'
	},
		{
		'name':	'Anna Ruize',
		'sex':	'f',
		'born':	'2000',
		'died':	'2080',
		'father':	'Carel Heverbeke',
		'mother':	'Maria van Brussel'
	},
		{
		'name':	'Bella del Torro',
		'sex':	'f',
		'born':	'2000',
		'died':	'2082',
		'father':	'Carel Heverbeke',
		'mother':	'Maria van Brussel'
	}];

var anc = JSON.stringify(ANCESTRY_FILE);
var ancestry = JSON.parse(anc);


//code here

function average(array){
	function plus(a,b){
		return a + b;
	}
	return array.reduce(plus) / array.length;
}

var century = ancestry.map(function(person){
	return Math.ceil(person.died/100);
})
console.log(century);
var howOld = ancestry.map(function(person){
	return person.died - person.born;
})
console.log(howOld);
var average = average(howOld.filter(function(array){
	if()
}));
console.log(average);
function main(array){
	var reees = ancestry.reduce(average())
}