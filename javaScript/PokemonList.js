class C_Move {
	constructor(name, accuracy, strength, type) {
		this.m_name = name;
		this.m_accuracy = accuracy;
		this.m_strength = strength;
		this.m_type = type;
	}
};

class C_MoveReference {
	constructor(name, learncondition) {
		this.m_name = name;
		this.m_learncondition = learncondition;
	}
	
	isMove(move) {
		var ismove;
		if(typeof move === C_Move) {
			ismove = move.isMove(this.m_name);
		} else {
			ismove = move.toLowerCase() == this.m_name.toLowerCase();
		}
		return ismove;
	}
};

class C_EvolutionEntry {
	constructor(condition, pokemon) {
		this.m_condition = this.generateCondition(condition);
		this.m_pokemon = pokemon;
	}
	
	generateCondition(condition) {
		var info;
		if(typeof condition === typeof 0) {
			var info = 'Evolves at lvl ' + condition.toString();
		} else if (typeof condition === typeof " ") {
			var info = 'Evolves with ' + generateLink("Items",condition,'../items/');
		}
		return info;
	}
};

class C_Evolution {
	constructor(preevolution, evolution) {
		this.m_evolution = this.generateEvolution(preevolution, evolution);
	}
	
	generateEvolution(preevolution, evolution) {
		var paraclass = '<p class = "pokemonEvolution">';
		var info = "";
		if(preevolution !== null) {
			info += paraclass + preevolution.m_condition + ' to ' + generateLink("Pokemon", preevolution.m_pokemon, "../pokemon/") + '.';
		}
		if(Array.isArray(evolution)) {
			for(var i in evolution) {
				if(evolution[i] !== null) {
					if(info != "") {
						info += '</br>';
					} else {
						info += paraclass;
					}
					info += evolution[i].m_condition + ' to ' + generateLink("Pokemon", evolution[i].m_pokemon, "../pokemon/") + '.';
				}
			}
		} else if(evolution != null) {
			if(info != "") {
				info += '</br>';
			} else {
				info += paraclass;
			}
			info += evolution.m_condition + ' to ' + generateLink("Pokemon", evolution.m_pokemon, "../pokemon/") + '.';
		}
		if(info != "") {
			info += '</p>';
		}
		return info;
	}
};

class C_Pokemon {
	constructor(name, basestats, type, learnset, evolution) {
		this.m_basestat = basestats;
		this.m_type = type;
		this.m_learnset = learnset;
		this.m_name = name;
		this.m_evolution = evolution.m_evolution;
	}
	
	isPokemon(name) {
		return name.toLowerCase() == this.m_name.toLowerCase();
	}
	
	isType(type) {
		var istype = false;
		for(var i in this.m_type) {
			if(type.toLowerCase() == this.m_type[i].toLowerCase()) {
				istype = true;
			}
		}
		return istype;
	}
	
	getMoves(move) {
		var moves;
		for (var i in this.m_learnset) {
			if(this.m_learnset[i].isMove(move)) {
				moves = [...moves, this.m_learnset[i]];
			}
		}
		return moves;
	}
};

class C_Pokemon_List {
	constructor(){}
	
	static getIndex(pokemon) {
		for(var i in this.m_Pokemon_List) {
			if(this.m_Pokemon_List[i].isPokemon(pokemon)) {
				return i;
			}
		}
		return null;
	}
	
	static transformIndex(index) {
		index = index.toString();
		for(var i = 3-index.length; i > 0; i--) {
			index = '0' + index;
		}
		return '#' + index;
	}
	
	static getEntry(pokemon) {
		for(var i in this.m_Pokemon_List) {
			if(this.m_Pokemon_List[i].isPokemon(pokemon)) {
				return this.m_Pokemon_List[i];
			}
		}
		return null;
	}
	
	static getMoves(move) {
		var pokemoves;
		for(var i in this.m_Pokemon_List) {
			moves = this.m_Pokemon_List[i].getMoves(move);
			if(typeof moves !== "undefined") {
				
			}
		}
		return pokemoves;
	}
	
