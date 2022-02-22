// functions section starts here

function generateButtons(pokemon, path = '') {
	var i = C_Pokemon_List.getIndex(pokemon) - 1;
	var buttons;
	if(pokemon.toLowerCase() == "bulbasaur") {
		buttons = '<button class="phantom">Previous</button>&nbsp;';
	} else {
		buttons = generateButton(C_Pokemon_List.m_Pokemon_List[i].m_name,'previous','../pokemon/',"pokemon","Pokemon");
	}
	if(pokemon.toLowerCase() == "mew") {
		buttons += ' <button class="phantom">Next</button>';
	} else {
		i += 2;
		buttons += ' ' + generateButton(C_Pokemon_List.m_Pokemon_List[i].m_name,'next','../pokemon/',"pokemon","Pokemon");
	}
	buttons += '</br>';
	return buttons;
}

function generateEvolutionInfo(pokemon) {
	return C_Pokemon_List.getEntry(pokemon).m_evolution;
}

function generateType(pokemon) {
	var types = C_Pokemon_List.getEntry(pokemon).m_type;
	var entry = "";
	for (var i in types) {
		entry += generateTypeEntry(types[i]);
	}
	return entry;
}		

function generateAttack(attack, path = '') {
	var attackEntry = '<td>' + generateLink("Attack", titleCase(attack,[' ','-']), path) + '</td> ';
	attackEntry    += generateTypeEntry(C_Attack_List.getAttack(attack).m_type);
	return attackEntry;
}

function generateHeader(path = '') {
	var header = '<div class="top">';
	header += '<button class="header" onclick="window.location.href = &quot;' + path + 'Index.html&quot;;" title="home">Home</button> ';
	header += '<button class="header" onclick="window.location.href = &quot;' + path + 'pokemon/PokemonIndex.html&quot;;" title="Pokemon List">Pokemon List</button> ';
	header += '<button class="header" onclick="window.location.href = &quot;' + path + 'attacks/attackIndex.html&quot;;" title="Attack List">Attack List</button> ';
	header += '<button class="header" onclick="window.location.href = &quot;' + path + 'items/Item List.html&quot;;" title="Item List">Item List</button> ';
	header += '<button class="header" onclick="window.location.href = &quot;' + path + 'walkthrough/Walkthrough.html&quot;;" title="Walkthrough">Walkthrough</button> ';
	header += '</div>';
	header += '<hr></hr>';
	return header;
}

function generateBaseStatTable(pokemon) {
	var stats = C_Pokemon_List.getEntry(pokemon).m_basestat;
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
	statTable += 		'<td>' + stats[0] + '</td>';
	statTable += 		'<td>' + stats[1] + '</td>';
	statTable += 		'<td>' + stats[2] + '</td>';
	statTable += 		'<td>' + stats[3] + '</td>';
	statTable += 		'<td>' + stats[4] + '</td>';
	statTable += 	'</tr>';
	statTable += '</table>';
	return statTable;
}

function generateTitle(pokemon) {
	var id = C_Pokemon_List.transformIndex(C_Pokemon_List.getIndex(pokemon));
	return '<h2>' + id + ' ' + titleCase(pokemon) + '</h2>';
}

function generateMoveTable(pokemon) {
	var learnset = C_Pokemon_List.getEntry(pokemon).m_learnset
	var moveTable = '<table class="movetbl">';
	moveTable += 	'<caption>Learnset</caption>';
	moveTable +=	'<tr>';
	moveTable +=		'<th>Lvl</th>';
	moveTable +=		'<th>Attack</th>';
	moveTable +=		'<th>Type</th>';
	moveTable +=	'</tr>';
	for(var i in learnset) {
		moveTable += '<tr>'
		moveTable += '<td>'+learnset[i].m_learncondition +'</td>';
		moveTable += generateAttack(learnset[i].m_name,'../attacks/');
		moveTable += '</tr>'
	}
	moveTable += '</table>';
	return moveTable;
}

function generatePokemonListEntry(pokemon,id) {
	name = titleCase(pokemon.m_name);
	var entry = '<tr>';
	entry +=	'<td>' + generateLink("Pokemon",name,'../pokemon/',C_Pokemon_List.transformIndex(id)) + '</td>';
	entry +=	'<td>' + generateLink("Pokemon",name,'../pokemon/') + '</td>';
	for (var i in pokemon.m_type) {
		entry += generateTypeEntry(pokemon.m_type[i]);
	}
	if(pokemon.m_type.length <= 1){
		entry += '<td></td>';
	}
	entry += '</tr>';
	return entry;
}

function generatePokemonList() {
	var table = '<table class="pkmntbl">';
	table +=	'<caption>Gen 1</caption>';
	table +=	'<tr>';
	table +=		'<th>Dex</th>';
	table +=		'<th>Name</th>';
	table +=		'<th>Type1</th>';
	table +=		'<th>Type2</th>';
	table +=	'</tr>';
	for (var i in C_Pokemon_List.m_Pokemon_List) {
		table += generatePokemonListEntry(C_Pokemon_List.m_Pokemon_List[i],i);
	}
	table += '</table>';
	return table;
}
