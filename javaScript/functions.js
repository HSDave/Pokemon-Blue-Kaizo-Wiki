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
	statTable += 		'<th>Hp</th>';
	statTable += 		'<th>Att</th>';
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

function generateEncounterTableEntry(gamearea, pokemonid) {
	var encounter = gamearea.getEncounter(pokemonid);
	var name = titleCase(gamearea.m_name,[' ','.']);
	var fnname = name.replace(/[^a-zA-Z0-9]/g, '');
	var fn = '';
	var entry = '<tr>';
	entry += 	'<td>' + generateLink(name, name, '../walkthrough/') +'</td>';
	if(encounter.length == undefined) {
		encounter = [encounter];
	}
	for(var j in encounter) {
		if(encounter[j].m_level.length > 1) {
			fn += '<script> function updateEncounterRate' + fnname + encounter[j].m_note + '() {';
			fn += 'var sel = document.getElementsByName(\'' + name + encounter[j].m_note + 'Level\')[0];';
			fn += 'var encounter = \'' + sumArray(encounter[j].m_rate) + '\';';
			fn += 'switch (sel.value) {';
			for(var i in encounter[j].m_level) {
				fn += 'case \'' + encounter[j].m_level[i] + '\' : encounter = \'' + encounter[j].m_rate[i] + '\'; break;';
			}
			fn += '}';
			fn += 'document.getElementById(\'' + name + encounter[j].m_note + 'Encounter\').innerHTML = encounter;';
			fn += '}</script>';
			
			var lastidx = encounter[j].m_level.length - 1;
			entry += '<td><select name = "' + name + encounter[j].m_note + 'Level" onChange="updateEncounterRate' + fnname + encounter[j].m_note + '()">';
			entry += '<option value=\'' + encounter[j].m_level[0] + '-' + encounter[j].m_level[lastidx] + '\'>';
				entry += encounter[j].m_level[0] + '-' + encounter[j].m_level[lastidx] + '</option>';
			for(var i in encounter[j].m_level) {
				entry += '<option value=\'' + encounter[j].m_level[i] + '\'>' + encounter[j].m_level[i] + '</option>';
			}
			entry += '</select></td>';
			entry += '<td id = \'' + name + encounter[j].m_note + 'Encounter\'><script>updateEncounterRate' + fnname + encounter[j].m_note + '()</script></td>';
		} else {
			entry += '<td>' + encounter[j].m_level + '</td>';
			entry += '<td>' + encounter[j].m_rate + '</td>';
		}
		entry += '<td>' + encounter[j].m_note + '</td>';
	}
	entry += '</tr>';
	return [entry, fn];
}

function generateEncounterTable(pokemon) {
	var fn = '';
	var table = '<table class="encountertbl">';
	table +=  	'<caption> Encounter </caption>';
	table += 	'<tr>';
	table += 		'<th> Place </th>';
	table += 		'<th> Level </th>';
	table += 		'<th> Rate [%] </th>';
	table += 		'<th> Note </th>';
	table += 	'</tr>';
	for (var i in C_Pokemon_List.getEntry(pokemon).m_encounter_id) {
		var encounter = C_Pokemon_List.getEntry(pokemon).m_encounter_id[i];
		var tmp = generateEncounterTableEntry(C_Encounter_Table.m_Encounter_Table[encounter], C_Pokemon_List.getIndex(pokemon));
		table += tmp[0];
		fn += tmp[1];
	}
	table +=	'</table>';
	return fn + table;
}
