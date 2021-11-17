// lookup tables and constants

const statTable = {
	'kakuna': [50,20,55,30,25]
};

const statSelect = (pokemon) => statTable[pokemon] || [0,0,0,0,0];

// functions section starts here

function generateType(type)
{
	return '<td class="'+type.toLowerCase()+'">'+type+'</td>';
}

function generateLink(pokemon, path='')
{
	return '<a href="' + path + pokemon + '.html" title="' + pokemon + '">' + pokemon + '</a>';
}

function generateButton(pokemon, direction, path='')
{
	return '<button class="next" onclick="window.location.href = &quot;'+path+pokemon+'.html&quot;;" title="'+pokemon+'">'+direction+'</button> ';
}

function generateHeader(path='')
{
	var header = '<div class="top">';
	header += '<button class="header" onclick="window.location.href = &quot;'+path+'Index.html&quot;;" title="home">Home</button> ';
	header += '<button class="header" onclick="window.location.href = &quot;'+path+'pokemon/PokemonIndex.html&quot;;" title="Pokemon List">Pokemon List</button> ';
	header += '<button class="header" onclick="window.location.href = &quot;'+path+'attacks/AttackIndex.html&quot;;" title="Attack List">Attack List</button> ';
	header += '<button class="header" onclick="window.location.href = &quot;'+path+'items/Item List.html&quot;;" title="Item List">Item List</button> ';
	header += '<button class="header" onclick="window.location.href = &quot;'+path+'walkthrough/Walkthrough.html&quot;;" title="Walkthrough">Walkthrough</button> ';
	header += '</div>';
	header += '<hr></hr>';
	return header;
}

function generateBaseStatTable(pokemon)
{
	var stats = statSelect(pokemon.toLowerCase());
	var statTable = '<table class="stattbl">';
	statTable += '<caption>Base Stats</caption>';
	statTable += 	'<tr>';
	statTable += 		'<th>Att</th>';
	statTable += 		'<th>Hp</th>';
	statTable += 		'<th>Def</th>';
	statTable += 		'<th>Spd</th>';
	statTable += 		'<th>Spc</th>';
	statTable += 	'</tr>';
	statTable += 	'<tr>';
	statTable += 		'<td>'+stats[0]+'</td>';
	statTable += 		'<td>'+stats[1]+'</td>';
	statTable += 		'<td>'+stats[2]+'</td>';
	statTable += 		'<td>'+stats[3]+'</td>';
	statTable += 		'<td>'+stats[4]+'</td>';
	statTable += 	'</tr>';
	statTable += '</table>';
	return statTable;
}