	static m_Pokemon_List = {
		1 : new C_Pokemon("bulbasaur",[45,49,49,45,65],["grass","poison"],[
				new C_MoveReference("vine whip",1),
				new C_MoveReference("tackle",1),
				new C_MoveReference("toxic",1),
				new C_MoveReference("absorb",7),
				new C_MoveReference("headbutt",10),
				new C_MoveReference("poison powder",20),
				new C_MoveReference("razor leaf",22),
				new C_MoveReference("double-edge",22),
				new C_MoveReference("sleep powder",41),
				new C_MoveReference("sleep powder",48)
			],  new C_Evolution(null,new C_EvolutionEntry(16,"ivysaur"))),
		2 : new C_Pokemon("ivysaur",[60,62,63,60,80],["grass","poison"],[
				new C_MoveReference("sleep powder",1),
				new C_MoveReference("body slam",1),
				new C_MoveReference("razor leaf",1),
				new C_MoveReference("razor leaf",30),
				new C_MoveReference("razor leaf",31),
				new C_MoveReference("razor leaf",32),
				new C_MoveReference("razor leaf",33),
				new C_MoveReference("razor leaf",38),
				new C_MoveReference("razor leaf",46),
				new C_MoveReference("sleep powder",54)
		],  	new C_Evolution(new C_EvolutionEntry(16,"bulbasaur"), new C_EvolutionEntry(32,"venusaur"))),
		3 : new C_Pokemon("venusaur",[80,82,83,80,100],["grass","poison"],[
				new C_MoveReference("sleep powder",1),
				new C_MoveReference("body slam",1),
				new C_MoveReference("razor leaf",1),
				new C_MoveReference("double Team",1),
				new C_MoveReference("razor leaf",7),
				new C_MoveReference("razor leaf",13),
				new C_MoveReference("razor leaf",22),
				new C_MoveReference("razor leaf",30),
				new C_MoveReference("razor leaf",43),
				new C_MoveReference("sleep powder",55),
				new C_MoveReference("razor leaf",65)
		],  	new C_Evolution(new C_EvolutionEntry(32,"ivysaur"), null)),
		4 : new C_Pokemon("charmander",[39,52,43,65,50],["fire"],[
				new C_MoveReference("ember",1),
				new C_MoveReference("scratch",1),
				new C_MoveReference("bite",9),
				new C_MoveReference("headbutt",10),
				new C_MoveReference("fire punch",16),
				new C_MoveReference("slash",30),
				new C_MoveReference("flamethrower",38),
				new C_MoveReference("flamethrower",46)
		],  	new C_Evolution(null, new C_EvolutionEntry(16,"charmeleon"))),
		5 : new C_Pokemon("charmeleon",[58,64,58,80,65],["fire"],[
				new C_MoveReference("dragon rage",1),
				new C_MoveReference("flamethrower",1),
				new C_MoveReference("slash",1),
				new C_MoveReference("slash",9),
				new C_MoveReference("slash",15),
				new C_MoveReference("slash",24),
				new C_MoveReference("slash",33),
				new C_MoveReference("flamethrower",42),
				new C_MoveReference("flamethrower",56)
		],  	new C_Evolution(new C_EvolutionEntry(16,"charmander"), new C_EvolutionEntry(32,"charizard"))),
		6 : new C_Pokemon("charizard",[78,84,78,100,85],["fire","flying"],[
				new C_MoveReference("flamethrower",1),
				new C_MoveReference("slash",1),
				new C_MoveReference("body slam",1),
				new C_MoveReference("earthquake",1),
				new C_MoveReference("slash",9),
				new C_MoveReference("slash",15),
				new C_MoveReference("slash",24),
				new C_MoveReference("flamethrower",55),
				new C_MoveReference("fire blast",69),
				new C_MoveReference("slash",70)
		],  	new C_Evolution(new C_EvolutionEntry(32,"charmeleon"), null)),
		7 : new C_Pokemon("squirtle",[44,48,65,43,50],["water"],[
				new C_MoveReference("water gun",1),
				new C_MoveReference("tackle",1),
				new C_MoveReference("bite",8),
				new C_MoveReference("headbutt",13),
				new C_MoveReference("bubble beam",16),
				new C_MoveReference("waterfall",28),
				new C_MoveReference("skull bash",35),
				new C_MoveReference("hydro pump",42)
		],  	new C_Evolution(null, new C_EvolutionEntry(16,"wartortle"))),
		8 : new C_Pokemon("wartortle",[59,63,80,58,65],["water"],[
				new C_MoveReference("waterfall",1),
				new C_MoveReference("blizzard",1),
				new C_MoveReference("body slam",1),
				new C_MoveReference("dig",1),
				new C_MoveReference("waterfall",8),
				new C_MoveReference("waterfall",15),
				new C_MoveReference("dig",24),
				new C_MoveReference("dig",31),
				new C_MoveReference("dig",39),
				new C_MoveReference("hydro pump",47)
		],  	new C_Evolution(new C_EvolutionEntry(16,"squirtle"), new C_EvolutionEntry(32,"blastoise"))),
		9 : new C_Pokemon("blastoise",[79,83,100,78,85],["water"],[
				new C_MoveReference("body slam",1),
				new C_MoveReference("hydro pump",1),
				new C_MoveReference("blizzard",1),
				new C_MoveReference("earthquake",1),
				new C_MoveReference("hydro pump",8),
				new C_MoveReference("earthquake",15),
				new C_MoveReference("body slam",24),
				new C_MoveReference("blizzard",31),
				new C_MoveReference("body slam",42),
				new C_MoveReference("hydro pump",52)
		],  	new C_Evolution(new C_EvolutionEntry(32,"wartortle"), null)),
		10 : new C_Pokemon("caterpie",[45,30,35,45,20],["bug"],[
				new C_MoveReference("tackle",1),
				new C_MoveReference("string shot",1)
		],  	new C_Evolution(null, new C_EvolutionEntry(7,"metapod"))),
		11 : new C_Pokemon("metapod",[50,20,55,30,25],["bug"],[
				new C_MoveReference("harden",1),
				new C_MoveReference("tackle",1)
		],  	new C_Evolution(new C_EvolutionEntry(7,"caterpie"), new C_EvolutionEntry(10,"butterfree"))),
		12 : new C_Pokemon("butterfree",[60,45,50,70,80],["bug","flying"],[
				new C_MoveReference("psybeam",1),
				new C_MoveReference("stun spore",1),
				new C_MoveReference("sleep powder",1),
				new C_MoveReference("psybeam",12),
				new C_MoveReference("stun spore",15),
				new C_MoveReference("stun spore",16),
				new C_MoveReference("stun spore",17),
				new C_MoveReference("stun spore",21),
				new C_MoveReference("stun spore",26),
				new C_MoveReference("sleep powder",32)
		],  	new C_Evolution(new C_EvolutionEntry(10,"metapod"), null)),
		13 : new C_Pokemon("weedle",[40,35,30,50,20],["bug","poison"],[
				new C_MoveReference("poison sting",1),
				new C_MoveReference("string shot",1)
		],  	new C_Evolution(null, new C_EvolutionEntry(7,"kakuna"))),
		14 : new C_Pokemon("kakuna",[45,25,50,35,25],["bug","poison"],[
				new C_MoveReference("harden",1),
				new C_MoveReference("poison sting",1)
		],  	new C_Evolution(new C_EvolutionEntry(7,"weedle"), new C_EvolutionEntry(10,"beedrill"))),
		15 : new C_Pokemon("beedrill",[65,80,40,75,45],["bug","poison"],[
				new C_MoveReference("twineedle",1),
				new C_MoveReference("twineedle",12),
				new C_MoveReference("twineedle",16),
				new C_MoveReference("twineedle",20),
				new C_MoveReference("twineedle",25),
				new C_MoveReference("pin missile",30),
				new C_MoveReference("twineedle",35)
		],  	new C_Evolution(new C_EvolutionEntry(10,"kakuna"), null)),
		16 : new C_Pokemon("pidgey",[40,45,40,56,35],["normal","flying"],[
				new C_MoveReference("wing attack",1),
				new C_MoveReference("sand attack",1),
				new C_MoveReference("quick attack",1),
				new C_MoveReference("sand attack",5),
				new C_MoveReference("swift",6),
				new C_MoveReference("sand attack",7),
				new C_MoveReference("sand attack",28),
				new C_MoveReference("sand attack",36),
				new C_MoveReference("sand attack",44)
		],  	new C_Evolution(null, new C_EvolutionEntry(9,"pidgeotto"))),
		17 : new C_Pokemon("pidgeotto",[63,60,55,71,50],["normal","flying"],[
				new C_MoveReference("wing attack",1),
				new C_MoveReference("sand attack",1),
				new C_MoveReference("quick attack",1),
				new C_MoveReference("sand attack",5),
				new C_MoveReference("sand attack",12),
				new C_MoveReference("sand attack",21),
				new C_MoveReference("sand attack",31),
				new C_MoveReference("sand attack",40),
				new C_MoveReference("mirror move",49)
		],  	new C_Evolution(new C_EvolutionEntry(9,"pidgey"), new C_EvolutionEntry(20,"pidgeot"))),
		18 : new C_Pokemon("pidgeot",[83,80,75,91,70],["normal","flying"],[
				new C_MoveReference("razor wind",1),
				new C_MoveReference("sand attack",1),
				new C_MoveReference("quick attack",1),
				new C_MoveReference("hyper beam",1),
				new C_MoveReference("razor wind",21),
				new C_MoveReference("quick attack",44)
		],  	new C_Evolution(new C_EvolutionEntry(20,"pidgeotto"), null)),
		19 : new C_Pokemon("rattata",[30,56,35,72,25],["normal"],[
				new C_MoveReference("quick attack",1),
				new C_MoveReference("quick attack",7),
				new C_MoveReference("hyper fang",14),
				new C_MoveReference("focus energy",23),
				new C_MoveReference("super fang",34)
		],  	new C_Evolution(null, new C_EvolutionEntry(20,"raticate"))),			// TBV
		20 : new C_Pokemon("raticate",[55,81,60,97,50],["normal"],[
				new C_MoveReference("body slam",1),
				new C_MoveReference("super fang",1),
				new C_MoveReference("dig",1),
				new C_MoveReference("hyper beam",1),
				new C_MoveReference("super fang",7),
				new C_MoveReference("super fang",14),
				new C_MoveReference("super fang",27),
				new C_MoveReference("super fang",41)
		],  	new C_Evolution(new C_EvolutionEntry(20,"rattata"), null)), 			// TBV
		21 : new C_Pokemon("spearow",[40,60,30,70,31],["normal","flying"],[
				new C_MoveReference("peck",1),
				new C_MoveReference("growl",1),
				new C_MoveReference("leer",9),
				new C_MoveReference("fury attack",15),
				new C_MoveReference("mirror move",22),
				new C_MoveReference("drill peck",29),
				new C_MoveReference("agility",36)
		],  	new C_Evolution(null, new C_EvolutionEntry(20,"fearow"))),
		22 : new C_Pokemon("fearow",[65,90,65,100,61],["normal","flying"],[
				new C_MoveReference("drill peck",1),
				new C_MoveReference("hyper beam",1),
				new C_MoveReference("razor wind",1),
				new C_MoveReference("drill peck",9),
				new C_MoveReference("drill peck",15),
				new C_MoveReference("drill peck",25),
				new C_MoveReference("drill peck",34),
				new C_MoveReference("drill peck",43)
		],  	new C_Evolution(new C_EvolutionEntry(20,"spearow"), null)),
		23 : new C_Pokemon("ekans",[35,60,44,55,40],["poison"],[
				new C_MoveReference("wrap",1),
				new C_MoveReference("glare",1),
				new C_MoveReference("wrap",10),
				new C_MoveReference("earthquake",15),
				new C_MoveReference("rock Slide",16),
				new C_MoveReference("body slam",17),
				new C_MoveReference("glare",18)
		],  	new C_Evolution(null, new C_EvolutionEntry(16,"arbok"))),
		24 : new C_Pokemon("arbok",[60,85,69,80,65],["poison"],[
				new C_MoveReference("wrap",1),
				new C_MoveReference("glare",1),
				new C_MoveReference("glare",10),
				new C_MoveReference("glare",17),
				new C_MoveReference("fissure",21),
				new C_MoveReference("glare",36),
				new C_MoveReference("glare",47)
		],  	new C_Evolution(new C_EvolutionEntry(16,"ekans"), null)),
		25 : new C_Pokemon("pikachu",[35,55,30,90,50],["electric"],[
				new C_MoveReference("thunder Shock",1),
				new C_MoveReference("quick attack",1),
				new C_MoveReference("thunder wave",1),
				new C_MoveReference("headbutt",9),
				new C_MoveReference("thunder punch",16),
				new C_MoveReference("thunderbolt",20),
				new C_MoveReference("thunderbolt",30),
				new C_MoveReference("thunder",43)
		],  	new C_Evolution(null, new C_EvolutionEntry("thunderstone","raichu"))),
		26 : new C_Pokemon("raichu",[60,90,55,100,90],["electric"],[
				new C_MoveReference("thunderbolt",1),
				new C_MoveReference("body slam",1),
				new C_MoveReference("thunder wave",1),
				new C_MoveReference("surf",1)
		],  	new C_Evolution(new C_EvolutionEntry("thunderstone","pikachu"), null)),
		27 : new C_Pokemon("sandshrew",[50,75,85,40,30],["ground"],[
				new C_MoveReference("slash",1),
				new C_MoveReference("sand attack",1),
				new C_MoveReference("sand attack",10),
				new C_MoveReference("dig",16),
				new C_MoveReference("slash",24),
				new C_MoveReference("slash",31),
				new C_MoveReference("earthquake",38)
		],  	new C_Evolution(null, new C_EvolutionEntry(22,"sandslash"))),
		28 : new C_Pokemon("sandslash",[75,100,110,65,55],["ground"],[
				new C_MoveReference("dig",1),
				new C_MoveReference("slash",1),
				new C_MoveReference("sand attack",10),
				new C_MoveReference("slash",17),
				new C_MoveReference("rock Slide",27),
				new C_MoveReference("earthquake",40),
				new C_MoveReference("body slam",47)
		],  	new C_Evolution(new C_EvolutionEntry(22,"sandshrew"), null)),
		29 : new C_Pokemon("nidoranf",[55,47,52,41,40],["poison"],[
				new C_MoveReference("double kick",1),
				new C_MoveReference("bite",1),
				new C_MoveReference("toxic",1),
				new C_MoveReference("double kick",8),
				new C_MoveReference("double kick",14),
				new C_MoveReference("double kick",21),
				new C_MoveReference("double kick",29),
				new C_MoveReference("double kick",36),
				new C_MoveReference("double kick",43)
		],  	new C_Evolution(null, new C_EvolutionEntry(16,"nidorina"))),
		30 : new C_Pokemon("nidorina",[70,62,67,56,55],["poison"],[
				new C_MoveReference("double kick",1),
				new C_MoveReference("bite",1),
				new C_MoveReference("toxic",1),
				new C_MoveReference("double kick",8),
				new C_MoveReference("dig",14),
				new C_MoveReference("double kick",23),
				new C_MoveReference("double kick",32),
				new C_MoveReference("double kick",41),
				new C_MoveReference("double kick",50)
		],  	new C_Evolution(new C_EvolutionEntry(16,"nidoranf"), new C_EvolutionEntry("moonstone","nidoqueen"))),
		31 : new C_Pokemon("nidoqueen",[90,82,87,76,75],["poison","ground"],[
				new C_MoveReference("lovely kiss",1),
				new C_MoveReference("earthquake",1),
				new C_MoveReference("thunderbolt",1),
				new C_MoveReference("blizzard",1),
				new C_MoveReference("thunderbolt",8),
				new C_MoveReference("thunderbolt",14),
				new C_MoveReference("earthquake",42)
		],  	new C_Evolution(new C_EvolutionEntry("moonstone","nidorina"), null)),
		32 : new C_Pokemon("nidoranm",[46,57,40,50,40],["poison"],[
				new C_MoveReference("double kick",1),
				new C_MoveReference("horn attack",1),
				new C_MoveReference("toxic",1),
				new C_MoveReference("double kick",8),
				new C_MoveReference("dig",12),
				new C_MoveReference("double kick",21),
				new C_MoveReference("double kick",29),
				new C_MoveReference("double kick",36),
				new C_MoveReference("double kick",43)
		],  	new C_Evolution(null, new C_EvolutionEntry(16,"nidorino"))),
		33 : new C_Pokemon("nidorino",[61,72,57,65,55],["poison"],[
				new C_MoveReference("double kick",1),
				new C_MoveReference("toxic",1),
				new C_MoveReference("horn attack",1),
				new C_MoveReference("double kick",8),
				new C_MoveReference("dig",14),
				new C_MoveReference("double kick",23),
				new C_MoveReference("double kick",32),
				new C_MoveReference("double kick",41),
				new C_MoveReference("double kick",50)
		],  	new C_Evolution(new C_EvolutionEntry(16,"nidoranm"), new C_EvolutionEntry("moonstone","nidoking"))),
		34 : new C_Pokemon("nidoking",[81,92,77,85,75],["poison","ground"],[
				new C_MoveReference("blizzard",1),
				new C_MoveReference("thunderbolt",1),
				new C_MoveReference("lovely kiss",1),
				new C_MoveReference("earthquake",1),
				new C_MoveReference("thunderbolt",8),
				new C_MoveReference("thunderbolt",14),
				new C_MoveReference("earthquake",42)
		],  	new C_Evolution(new C_EvolutionEntry("moonstone","nidorino"), null)),
		35 : new C_Pokemon("clefairy",[70,45,48,35,60],["normal"],[
				new C_MoveReference("sing",1),
				new C_MoveReference("metronome",1),
				new C_MoveReference("sing",13),
				new C_MoveReference("sing",18),
				new C_MoveReference("double-edge",24),
				new C_MoveReference("metronome",31),
				new C_MoveReference("metronome",39),
				new C_MoveReference("metronome",48)
		],  	new C_Evolution(null, new C_EvolutionEntry("moonstone","clefable"))),
		36 : new C_Pokemon("clefable",[95,70,73,60,85],["normal"],[
				new C_MoveReference("body slam",1),
				new C_MoveReference("blizzard",1),
				new C_MoveReference("psychic",1),
				new C_MoveReference("thunder wave",1)
		],  	new C_Evolution(new C_EvolutionEntry("moonstone","clefairy"), null)),
		37 : new C_Pokemon("vulpix",[38,41,40,65,65],["fire"],[
				new C_MoveReference("ember",1),
				new C_MoveReference("confuse Ray",1),
				new C_MoveReference("confuse Ray",10),
				new C_MoveReference("double-edge",11),
				new C_MoveReference("flamethrower",16),
				new C_MoveReference("flamethrower",35),
				new C_MoveReference("flamethrower",42)
		],  	new C_Evolution(null, new C_EvolutionEntry("firestone","ninetales"))),
		38 : new C_Pokemon("ninetales",[73,76,75,100,100],["fire"],[
				new C_MoveReference("fire spin",1)
		],  	new C_Evolution(new C_EvolutionEntry("firestone","vulpix"), null)),
		39 : new C_Pokemon("jigglypuff",[115,45,20,20,25],["normal"],[
				new C_MoveReference("sing",1),
				new C_MoveReference("double-edge",1),
				new C_MoveReference("rest",1),
				new C_MoveReference("double-edge",9),
				new C_MoveReference("double-edge",14),
				new C_MoveReference("double-edge",19),
				new C_MoveReference("double-edge",24),
				new C_MoveReference("double-edge",29),
				new C_MoveReference("body slam",34),
				new C_MoveReference("double-edge",39)
		],  	new C_Evolution(null, new C_EvolutionEntry("moonstone","wigglytuff"))),
		40 : new C_Pokemon("wigglytuff",[140,70,45,45,50],["normal"],[
				new C_MoveReference("psychic",1),
				new C_MoveReference("blizzard",1),
				new C_MoveReference("double-edge",1),
				new C_MoveReference("thunder wave",1)
		],  	new C_Evolution(new C_EvolutionEntry("moonstone","jigglypuff"), null)),
		41 : new C_Pokemon("zubat",[40,45,35,55,40],["poison","flying"],[
				new C_MoveReference("wing attack",1),
				new C_MoveReference("toxic",1),
				new C_MoveReference("confuse Ray",1),
				new C_MoveReference("confuse Ray",10),
				new C_MoveReference("confuse Ray",15),
				new C_MoveReference("hypnosis",16),
				new C_MoveReference("confuse Ray",28),
				new C_MoveReference("hypnosis",58)
		],  	new C_Evolution(null, new C_EvolutionEntry(16,"golbat"))),
		42 : new C_Pokemon("golbat",[75,80,70,90,75],["poison","flying"],[
				new C_MoveReference("confuse Ray",1),
				new C_MoveReference("razor wind",1),
				new C_MoveReference("mega drain",1),
				new C_MoveReference("hypnosis",1),
				new C_MoveReference("confuse Ray",10),
				new C_MoveReference("confuse Ray",15),
				new C_MoveReference("confuse Ray",21),
				new C_MoveReference("confuse Ray",32),
				new C_MoveReference("hypnosis",60)
		],  	new C_Evolution(new C_EvolutionEntry(16,"zubat"), null)),
		43 : new C_Pokemon("oddish",[45,50,55,30,75],["grass","poison"],[
				new C_MoveReference("toxic",1),
				new C_MoveReference("acid",1),
				new C_MoveReference("stun spore",1),
				new C_MoveReference("mega drain",1),
				new C_MoveReference("sleep powder",14),
				new C_MoveReference("razor leaf",15),
				new C_MoveReference("sleep powder",19),
				new C_MoveReference("acid",24),
				new C_MoveReference("petal dance",33),
				new C_MoveReference("solar beam",46)
		],  	new C_Evolution(null, new C_EvolutionEntry(16,"gloom"))),
		44 : new C_Pokemon("gloom",[60,65,70,40,85],["grass","poison"],[
				new C_MoveReference("petal dance",1),
				new C_MoveReference("sleep powder",1),
				new C_MoveReference("stun spore",1),
				new C_MoveReference("petal dance",16),
				new C_MoveReference("petal dance",17),
				new C_MoveReference("sleep powder",19),
				new C_MoveReference("stun spore",28),
				new C_MoveReference("stun spore",38),
				new C_MoveReference("petal dance",52)
		],  	new C_Evolution(new C_EvolutionEntry(16,"oddish"), new C_EvolutionEntry("leafstone","vileplume"))),
		45 : new C_Pokemon("vileplume",[95,80,85,50,110],["grass","poison"],[
				new C_MoveReference("sleep powder",1),
				new C_MoveReference("stun spore",1),
				new C_MoveReference("petal dance",1),
				new C_MoveReference("stun spore",15),
				new C_MoveReference("sleep powder",17),
				new C_MoveReference("petal dance",19)
		],  	new C_Evolution(new C_EvolutionEntry("leafstone","gloom"), null)),
		46 : new C_Pokemon("paras",[35,70,55,25,55],["bug","grass"],[
				new C_MoveReference("leech life",1),
				new C_MoveReference("toxic",1),
				new C_MoveReference("mega drain",1),
				new C_MoveReference("stun spore",1),
				new C_MoveReference("stun spore",13),
				new C_MoveReference("stun spore",20),
				new C_MoveReference("spore",27),
				new C_MoveReference("spore",34),
				new C_MoveReference("spore",41)
		],  	new C_Evolution(null, new C_EvolutionEntry(24,"parasect"))),
		47 : new C_Pokemon("parasect",[60,95,80,30,80],["bug","grass"],[
				new C_MoveReference("stun spore",1),
				new C_MoveReference("mega drain",1),
				new C_MoveReference("body slam",1),
				new C_MoveReference("spore",1),
				new C_MoveReference("stun spore",13),
				new C_MoveReference("stun spore",20),
				new C_MoveReference("stun spore",30),
				new C_MoveReference("stun spore",39),
				new C_MoveReference("stun spore",48)
		],  	new C_Evolution(new C_EvolutionEntry(24,"paras"), null)),
		48 : new C_Pokemon("venonat",[60,55,50,45,40],["bug","poison"],[
				new C_MoveReference("toxic",1),
				new C_MoveReference("psybeam",1),
				new C_MoveReference("stun spore",1),
				new C_MoveReference("stun spore",24),
				new C_MoveReference("stun spore",27),
				new C_MoveReference("stun spore",30),
				new C_MoveReference("psybeam",35),
				new C_MoveReference("sleep powder",38),
				new C_MoveReference("psychic",43)
		],  	new C_Evolution(null, new C_EvolutionEntry(31,"venomoth"))),
		49 : new C_Pokemon("venomoth",[70,65,60,90,90],["bug","poison"],[
				new C_MoveReference("psychic",1),
				new C_MoveReference("stun spore",1),
				new C_MoveReference("sleep powder",1),
				new C_MoveReference("stun spore",24),
				new C_MoveReference("stun spore",27),
				new C_MoveReference("stun spore",30),
				new C_MoveReference("stun spore",38),
				new C_MoveReference("sleep powder",43),
				new C_MoveReference("psychic",50)
		],  	new C_Evolution(new C_EvolutionEntry(31,"venonat"), null)),
		50 : new C_Pokemon("diglett",[10,55,25,95,45],["ground"],[
				new C_MoveReference("sand attack",1),
				new C_MoveReference("slash",1),
				new C_MoveReference("sand attack",15),
				new C_MoveReference("dig",19),
				new C_MoveReference("sand attack",24),
				new C_MoveReference("slash",31),
				new C_MoveReference("earthquake",40)
		],  	new C_Evolution(null, new C_EvolutionEntry(26,"dugtrio"))),
		51 : new C_Pokemon("dugtrio",[35,80,50,120,70],["ground"],[
				new C_MoveReference("dig",1),
				new C_MoveReference("sand attack",1),
				new C_MoveReference("body slam",1),
				new C_MoveReference("fissure",1),
				new C_MoveReference("dig",15),
				new C_MoveReference("dig",19),
				new C_MoveReference("dig",24),
				new C_MoveReference("slash",35),
				new C_MoveReference("earthquake",39)
		],  	new C_Evolution(new C_EvolutionEntry(26,"diglett"), null)),
		52 : new C_Pokemon("meowth",[40,45,35,90,40],["normal"],[
				new C_MoveReference("bite",1),
				new C_MoveReference("bite",12),
				new C_MoveReference("pay day",17),
				new C_MoveReference("bite",24),
				new C_MoveReference("slash",47),
				new C_MoveReference("hypnosis",58)
		],  	new C_Evolution(null, new C_EvolutionEntry(28,"persian"))),
		53 : new C_Pokemon("persian",[65,70,60,115,65],["normal"],[
				new C_MoveReference("slash",1),
				new C_MoveReference("hypnosis",1),
				new C_MoveReference("slash",12),
				new C_MoveReference("slash",17),
				new C_MoveReference("slash",24),
				new C_MoveReference("slash",51),
				new C_MoveReference("hypnosis",63)
		],  	new C_Evolution(new C_EvolutionEntry(28,"meowth"), null)),
		54 : new C_Pokemon("psyduck",[50,52,48,55,50],["water"],[
				new C_MoveReference("confusion",1),
				new C_MoveReference("bubble beam",1),
				new C_MoveReference("psybeam",9),
				new C_MoveReference("waterfall",10),
				new C_MoveReference("seismic toss",11),
				new C_MoveReference("hypnosis",12),
				new C_MoveReference("amnesia",52)
		],  	new C_Evolution(null, new C_EvolutionEntry(20,"golduck"))),
		55 : new C_Pokemon("golduck",[80,82,78,85,80],["water"],[
				new C_MoveReference("waterfall",1),
				new C_MoveReference("psychic",1),
				new C_MoveReference("body slam",1),
				new C_MoveReference("hypnosis",1),
				new C_MoveReference("psychic",28),
				new C_MoveReference("psychic",31),
				new C_MoveReference("psychic",39),
				new C_MoveReference("hydro pump",48),
				new C_MoveReference("hypnosis",59)
		],  	new C_Evolution(new C_EvolutionEntry(20,"psyduck"), null)),
		56 : new C_Pokemon("mankey",[40,80,35,70,35],["fighting"],[
				new C_MoveReference("karate chop",1),
				new C_MoveReference("low kick",1),
				new C_MoveReference("seismic toss",11),
				new C_MoveReference("thrash",12),
				new C_MoveReference("submission",13),
				new C_MoveReference("double-edge",14),
				new C_MoveReference("thrash",39)
		],  	new C_Evolution(null, new C_EvolutionEntry(20,"primeape"))),
		57 : new C_Pokemon("primeape",[65,105,60,95,60],["fighting"],[
				new C_MoveReference("submission",1),
				new C_MoveReference("body slam",1),
				new C_MoveReference("seismic toss",1),
				new C_MoveReference("rock Slide",1),
				new C_MoveReference("seismic toss",15),
				new C_MoveReference("seismic toss",21),
				new C_MoveReference("seismic toss",27),
				new C_MoveReference("seismic toss",37),
				new C_MoveReference("hi jump kick",46)
		],  	new C_Evolution(new C_EvolutionEntry(20,"mankey"), null)),
		58 : new C_Pokemon("growlithe",[55,70,45,60,50],["fire"],[
				new C_MoveReference("bite",1),
				new C_MoveReference("take down",1),
				new C_MoveReference("ember",1),
				new C_MoveReference("bite",9),
				new C_MoveReference("swift",10),
				new C_MoveReference("double-edge",12),
				new C_MoveReference("flamethrower",14),
				new C_MoveReference("fire blast",50)
		],  	new C_Evolution(null, new C_EvolutionEntry("firestone","arcanine"))),
		59 : new C_Pokemon("arcanine",[90,110,80,95,80],["fire"],[
				new C_MoveReference("fire blast",1),
				new C_MoveReference("body slam",1),
				new C_MoveReference("dig",1)
		],  	new C_Evolution(new C_EvolutionEntry("firestone","growlithe"), null)),
		60 : new C_Pokemon("poliwag",[40,50,40,90,40],["water"],[
				new C_MoveReference("bubble beam",1),
				new C_MoveReference("hypnosis",1),
				new C_MoveReference("body slam",10),
				new C_MoveReference("body slam",11),
				new C_MoveReference("body slam",31),
				new C_MoveReference("body slam",38),
				new C_MoveReference("hydro pump",45)
		],  	new C_Evolution(null, new C_EvolutionEntry(14,"poliwhirl"))),
		61 : new C_Pokemon("poliwhirl",[65,65,65,90,50],["water"],[
				new C_MoveReference("submission",1),
				new C_MoveReference("waterfall",1),
				new C_MoveReference("hypnosis",1),
				new C_MoveReference("seismic toss",1),
				new C_MoveReference("submission",14),
				new C_MoveReference("seismic toss",15),
				new C_MoveReference("body slam",26),
				new C_MoveReference("hydro pump",33),
				new C_MoveReference("hydro pump",41),
				new C_MoveReference("hydro pump",49)
		],  	new C_Evolution(new C_EvolutionEntry(14,"poliwag"), new C_EvolutionEntry("waterstone","poliwrath"))),
		62 : new C_Pokemon("poliwrath",[90,85,95,70,70],["water","fighting"],[
				new C_MoveReference("waterfall",1),
				new C_MoveReference("ice beam",1),
				new C_MoveReference("earthquake",1),
				new C_MoveReference("lovely kiss",1),
				new C_MoveReference("blizzard",35),
				new C_MoveReference("hydro pump",40)
		],  	new C_Evolution(new C_EvolutionEntry("waterstone","poliwhirl"), null)),
		63 : new C_Pokemon("abra",[25,20,15,90,105],["psychic"],[
				new C_MoveReference("confusion",1),
				new C_MoveReference("kinesis",1)
		],  	new C_Evolution(null, new C_EvolutionEntry(16,"kadabra"))),
		64 : new C_Pokemon("kadabra",[40,35,30,105,120],["psychic"],[
				new C_MoveReference("kinesis",1),
				new C_MoveReference("psybeam",1),
				new C_MoveReference("thunder wave",1),
				new C_MoveReference("psybeam",16),
				new C_MoveReference("psybeam",20),
				new C_MoveReference("psybeam",27),
				new C_MoveReference("recover",31),
				new C_MoveReference("psychic",38),
				new C_MoveReference("seismic toss",42)
		],  	new C_Evolution(new C_EvolutionEntry(16,"abra"), new C_EvolutionEntry(100,"alakazam"))),
		65 : new C_Pokemon("alakazam",[55,50,45,120,135],["psychic"],[
				new C_MoveReference("thunder wave",1),
				new C_MoveReference("psychic",1),
				new C_MoveReference("recover",1),
				new C_MoveReference("recover",16),
				new C_MoveReference("recover",20),
				new C_MoveReference("recover",27),
				new C_MoveReference("recover",31),
				new C_MoveReference("psychic",38),
				new C_MoveReference("recover",42)
		],  	new C_Evolution(new C_EvolutionEntry(100,"kadabra"), null)),
		66 : new C_Pokemon("machop",[70,80,50,35,35],["fighting"],[
				new C_MoveReference("karate chop",1),
				new C_MoveReference("low kick",1),
				new C_MoveReference("low kick",20),
				new C_MoveReference("low kick",25),
				new C_MoveReference("seismic toss",32),
				new C_MoveReference("seismic toss",39),
				new C_MoveReference("submission",46)
		],  	new C_Evolution(null, new C_EvolutionEntry(22,"machoke"))),
		67 : new C_Pokemon("machoke",[80,100,70,45,50],["fighting"],[
				new C_MoveReference("karate chop",1),
				new C_MoveReference("low kick",1),
				new C_MoveReference("submission",1),
				new C_MoveReference("submission",20),
				new C_MoveReference("submission",25),
				new C_MoveReference("seismic toss",36),
				new C_MoveReference("seismic toss",44),
				new C_MoveReference("submission",52)
		],  	new C_Evolution(new C_EvolutionEntry(22,"machop"), new C_EvolutionEntry(42,"machamp"))),
		68 : new C_Pokemon("machamp",[90,130,80,55,65],["fighting"],[
				new C_MoveReference("submission",1),
				new C_MoveReference("body slam",1),
				new C_MoveReference("rock Slide",1),
				new C_MoveReference("earthquake",1),
				new C_MoveReference("submission",20),
				new C_MoveReference("submission",25),
				new C_MoveReference("submission",36),
				new C_MoveReference("submission",44),
				new C_MoveReference("hi jump kick",52)
		],  	new C_Evolution(new C_EvolutionEntry(42,"machoke"), null)),
		69 : new C_Pokemon("bellsprout",[50,75,35,40,70],["grass","poison"],[
				new C_MoveReference("toxic",1),
				new C_MoveReference("stun spore",1),
				new C_MoveReference("double-edge",1),
				new C_MoveReference("mega drain",10),
				new C_MoveReference("sleep powder",11),
				new C_MoveReference("body slam",16),
				new C_MoveReference("sleep powder",21),
				new C_MoveReference("stun spore",26),
				new C_MoveReference("razor leaf",33),
				new C_MoveReference("slam",42)
		],  	new C_Evolution(null, new C_EvolutionEntry(16,"weepinbell"))),
		70 : new C_Pokemon("weepinbell",[65,90,50,55,85],["grass","poison"],[
				new C_MoveReference("sleep powder",1),
				new C_MoveReference("stun spore",1),
				new C_MoveReference("body slam",1),
				new C_MoveReference("mega drain",16),
				new C_MoveReference("stun spore",17),
				new C_MoveReference("stun spore",18),
				new C_MoveReference("stun spore",23),
				new C_MoveReference("stun spore",29),
				new C_MoveReference("razor leaf",38),
				new C_MoveReference("sleep powder",49)
		],  	new C_Evolution(new C_EvolutionEntry(16,"bellsprout"), new C_EvolutionEntry("leafstone","victreebel"))),
		71 : new C_Pokemon("victreebel",[80,105,65,70,100],["grass","poison"],[
				new C_MoveReference("razor leaf",1),
				new C_MoveReference("stun spore",1),
				new C_MoveReference("body slam",1),
				new C_MoveReference("lovely kiss",1),
				new C_MoveReference("razor leaf",13),
				new C_MoveReference("razor leaf",15),
				new C_MoveReference("lovely kiss",100)
		],  	new C_Evolution(new C_EvolutionEntry("leafstone","weepinbell"), null)),
		72 : new C_Pokemon("tentacool",[40,40,35,70,100],["water","poison"],[
				new C_MoveReference("wrap",1),
				new C_MoveReference("supersonic",1),
				new C_MoveReference("toxic",1),
				new C_MoveReference("bubble beam",1),
				new C_MoveReference("toxic",7),
				new C_MoveReference("toxic",13),
				new C_MoveReference("toxic",18),
				new C_MoveReference("toxic",22),
				new C_MoveReference("toxic",27),
				new C_MoveReference("toxic",33),
				new C_MoveReference("toxic",40),
				new C_MoveReference("hydro pump",48)
		],  	new C_Evolution(null, new C_EvolutionEntry(30,"tentacruel"))),
		73 : new C_Pokemon("tentacruel",[80,70,65,100,120],["water","poison"],[
				new C_MoveReference("wrap",1),
				new C_MoveReference("surf",1),
				new C_MoveReference("wrap",7),
				new C_MoveReference("wrap",13),
				new C_MoveReference("wrap",18),
				new C_MoveReference("wrap",22),
				new C_MoveReference("wrap",27),
				new C_MoveReference("wrap",35),
				new C_MoveReference("wrap",43),
				new C_MoveReference("blizzard",50)
		],  	new C_Evolution(new C_EvolutionEntry(30,"tentacool"), null)),
		74 : new C_Pokemon("geodude",[40,80,100,20,30],["rock","ground"],[
				new C_MoveReference("selfdestruct",1),
				new C_MoveReference("selfdestruct",11),
				new C_MoveReference("selfdestruct",16),
				new C_MoveReference("rock Slide",21),
				new C_MoveReference("dig",26),
				new C_MoveReference("earthquake",31),
				new C_MoveReference("explosion",36)
		],  	new C_Evolution(null, new C_EvolutionEntry(25,"graveler"))),
		75 : new C_Pokemon("graveler",[55,95,115,35,45],["rock","ground"],[
				new C_MoveReference("dig",1),
				new C_MoveReference("selfdestruct",1),
				new C_MoveReference("rock Slide",1),
				new C_MoveReference("explosion",1),
				new C_MoveReference("explosion",11),
				new C_MoveReference("explosion",16),
				new C_MoveReference("explosion",21),
				new C_MoveReference("explosion",29),
				new C_MoveReference("rock Slide",36),
				new C_MoveReference("earthquake",42)
		],  	new C_Evolution(new C_EvolutionEntry(25,"geodude"), new C_EvolutionEntry(42,"golem"))),
		76 : new C_Pokemon("golem",[80,110,130,45,55],["rock","ground"],[
				new C_MoveReference("body slam",1),
				new C_MoveReference("rock Slide",1),
				new C_MoveReference("earthquake",1),
				new C_MoveReference("explosion",1),
				new C_MoveReference("explosion",11),
				new C_MoveReference("explosion",16),
				new C_MoveReference("explosion",21),
				new C_MoveReference("explosion",29),
				new C_MoveReference("explosion",36),
				new C_MoveReference("explosion",43)
		],  	new C_Evolution(new C_EvolutionEntry(42,"graveler"), null)),
		77 : new C_Pokemon("ponyta",[50,85,55,90,65],["fire"],[
				new C_MoveReference("ember",1),
				new C_MoveReference("double kick",1),
				new C_MoveReference("Stomp",1),
				new C_MoveReference("flamethrower",16),
				new C_MoveReference("double-edge",18),
				new C_MoveReference("hypnosis",24),
				new C_MoveReference("hypnosis",39),
				new C_MoveReference("hypnosis",43),
				new C_MoveReference("hypnosis",48)
		],  	new C_Evolution(null, new C_EvolutionEntry(26,"rapidash"))),
		78 : new C_Pokemon("rapidash",[65,100,70,110,80],["fire"],[
				new C_MoveReference("horn drill",1),
				new C_MoveReference("hypnosis",74),
				new C_MoveReference("hypnosis",75),
				new C_MoveReference("hypnosis",76),
				new C_MoveReference("hypnosis",77),
				new C_MoveReference("hypnosis",78),
				new C_MoveReference("hypnosis",79)
		],  	new C_Evolution(new C_EvolutionEntry(26,"ponyta"), null)),
		79 : new C_Pokemon("slowpoke",[90,65,65,15,40],["water","psychic"],[
				new C_MoveReference("confusion",1),
				new C_MoveReference("bubble beam",1),
				new C_MoveReference("headbutt",1),
				new C_MoveReference("confusion",18),
				new C_MoveReference("confusion",22),
				new C_MoveReference("confusion",27),
				new C_MoveReference("confusion",33),
				new C_MoveReference("amnesia",40),
				new C_MoveReference("psychic",48)
		],  	new C_Evolution(null, new C_EvolutionEntry(37,"slowbro"))),
		80 : new C_Pokemon("slowbro",[95,75,110,30,80],["water","psychic"],[
				new C_MoveReference("confusion",1),
				new C_MoveReference("waterfall",1),
				new C_MoveReference("thunder wave",1),
				new C_MoveReference("psychic",18),
				new C_MoveReference("surf",22),
				new C_MoveReference("psychic",27),
				new C_MoveReference("psychic",33),
				new C_MoveReference("amnesia",37),
				new C_MoveReference("amnesia",44),
				new C_MoveReference("psychic",55)
		],  	new C_Evolution(new C_EvolutionEntry(37,"slowpoke"), null)),
		81 : new C_Pokemon("magnemite",[25,35,70,45,95],["electric"],[
				new C_MoveReference("thunderbolt",1),
				new C_MoveReference("sonicboom",1),
				new C_MoveReference("thunder wave",1),
				new C_MoveReference("double-edge",1),
				new C_MoveReference("thunderbolt",21),
				new C_MoveReference("thunderbolt",25),
				new C_MoveReference("thunderbolt",29),
				new C_MoveReference("thunderbolt",35),
				new C_MoveReference("thunderbolt",41),
				new C_MoveReference("thunderbolt",47)
		],  	new C_Evolution(null, new C_EvolutionEntry(20,"magneton"))),
		82 : new C_Pokemon("magneton",[50,60,95,70,120],["electric"],[
				new C_MoveReference("thunder wave",1),
				new C_MoveReference("thunderbolt",1),
				new C_MoveReference("double Team",1),
				new C_MoveReference("double-edge",1),
				new C_MoveReference("double-edge",21),
				new C_MoveReference("double-edge",25),
				new C_MoveReference("double-edge",29),
				new C_MoveReference("double-edge",38),
				new C_MoveReference("double-edge",46),
				new C_MoveReference("double-edge",54)
		],  	new C_Evolution(new C_EvolutionEntry(20,"magnemite"), null)),
		83 : new C_Pokemon("farfetch'd",[52,65,55,60,58],["normal","flying"],[
				new C_MoveReference("substitute",1),
				new C_MoveReference("sand attack",1),
				new C_MoveReference("slash",1),
				new C_MoveReference("slash",7),
				new C_MoveReference("slash",15),
				new C_MoveReference("slash",23),
				new C_MoveReference("slash",31),
				new C_MoveReference("agility",39)
		],  	new C_Evolution(null, null)),
		84 : new C_Pokemon("doduo",[35,85,45,75,35],["normal","flying"],[
				new C_MoveReference("peck",1),
				new C_MoveReference("take down",1),
				new C_MoveReference("double kick",1),
				new C_MoveReference("take down",20),
				new C_MoveReference("take down",24),
				new C_MoveReference("drill peck",30),
				new C_MoveReference("tri attack",36),
				new C_MoveReference("tri attack",40),
				new C_MoveReference("agility",44)
		],  	new C_Evolution(null, new C_EvolutionEntry(31,"dodrio"))),
		85 : new C_Pokemon("dodrio",[60,110,70,100,60],["normal","flying"],[
				new C_MoveReference("body slam",1),
				new C_MoveReference("hyper beam",1),
				new C_MoveReference("drill peck",1),
				new C_MoveReference("drill peck",20),
				new C_MoveReference("drill peck",24),
				new C_MoveReference("drill peck",30),
				new C_MoveReference("drill peck",39),
				new C_MoveReference("drill peck",45),
				new C_MoveReference("drill peck",51)
		],  	new C_Evolution(new C_EvolutionEntry(31,"doduo"), null)),
		86 : new C_Pokemon("seel",[65,45,55,45,70],["water"],[
				new C_MoveReference("aurora beam",1),
				new C_MoveReference("headbutt",1),
				new C_MoveReference("bubble beam",1),
				new C_MoveReference("rest",1),
				new C_MoveReference("aurora beam",30),
				new C_MoveReference("aurora beam",35),
				new C_MoveReference("rest",40),
				new C_MoveReference("take down",45),
				new C_MoveReference("ice beam",50)
		],  	new C_Evolution(null, new C_EvolutionEntry(26,"dewgong"))),
		87 : new C_Pokemon("dewgong",[90,70,80,70,95],["water","ice"],[
				new C_MoveReference("ice beam",1),
				new C_MoveReference("waterfall",1),
				new C_MoveReference("body slam",1),
				new C_MoveReference("horn drill",1),
				new C_MoveReference("waterfall",30),
				new C_MoveReference("waterfall",35),
				new C_MoveReference("waterfall",44),
				new C_MoveReference("hydro pump",49),
				new C_MoveReference("rest",50)
		],  	new C_Evolution(new C_EvolutionEntry(26,"seel"), null)),
		88 : new C_Pokemon("grimer",[80,80,50,25,40],["poison"],[
				new C_MoveReference("toxic",1),
				new C_MoveReference("sludge",1),
				new C_MoveReference("explosion",1),
				new C_MoveReference("explosion",30),
				new C_MoveReference("explosion",33),
				new C_MoveReference("explosion",37),
				new C_MoveReference("explosion",42),
				new C_MoveReference("explosion",48),
				new C_MoveReference("acid armor",55)
		],  	new C_Evolution(null, new C_EvolutionEntry(24,"muk"))),
		89 : new C_Pokemon("muk",[105,105,75,50,65],["poison"],[
				new C_MoveReference("sludge",1),
				new C_MoveReference("explosion",1),
				new C_MoveReference("toxic",1),
				new C_MoveReference("body slam",1),
				new C_MoveReference("sludge",30),
				new C_MoveReference("sludge",33),
				new C_MoveReference("sludge",37),
				new C_MoveReference("sludge",45),
				new C_MoveReference("sludge",53),
				new C_MoveReference("sludge",60)
		],  	new C_Evolution(new C_EvolutionEntry(24,"grimer"), null)),
		90 : new C_Pokemon("shellder",[30,65,100,40,45],["water"],[
				new C_MoveReference("explosion",1),
				new C_MoveReference("clamp",1),
				new C_MoveReference("aurora beam",1),
				new C_MoveReference("supersonic",18),
				new C_MoveReference("clamp",23),
				new C_MoveReference("aurora beam",30),
				new C_MoveReference("ice beam",39),
				new C_MoveReference("ice beam",50)
		],  	new C_Evolution(null, new C_EvolutionEntry("waterstone","cloyster"))),
		91 : new C_Pokemon("cloyster",[50,95,180,70,85],["water","ice"],[
				new C_MoveReference("explosion",1),
				new C_MoveReference("blizzard",1),
				new C_MoveReference("clamp",1),
				new C_MoveReference("explosion",50)
		],  	new C_Evolution(new C_EvolutionEntry("waterstone","shellder"), null)),
		92 : new C_Pokemon("gastly",[30,35,30,80,100],["ghost","poison"],[
				new C_MoveReference("hypnosis",1),
				new C_MoveReference("confuse Ray",1),
				new C_MoveReference("night shade",1),
				new C_MoveReference("hypnosis",27),
				new C_MoveReference("hypnosis",35)
		],  	new C_Evolution(null, new C_EvolutionEntry(25,"haunter"))),
		93 : new C_Pokemon("haunter",[45,50,45,95,115],["ghost","poison"],[
				new C_MoveReference("hypnosis",1),
				new C_MoveReference("confuse Ray",1),
				new C_MoveReference("night shade",1),
				new C_MoveReference("hypnosis",29),
				new C_MoveReference("psychic",56)
		],  	new C_Evolution(new C_EvolutionEntry(25,"gastly"), new C_EvolutionEntry(55,"gengar"))),
		94 : new C_Pokemon("gengar",[60,65,60,110,130],["ghost","poison"],[
				new C_MoveReference("explosion",1),
				new C_MoveReference("hypnosis",1),
				new C_MoveReference("psychic",1),
				new C_MoveReference("night shade",1),
				new C_MoveReference("hypnosis",29),
				new C_MoveReference("seismic toss",100)
		],  	new C_Evolution(new C_EvolutionEntry(55,"haunter"), null)),
		95 : new C_Pokemon("onix",[35,45,160,70,30],["rock","ground"],[
				new C_MoveReference("bind",1),
				new C_MoveReference("earthquake",1),
				new C_MoveReference("rock Slide",1),
				new C_MoveReference("bind",15),
				new C_MoveReference("bind",19),
				new C_MoveReference("bind",25),
				new C_MoveReference("bind",33),
				new C_MoveReference("bind",43)
		],  	new C_Evolution(null, null)),
		96 : new C_Pokemon("drowzee",[60,48,45,42,90],["psychic"],[
				new C_MoveReference("confusion",1),
				new C_MoveReference("hypnosis",1),
				new C_MoveReference("thunder wave",12),
				new C_MoveReference("toxic",17),
				new C_MoveReference("psychic",24),
				new C_MoveReference("psychic",29),
				new C_MoveReference("psychic",32),
				new C_MoveReference("psychic",37)
		],  	new C_Evolution(null, new C_EvolutionEntry(26,"hypno"))),
		97 : new C_Pokemon("hypno",[85,73,70,67,115],["psychic"],[
				new C_MoveReference("thunder wave",1),
				new C_MoveReference("hypnosis",1),
				new C_MoveReference("psychic",1),
				new C_MoveReference("hypnosis",12),
				new C_MoveReference("hypnosis",17),
				new C_MoveReference("hypnosis",24),
				new C_MoveReference("hypnosis",33),
				new C_MoveReference("hypnosis",37),
				new C_MoveReference("psychic",43)
		],  	new C_Evolution(new C_EvolutionEntry(26,"drowzee"), null)),
		98 : new C_Pokemon("krabby",[30,105,90,50,25],["water"],[
				new C_MoveReference("crabhammer",1),
				new C_MoveReference("vicegrip",1),
				new C_MoveReference("crabhammer",10),
				new C_MoveReference("body slam",14),
				new C_MoveReference("body slam",30),
				new C_MoveReference("body slam",35),
				new C_MoveReference("body slam",40)
		],  	new C_Evolution(null, new C_EvolutionEntry(16,"kingler"))),
		99 : new C_Pokemon("kingler",[55,130,115,75,50],["water"],[
				new C_MoveReference("crabhammer",1),
				new C_MoveReference("body slam",1),
				new C_MoveReference("guillotine",1),
				new C_MoveReference("crabhammer",20),
				new C_MoveReference("crabhammer",25),
				new C_MoveReference("crabhammer",34),
				new C_MoveReference("crabhammer",42),
				new C_MoveReference("crabhammer",49)
		],  	new C_Evolution(new C_EvolutionEntry(16,"krabby"), null)),
		100 : new C_Pokemon("voltorb",[40,30,50,100,55],["electric"],[
				new C_MoveReference("sonicboom",1),
				new C_MoveReference("selfdestruct",1),
				new C_MoveReference("explosion",1),
				new C_MoveReference("thunder wave",1),
				new C_MoveReference("sonicboom",17),
				new C_MoveReference("selfdestruct",22),
				new C_MoveReference("thunderbolt",29),
				new C_MoveReference("thunder wave",36),
				new C_MoveReference("explosion",43)
		],  	new C_Evolution(null, new C_EvolutionEntry(30,"electrode"))),
		101 : new C_Pokemon("electrode",[60,50,70,140,80],["electric"],[
				new C_MoveReference("explosion",1),
				new C_MoveReference("thunderbolt",1),
				new C_MoveReference("thunder wave",1),
				new C_MoveReference("explosion",17),
				new C_MoveReference("explosion",22),
				new C_MoveReference("explosion",29),
				new C_MoveReference("explosion",40),
				new C_MoveReference("explosion",50)
		],  	new C_Evolution(new C_EvolutionEntry(30,"voltorb"), null)),
		102 : new C_Pokemon("exeggcute",[80,65,80,40,80],["grass","psychic"],[
				new C_MoveReference("hypnosis",1),
				new C_MoveReference("psybeam",1),
				new C_MoveReference("explosion",1),
				new C_MoveReference("stun spore",1),
				new C_MoveReference("sleep powder",20),
				new C_MoveReference("psychic",22),
				new C_MoveReference("psychic",32),
				new C_MoveReference("psychic",37),
				new C_MoveReference("psychic",42),
				new C_MoveReference("sleep powder",48)
		],  	new C_Evolution(null, new C_EvolutionEntry("leafstone","exeggutor"))),
		103 : new C_Pokemon("exeggutor",[95,95,85,55,125],["grass","psychic"],[
				new C_MoveReference("stun spore",1),
				new C_MoveReference("sleep powder",1),
				new C_MoveReference("psychic",1),
				new C_MoveReference("psychic",28)
		],  	new C_Evolution(new C_EvolutionEntry("leafstone","exeggcute"), null)),
		104 : new C_Pokemon("cubone",[50,50,95,35,40],["ground"],[
				new C_MoveReference("bone Club",1),
				new C_MoveReference("headbutt",1),
				new C_MoveReference("headbutt",9),
				new C_MoveReference("double-edge",10),
				new C_MoveReference("rock Slide",12),
				new C_MoveReference("bonemerang",13),
				new C_MoveReference("bonemerang",46)
		],  	new C_Evolution(null, new C_EvolutionEntry(16,"marowak"))),
		105 : new C_Pokemon("marowak",[60,80,110,45,50],["ground"],[
				new C_MoveReference("bonemerang",1),
				new C_MoveReference("rock Slide",1),
				new C_MoveReference("earthquake",1),
				new C_MoveReference("body slam",1),
				new C_MoveReference("bonemerang",25),
				new C_MoveReference("bonemerang",33),
				new C_MoveReference("bonemerang",41),
				new C_MoveReference("bonemerang",48),
				new C_MoveReference("bonemerang",55)
		],  	new C_Evolution(new C_EvolutionEntry(16,"cubone"), null)),
		106 : new C_Pokemon("hitmonlee",[50,120,53,87,35],["fighting"],[
				new C_MoveReference("hi jump kick",1),
				new C_MoveReference("body slam",1),
				new C_MoveReference("seismic toss",1),
				new C_MoveReference("hi jump kick",33),
				new C_MoveReference("hi jump kick",38),
				new C_MoveReference("hi jump kick",43),
				new C_MoveReference("hi jump kick",48),
				new C_MoveReference("hi jump kick",53)
		],  	new C_Evolution(null, null)),
		107 : new C_Pokemon("hitmonchan",[50,105,79,76,35],["fighting"],[
				new C_MoveReference("submission",1),
				new C_MoveReference("body slam",1),
				new C_MoveReference("seismic toss",1),
				new C_MoveReference("seismic toss",33),
				new C_MoveReference("seismic toss",38),
				new C_MoveReference("seismic toss",43),
				new C_MoveReference("seismic toss",48),
				new C_MoveReference("seismic toss",53)
		],  	new C_Evolution(null, null)),
		108 : new C_Pokemon("lickitung",[90,55,75,30,60],["normal"],[
				new C_MoveReference("Lick",1),
				new C_MoveReference("wrap",1),
				new C_MoveReference("body slam",1),
				new C_MoveReference("body slam",7),
				new C_MoveReference("body slam",15),
				new C_MoveReference("body slam",23),
				new C_MoveReference("earthquake",31),
				new C_MoveReference("hyper beam",39)
		],  	new C_Evolution(null, null)),
		109 : new C_Pokemon("koffing",[40,65,95,35,60],["poison"],[
				new C_MoveReference("smokescreen",1),
				new C_MoveReference("sludge",1),
				new C_MoveReference("explosion",1),
				new C_MoveReference("toxic",1),
				new C_MoveReference("explosion",32),
				new C_MoveReference("explosion",37),
				new C_MoveReference("explosion",40),
				new C_MoveReference("explosion",45),
				new C_MoveReference("explosion",48)
		],  	new C_Evolution(null, new C_EvolutionEntry(24,"weezing"))),
		110 : new C_Pokemon("weezing",[65,90,120,60,85],["poison"],[
				new C_MoveReference("toxic",1),
				new C_MoveReference("explosion",1),
				new C_MoveReference("sludge",1),
				new C_MoveReference("fire blast",1),
				new C_MoveReference("sludge",32),
				new C_MoveReference("sludge",39),
				new C_MoveReference("sludge",43),
				new C_MoveReference("explosion",49),
				new C_MoveReference("thunderbolt",53)
		],  	new C_Evolution(new C_EvolutionEntry(24,"koffing"), null)),
		111 : new C_Pokemon("rhyhorn",[80,85,95,25,30],["ground","rock"],[
				new C_MoveReference("double-edge",1),
				new C_MoveReference("rock Slide",30),
				new C_MoveReference("rock Slide",35),
				new C_MoveReference("rock Slide",40),
				new C_MoveReference("earthquake",42),
				new C_MoveReference("rock Slide",50),
				new C_MoveReference("earthquake",55)
		],  	new C_Evolution(null, new C_EvolutionEntry(42,"rhydon"))),
		112 : new C_Pokemon("rhydon",[105,130,120,40,45],["ground","rock"],[
				new C_MoveReference("earthquake",1),
				new C_MoveReference("body slam",1),
				new C_MoveReference("rock Slide",1),
				new C_MoveReference("rock Slide",30),
				new C_MoveReference("rock Slide",40),
				new C_MoveReference("earthquake",42),
				new C_MoveReference("rock Slide",48),
				new C_MoveReference("rock Slide",55),
				new C_MoveReference("earthquake",64)
		],  	new C_Evolution(new C_EvolutionEntry(42,"rhyhorn"), null)),
		113 : new C_Pokemon("chansey",[255,5,45,50,105],["normal"],[
				new C_MoveReference("minimize",1),
				new C_MoveReference("seismic toss",1),
				new C_MoveReference("thunder wave",1),
				new C_MoveReference("softboiled",1),
				new C_MoveReference("thunderbolt",24),
				new C_MoveReference("ice beam",25),
				new C_MoveReference("ice beam",38),
				new C_MoveReference("thunderbolt",44),
				new C_MoveReference("softboiled",48),
				new C_MoveReference("softboiled",54)
		],  	new C_Evolution(null, null)),
		114 : new C_Pokemon("tangela",[65,55,115,60,100],["grass"],[
				new C_MoveReference("stun spore",1),
				new C_MoveReference("sleep powder",1),
				new C_MoveReference("wrap",1),
				new C_MoveReference("stun spore",29),
				new C_MoveReference("stun spore",32),
				new C_MoveReference("stun spore",36),
				new C_MoveReference("sleep powder",39),
				new C_MoveReference("sleep powder",45),
				new C_MoveReference("sleep powder",49)
		],  	new C_Evolution(null, null)),
		115 : new C_Pokemon("kangaskhan",[105,95,80,90,75],["normal"],[
				new C_MoveReference("body slam",1),
				new C_MoveReference("earthquake",26),
				new C_MoveReference("body slam",31),
				new C_MoveReference("body slam",36),
				new C_MoveReference("hyper beam",41),
				new C_MoveReference("hyper beam",46)
		],  	new C_Evolution(null, null)),
		116 : new C_Pokemon("horsea",[30,40,70,60,70],["water"],[
				new C_MoveReference("toxic",1),
				new C_MoveReference("bubble beam",1),
				new C_MoveReference("smokescreen",1),
				new C_MoveReference("smokescreen",19),
				new C_MoveReference("smokescreen",24),
				new C_MoveReference("smokescreen",30),
				new C_MoveReference("smokescreen",37),
				new C_MoveReference("hydro pump",45)
		],  	new C_Evolution(null, new C_EvolutionEntry(32,"seadra"))),
		117 : new C_Pokemon("seadra",[55,65,95,85,95],["water"],[
				new C_MoveReference("dragon rage",1),
				new C_MoveReference("dragon rage",19),
				new C_MoveReference("toxic",24),
				new C_MoveReference("hydro pump",30),
				new C_MoveReference("smokescreen",41),
				new C_MoveReference("hydro pump",52)
		],  	new C_Evolution(new C_EvolutionEntry(32,"horsea"), null)),
		118 : new C_Pokemon("goldeen",[45,67,60,63,50],["water"],[
				new C_MoveReference("peck",1),
				new C_MoveReference("waterfall",1),
				new C_MoveReference("supersonic",1),
				new C_MoveReference("waterfall",19),
				new C_MoveReference("waterfall",24),
				new C_MoveReference("waterfall",30),
				new C_MoveReference("waterfall",37),
				new C_MoveReference("horn drill",45),
				new C_MoveReference("agility",48)
		],  	new C_Evolution(null, new C_EvolutionEntry(33,"seaking"))),
		119 : new C_Pokemon("seaking",[80,92,65,68,80],["water"],[
				new C_MoveReference("horn drill",1),
				new C_MoveReference("bubble beam",19),
				new C_MoveReference("bubble beam",24),
				new C_MoveReference("bubble beam",30),
				new C_MoveReference("waterfall",39),
				new C_MoveReference("horn drill",48),
				new C_MoveReference("agility",54)
		],  	new C_Evolution(new C_EvolutionEntry(33,"goldeen"), null)),
		120 : new C_Pokemon("staryu",[30,45,55,85,70],["water"],[
				new C_MoveReference("double-edge",1),
				new C_MoveReference("water gun",17),
				new C_MoveReference("light screen",22),
				new C_MoveReference("bubble beam",27),
				new C_MoveReference("bubble beam",32),
				new C_MoveReference("recover",37),
				new C_MoveReference("thunder wave",42),
				new C_MoveReference("hydro pump",47)
		],  	new C_Evolution(null, new C_EvolutionEntry("waterstone","starmie"))),
		121 : new C_Pokemon("starmie",[60,75,85,115,100],["water","psychic"],[
				new C_MoveReference("thunder wave",1),
				new C_MoveReference("blizzard",1),
				new C_MoveReference("thunderbolt",1),
				new C_MoveReference("recover",1)
		],  	new C_Evolution(new C_EvolutionEntry("waterstone","staryu"), null)),
		122 : new C_Pokemon("mr. mime",[40,45,65,90,100],["psychic"],[
				new C_MoveReference("psybeam",1),
				new C_MoveReference("thunder wave",1),
				new C_MoveReference("thunder wave",15),
				new C_MoveReference("hypnosis",20),
				new C_MoveReference("thunderbolt",25),
				new C_MoveReference("psychic",39)
		],  	new C_Evolution(null, null)),
		123 : new C_Pokemon("scyther",[70,110,80,105,55],["bug","flying"],[
				new C_MoveReference("substitute",1),
				new C_MoveReference("slash",1),
				new C_MoveReference("quick attack",1),
				new C_MoveReference("wing attack",1),
				new C_MoveReference("slash",17),
				new C_MoveReference("slash",20),
				new C_MoveReference("slash",24),
				new C_MoveReference("slash",29),
				new C_MoveReference("slash",35),
				new C_MoveReference("slash",48)
		],  	new C_Evolution(null, null)),
		124 : new C_Pokemon("jynx",[65,50,60,100,115],["ice","psychic"],[
				new C_MoveReference("psychic",1),
				new C_MoveReference("lovely kiss",1),
				new C_MoveReference("blizzard",1),
				new C_MoveReference("lovely kiss",18),
				new C_MoveReference("lovely kiss",23),
				new C_MoveReference("lovely kiss",31),
				new C_MoveReference("lovely kiss",39),
				new C_MoveReference("lovely kiss",47),
				new C_MoveReference("lovely kiss",58)
		],  	new C_Evolution(null, null)),
		125 : new C_Pokemon("electabuzz",[65,95,60,110,100],["electric"],[
				new C_MoveReference("psychic",1),
				new C_MoveReference("thunderbolt",1),
				new C_MoveReference("ice punch",1),
				new C_MoveReference("thunder wave",1),
				new C_MoveReference("psychic",34),
				new C_MoveReference("psychic",37),
				new C_MoveReference("psychic",42),
				new C_MoveReference("psychic",49),
				new C_MoveReference("psychic",54)
		],  	new C_Evolution(null, null)),
		126 : new C_Pokemon("magmar",[65,100,60,105,125],["fire"],[
				new C_MoveReference("confuse Ray",1),
				new C_MoveReference("thunderbolt",1),
				new C_MoveReference("body slam",1),
				new C_MoveReference("fire blast",1),
				new C_MoveReference("confuse Ray",36),
				new C_MoveReference("confuse Ray",39),
				new C_MoveReference("confuse Ray",43),
				new C_MoveReference("confuse Ray",48),
				new C_MoveReference("confuse Ray",52),
				new C_MoveReference("solar beam",75)
		],  	new C_Evolution(null, null)),
		127 : new C_Pokemon("pinsir",[65,125,100,85,55],["bug"],[
				new C_MoveReference("wrap",1),
				new C_MoveReference("guillotine",1),
				new C_MoveReference("body slam",1),
				new C_MoveReference("guillotine",25),
				new C_MoveReference("slash",30),
				new C_MoveReference("slash",36),
				new C_MoveReference("body slam",43),
				new C_MoveReference("slash",49),
				new C_MoveReference("guillotine",54)
		],  	new C_Evolution(null, null)),
		128 : new C_Pokemon("tauros",[75,105,95,115,70],["normal"],[
				new C_MoveReference("body slam",1),
				new C_MoveReference("earthquake",1),
				new C_MoveReference("hyper beam",1),
				new C_MoveReference("earthquake",21),
				new C_MoveReference("earthquake",28),
				new C_MoveReference("earthquake",35),
				new C_MoveReference("earthquake",44),
				new C_MoveReference("earthquake",51)
		],  	new C_Evolution(null, null)),
		129 : new C_Pokemon("magikarp",[20,10,55,80,20],["water"],[
				new C_MoveReference("splash",1),
				new C_MoveReference("bubble",1),
				new C_MoveReference("tackle",15)
		],  	new C_Evolution(null, new C_EvolutionEntry(24,"gyarados"))),
		130 : new C_Pokemon("gyarados",[95,125,79,81,100],["water","flying"],[
				new C_MoveReference("dragon rage",1),
				new C_MoveReference("waterfall",25),
				new C_MoveReference("thunderbolt",30),
				new C_MoveReference("body slam",32),
				new C_MoveReference("blizzard",41),
				new C_MoveReference("hydro pump",52)
		],  	new C_Evolution(new C_EvolutionEntry(24,"magikarp"), null)),
		131 : new C_Pokemon("lapras",[130,85,80,60,95],["water","ice"],[
				new C_MoveReference("dragon rage",1),
				new C_MoveReference("confuse Ray",31),
				new C_MoveReference("body slam",34),
				new C_MoveReference("thunderbolt",36),
				new C_MoveReference("blizzard",38),
				new C_MoveReference("blizzard",40),
				new C_MoveReference("surf",76)
		],  	new C_Evolution(null, null)),
		132 : new C_Pokemon("ditto",[100,100,100,100,100],["normal"],[
				new C_MoveReference("Transform",1)
		],  	new C_Evolution(null, null)),
		133 : new C_Pokemon("eevee",[55,55,50,55,65],["normal"],[
				new C_MoveReference("quick attack",1),
				new C_MoveReference("sand attack",1),
				new C_MoveReference("double-edge",20),
				new C_MoveReference("sand attack",22),
				new C_MoveReference("sand attack",37),
				new C_MoveReference("sand attack",45)
		],  	new C_Evolution(null, [
					new C_EvolutionEntry("waterstone","vaporeon"),
					new C_EvolutionEntry("thunderstone","jolteon"),
					new C_EvolutionEntry("firestone","flareon")
				])),
		134 : new C_Pokemon("vaporeon",[130,65,60,65,110],["water"],[
				new C_MoveReference("ice beam",1),
				new C_MoveReference("waterfall",1),
				new C_MoveReference("sand attack",1),
				new C_MoveReference("body slam",1),
				new C_MoveReference("blizzard",27),
				new C_MoveReference("waterfall",31),
				new C_MoveReference("waterfall",37),
				new C_MoveReference("waterfall",40),
				new C_MoveReference("hydro pump",42),
				new C_MoveReference("hydro pump",44),
				new C_MoveReference("hydro pump",48),
				new C_MoveReference("hydro pump",54)
		],		new C_Evolution(new C_EvolutionEntry("waterstone","eevee"), null)),
		135 : new C_Pokemon("jolteon",[65,65,60,130,110],["electric"],[
				new C_MoveReference("pin missile",1),
				new C_MoveReference("sand attack",1),
				new C_MoveReference("thunder wave",1),
				new C_MoveReference("thunderbolt",1),
				new C_MoveReference("body slam",27),
				new C_MoveReference("body slam",31),
				new C_MoveReference("body slam",37),
				new C_MoveReference("body slam",40),
				new C_MoveReference("body slam",42),
				new C_MoveReference("body slam",44),
				new C_MoveReference("body slam",48),
				new C_MoveReference("thunderbolt",54)
		],		new C_Evolution(new C_EvolutionEntry("thunderstone","eevee"), null)),
		136 : new C_Pokemon("flareon",[65,130,60,65,110],["fire"],[
				new C_MoveReference("body slam",1),
				new C_MoveReference("sand attack",1),
				new C_MoveReference("fire blast",1),
				new C_MoveReference("fire blast",27),
				new C_MoveReference("fire blast",31),
				new C_MoveReference("fire blast",37),
				new C_MoveReference("fire blast",40),
				new C_MoveReference("fire blast",42),
				new C_MoveReference("fire blast",44),
				new C_MoveReference("fire blast",48),
				new C_MoveReference("solar beam",73)
		],		new C_Evolution(new C_EvolutionEntry("firestone","eevee"), null)),
		137 : new C_Pokemon("porygon",[65,60,70,40,75],["normal"],[
				new C_MoveReference("tri attack",1),
				new C_MoveReference("Sharpen",1),
				new C_MoveReference("conversion",1),
				new C_MoveReference("psybeam",1),
				new C_MoveReference("blizzard",22),
				new C_MoveReference("recover",24),
				new C_MoveReference("thunderbolt",28),
				new C_MoveReference("thunder wave",32)
		],  	new C_Evolution(null, null)),
		138 : new C_Pokemon("omanyte",[35,40,100,35,90],["rock","water"],[
				new C_MoveReference("waterfall",1),
				new C_MoveReference("blizzard",1),
				new C_MoveReference("horn attack",34),
				new C_MoveReference("leer",39),
				new C_MoveReference("spike cannon",46),
				new C_MoveReference("hydro pump",53)
		],  	new C_Evolution(null, new C_EvolutionEntry(40,"omastar"))),
		139 : new C_Pokemon("omastar",[70,60,125,55,115],["rock","water"],[
				new C_MoveReference("hydro pump",1),
				new C_MoveReference("blizzard",1),
				new C_MoveReference("seismic toss",1),
				new C_MoveReference("body slam",1),
				new C_MoveReference("seismic toss",34),
				new C_MoveReference("seismic toss",39),
				new C_MoveReference("seismic toss",44),
				new C_MoveReference("hydro pump",53)
		],  	new C_Evolution(new C_EvolutionEntry(40,"omanyte"), null)),
		140 : new C_Pokemon("kabuto",[30,80,90,55,45],["rock","water"],[
				new C_MoveReference("waterfall",1),
				new C_MoveReference("blizzard",1),
				new C_MoveReference("slash",1),
				new C_MoveReference("absorb",34),
				new C_MoveReference("slash",39),
				new C_MoveReference("leer",44),
				new C_MoveReference("blizzard",45),
				new C_MoveReference("hydro pump",49)
		],  	new C_Evolution(null, new C_EvolutionEntry(40,"kabutops"))),
		141 : new C_Pokemon("kabutops",[60,115,105,80,70],["rock","water"],[
				new C_MoveReference("hydro pump",1),
				new C_MoveReference("blizzard",1),
				new C_MoveReference("slash",1),
				new C_MoveReference("dig",1),
				new C_MoveReference("slash",34),
				new C_MoveReference("slash",39),
				new C_MoveReference("slash",46),
				new C_MoveReference("hydro pump",53)
		],  	new C_Evolution(new C_EvolutionEntry(40,"kabuto"), null)),
		142 : new C_Pokemon("aerodactyl",[80,105,65,130,60],["rock","flying"],[
				new C_MoveReference("fly",1),
				new C_MoveReference("razor wind",33),
				new C_MoveReference("earthquake",38),
				new C_MoveReference("rock Slide",45),
				new C_MoveReference("sky attack",101)
		],  	new C_Evolution(null, null)),
		143 : new C_Pokemon("snorlax",[160,110,65,30,65],["normal"],[
				new C_MoveReference("headbutt",1),
				new C_MoveReference("rest",1),
				new C_MoveReference("selfdestruct",1),
				new C_MoveReference("body slam",35),
				new C_MoveReference("earthquake",41),
				new C_MoveReference("hyper beam",45),
				new C_MoveReference("lovely kiss",88)
		],  	new C_Evolution(null, null)),
		144 : new C_Pokemon("articuno",[105,85,100,85,125],["ice","flying"],[
				new C_MoveReference("sky attack",1),
				new C_MoveReference("blizzard",1),
				new C_MoveReference("blizzard",51),
				new C_MoveReference("blizzard",55),
				new C_MoveReference("blizzard",60)
		],  	new C_Evolution(null, null)),
		145 : new C_Pokemon("zapdos",[90,90,85,100,125],["electric","flying"],[
				new C_MoveReference("thunder wave",1),
				new C_MoveReference("drill peck",1),
				new C_MoveReference("drill peck",51),
				new C_MoveReference("drill peck",55),
				new C_MoveReference("thunderbolt",60)
		],  	new C_Evolution(null, null)),
		146 : new C_Pokemon("moltres",[90,100,90,90,125],["fire","flying"],[
				new C_MoveReference("fire blast",1),
				new C_MoveReference("sky attack",1),
				new C_MoveReference("fire blast",51),
				new C_MoveReference("sky attack",55),
				new C_MoveReference("solar beam",60)
		],  	new C_Evolution(null, null)),
		147 : new C_Pokemon("dratini",[41,64,45,50,50],["dragon"],[
				new C_MoveReference("wrap",1),
				new C_MoveReference("thunder wave",1),
				new C_MoveReference("dragon rage",1),
				new C_MoveReference("thunder wave",10),
				new C_MoveReference("thunder wave",20),
				new C_MoveReference("headbutt",21),
				new C_MoveReference("double-edge",22),
				new C_MoveReference("hyper beam",30)
		],  	new C_Evolution(null, new C_EvolutionEntry(30,"dragonair"))),
		148 : new C_Pokemon("dragonair",[61,84,65,70,70],["dragon"],[
				new C_MoveReference("dragon rage",1),
				new C_MoveReference("wrap",1),
				new C_MoveReference("thunder wave",1),
				new C_MoveReference("thunder wave",10),
				new C_MoveReference("thunder wave",20),
				new C_MoveReference("thunder wave",35),
				new C_MoveReference("blizzard",45),
				new C_MoveReference("hyper beam",55)
		],  	new C_Evolution(new C_EvolutionEntry(30,"dratini"), new C_EvolutionEntry(55,"dragonite"))),
		149 : new C_Pokemon("dragonite",[91,134,95,80,100],["dragon","flying"],[
				new C_MoveReference("wrap",1),
				new C_MoveReference("blizzard",1),
				new C_MoveReference("thunder wave",1),
				new C_MoveReference("thunder wave",10),
				new C_MoveReference("thunder wave",20),
				new C_MoveReference("thunder wave",35),
				new C_MoveReference("thunder wave",45),
				new C_MoveReference("thunder wave",60)
		],  	new C_Evolution(new C_EvolutionEntry(55,"dragonair"), null)),
		150 : new C_Pokemon("mewtwo",[106,110,90,140,154],["psychic"],[
				new C_MoveReference("thunder wave",1),
				new C_MoveReference("psychic",1),
				new C_MoveReference("body slam",1),
				new C_MoveReference("recover",1),
				new C_MoveReference("psychic",63),
				new C_MoveReference("psychic",66),
				new C_MoveReference("psychic",70),
				new C_MoveReference("psychic",75),
				new C_MoveReference("psychic",81)
		],  	new C_Evolution(null, null)),
		151: new C_Pokemon("mew",[100,100,100,100,100],["psychic"],[
				new C_MoveReference("pound",1),
				new C_MoveReference("thunder wave",2),
				new C_MoveReference("softboiled",7),
				new C_MoveReference("body slam",10),
				new C_MoveReference("psychic",12)
		],  	new C_Evolution(null, null))
	};
};
