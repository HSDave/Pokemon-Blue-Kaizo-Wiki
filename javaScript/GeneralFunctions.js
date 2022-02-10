const defaultCookieTime = 365;

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

function setCookie(cname, cvalue, exdays, path) {
	const d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	let expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=" + path + ";SameSite=Strict";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function generateButton(value, content, path = '', btnclass = "pokemon", type = "Pokemon") {
	value = titleCase(value);
	type = titleCase(type);
	var mybutton = '<button class="' + btnclass + '" ';
	mybutton    += 'onclick="window.location.href = \'' + path + type + '.html\'; ';
	mybutton    += 'setCookie(\'' + type + '\',\'' + value + '\',' + defaultCookieTime + ',\'' + path + '\');return true;"';
	mybutton    += ' title="' + value + '">' + titleCase(content,[' ','-']) + '</button>';
	return mybutton;
}

function generateLink(type, value, path = '', content = value) {
	value = titleCase(value);
	var mylink = '<a href="' + path + type + '.html" ';
	mylink	  += 'onclick="setCookie(\'' + type + '\',\'' + value + '\',' + defaultCookieTime + ',\'' + path + '\'); return true;" ';
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
