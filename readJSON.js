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

/*
var string = JSON.stringify({name:'x', born:'1980'}); 	//this function returned JSON text
console.log(string);
//------------------------------------------------
console.log(JSON.parse(string).born);					//JSon.parse returned JSON value
*/

var ancestry = JSON.stringify(ANCESTRY_FILE);
var o = JSON.parse(ancestry);
for(var i = 0; i < o.length; i++){
	console.log(o[i].name);
};
