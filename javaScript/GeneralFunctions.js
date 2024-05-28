const defaultCookieTime = 365;

function sumArray(arr) {
	var sum = 0;
	for(var i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

function titleCase(str, separator = [' ']) {
	var mergedStr = str.toLowerCase();
	for (sep in separator) {
		var splitStr = mergedStr.split(separator[sep]);
		for (var i = 0; i < splitStr.length; i++) {
			splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
		}
		mergedStr = splitStr.join(separator[sep]);
	}
	return mergedStr;
}

function generateButton(value, content, path = '', btnclass = "pokemon", type = "Pokemon") {
	value = titleCase(value);
	type = titleCase(type);
	var mybutton = '<button class="' + btnclass + '" ';
	mybutton    += 'onclick="window.location.href = \'' + path + type + '.html?' + value.replace(/'/g, "\\\'") + '\';"';
	mybutton    += ' title="' + value + '">' + titleCase(content,[' ','-']) + '</button>';
	console.log(mybutton);
	return mybutton;
}

function generateLink(type, value, path = '', content = value) {
	value = titleCase(value,[' ','-']);
	var mylink = '<a href="' + path + type + '.html?' + value + '" ';
	mylink	  += 'title="' + value + '">' + titleCase(content,[' ','-']) + '</a>';
	return mylink;
}

function generateTypeEntry(type) {
	return '<td class="' + type.toLowerCase() + '">' + titleCase(type) + '</td>';
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
