// lookup tables and constants

const statTable = {
	'bulbasaur' : [45,49,49,45,65],
	'ivysaur' : [60,62,63,60,80],
	'venusaur' : [80,82,83,80,100],
	'charmander' : [39,52,43,65,50],
	'charmeleon' : [58,64,58,80,65],
	'charizard' : [78,84,78,100,85],
	'squirtle' : [44,48,65,43,50],
	'wartortle' : [59,63,80,58,65],
	'blastoise' : [79,83,100,78,85],
	'caterpie' : [45,30,35,45,20],
	'metapod' : [50,20,55,30,25],
	'butterfree' : [60,45,50,70,80],
	'weedle' : [40,35,30,50,20],
	'kakuna' : [45,25,50,35,25],
	'beedrill' : [65,80,40,75,45],
	'pidgey' : [40,45,40,56,35],
	'pidgeotto' : [63,60,55,71,50],
	'pidgeot' : [83,80,75,91,70],
	'rattata' : [30,56,35,72,25],
	'raticate' : [55,81,60,97,50],
	'spearow' : [40,60,30,70,31],
	'fearow' : [65,90,65,100,61],
	'ekans' : [35,60,44,55,40],
	'arbok' : [60,85,69,80,65],
	'pikachu' : [35,55,30,90,50],
	'raichu' : [60,90,55,100,90],
	'sandshrew' : [50,75,85,40,30],
	'sandslash' : [75,100,110,65,55],
	'nidoranf' : [55,47,52,41,40],
	'nidorina' : [70,62,67,56,55],
	'nidoqueen' : [90,82,87,76,75],
	'nidoranm' : [46,57,40,50,40],
	'nidorino' : [61,72,57,65,55],
	'nidoking' : [81,92,77,85,75],
	'clefairy' : [70,45,48,35,60],
	'clefable' : [95,70,73,60,85],
	'vulpix' : [38,41,40,65,65],
	'ninetales' : [73,76,75,100,100],
	'jigglypuff' : [115,45,20,20,25],
	'wigglytuff' : [140,70,45,45,50],
	'zubat' : [40,45,35,55,40],
	'golbat' : [75,80,70,90,75],
	'oddish' : [45,50,55,30,75],
	'gloom' : [60,65,70,40,85],
	'vileplume' : [75,80,85,50,100],
	'paras' : [35,70,55,25,55],
	'parasect' : [60,95,80,30,80],
	'venonat' : [60,55,50,45,40],
	'venomoth' : [70,65,60,90,90],
	'diglett' : [10,55,25,95,45],
	'dugtrio' : [35,80,50,120,70],
	'meowth' : [40,45,35,90,40],
	'persian' : [65,70,60,115,65],
	'psyduck' : [50,52,48,55,50],
	'golduck' : [80,82,78,85,80],
	'mankey' : [40,80,35,70,35],
	'primeape' : [65,105,60,95,60],
	'growlithe' : [55,70,45,60,50],
	'arcanine' : [90,110,80,95,80],
	'poliwag' : [40,50,40,90,40],
	'poliwhirl' : [65,65,65,90,50],
	'poliwrath' : [90,85,95,70,70],
	'abra' : [25,20,15,90,105],
	'kadabra' : [40,35,30,105,120],
	'alakazam' : [55,50,45,120,135],
	'machop' : [70,80,50,35,35],
	'machoke' : [80,100,70,45,50],
	'machamp' : [90,130,80,55,65],
	'bellsprout' : [50,75,35,40,70],
	'weepinbell' : [65,90,50,55,85],
	'victreebel' : [80,105,65,70,100],
	'tentacool' : [40,40,35,70,100],
	'tentacruel' : [80,70,65,100,120],
	'geodude' : [40,80,100,20,30],
	'graveler' : [55,95,115,35,45],
	'golem' : [80,110,130,45,55],
	'ponyta' : [50,85,55,90,65],
	'rapidash' : [65,100,70,105,80],
	'slowpoke' : [90,65,65,15,40],
	'slowbro' : [95,75,110,30,80],
	'magnemite' : [25,35,70,45,95],
	'magneton' : [50,60,95,70,120],
	"farfetch'd" : [52,65,55,60,58],
	'doduo' : [35,85,45,75,35],
	'dodrio' : [60,110,70,100,60],
	'seel' : [65,45,55,45,70],
	'dewgong' : [90,70,80,70,95],
	'grimer' : [80,80,50,25,40],
	'muk' : [105,105,75,50,65],
	'shellder' : [30,65,100,40,45],
	'cloyster' : [50,95,180,70,85],
	'gastly' : [30,35,30,80,100],
	'haunter' : [45,50,45,95,115],
	'gengar' : [60,65,60,110,130],
	'onix' : [35,45,160,70,30],
	'drowzee' : [60,48,45,42,90],
	'hypno' : [85,73,70,67,115],
	'krabby' : [30,105,90,50,25],
	'kingler' : [55,130,115,75,50],
	'voltorb' : [40,30,50,100,55],
	'electrode' : [60,50,70,140,80],
	'exeggcute' : [60,40,80,40,60],
	'exeggutor' : [95,95,85,55,125],
	'cubone' : [50,50,95,35,40],
	'marowak' : [60,80,110,45,50],
	'hitmonlee' : [50,120,53,87,35],
	'hitmonchan' : [50,105,79,76,35],
	'lickitung' : [90,55,75,30,60],
	'koffing' : [40,65,95,35,60],
	'weezing' : [65,90,120,60,85],
	'rhyhorn' : [80,85,95,25,30],
	'rhydon' : [105,130,120,40,45],
	'chansey' : [250,5,5,50,105],
	'tangela' : [65,55,115,60,100],
	'kangaskhan' : [105,95,80,90,40],
	'horsea' : [30,40,70,60,70],
	'seadra' : [55,65,95,85,95],
	'goldeen' : [45,67,60,63,50],
	'seaking' : [80,92,65,68,80],
	'staryu' : [30,45,55,85,70],
	'starmie' : [60,75,85,115,100],
	'mr. mime' : [40,45,65,90,100],
	'scyther' : [70,110,80,105,55],
	'jynx' : [65,50,35,95,95],
	'electabuzz' : [65,83,57,105,85],
	'magmar' : [65,95,57,93,85],
	'pinsir' : [65,125,100,85,55],
	'tauros' : [75,100,95,110,70],
	'magikarp' : [20,10,55,80,20],
	'gyarados' : [95,125,79,81,100],
	'lapras' : [130,85,80,60,95],
	'ditto' : [48,48,48,48,48],
	'eevee' : [55,55,50,55,65],
	'vaporeon' : [130,65,60,65,110],
	'jolteon' : [65,65,60,130,110],
	'flareon' : [65,130,60,65,110],
	'porygon' : [65,60,70,40,75],
	'omanyte' : [35,40,100,35,90],
	'omastar' : [70,60,125,55,115],
	'kabuto' : [30,80,90,55,45],
	'kabutops' : [60,115,105,80,70],
	'aerodactyl' : [80,105,65,130,60],
	'snorlax' : [160,110,65,30,65],
	'articuno' : [90,85,100,85,125],
	'zapdos' : [90,90,85,100,125],
	'moltres' : [90,100,90,90,125],
	'dratini' : [41,64,45,50,50],
	'dragonair' : [61,84,65,70,70],
	'dragonite' : [91,134,95,80,100],
	'mewtwo' : [106,110,90,130,154],
	'mew' : [100,100,100,100,100]
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