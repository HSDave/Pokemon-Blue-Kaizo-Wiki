// lookup tables and constants

const attackTable = {
	'absorb' : 'grass',
	'acid' : 'poison',
	'acid armor' : 'poison',
	'agility' : 'psychic',
	'amnesia' : 'psychic',
	'aurora beam' : 'ice',
	'barrage' : 'normal',
	'barrier' : 'psychic',
	'bide' : 'normal',
	'bind' : 'normal',
	'bite' : 'normal',
	'blizzard' : 'ice',
	'body slam' : 'normal',
	'bone club' : 'ground',
	'bonemerang' : 'ground',
	'bubble' : 'water',
	'bubble beam' : 'water',
	'clamp' : 'water',
	'comet punch' : 'normal',
	'confuse ray' : 'ghost',
	'confusion' : 'psychic',
	'constrict' : 'normal',
	'conversion' : 'normal',
	'counter' : 'fighting',
	'crabhammer' : 'water',
	'cut' : 'normal',
	'defense curl' : 'normal',
	'dig' : 'ground',
	'disable' : 'normal',
	'dizzy punch' : 'normal',
	'double kick' : 'fighting',
	'double slap' : 'normal',
	'double team' : 'normal',
	'double-edge' : 'normal',
	'dragon rage' : 'dragon',
	'dream eater' : 'psychic',
	'drill peck' : 'flying',
	'earthquake' : 'ground',
	'egg bomb' : 'normal',
	'ember' : 'fire',
	'explosion' : 'normal',
	'fire blast' : 'fire',
	'fire punch' : 'fire',
	'fire spin' : 'fire',
	'fissure' : 'ground',
	'flamethrower' : 'fire',
	'flash' : 'normal',
	'fly' : 'flying',
	'focus energy' : 'normal',
	'fury attack' : 'normal',
	'fury swipes' : 'normal',
	'glare' : 'normal',
	'growl' : 'normal',
	'growth' : 'normal',
	'guillotine' : 'normal',
	'gust' : 'flying',
	'harden' : 'normal',
	'haze' : 'ice',
	'headbutt' : 'normal',
	'high jump kick' : 'fighting',
	'horn attack' : 'normal',
	'horn drill' : 'normal',
	'hydro pump' : 'water',
	'hyper beam' : 'normal',
	'hyper fang' : 'normal',
	'hypnosis' : 'psychic',
	'ice beam' : 'ice',
	'ice punch' : 'ice',
	'jump kick' : 'fighting',
	'karate chop' : 'fighting',
	'kinesis' : 'psychic',
	'leech life' : 'bug',
	'leech seed' : 'grass',
	'leer' : 'normal',
	'lick' : 'ghost',
	'light screen' : 'psychic',
	'lovely kiss' : 'normal',
	'low kick' : 'fighting',
	'meditate' : 'psychic',
	'mega drain' : 'grass',
	'mega kick' : 'normal',
	'mega punch' : 'normal',
	'metronome' : 'normal',
	'mimic' : 'normal',
	'minimize' : 'normal',
	'mirror move' : 'flying',
	'mist' : 'ice',
	'night shade' : 'ghost',
	'pay day' : 'normal',
	'peck' : 'flying',
	'petal dance' : 'grass',
	'pin missile' : 'bug',
	'poison gas' : 'poison',
	'poison powder' : 'poison',
	'poison sting' : 'poison',
	'pound' : 'normal',
	'psybeam' : 'psychic',
	'psychic' : 'psychic',
	'psywave' : 'psychic',
	'quick attack' : 'normal',
	'rage' : 'normal',
	'razor leaf' : 'grass',
	'razor wind' : 'normal',
	'recover' : 'normal',
	'reflect' : 'psychic',
	'rest' : 'psychic',
	'roar' : 'normal',
	'rock slide' : 'rock',
	'rock throw' : 'rock',
	'rolling kick' : 'fighting',
	'sand attack' : 'ground',
	'scratch' : 'normal',
	'screech' : 'normal',
	'seismic toss' : 'fighting',
	'self-destruct' : 'normal',
	'sharpen' : 'normal',
	'sing' : 'normal',
	'skull bash' : 'normal',
	'sky attack' : 'flying',
	'slam' : 'normal',
	'slash' : 'normal',
	'sleep powder' : 'grass',
	'sludge' : 'poison',
	'smog' : 'poison',
	'smokescreen' : 'normal',
	'soft-boiled' : 'normal',
	'solar beam' : 'grass',
	'sonic boom' : 'normal',
	'spike cannon' : 'normal',
	'splash' : 'normal',
	'spore' : 'grass',
	'stomp' : 'normal',
	'strength' : 'normal',
	'string shot' : 'bug',
	'struggle' : 'normal',
	'stun spore' : 'grass',
	'submission' : 'fighting',
	'substitute' : 'normal',
	'super fang' : 'normal',
	'supersonic' : 'normal',
	'surf' : 'water',
	'swift' : 'normal',
	'swords dance' : 'normal',
	'tackle' : 'normal',
	'tail whip' : 'normal',
	'take down' : 'normal',
	'teleport' : 'psychic',
	'thrash' : 'normal',
	'thunder' : 'electric',
	'thunder punch' : 'electric',
	'thunder shock' : 'electric',
	'thunder wave' : 'electric',
	'thunderbolt' : 'electric',
	'toxic' : 'poison',
	'transform' : 'normal',
	'tri attack' : 'normal',
	'twineedle' : 'bug',
	'vine whip' : 'grass',
	'vise grip' : 'normal',
	'water gun' : 'water',
	'waterfall' : 'water',
	'whirlwind' : 'normal',
	'wing attack' : 'flying',
	'withdraw' : 'water',
	'wrap' : 'normal'
};
const attackSelect = (attack) => attackTable[attack] || '???';

