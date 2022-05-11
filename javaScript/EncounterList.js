class C_Encounter {
	constructor(pokemonid, level, rate, note) {
		this.m_pokemonid = pokemonid;
		this.m_level = level;
		this.m_rate = rate;
		this.m_note = note;
	}
	
	isPokemon(pokemonid) {
		return this.m_pokemonid == pokemonid;
	}
};

class C_Area {
	constructor(name, encounters) {
		this.m_name = name;
		this.m_encounters = encounters;
	}
	
	getEncounter(pokemonid) {
		var encounter;
		for(var i in this.m_encounters) {
			if (this.m_encounters[i].isPokemon(pokemonid)) {
				if(typeof encounter == 'undefined') {
					encounter = this.m_encounters[i]
				} else {
					encounter = [...encounter, this.m_encounters[i]];
				}
			}
		}
		return encounter;
	}
};

class C_Encounter_Table {
	constructor(){}
	
	static m_Encounter_Table = {
		1 : new C_Area("route 1", [
				new C_Encounter(16, [3], [25], "land"),
				new C_Encounter(13, [3], [15], "land"),
				new C_Encounter(10, [3], [15], "land"),
				new C_Encounter(19, [3], [10], "land"),
				new C_Encounter(23, [3], [10], "land"),
				new C_Encounter(27, [3], [10], "land"),
				new C_Encounter(21, [3], [5], "land"),
				new C_Encounter(29, [4], [5], "land"),
				new C_Encounter(32, [4], [4], "land"),
				new C_Encounter(25, [5], [1], "land")
		]),
		2 : new C_Area("route 2", [
				new C_Encounter(104, [5], [25], "land"),
				new C_Encounter(27, [5], [15], "land"),
				new C_Encounter(23, [5], [15], "land"),
				new C_Encounter(37, [5], [10], "land"),
				new C_Encounter(50, [5], [10], "land"),
				new C_Encounter(56, [5], [10], "land"),
				new C_Encounter(58, [5], [5], "land"),
				new C_Encounter(39, [5], [5], "land"),
				new C_Encounter(54, [5], [4], "land"),
				new C_Encounter(52, [5], [1], "land")
		]),
		3 : new C_Area("route 3", [
				new C_Encounter(39, [12], [25], "land"),
				new C_Encounter(23, [12], [15], "land"),
				new C_Encounter(16, [12], [15], "land"),
				new C_Encounter(21, [12], [10], "land"),
				new C_Encounter(60, [12], [10], "land"),
				new C_Encounter(54, [12], [10], "land"),
				new C_Encounter(74, [12], [5], "land"),
				new C_Encounter(66, [12], [5], "land"),
				new C_Encounter(77, [12], [4], "land"),
				new C_Encounter(111, [12], [1], "land")
		]),
		4 : new C_Area("route 4", [
				new C_Encounter(100, [15], [25], "land"),
				new C_Encounter(81, [15], [15], "land"),
				new C_Encounter(25, [15], [15], "land"),
				new C_Encounter(43, [15], [10], "land"),
				new C_Encounter(69, [15], [10], "land"),
				new C_Encounter(86, [15], [10], "land"),
				new C_Encounter(98, [15], [5], "land"),
				new C_Encounter(58, [15], [5], "land"),
				new C_Encounter(54, [15], [4], "land"),
				new C_Encounter(88, [15], [1], "land")
		]),
		5 : new C_Area("route 5", [
				new C_Encounter(52, [23], [25], "land"),
				new C_Encounter(132, [23], [15], "land"),
				new C_Encounter(21, [23], [15], "land"),
				new C_Encounter(17, [23], [10], "land"),
				new C_Encounter(46, [23], [10], "land"),
				new C_Encounter(84, [23], [10], "land"),
				new C_Encounter(77, [23], [5], "land"),
				new C_Encounter(108, [22], [5], "land"),
				new C_Encounter(114, [22], [4], "land"),
				new C_Encounter(27, [23], [1], "land")
		]),
		6 : new C_Area("route 6", [
				new C_Encounter(25, [23], [25], "land"),
				new C_Encounter(30, [23], [15], "land"),
				new C_Encounter(33, [23], [15], "land"),
				new C_Encounter(107, [23], [10], "land"),
				new C_Encounter(12, [23], [10], "land"),
				new C_Encounter(15, [23], [10], "land"),
				new C_Encounter(106, [23], [5], "land"),
				new C_Encounter(17, [23], [5], "land"),
				new C_Encounter(108, [22], [4], "land"),
				new C_Encounter(132, [23], [1], "land")
		]),
		7 : new C_Area("route 7", [
				new C_Encounter(17, [44], [25], "land"),
				new C_Encounter(30, [44], [15], "land"),
				new C_Encounter(33, [44], [15], "land"),
				new C_Encounter(2, [44], [10], "land"),
				new C_Encounter(5, [44], [10], "land"),
				new C_Encounter(8, [44], [10], "land"),
				new C_Encounter(84, [44], [5], "land"),
				new C_Encounter(66, [44], [5], "land"),
				new C_Encounter(81, [19], [4], "land"),
				new C_Encounter(132, [19], [1], "land")
		]),
		8 : new C_Area("route 8", [
				new C_Encounter(58, [40], [25], "land"),
				new C_Encounter(37, [40], [15], "land"),
				new C_Encounter(77, [40], [15], "land"),
				new C_Encounter(39, [40], [10], "land"),
				new C_Encounter(88, [40], [10], "land"),
				new C_Encounter(109, [40], [10], "land"),
				new C_Encounter(108, [40], [5], "land"),
				new C_Encounter(123, [40], [5], "land"),
				new C_Encounter(54, [40], [4], "land"),
				new C_Encounter(61, [40], [1], "land")
		]),
		9 : new C_Area("route 9", [
				new C_Encounter(81, [30], [25], "land"),
				new C_Encounter(12, [30], [15], "land"),
				new C_Encounter(15, [30], [15], "land"),
				new C_Encounter(123, [30], [10], "land"),
				new C_Encounter(44, [30], [10], "land"),
				new C_Encounter(70, [30], [10], "land"),
				new C_Encounter(114, [30], [5], "land"),
				new C_Encounter(108, [30], [5], "land"),
				new C_Encounter(77, [30], [4], "land"),
				new C_Encounter(61, [30], [1], "land")
		]),
		10 : new C_Area("route 10", [
				new C_Encounter(100, [35], [25], "land"),
				new C_Encounter(81, [35], [15], "land"),
				new C_Encounter(48, [35], [15], "land"),
				new C_Encounter(46, [35], [10], "land"),
				new C_Encounter(23, [35], [10], "land"),
				new C_Encounter(27, [35], [10], "land"),
				new C_Encounter(109, [35], [5], "land"),
				new C_Encounter(88, [35], [5], "land"),
				new C_Encounter(54, [35], [4], "land"),
				new C_Encounter(98, [35], [1], "land")
		]),
		11 : new C_Area("route 11", [
				new C_Encounter(104, [25], [25], "land"),
				new C_Encounter(83, [25], [15], "land"),
				new C_Encounter(84, [25], [15], "land"),
				new C_Encounter(81, [25], [10], "land"),
				new C_Encounter(100, [25], [10], "land"),
				new C_Encounter(27, [25], [10], "land"),
				new C_Encounter(37, [25], [5], "land"),
				new C_Encounter(58, [25], [5], "land"),
				new C_Encounter(86, [25], [5], "land")
		]),
		12 : new C_Area("route 12", [
				new C_Encounter(83, [50], [25], "land"),
				new C_Encounter(114, [50], [15], "land"),
				new C_Encounter(108, [50], [15], "land"),
				new C_Encounter(44, [50], [10], "land"),
				new C_Encounter(70, [50], [10], "land"),
				new C_Encounter(47, [50], [10], "land"),
				new C_Encounter(61, [50], [5], "land"),
				new C_Encounter(22, [50], [5], "land"),
				new C_Encounter(20, [50], [4], "land"),
				new C_Encounter(136, [50], [1], "land")
		]),
		13 : new C_Area("route 13", [
				new C_Encounter(123, [50], [25], "land"),
				new C_Encounter(24, [50], [15], "land"),
				new C_Encounter(28, [50], [15], "land"),
				new C_Encounter(105, [50], [14], "land"),
				new C_Encounter(20, [50], [10], "land"),
				new C_Encounter(22, [50], [10], "land"),
				new C_Encounter(114, [50], [5], "land"),
				new C_Encounter(108, [50], [5], "land"),
				new C_Encounter(98, [50], [1], "land")
		]),
		14 : new C_Area("route 14", [
				new C_Encounter(67, [50], [25], "land"),
				new C_Encounter(77, [50], [20], "land"),
				new C_Encounter(47, [50], [15], "land"),
				new C_Encounter(123, [51], [10], "land"),
				new C_Encounter(54, [51], [10], "land"),
				new C_Encounter(40, [50], [10], "land"),
				new C_Encounter(105, [50], [5], "land"),
				new C_Encounter(85, [50], [4], "land"),
				new C_Encounter(18, [50], [1], "land")
		]),
		15 : new C_Area("route 15", [
				new C_Encounter(25, [54], [25], "land"),
				new C_Encounter(77, [54], [15], "land"),
				new C_Encounter(24, [54], [20], "land"),
				new C_Encounter(18, [54], [10], "land"),
				new C_Encounter(47, [54], [10], "land"),
				new C_Encounter(28, [54], [10], "land"),
				new C_Encounter(123, [54], [5], "land"),
				new C_Encounter(57, [54], [4], "land"),
				new C_Encounter(49, [54], [1], "land")
		]),
		16 : new C_Area("route 16", [
				new C_Encounter(84, [56], [25], "land"),
				new C_Encounter(77, [56], [15], "land"),
				new C_Encounter(111, [56], [15], "land"),
				new C_Encounter(30, [56], [10], "land"),
				new C_Encounter(33, [56], [10], "land"),
				new C_Encounter(28, [56], [10], "land"),
				new C_Encounter(44, [56], [5], "land"),
				new C_Encounter(70, [56], [5], "land"),
				new C_Encounter(20, [56], [4], "land"),
				new C_Encounter(40, [56], [1], "land")
		]),
		17 : new C_Area("route 17", [
				new C_Encounter(100, [56], [25], "land"),
				new C_Encounter(109, [56], [15], "land"),
				new C_Encounter(88, [56], [15], "land"),
				new C_Encounter(58, [56], [10], "land"),
				new C_Encounter(75, [56], [10], "land"),
				new C_Encounter(22, [56], [10], "land"),
				new C_Encounter(110, [56], [5], "land"),
				new C_Encounter(89, [56], [5], "land"),
				new C_Encounter(101, [56], [4], "land"),
				new C_Encounter(85, [56], [1], "land")
		]),
		18 : new C_Area("route 18", [
				new C_Encounter(110, [56], [25], "land"),
				new C_Encounter(89, [56], [15], "land"),
				new C_Encounter(20, [56], [15], "land"),
				new C_Encounter(18, [56], [10], "land"),
				new C_Encounter(22, [56], [10], "land"),
				new C_Encounter(114, [56], [10], "land"),
				new C_Encounter(57, [56], [5], "land"),
				new C_Encounter(85, [56], [5], "land"),
				new C_Encounter(81, [56], [4], "land"),
				new C_Encounter(55, [56], [1], "land")
		]),
		19 : new C_Area("route 19", [
				new C_Encounter(72, [63], [25], "water"),
				new C_Encounter(129, [100], [15], "water"),
				new C_Encounter(86, [63], [25], "water"),
				new C_Encounter(116, [63], [10], "water"),
				new C_Encounter(118, [63], [10], "water"),
				new C_Encounter(61, [63], [10], "water"),
				new C_Encounter(8, [63], [4], "water"),
				new C_Encounter(73, [63], [1], "water")
		]),
		20 : new C_Area("route 20", [
				new C_Encounter(72, [63], [25], "water"),
				new C_Encounter(86, [63], [25], "water"),
				new C_Encounter(129, [100], [15], "water"),
				new C_Encounter(116, [63], [10], "water"),
				new C_Encounter(118, [63], [10], "water"),
				new C_Encounter(61, [63], [10], "water"),
				new C_Encounter(8, [63], [4], "water"),
				new C_Encounter(73, [63], [1], "water")
		]),
		21 : new C_Area("route 21", [
				new C_Encounter(18, [72,73], [25,10], "land"),
				new C_Encounter(115, [70], [30], "land"),
				new C_Encounter(114, [70], [10], "land"),
				new C_Encounter(24, [72], [10], "land"),
				new C_Encounter(28, [74], [5], "land"),
				new C_Encounter(85, [74], [5], "land"),
				new C_Encounter(45, [74], [4], "land"),
				new C_Encounter(71, [74], [1], "land"),
				new C_Encounter(86, [70], [40], "water"),
				new C_Encounter(72, [70], [15], "water"),
				new C_Encounter(61, [70], [10], "water"),
				new C_Encounter(8, [70], [10], "water"),
				new C_Encounter(55, [70], [10], "water"),
				new C_Encounter(118, [70], [5], "water"),
				new C_Encounter(117, [70], [5], "water"),
				new C_Encounter(73, [70], [4], "water"),
				new C_Encounter(87, [70], [1], "water")
		]),
		22 : new C_Area("route 22", [
				new C_Encounter(104, [5], [25], "land"),
				new C_Encounter(29, [4], [15], "land"),
				new C_Encounter(32, [4], [15], "land"),
				new C_Encounter(1, [5], [15], "land"),
				new C_Encounter(4, [5], [15], "land"),
				new C_Encounter(7, [5], [14], "land"),
				new C_Encounter(132, [5], [1], "land")
		]),
		23 : new C_Area("route 23", [
				new C_Encounter(135, [81], [25], "land"),
				new C_Encounter(134, [81], [15], "land"),
				new C_Encounter(136, [81], [15], "land"),
				new C_Encounter(51, [81], [10], "land"),
				new C_Encounter(28, [80], [10], "land"),
				new C_Encounter(102, [72], [10], "land"),
				new C_Encounter(85, [80], [5], "land"),
				new C_Encounter(96, [73], [5], "land"),
				new C_Encounter(80, [72], [4], "land"),
				new C_Encounter(63, [73], [1], "land")
		]),
		24 : new C_Area("route 24", [
				new C_Encounter(83, [19], [25], "land"),
				new C_Encounter(17, [19], [15], "land"),
				new C_Encounter(84, [19], [15], "land"),
				new C_Encounter(98, [19], [10], "land"),
				new C_Encounter(69, [19], [10], "land"),
				new C_Encounter(43, [19], [10], "land"),
				new C_Encounter(77, [19], [5], "land"),
				new C_Encounter(37, [19], [5], "land"),
				new C_Encounter(58, [19], [4], "land"),
				new C_Encounter(61, [14], [1], "land")
		]),
		25 : new C_Area("route 25", [
				new C_Encounter(56, [20], [25], "land"),
				new C_Encounter(12, [20], [15], "land"),
				new C_Encounter(15, [20], [15], "land"),
				new C_Encounter(98, [20], [10], "land"),
				new C_Encounter(54, [20], [10], "land"),
				new C_Encounter(60, [20], [10], "land"),
				new C_Encounter(86, [20], [5], "land"),
				new C_Encounter(29, [20], [5], "land"),
				new C_Encounter(32, [20], [4], "land"),
				new C_Encounter(122, [12], [1], "land")
		]),
		26 : new C_Area("viridian forest", [
				new C_Encounter(25, [3], [25], "land"),
				new C_Encounter(11, [5], [15], "land"),
				new C_Encounter(14, [5], [15], "land"),
				new C_Encounter(46, [5], [10], "land"),
				new C_Encounter(48, [5], [10], "land"),
				new C_Encounter(16, [6], [10], "land"),
				new C_Encounter(43, [5], [5], "land"),
				new C_Encounter(69, [5], [5], "land"),
				new C_Encounter(60, [5], [4], "land"),
				new C_Encounter(77, [9], [1], "land")
		]),
		27 : new C_Area("mt. moon cave floor 1", [
				new C_Encounter(35, [16], [25], "land"),
				new C_Encounter(66, [16], [15], "land"),
				new C_Encounter(50, [16], [15], "land"),
				new C_Encounter(41, [16], [10], "land"),
				new C_Encounter(46, [16], [10], "land"),
				new C_Encounter(74, [16], [10], "land"),
				new C_Encounter(104, [16], [5], "land"),
				new C_Encounter(95, [16], [5], "land"),
				new C_Encounter(111, [16], [4], "land"),
				new C_Encounter(86, [16], [1], "land")
		]),
		28 : new C_Area("mt. moon cave floor 2", [
				new C_Encounter(100, [16], [25], "land"),
				new C_Encounter(88, [16], [15], "land"),
				new C_Encounter(46, [16], [15], "land"),
				new C_Encounter(111, [16], [10], "land"),
				new C_Encounter(109, [16], [11], "land"),
				new C_Encounter(50, [16], [10], "land"),
				new C_Encounter(35, [16], [5], "land"),
				new C_Encounter(74, [16], [5], "land"),
				new C_Encounter(95, [16], [4], "land")
		]),
		29 : new C_Area("mt. moon cave floor 3", [
				new C_Encounter(109, [17], [25], "land"),
				new C_Encounter(100, [17], [15], "land"),
				new C_Encounter(35, [17], [15], "land"),
				new C_Encounter(111, [17], [10], "land"),
				new C_Encounter(50, [17], [10], "land"),
				new C_Encounter(88, [17], [10], "land"),
				new C_Encounter(27, [17], [5], "land"),
				new C_Encounter(66, [17], [5], "land"),
				new C_Encounter(46, [17], [5], "land")
		]),
		30 : new C_Area("rock tunnel floor 1", [
				new C_Encounter(95, [24], [25], "land"),
				new C_Encounter(109, [28], [15], "land"),
				new C_Encounter(100, [27], [15], "land"),
				new C_Encounter(66, [20], [10], "land"),
				new C_Encounter(42, [20], [10], "land"),
				new C_Encounter(88, [20], [10], "land"),
				new C_Encounter(50, [27], [5], "land"),
				new C_Encounter(74, [23], [5], "land"),
				new C_Encounter(108, [26], [4], "land"),
				new C_Encounter(75, [26], [1], "land")
		]),
		31 : new C_Area("rock tunnel floor 2", [
				new C_Encounter(100, [26,27], [25,15], "land"),
				new C_Encounter(81, [26], [15], "land"),
				new C_Encounter(42, [25,26], [10,4], "land"),
				new C_Encounter(44, [25], [10], "land"),
				new C_Encounter(95, [24], [10], "land"),
				new C_Encounter(75, [25], [5], "land"),
				new C_Encounter(67, [25], [5], "land"),
				new C_Encounter(57, [24], [1], "land")
		]),
		32 : new C_Area("power plant", [
				new C_Encounter(125, [63], [40], "land"),
				new C_Encounter(101, [63], [30], "land"),
				new C_Encounter(137, [63], [25], "land"),
				new C_Encounter(25, [63], [5], "land")
		]),
		33 : new C_Area("victory road floor 1", [
				new C_Encounter(115, [85], [25], "land"),
				new C_Encounter(53, [85], [15], "land"),
				new C_Encounter(31, [85], [15], "land"),
				new C_Encounter(101, [85], [10], "land"),
				new C_Encounter(125, [85], [10], "land"),
				new C_Encounter(76, [85], [10], "land"),
				new C_Encounter(34, [85], [6], "land"),
				new C_Encounter(36, [85], [5], "land"),
				new C_Encounter(130, [85], [4], "land")
		]),
		34 : new C_Area("victory road floor 2", [
				new C_Encounter(49, [86], [25], "land"),
				new C_Encounter(89, [86], [15], "land"),
				new C_Encounter(68, [85], [15], "land"),
				new C_Encounter(135, [85], [10], "land"),
				new C_Encounter(71, [86], [10], "land"),
				new C_Encounter(31, [85], [10], "land"),
				new C_Encounter(91, [85], [5], "land"),
				new C_Encounter(134, [85], [5], "land"),
				new C_Encounter(112, [85], [4], "land"),
				new C_Encounter(64, [85], [1], "land")
		]),
		35 : new C_Area("victory road floor 3", [
				new C_Encounter(49, [86], [25], "land"),
				new C_Encounter(97, [86], [15], "land"),
				new C_Encounter(122, [86], [15], "land"),
				new C_Encounter(53, [86], [10], "land"),
				new C_Encounter(34, [86], [10], "land"),
				new C_Encounter(51, [86], [10], "land"),
				new C_Encounter(36, [86], [5], "land"),
				new C_Encounter(93, [86], [5], "land"),
				new C_Encounter(115, [86], [4], "land"),
				new C_Encounter(64, [86], [1], "land")
		]),
		36 : new C_Area("pokemon tower floor 3", [
				new C_Encounter(92, [10,15,25,40,41,42,43,44,45,46], [4,5,15,15,10,10,10,5,25,1], "land")
		]),
		37 : new C_Area("pokemon tower floor 4", [
				new C_Encounter(92, [42,43,44,46], [15,10,15,25], "land"),
				new C_Encounter(93, [10,15,20,40], [1,4,5,25], "land")
		]),
		38 : new C_Area("pokemon tower floor 5", [
				new C_Encounter(93, [40,41,42,43,44,45,46,47,48], [4,5,5,10,10,10,15,40,1], "land")
		]),
		39 : new C_Area("pokemon tower floor 6", [
				new C_Encounter(104, [10,22,29,44], [4,5,1,90], "land")
		]),
		40 : new C_Area("pokemon tower floor 7", [
				new C_Encounter(105, [10,15,20,40,44,45,46,47,48], [1,4,5,5,10,35,10,15,15], "land")
		]),
		41 : new C_Area("seafoam islands floor 1", [
				new C_Encounter(87, [59], [25], "land"),
				new C_Encounter(117, [62], [15], "land"),
				new C_Encounter(62, [60], [15], "land"),
				new C_Encounter(99, [60], [10], "land"),
				new C_Encounter(55, [57,61], [10,5], "land"),
				new C_Encounter(9, [57], [10], "land"),
				new C_Encounter(42, [60], [5], "land"),
				new C_Encounter(67, [58], [4], "land"),
				new C_Encounter(105, [62], [1], "land")
		]),
		42 : new C_Area("seafoam islands floor 2", [
				new C_Encounter(57, [65], [25], "land"),
				new C_Encounter(87, [65], [20], "land"),
				new C_Encounter(99, [65], [15], "land"),
				new C_Encounter(62, [65], [10], "land"),
				new C_Encounter(9, [63], [10], "land"),
				new C_Encounter(105, [63], [15], "land"),
				new C_Encounter(75, [60], [4], "land"),
				new C_Encounter(132, [64], [1], "land")
		]),
		43 : new C_Area("seafoam islands floor 3", [
				new C_Encounter(9, [59], [25], "land"),
				new C_Encounter(95, [59], [15], "land"),
				new C_Encounter(55, [61], [15], "land"),
				new C_Encounter(62, [61], [10], "land"),
				new C_Encounter(75, [60], [10], "land"),
				new C_Encounter(89, [60], [10], "land"),
				new C_Encounter(57, [60], [5], "land"),
				new C_Encounter(106, [60], [5], "land"),
				new C_Encounter(130, [59], [4], "land"),
				new C_Encounter(68, [59], [1], "land")
		]),
		44 : new C_Area("seafoam islands floor 4", [
				new C_Encounter(73, [61], [25], "land"),
				new C_Encounter(115, [61], [15], "land"),
				new C_Encounter(42, [61], [15], "land"),
				new C_Encounter(130, [61], [10], "land"),
				new C_Encounter(9, [61], [10], "land"),
				new C_Encounter(55, [59], [10], "land"),
				new C_Encounter(62, [62], [5], "land"),
				new C_Encounter(87, [66], [5], "land"),
				new C_Encounter(105, [59], [4], "land"),
				new C_Encounter(75, [55], [1], "land")
		]),
		45 : new C_Area("seafoam islands floor 5", [
				new C_Encounter(115, [60], [25], "land"),
				new C_Encounter(62, [60], [16], "land"),
				new C_Encounter(55, [60], [20], "land"),
				new C_Encounter(42, [60], [10], "land"),
				new C_Encounter(87, [60], [14], "land"),
				new C_Encounter(9, [60], [10], "land"),
				new C_Encounter(68, [60], [5], "land")
		]),
		46 : new C_Area("mansion floor 1", [
				new C_Encounter(126, [60], [35], "land"),
				new C_Encounter(89, [60], [15], "land"),
				new C_Encounter(110, [58], [15], "land"),
				new C_Encounter(136, [59], [15], "land"),
				new C_Encounter(59, [58], [10], "land"),
				new C_Encounter(38, [59], [5], "land"),
				new C_Encounter(6, [60], [4], "land"),
				new C_Encounter(36, [58], [1], "land")
		]),
		47 : new C_Area("mansion floor 2", [
				new C_Encounter(126, [63], [25], "land"),
				new C_Encounter(110, [63], [25], "land"),
				new C_Encounter(136, [63], [15], "land"),
				new C_Encounter(89, [65], [10], "land"),
				new C_Encounter(59, [60], [10], "land"),
				new C_Encounter(6, [59], [5], "land"),
				new C_Encounter(38, [59], [5], "land"),
				new C_Encounter(140, [58], [4], "land"),
				new C_Encounter(138, [59], [1], "land")
		]),
		48 : new C_Area("mansion floor 3", [
				new C_Encounter(126, [64], [25], "land"),
				new C_Encounter(59, [62], [15], "land"),
				new C_Encounter(38, [62], [15], "land"),
				new C_Encounter(47, [64], [10], "land"),
				new C_Encounter(45, [63], [10], "land"),
				new C_Encounter(136, [61], [10], "land"),
				new C_Encounter(110, [65], [5], "land"),
				new C_Encounter(89, [65], [5], "land"),
				new C_Encounter(138, [51], [4], "land"),
				new C_Encounter(140, [51], [1], "land")
		]),
		49 : new C_Area("mansion floor 4", [
				new C_Encounter(20, [63], [25], "land"),
				new C_Encounter(110, [63], [15], "land"),
				new C_Encounter(49, [63], [15], "land"),
				new C_Encounter(101, [62], [10], "land"),
				new C_Encounter(89, [62], [10], "land"),
				new C_Encounter(47, [63], [10], "land"),
				new C_Encounter(93, [60], [5], "land"),
				new C_Encounter(141, [53], [5], "land"),
				new C_Encounter(139, [53], [5], "land")
		]),
		50 : new C_Area("diglett’s cave", [
				new C_Encounter(50, [15,16,17,18,19,20,21,22,27], [10,10,15,25,15,10,5,5,5], "land")
		]),
		51 : new C_Area("safari zone east", [
				new C_Encounter(137, [52], [25], "land"),
				new C_Encounter(55, [53], [15], "land"),
				new C_Encounter(115, [53], [15], "land"),
				new C_Encounter(31, [53], [10], "land"),
				new C_Encounter(34, [53], [10], "land"),
				new C_Encounter(45, [54], [10], "land"),
				new C_Encounter(112, [15], [5], "land"),
				new C_Encounter(71, [54], [5], "land"),
				new C_Encounter(76, [15,55], [1,4], "land")
		]),
		52 : new C_Area("safari zone north", [
				new C_Encounter(126, [15], [25], "land"),
				new C_Encounter(68, [15], [15], "land"),
				new C_Encounter(115, [15], [20], "land"),
				new C_Encounter(34, [55], [10], "land"),
				new C_Encounter(45, [55], [10], "land"),
				new C_Encounter(125, [15], [10], "land"),
				new C_Encounter(71, [55], [5], "land"),
				new C_Encounter(76, [55], [5], "land")
		]),
		53 : new C_Area("safari zone west", [
				new C_Encounter(147, [26,30], [25,15], "land"),
				new C_Encounter(31, [52], [15], "land"),
				new C_Encounter(34, [55], [10], "land"),
				new C_Encounter(115, [35], [10], "land"),
				new C_Encounter(125, [20], [10], "land"),
				new C_Encounter(126, [35], [5], "land"),
				new C_Encounter(112, [30], [5], "land"),
				new C_Encounter(122, [28], [4], "land"),
				new C_Encounter(36, [55], [1], "land")
		]),
		54 : new C_Area("safari zone center", [
				new C_Encounter(115, [52,54], [10,25], "land"),
				new C_Encounter(137, [55], [15], "land"),
				new C_Encounter(147, [26,30], [15,10], "land"),
				new C_Encounter(126, [54], [10], "land"),
				new C_Encounter(125, [54], [5], "land"),
				new C_Encounter(34, [52], [4], "land"),
				new C_Encounter(31, [52], [1], "land")
		]),
		55 : new C_Area("cerulean cave floor 1", [
				new C_Encounter(103, [100], [25], "land"),
				new C_Encounter(65, [100], [15], "land"),
				new C_Encounter(94, [100], [15], "land"),
				new C_Encounter(79, [100], [10], "land"),
				new C_Encounter(149, [100], [10], "land"),
				new C_Encounter(53, [100], [10], "land"),
				new C_Encounter(112, [100], [5], "land"),
				new C_Encounter(124, [100], [5], "land"),
				new C_Encounter(127, [100], [4], "land"),
				new C_Encounter(146, [100], [1], "land")
		]),
		56 : new C_Area("cerulean cave floor 2", [
				new C_Encounter(82, [100], [25], "land"),
				new C_Encounter(142, [100], [15], "land"),
				new C_Encounter(65, [100], [15], "land"),
				new C_Encounter(51, [100], [10], "land"),
				new C_Encounter(91, [100], [10], "land"),
				new C_Encounter(113, [100], [10], "land"),
				new C_Encounter(76, [100], [5], "land"),
				new C_Encounter(26, [100], [5], "land"),
				new C_Encounter(130, [100], [4], "land"),
				new C_Encounter(144, [100], [1], "land")
		]),
		57 : new C_Area("cerulean cave floor 3", [
				new C_Encounter(65, [100], [25], "land"),
				new C_Encounter(128, [100], [15], "land"),
				new C_Encounter(121, [100], [15], "land"),
				new C_Encounter(131, [100], [10], "land"),
				new C_Encounter(94, [100], [10], "land"),
				new C_Encounter(101, [100], [10], "land"),
				new C_Encounter(143, [100], [5], "land"),
				new C_Encounter(103, [100], [5], "land"),
				new C_Encounter(145, [100], [4], "land"),
				new C_Encounter(151, [100], [1], "land")
		])
	};
};
