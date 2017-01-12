/*ANCESTRY_FILE =[
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


function average(array){
	function plus(a,b){
		return a + b;
	}
	return array.reduce(plus) / array.length;
}

function groupBy(array, groupOf){
	var groups = {};
	array.forEach(function(element){
		var groupName = groupOf(element);
		if(groupName in groups){
			groups[groupName].push(element);
			console.log(groups[groupName]);
		}
		else{
			groups[groupName] = [element];
			console.log(groups[groupName]);
		}
	})
	return groups;
};

var byCentury = groupBy(ancestry, function(person){
	return Math.ceil(person.died / 100);
});

for(var century in byCentury){
	var ages = byCentury[century].map(function(person){
		return person.died - person.born;
	});

console.log(century + ':' + average(ages));
}
*/
var i = 13, o = 10;
for(var p = 0; p < 20; p++){
console.log(i /= o);
}