const encounterTable = {
	"route 1" : [
		{pokemon:"pidgey", lvl:[3], rate:[25], note:"land"},
		{pokemon:"weedle", lvl:[3], rate:[15], note:"land"},
		{pokemon:"caterpie", lvl:[3], rate:[15], note:"land"},
		{pokemon:"rattata", lvl:[3], rate:[10], note:"land"},
		{pokemon:"ekans", lvl:[3], rate:[10], note:"land"},
		{pokemon:"sandshrew", lvl:[3], rate:[10], note:"land"},
		{pokemon:"spearow", lvl:[3], rate:[5], note:"land"},
		{pokemon:"nidoranf", lvl:[4], rate:[5], note:"land"},
		{pokemon:"nidoranm", lvl:[4], rate:[4], note:"land"},
		{pokemon:"pikachu", lvl:[5], rate:[1], note:"land"}
	],
	"route 2" : [
		{pokemon:"cubone", lvl:[5], rate:[25], note:"land"},
		{pokemon:"sandshrew", lvl:[5], rate:[15], note:"land"},
		{pokemon:"ekans", lvl:[5], rate:[15], note:"land"},
		{pokemon:"vulpix", lvl:[5], rate:[10], note:"land"},
		{pokemon:"diglett", lvl:[5], rate:[10], note:"land"},
		{pokemon:"mankey", lvl:[5], rate:[10], note:"land"},
		{pokemon:"growlithe", lvl:[5], rate:[5], note:"land"},
		{pokemon:"jigglypuff", lvl:[5], rate:[5], note:"land"},
		{pokemon:"psyduck", lvl:[5], rate:[4], note:"land"},
		{pokemon:"meowth", lvl:[5], rate:[1], note:"land"}
	],
	"route 3" : [
		{pokemon:"jigglypuff", lvl:[12], rate:[25], note:"land"},
		{pokemon:"ekans", lvl:[12], rate:[15], note:"land"},
		{pokemon:"pidgey", lvl:[12], rate:[15], note:"land"},
		{pokemon:"spearow", lvl:[12], rate:[10], note:"land"},
		{pokemon:"poliwag", lvl:[12], rate:[10], note:"land"},
		{pokemon:"psyduck", lvl:[12], rate:[10], note:"land"},
		{pokemon:"geodude", lvl:[12], rate:[5], note:"land"},
		{pokemon:"machop", lvl:[12], rate:[5], note:"land"},
		{pokemon:"ponyta", lvl:[12], rate:[4], note:"land"},
		{pokemon:"rhyhorn", lvl:[12], rate:[1], note:"land"}
	],
	"route 4" : [
		{pokemon:"voltorb", lvl:[15], rate:[25], note:"land"},
		{pokemon:"magnemite", lvl:[15], rate:[15], note:"land"},
		{pokemon:"pikachu", lvl:[15], rate:[15], note:"land"},
		{pokemon:"oddish", lvl:[15], rate:[10], note:"land"},
		{pokemon:"bellsprout", lvl:[15], rate:[10], note:"land"},
		{pokemon:"seel", lvl:[15], rate:[10], note:"land"},
		{pokemon:"krabby", lvl:[15], rate:[5], note:"land"},
		{pokemon:"growlithe", lvl:[15], rate:[5], note:"land"},
		{pokemon:"psyduck", lvl:[15], rate:[4], note:"land"},
		{pokemon:"grimer", lvl:[15], rate:[1], note:"land"}
	],
	"route 5" : [
		{pokemon:"meowth", lvl:[23], rate:[25], note:"land"},
		{pokemon:"ditto", lvl:[23], rate:[15], note:"land"},
		{pokemon:"spearow", lvl:[23], rate:[15], note:"land"},
		{pokemon:"pidgeotto", lvl:[23], rate:[10], note:"land"},
		{pokemon:"paras", lvl:[23], rate:[10], note:"land"},
		{pokemon:"doduo", lvl:[23], rate:[10], note:"land"},
		{pokemon:"ponyta", lvl:[23], rate:[5], note:"land"},
		{pokemon:"lickitung", lvl:[22], rate:[5], note:"land"},
		{pokemon:"tangela", lvl:[22], rate:[4], note:"land"},
		{pokemon:"sandshrew", lvl:[23], rate:[1], note:"land"}
	],
	"route 6" : [
		{pokemon:"pikachu", lvl:[23], rate:[25], note:"land"},
		{pokemon:"nidorina", lvl:[23], rate:[15], note:"land"},
		{pokemon:"nidorino", lvl:[23], rate:[15], note:"land"},
		{pokemon:"hitmonchan", lvl:[23], rate:[10], note:"land"},
		{pokemon:"butterfree", lvl:[23], rate:[10], note:"land"},
		{pokemon:"beedrill", lvl:[23], rate:[10], note:"land"},
		{pokemon:"hitmonlee", lvl:[23], rate:[5], note:"land"},
		{pokemon:"pidgeotto", lvl:[23], rate:[5], note:"land"},
		{pokemon:"lickitung", lvl:[22], rate:[4], note:"land"},
		{pokemon:"ditto", lvl:[23], rate:[1], note:"land"}
	],
	"route 7" : [
		{pokemon:"pidgeotto", lvl:[44], rate:[25], note:"land"},
		{pokemon:"nidorina", lvl:[44], rate:[15], note:"land"},
		{pokemon:"nidorino", lvl:[44], rate:[15], note:"land"},
		{pokemon:"ivysaur", lvl:[44], rate:[10], note:"land"},
		{pokemon:"charmeleon", lvl:[44], rate:[10], note:"land"},
		{pokemon:"wartortle", lvl:[44], rate:[10], note:"land"},
		{pokemon:"doduo", lvl:[44], rate:[5], note:"land"},
		{pokemon:"machop", lvl:[44], rate:[5], note:"land"},
		{pokemon:"magnemite", lvl:[19], rate:[4], note:"land"},
		{pokemon:"ditto", lvl:[19], rate:[1], note:"land"}
	],
	"route 8" : [
		{pokemon:"growlithe", lvl:[40], rate:[25], note:"land"},
		{pokemon:"vulpix", lvl:[40], rate:[15], note:"land"},
		{pokemon:"ponyta", lvl:[40], rate:[15], note:"land"},
		{pokemon:"jigglypuff", lvl:[40], rate:[10], note:"land"},
		{pokemon:"grimer", lvl:[40], rate:[10], note:"land"},
		{pokemon:"koffing", lvl:[40], rate:[10], note:"land"},
		{pokemon:"lickitung", lvl:[40], rate:[5], note:"land"},
		{pokemon:"scyther", lvl:[40], rate:[5], note:"land"},
		{pokemon:"psyduck", lvl:[40], rate:[4], note:"land"},
		{pokemon:"poliwhirl", lvl:[40], rate:[1], note:"land"}
	],
	"route 9" : [
		{pokemon:"magnemite", lvl:[30], rate:[25], note:"land"},
		{pokemon:"butterfree", lvl:[30], rate:[15], note:"land"},
		{pokemon:"beedrill", lvl:[30], rate:[15], note:"land"},
		{pokemon:"scyther", lvl:[30], rate:[10], note:"land"},
		{pokemon:"gloom", lvl:[30], rate:[10], note:"land"},
		{pokemon:"weepinbell", lvl:[30], rate:[10], note:"land"},
		{pokemon:"tangela", lvl:[30], rate:[5], note:"land"},
		{pokemon:"lickitung", lvl:[30], rate:[5], note:"land"},
		{pokemon:"ponyta", lvl:[30], rate:[4], note:"land"},
		{pokemon:"poliwhirl", lvl:[30], rate:[1], note:"land"}
	],
	"route 10" : [
		{pokemon:"voltorb", lvl:[35], rate:[25], note:"land"},
		{pokemon:"magnemite", lvl:[35], rate:[15], note:"land"},
		{pokemon:"venonat", lvl:[35], rate:[15], note:"land"},
		{pokemon:"paras", lvl:[35], rate:[10], note:"land"},
		{pokemon:"ekans", lvl:[35], rate:[10], note:"land"},
		{pokemon:"sandshrew", lvl:[35], rate:[10], note:"land"},
		{pokemon:"koffing", lvl:[35], rate:[5], note:"land"},
		{pokemon:"grimer", lvl:[35], rate:[5], note:"land"},
		{pokemon:"psyduck", lvl:[35], rate:[4], note:"land"},
		{pokemon:"krabby", lvl:[35], rate:[1], note:"land"}
	],
	"route 11" : [
		{pokemon:"cubone", lvl:[25], rate:[25], note:"land"},
		{pokemon:"farfetch’d", lvl:[25], rate:[15], note:"land"},
		{pokemon:"doduo", lvl:[25], rate:[15], note:"land"},
		{pokemon:"magnemite", lvl:[25], rate:[10], note:"land"},
		{pokemon:"voltorb", lvl:[25], rate:[10], note:"land"},
		{pokemon:"sandshrew", lvl:[25], rate:[10], note:"land"},
		{pokemon:"vulpix", lvl:[25], rate:[5], note:"land"},
		{pokemon:"growlithe", lvl:[25], rate:[5], note:"land"},
		{pokemon:"seel", lvl:[25], rate:[5], note:"land"}
	],
	"route 12" : [
		{pokemon:"farfetch’d", lvl:[50], rate:[25], note:"land"},
		{pokemon:"tangela", lvl:[50], rate:[15], note:"land"},
		{pokemon:"lickitung", lvl:[50], rate:[15], note:"land"},
		{pokemon:"gloom", lvl:[50], rate:[10], note:"land"},
		{pokemon:"weepinbell", lvl:[50], rate:[10], note:"land"},
		{pokemon:"parasect", lvl:[50], rate:[10], note:"land"},
		{pokemon:"poliwhirl", lvl:[50], rate:[5], note:"land"},
		{pokemon:"fearow", lvl:[50], rate:[5], note:"land"},
		{pokemon:"raticate", lvl:[50], rate:[4], note:"land"},
		{pokemon:"flareon", lvl:[50], rate:[1], note:"land"}
	],
	"route 13" : [
		{pokemon:"scyther", lvl:[50], rate:[25], note:"land"},
		{pokemon:"arbok", lvl:[50], rate:[15], note:"land"},
		{pokemon:"sandslash", lvl:[50], rate:[15], note:"land"},
		{pokemon:"marowak", lvl:[50], rate:[14], note:"land"},
		{pokemon:"raticate", lvl:[50], rate:[10], note:"land"},
		{pokemon:"fearow", lvl:[50], rate:[10], note:"land"},
		{pokemon:"tangela", lvl:[50], rate:[5], note:"land"},
		{pokemon:"lickitung", lvl:[50], rate:[5], note:"land"},
		{pokemon:"krabby", lvl:[50], rate:[1], note:"land"}
	],
	"route 14" : [
		{pokemon:"machoke", lvl:[50], rate:[25], note:"land"},
		{pokemon:"ponyta", lvl:[50], rate:[20], note:"land"},
		{pokemon:"parasect", lvl:[50], rate:[15], note:"land"},
		{pokemon:"scyther", lvl:[51], rate:[10], note:"land"},
		{pokemon:"psyduck", lvl:[51], rate:[10], note:"land"},
		{pokemon:"wigglytuff", lvl:[50], rate:[10], note:"land"},
		{pokemon:"marowak", lvl:[50], rate:[5], note:"land"},
		{pokemon:"dodrio", lvl:[50], rate:[4], note:"land"},
		{pokemon:"pidgeot", lvl:[50], rate:[1], note:"land"}
	],
	"route 15" : [
		{pokemon:"pikachu", lvl:[54], rate:[25], note:"land"},
		{pokemon:"ponyta", lvl:[54], rate:[15], note:"land"},
		{pokemon:"arbok", lvl:[54], rate:[20], note:"land"},
		{pokemon:"pidgeot", lvl:[54], rate:[10], note:"land"},
		{pokemon:"parasect", lvl:[54], rate:[10], note:"land"},
		{pokemon:"sandslash", lvl:[54], rate:[10], note:"land"},
		{pokemon:"scyther", lvl:[54], rate:[5], note:"land"},
		{pokemon:"primeape", lvl:[54], rate:[4], note:"land"},
		{pokemon:"venemoth", lvl:[54], rate:[1], note:"land"}
	],
	"route 16" : [
		{pokemon:"doduo", lvl:[56], rate:[25], note:"land"},
		{pokemon:"ponyta", lvl:[56], rate:[15], note:"land"},
		{pokemon:"rhyhorn", lvl:[56], rate:[15], note:"land"},
		{pokemon:"nidorina", lvl:[56], rate:[10], note:"land"},
		{pokemon:"nidorino", lvl:[56], rate:[10], note:"land"},
		{pokemon:"sandslash", lvl:[56], rate:[10], note:"land"},
		{pokemon:"gloom", lvl:[56], rate:[5], note:"land"},
		{pokemon:"weepinbell", lvl:[56], rate:[5], note:"land"},
		{pokemon:"raticate", lvl:[56], rate:[4], note:"land"},
		{pokemon:"wigglytuff", lvl:[56], rate:[1], note:"land"}
	],
	"route 17" : [
		{pokemon:"voltorb", lvl:[56], rate:[25], note:"land"},
		{pokemon:"koffing", lvl:[56], rate:[15], note:"land"},
		{pokemon:"grimer", lvl:[56], rate:[15], note:"land"},
		{pokemon:"growlithe", lvl:[56], rate:[10], note:"land"},
		{pokemon:"graveler", lvl:[56], rate:[10], note:"land"},
		{pokemon:"fearow", lvl:[56], rate:[10], note:"land"},
		{pokemon:"weezing", lvl:[56], rate:[5], note:"land"},
		{pokemon:"muk", lvl:[56], rate:[5], note:"land"},
		{pokemon:"electrode", lvl:[56], rate:[4], note:"land"},
		{pokemon:"dodrio", lvl:[56], rate:[1], note:"land"}
	],
	"route 18" : [
		{pokemon:"weezing", lvl:[56], rate:[25], note:"land"},
		{pokemon:"muk", lvl:[56], rate:[15], note:"land"},
		{pokemon:"raticate", lvl:[56], rate:[15], note:"land"},
		{pokemon:"pidgeot", lvl:[56], rate:[10], note:"land"},
		{pokemon:"fearow", lvl:[56], rate:[10], note:"land"},
		{pokemon:"tangela", lvl:[56], rate:[10], note:"land"},
		{pokemon:"primeape", lvl:[56], rate:[5], note:"land"},
		{pokemon:"dodrio", lvl:[56], rate:[5], note:"land"},
		{pokemon:"magnemite", lvl:[56], rate:[4], note:"land"},
		{pokemon:"golduck", lvl:[56], rate:[1], note:"land"}
	],
	"route 19" : [
		{pokemon:"tentacool", lvl:[63], rate:[25], note:"water"},
		{pokemon:"magikarp", lvl:[100], rate:[15], note:"water"},
		{pokemon:"seel", lvl:[63], rate:[25], note:"water"},
		{pokemon:"horsea", lvl:[63], rate:[10], note:"water"},
		{pokemon:"goldeen", lvl:[63], rate:[10], note:"water"},
		{pokemon:"poliwhirl", lvl:[63], rate:[10], note:"water"},
		{pokemon:"wartortle", lvl:[63], rate:[4], note:"water"},
		{pokemon:"tentacruel", lvl:[63], rate:[1], note:"water"}
	],
	"route 20" : [
		{pokemon:"tentacool", lvl:[63], rate:[25], note:"water"},
		{pokemon:"magikarp", lvl:[100], rate:[15], note:"water"},
		{pokemon:"seel", lvl:[63], rate:[15], note:"water"},
		{pokemon:"horsea", lvl:[63], rate:[10], note:"water"},
		{pokemon:"goldeen", lvl:[63], rate:[10], note:"water"},
		{pokemon:"poliwhirl", lvl:[63], rate:[10], note:"water"},
		{pokemon:"seel", lvl:[63], rate:[5], note:"water"},
		{pokemon:"seel", lvl:[63], rate:[5], note:"water"},
		{pokemon:"wartortle", lvl:[63], rate:[4], note:"water"},
		{pokemon:"tentacruel", lvl:[63], rate:[1], note:"water"}
	],
	"route 21" : [
		{pokemon:"pidgeot", lvl:[72,73], rate:[25,10], note:"land"},
		{pokemon:"kangaskhan", lvl:[70], rate:[30], note:"land"},
		{pokemon:"tangela", lvl:[70], rate:[10], note:"land"},
		{pokemon:"arbok", lvl:[72], rate:[10], note:"land"},
		{pokemon:"sandslash", lvl:[74], rate:[5], note:"land"},
		{pokemon:"dodrio", lvl:[74], rate:[5], note:"land"},
		{pokemon:"vileplume", lvl:[74], rate:[4], note:"land"},
		{pokemon:"victreebell", lvl:[74], rate:[1], note:"land"},
		{pokemon:"seel", lvl:[70], rate:[40], note:"water"},
		{pokemon:"tentacool", lvl:[70], rate:[15], note:"water"},
		{pokemon:"poliwhirl", lvl:[70], rate:[10], note:"water"},
		{pokemon:"wartortle", lvl:[70], rate:[10], note:"water"},
		{pokemon:"golduck", lvl:[70], rate:[10], note:"water"},
		{pokemon:"goldeen", lvl:[70], rate:[5], note:"water"},
		{pokemon:"seadra", lvl:[70], rate:[5], note:"water"},
		{pokemon:"tentacruel", lvl:[70], rate:[4], note:"water"},
		{pokemon:"dewgong", lvl:[70], rate:[1], note:"water"}
	],
	"route 22" : [
		{pokemon:"cubone", lvl:[5], rate:[25], note:"land"},
		{pokemon:"nidoranf", lvl:[4], rate:[15], note:"land"},
		{pokemon:"nidoranm", lvl:[4], rate:[15], note:"land"},
		{pokemon:"bulbasaur", lvl:[5], rate:[15], note:"land"},
		{pokemon:"charmander", lvl:[5], rate:[15], note:"land"},
		{pokemon:"squirtle", lvl:[5], rate:[14], note:"land"},
		{pokemon:"ditto", lvl:[5], rate:[1], note:"land"}
	],
	"route 23" : [
		{pokemon:"jolteon", lvl:[81], rate:[25], note:"land"},
		{pokemon:"vaporeon", lvl:[81], rate:[15], note:"land"},
		{pokemon:"flareon", lvl:[81], rate:[15], note:"land"},
		{pokemon:"dugtrio", lvl:[81], rate:[10], note:"land"},
		{pokemon:"sandslash", lvl:[80], rate:[10], note:"land"},
		{pokemon:"exeggcute", lvl:[72], rate:[10], note:"land"},
		{pokemon:"dodrio", lvl:[80], rate:[5], note:"land"},
		{pokemon:"drowzee", lvl:[73], rate:[5], note:"land"},
		{pokemon:"slowbro", lvl:[72], rate:[4], note:"land"},
		{pokemon:"abra", lvl:[73], rate:[1], note:"land"}
	],
	"route 24" : [
		{pokemon:"farfetch’d", lvl:[19], rate:[25], note:"land"},
		{pokemon:"pidgeotto", lvl:[19], rate:[15], note:"land"},
		{pokemon:"doduo", lvl:[19], rate:[15], note:"land"},
		{pokemon:"krabby", lvl:[19], rate:[10], note:"land"},
		{pokemon:"bellsprout", lvl:[19], rate:[10], note:"land"},
		{pokemon:"oddish", lvl:[19], rate:[10], note:"land"},
		{pokemon:"ponyta", lvl:[19], rate:[5], note:"land"},
		{pokemon:"vulpix", lvl:[19], rate:[5], note:"land"},
		{pokemon:"growlithe", lvl:[19], rate:[4], note:"land"},
		{pokemon:"poliwhirl", lvl:[14], rate:[1], note:"land"}
	],
	"route 25" : [
		{pokemon:"mankey", lvl:[20], rate:[25], note:"land"},
		{pokemon:"butterfree", lvl:[20], rate:[15], note:"land"},
		{pokemon:"beedrill", lvl:[20], rate:[15], note:"land"},
		{pokemon:"krabby", lvl:[20], rate:[10], note:"land"},
		{pokemon:"psyduck", lvl:[20], rate:[10], note:"land"},
		{pokemon:"poliwag", lvl:[20], rate:[10], note:"land"},
		{pokemon:"seel", lvl:[20], rate:[5], note:"land"},
		{pokemon:"nidoranf", lvl:[20], rate:[5], note:"land"},
		{pokemon:"nidoranm", lvl:[20], rate:[4], note:"land"},
		{pokemon:"mr. mime", lvl:[12], rate:[1], note:"land"}
	],
	"viridian forest" : [
		{pokemon:"pikachu", lvl:[3], rate:[25], note:"land"},
		{pokemon:"metapod", lvl:[5], rate:[15], note:"land"},
		{pokemon:"kakuna", lvl:[5], rate:[15], note:"land"},
		{pokemon:"paras", lvl:[5], rate:[10], note:"land"},
		{pokemon:"venonat", lvl:[5], rate:[10], note:"land"},
		{pokemon:"pidgey", lvl:[6], rate:[10], note:"land"},
		{pokemon:"oddish", lvl:[5], rate:[5], note:"land"},
		{pokemon:"bellsprout", lvl:[5], rate:[5], note:"land"},
		{pokemon:"poliwag", lvl:[5], rate:[4], note:"land"},
		{pokemon:"ponyta", lvl:[9], rate:[1], note:"land"}
	],
	"mt. moon cate floor 1" : [
		{pokemon:"clefairy", lvl:[16], rate:[25], note:"land"},
		{pokemon:"machop", lvl:[16], rate:[15], note:"land"},
		{pokemon:"diglett", lvl:[16], rate:[15], note:"land"},
		{pokemon:"zubat", lvl:[16], rate:[10], note:"land"},
		{pokemon:"paras", lvl:[16], rate:[10], note:"land"},
		{pokemon:"geodude", lvl:[16], rate:[10], note:"land"},
		{pokemon:"cubone", lvl:[16], rate:[5], note:"land"},
		{pokemon:"onix", lvl:[16], rate:[5], note:"land"},
		{pokemon:"rhyhorn", lvl:[16], rate:[4], note:"land"},
		{pokemon:"seel", lvl:[16], rate:[1], note:"land"}
	],
	"mt. moon cave floor 2" : [
		{pokemon:"voltorb", lvl:[16], rate:[25], note:"land"},
		{pokemon:"grimer", lvl:[16], rate:[15], note:"land"},
		{pokemon:"paras", lvl:[16], rate:[15], note:"land"},
		{pokemon:"rhyhorn", lvl:[16], rate:[10], note:"land"},
		{pokemon:"koffing", lvl:[16], rate:[11], note:"land"},
		{pokemon:"diglett", lvl:[16], rate:[10], note:"land"},
		{pokemon:"clefairy", lvl:[16], rate:[5], note:"land"},
		{pokemon:"geodude", lvl:[16], rate:[5], note:"land"},
		{pokemon:"onix", lvl:[16], rate:[4], note:"land"}
	],
	"mt. moon cave floor 3" : [
		{pokemon:"koffing", lvl:[17], rate:[25], note:"land"},
		{pokemon:"voltorb", lvl:[17], rate:[15], note:"land"},
		{pokemon:"clefairy", lvl:[17], rate:[15], note:"land"},
		{pokemon:"rhyhorn", lvl:[17], rate:[10], note:"land"},
		{pokemon:"diglett", lvl:[17], rate:[10], note:"land"},
		{pokemon:"grimer", lvl:[17], rate:[10], note:"land"},
		{pokemon:"sandshrew", lvl:[17], rate:[5], note:"land"},
		{pokemon:"machop", lvl:[17], rate:[5], note:"land"},
		{pokemon:"paras", lvl:[17], rate:[5], note:"land"}
	],
	"rock tunnel floor 1" : [
		{pokemon:"onix", lvl:[24], rate:[25], note:"land"},
		{pokemon:"koffing", lvl:[28], rate:[15], note:"land"},
		{pokemon:"voltorb", lvl:[27], rate:[15], note:"land"},
		{pokemon:"machop", lvl:[20], rate:[10], note:"land"},
		{pokemon:"golbat", lvl:[20], rate:[10], note:"land"},
		{pokemon:"grimer", lvl:[20], rate:[10], note:"land"},
		{pokemon:"diglett", lvl:[27], rate:[5], note:"land"},
		{pokemon:"geodude", lvl:[23], rate:[5], note:"land"},
		{pokemon:"lickitung", lvl:[26], rate:[4], note:"land"},
		{pokemon:"graveler", lvl:[26], rate:[1], note:"land"}
	],
	"rock tunnel floor 2" : [
		{pokemon:"voltorb", lvl:[26,27], rate:[25,15], note:"land"},
		{pokemon:"magnemite", lvl:[26], rate:[15], note:"land"},
		{pokemon:"golbat", lvl:[25,26], rate:[10,4], note:"land"},
		{pokemon:"gloom", lvl:[25], rate:[10], note:"land"},
		{pokemon:"onix", lvl:[24], rate:[10], note:"land"},
		{pokemon:"graveler", lvl:[25], rate:[5], note:"land"},
		{pokemon:"machoke", lvl:[25], rate:[5], note:"land"},
		{pokemon:"primeape", lvl:[24], rate:[1], note:"land"}
	],
	"power plant" : [
		{pokemon:"electabuzz", lvl:[63], rate:[40], note:"land"},
		{pokemon:"electrode", lvl:[63], rate:[30], note:"land"},
		{pokemon:"porygon", lvl:[63], rate:[25], note:"land"},
		{pokemon:"pikachu", lvl:[63], rate:[5], note:"land"}
	],
	"victory road floor 1" : [
		{pokemon:"kangaskhan", lvl:[85], rate:[25], note:"land"},
		{pokemon:"persian", lvl:[85], rate:[15], note:"land"},
		{pokemon:"nidoqueen", lvl:[85], rate:[15], note:"land"},
		{pokemon:"electrode", lvl:[85], rate:[10], note:"land"},
		{pokemon:"electabuzz", lvl:[85], rate:[10], note:"land"},
		{pokemon:"golem", lvl:[85], rate:[10], note:"land"},
		{pokemon:"nidoking", lvl:[85], rate:[6], note:"land"},
		{pokemon:"clefable", lvl:[85], rate:[5], note:"land"},
		{pokemon:"gyarados", lvl:[85], rate:[4], note:"land"}
	],
	"victory road floor 2" : [
		{pokemon:"venomoth", lvl:[86], rate:[25], note:"land"},
		{pokemon:"muk", lvl:[86], rate:[15], note:"land"},
		{pokemon:"machamp", lvl:[85], rate:[15], note:"land"},
		{pokemon:"jolteon", lvl:[85], rate:[10], note:"land"},
		{pokemon:"victreebell", lvl:[86], rate:[10], note:"land"},
		{pokemon:"nidoqueen", lvl:[85], rate:[10], note:"land"},
		{pokemon:"cloyster", lvl:[85], rate:[5], note:"land"},
		{pokemon:"vaporeon", lvl:[85], rate:[5], note:"land"},
		{pokemon:"rhydon", lvl:[85], rate:[4], note:"land"},
		{pokemon:"kadabra", lvl:[85], rate:[1], note:"land"}
	],
	"victory road floor 3" : [
		{pokemon:"venomoth", lvl:[86], rate:[25], note:"land"},
		{pokemon:"hypno", lvl:[86], rate:[15], note:"land"},
		{pokemon:"mr. mime", lvl:[86], rate:[15], note:"land"},
		{pokemon:"persian", lvl:[86], rate:[10], note:"land"},
		{pokemon:"nidoking", lvl:[86], rate:[10], note:"land"},
		{pokemon:"dugtrio", lvl:[86], rate:[10], note:"land"},
		{pokemon:"clefable", lvl:[86], rate:[5], note:"land"},
		{pokemon:"haunter", lvl:[86], rate:[5], note:"land"},
		{pokemon:"kangaskhan", lvl:[86], rate:[4], note:"land"},
		{pokemon:"kadabra", lvl:[86], rate:[1], note:"land"}
	],
	"pokemon tower floor 3" : [
		{pokemon:"gastly", lvl:[10,15,25,40,41,42,43,44,45,46], rate:[4,5,15,15,10,10,10,5,25,1], note:"land"}
	],
	"pokemon tower floor 4" : [
		{pokemon:"gastly", lvl:[42,43,44,46], rate:[15,10,15,25], note:"land"},
		{pokemon:"haunter", lvl:[10,15,20,40], rate:[1,4,5,25], note:"land"}
	],
	"pokemon tower floor 5" : [
		{pokemon:"haunter", lvl:[40,41,42,43,44,45,46,47,48], rate:[4,5,5,10,10,10,15,40,1], note:"land"}
	],
	"pokemon tower floor 6" : [
		{pokemon:"cubone", lvl:[10,22,29,44], rate:[4,5,1,90], note:"land"}
	],
	"pokemon tower floor 7" : [
		{pokemon:"marowak", lvl:[10,15,20,40,44,45,46,47,48], rate:[1,4,5,5,10,35,10,15,15], note:"land"}
	],
	"seafoam islands floor 1" : [
		{pokemon:"dewgong", lvl:[59], rate:[25], note:"land"},
		{pokemon:"seadra", lvl:[62], rate:[15], note:"land"},
		{pokemon:"poliwrath", lvl:[60], rate:[15], note:"land"},
		{pokemon:"kingler", lvl:[60], rate:[10], note:"land"},
		{pokemon:"golduck", lvl:[57,61], rate:[10,5], note:"land"},
		{pokemon:"blastoise", lvl:[57], rate:[10], note:"land"},
		{pokemon:"golbat", lvl:[60], rate:[5], note:"land"},
		{pokemon:"machoke", lvl:[58], rate:[4], note:"land"},
		{pokemon:"marowak", lvl:[62], rate:[1], note:"land"}
	],
	"seafoam islands floor 2" : [
		{pokemon:"primeape", lvl:[65], rate:[25], note:"land"},
		{pokemon:"dewgong", lvl:[65], rate:[20], note:"land"},
		{pokemon:"kingler", lvl:[65], rate:[15], note:"land"},
		{pokemon:"poliwrath", lvl:[65], rate:[10], note:"land"},
		{pokemon:"blastoise", lvl:[63], rate:[10], note:"land"},
		{pokemon:"marowak", lvl:[63], rate:[15], note:"land"},
		{pokemon:"graveler", lvl:[60], rate:[4], note:"land"},
		{pokemon:"ditto", lvl:[64], rate:[1], note:"land"}
	],
	"seafoam islands floor 3" : [
		{pokemon:"blastoise", lvl:[59], rate:[25], note:"land"},
		{pokemon:"onix", lvl:[59], rate:[15], note:"land"},
		{pokemon:"golduck", lvl:[61], rate:[15], note:"land"},
		{pokemon:"poliwrath", lvl:[61], rate:[10], note:"land"},
		{pokemon:"graveler", lvl:[60], rate:[10], note:"land"},
		{pokemon:"muk", lvl:[60], rate:[10], note:"land"},
		{pokemon:"primeape", lvl:[60], rate:[5], note:"land"},
		{pokemon:"hitmonlee", lvl:[60], rate:[5], note:"land"},
		{pokemon:"gyarados", lvl:[59], rate:[4], note:"land"},
		{pokemon:"machamp", lvl:[59], rate:[1], note:"land"}
	],
	"seafoam islands floor 4" : [
		{pokemon:"tentacruel", lvl:[61], rate:[25], note:"land"},
		{pokemon:"kangaskhan", lvl:[61], rate:[15], note:"land"},
		{pokemon:"golbat", lvl:[61], rate:[15], note:"land"},
		{pokemon:"gyarados", lvl:[61], rate:[10], note:"land"},
		{pokemon:"blastoise", lvl:[61], rate:[10], note:"land"},
		{pokemon:"golduck", lvl:[59], rate:[10], note:"land"},
		{pokemon:"poliwrath", lvl:[62], rate:[5], note:"land"},
		{pokemon:"dewgong", lvl:[66], rate:[5], note:"land"},
		{pokemon:"marowak", lvl:[59], rate:[4], note:"land"},
		{pokemon:"graveler", lvl:[55], rate:[1], note:"land"}
	],
	"seafoam islands floor 5" : [
		{pokemon:"kangaskhan", lvl:[60], rate:[25], note:"land"},
		{pokemon:"poliwrath", lvl:[60], rate:[16], note:"land"},
		{pokemon:"golduck", lvl:[60], rate:[20], note:"land"},
		{pokemon:"golbat", lvl:[60], rate:[10], note:"land"},
		{pokemon:"dewgong", lvl:[60], rate:[14], note:"land"},
		{pokemon:"blastoise", lvl:[60], rate:[10], note:"land"},
		{pokemon:"machamp", lvl:[60], rate:[5], note:"land"}
	],
	"mansion floor 1" : [
		{pokemon:"magmar", lvl:[60], rate:[35], note:"land"},
		{pokemon:"muk", lvl:[60], rate:[15], note:"land"},
		{pokemon:"weezing", lvl:[58], rate:[15], note:"land"},
		{pokemon:"flareon", lvl:[59], rate:[15], note:"land"},
		{pokemon:"arcanine", lvl:[58], rate:[10], note:"land"},
		{pokemon:"ninetails", lvl:[59], rate:[5], note:"land"},
		{pokemon:"charizard", lvl:[60], rate:[4], note:"land"},
		{pokemon:"clefable", lvl:[58], rate:[1], note:"land"}
	],
	"mansion floor 2" : [
		{pokemon:"magmar", lvl:[63], rate:[25], note:"land"},
		{pokemon:"weezing", lvl:[63], rate:[25], note:"land"},
		{pokemon:"flareon", lvl:[63], rate:[15], note:"land"},
		{pokemon:"muk", lvl:[65], rate:[10], note:"land"},
		{pokemon:"arcanine", lvl:[60], rate:[10], note:"land"},
		{pokemon:"charizard", lvl:[59], rate:[5], note:"land"},
		{pokemon:"ninetales", lvl:[59], rate:[5], note:"land"},
		{pokemon:"kabuto", lvl:[58], rate:[4], note:"land"},
		{pokemon:"omanyte", lvl:[59], rate:[1], note:"land"}
	],
	"mansion floor 3" : [
		{pokemon:"magmar", lvl:[64], rate:[25], note:"land"},
		{pokemon:"aranine", lvl:[62], rate:[15], note:"land"},
		{pokemon:"ninetails", lvl:[62], rate:[15], note:"land"},
		{pokemon:"parasect", lvl:[64], rate:[10], note:"land"},
		{pokemon:"vileplume", lvl:[63], rate:[10], note:"land"},
		{pokemon:"flareon", lvl:[61], rate:[10], note:"land"},
		{pokemon:"weezing", lvl:[65], rate:[5], note:"land"},
		{pokemon:"muk", lvl:[65], rate:[5], note:"land"},
		{pokemon:"omanyte", lvl:[51], rate:[4], note:"land"},
		{pokemon:"kabuto", lvl:[51], rate:[1], note:"land"}
	],
	"mansion floor 4" : [
		{pokemon:"raticate", lvl:[63], rate:[25], note:"land"},
		{pokemon:"weezing", lvl:[63], rate:[15], note:"land"},
		{pokemon:"venomoth", lvl:[63], rate:[15], note:"land"},
		{pokemon:"electrode", lvl:[62], rate:[10], note:"land"},
		{pokemon:"muk", lvl:[62], rate:[10], note:"land"},
		{pokemon:"parasect", lvl:[63], rate:[10], note:"land"},
		{pokemon:"haunter", lvl:[60], rate:[5], note:"land"},
		{pokemon:"kabutops", lvl:[53], rate:[5], note:"land"},
		{pokemon:"omastar", lvl:[53], rate:[5], note:"land"}
	],
	"diglett’s cave" : [
		{pokemon:"diglett", lvl:[15,16,17,18,19,20,21,22,27], rate:[10,10,15,25,15,10,5,5,5], note:"land"}
	],
	"safari zone east" : [
		{pokemon:"porygon", lvl:[52], rate:[25], note:"land"},
		{pokemon:"golduck", lvl:[53], rate:[15], note:"land"},
		{pokemon:"kangaskhan", lvl:[53], rate:[15], note:"land"},
		{pokemon:"nidoqueen", lvl:[53], rate:[10], note:"land"},
		{pokemon:"nidoking", lvl:[53], rate:[10], note:"land"},
		{pokemon:"vileplume", lvl:[54], rate:[10], note:"land"},
		{pokemon:"rhydon", lvl:[15], rate:[5], note:"land"},
		{pokemon:"victreebell", lvl:[54], rate:[5], note:"land"},
		{pokemon:"golem", lvl:[15,55], rate:[1,4], note:"land"}
	],
	"safari zone north" : [
		{pokemon:"magmar", lvl:[15], rate:[25], note:"land"},
		{pokemon:"machamp", lvl:[15], rate:[15], note:"land"},
		{pokemon:"kangaskhan", lvl:[15], rate:[20], note:"land"},
		{pokemon:"nidoking", lvl:[55], rate:[10], note:"land"},
		{pokemon:"vileplume", lvl:[55], rate:[10], note:"land"},
		{pokemon:"electabuzz", lvl:[15], rate:[10], note:"land"},
		{pokemon:"victreebell", lvl:[55], rate:[5], note:"land"},
		{pokemon:"golem", lvl:[55], rate:[5], note:"land"}
	],
	"safari zone west" : [
		{pokemon:"dratini", lvl:[26,30], rate:[25,15], note:"land"},
		{pokemon:"nidoqueen", lvl:[52], rate:[15], note:"land"},
		{pokemon:"nidoking", lvl:[55], rate:[10], note:"land"},
		{pokemon:"kangaskhan", lvl:[35], rate:[10], note:"land"},
		{pokemon:"electabuzz", lvl:[20], rate:[10], note:"land"},
		{pokemon:"magmar", lvl:[35], rate:[5], note:"land"},
		{pokemon:"rhydon", lvl:[30], rate:[5], note:"land"},
		{pokemon:"mr. mime", lvl:[28], rate:[4], note:"land"},
		{pokemon:"clefable", lvl:[55], rate:[1], note:"land"}
	],
	"safari zone center" : [
		{pokemon:"kangaskhan", lvl:[52,54], rate:[10,25], note:"land"},
		{pokemon:"porygon", lvl:[55], rate:[15], note:"land"},
		{pokemon:"dratini", lvl:[26,30], rate:[15,10], note:"land"},
		{pokemon:"magmar", lvl:[54], rate:[10], note:"land"},
		{pokemon:"electabuzz", lvl:[54], rate:[5], note:"land"},
		{pokemon:"nidoking", lvl:[52], rate:[4], note:"land"},
		{pokemon:"nidoqueen", lvl:[52], rate:[1], note:"land"}
	],
	"cerulean cave floor 1" : [
		{pokemon:"exeggcutor", lvl:[100], rate:[25], note:"land"},
		{pokemon:"alakazam", lvl:[100], rate:[15], note:"land"},
		{pokemon:"gengar", lvl:[100], rate:[15], note:"land"},
		{pokemon:"slowpoke", lvl:[100], rate:[10], note:"land"},
		{pokemon:"dragonite", lvl:[100], rate:[10], note:"land"},
		{pokemon:"persian", lvl:[100], rate:[10], note:"land"},
		{pokemon:"rhydon", lvl:[100], rate:[5], note:"land"},
		{pokemon:"jynx", lvl:[100], rate:[5], note:"land"},
		{pokemon:"pinsir", lvl:[100], rate:[4], note:"land"},
		{pokemon:"moltres", lvl:[100], rate:[1], note:"land"}
	],
	"cerulean cave floor 2" : [
		{pokemon:"magneton", lvl:[100], rate:[25], note:"land"},
		{pokemon:"aerodactyl", lvl:[100], rate:[15], note:"land"},
		{pokemon:"alakazam", lvl:[100], rate:[15], note:"land"},
		{pokemon:"dugtrio", lvl:[100], rate:[10], note:"land"},
		{pokemon:"cloyster", lvl:[100], rate:[10], note:"land"},
		{pokemon:"chansey", lvl:[100], rate:[10], note:"land"},
		{pokemon:"golem", lvl:[100], rate:[5], note:"land"},
		{pokemon:"raichu", lvl:[100], rate:[5], note:"land"},
		{pokemon:"gyarados", lvl:[100], rate:[4], note:"land"},
		{pokemon:"articuno", lvl:[100], rate:[1], note:"land"}
	],
	"cerulean cave floor 3" : [
		{pokemon:"alakazam", lvl:[100], rate:[25], note:"land"},
		{pokemon:"tauros", lvl:[100], rate:[15], note:"land"},
		{pokemon:"starmie", lvl:[100], rate:[15], note:"land"},
		{pokemon:"lapras", lvl:[100], rate:[10], note:"land"},
		{pokemon:"gengar", lvl:[100], rate:[10], note:"land"},
		{pokemon:"electrode", lvl:[100], rate:[10], note:"land"},
		{pokemon:"snorlax", lvl:[100], rate:[5], note:"land"},
		{pokemon:"exeggutor", lvl:[100], rate:[5], note:"land"},
		{pokemon:"zapdos", lvl:[100], rate:[4], note:"land"},
		{pokemon:"mew", lvl:[100], rate:[1], note:"land"}
	]
};
const encounterSelect = (place) => encounterTable[place] || '';

// functions section starts here

function generateButtons(pokemon, path = '') {
	var i = C_Pokemon_List.getIndex(pokemon) - 1;
	var buttons;
	if(pokemon.toLowerCase() == "bulbasaur") {
		buttons = '<button class="phantom">Previous</button>&nbsp;';
	} else {
		buttons = generateButton(C_Pokemon_List.m_Pokemon_List[i].m_name,'previous','../pokemon/',"Pokemon","pokemon");
	}
	if(pokemon.toLowerCase() == "mew") {
		buttons += ' <button class="phantom">Next</button>';
	} else {
		i += 2;
		buttons += ' ' + generateButton(C_Pokemon_List.m_Pokemon_List[i].m_name,'next','../pokemon/',"Pokemon","pokemon");
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
	var type = attackSelect(attack.toLowerCase());
	var attackEntry = '<td>' + generateLink("Attack", titleCase(attack,[' ','-']), path) + '</td> ';
	attackEntry += generateTypeEntry(type);
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
