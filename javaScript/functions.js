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

const statTable = {
	"bulbasaur" : {basestat:[45,49,49,45,65], type:["grass","poison"], id:"#001", learnset:[
		{lvl:"1", attack:"vine whip"},
		{lvl:"1", attack:"tackle"},
		{lvl:"1", attack:"toxic"},
		{lvl:"7", attack:"absorb"},
		{lvl:"10", attack:"headbutt"},
		{lvl:"20", attack:"poison powder"},
		{lvl:"22", attack:"razor leaf"},
		{lvl:"22", attack:"double-edge"},
		{lvl:"41", attack:"sleep powder"},
		{lvl:"48", attack:"sleep powder"}
	]},
	"ivysaur" : {basestat:[60,62,63,60,80], type:["grass","poison"], id:"#002", learnset:[
		{lvl:"1", attack:"sleep powder"},
		{lvl:"1", attack:"body slam"},
		{lvl:"1", attack:"razor leaf"},
		{lvl:"30", attack:"razor leaf"},
		{lvl:"31", attack:"razor leaf"},
		{lvl:"32", attack:"razor leaf"},
		{lvl:"33", attack:"razor leaf"},
		{lvl:"38", attack:"razor leaf"},
		{lvl:"46", attack:"razor leaf"},
		{lvl:"54", attack:"sleep powder"}
	]},
	"venusaur" : {basestat:[80,82,83,80,100], type:["grass","poison"], id:"#003", learnset:[
		{lvl:"1", attack:"sleep powder"},
		{lvl:"1", attack:"body slam"},
		{lvl:"1", attack:"razor leaf"},
		{lvl:"1", attack:"double Team"},
		{lvl:"7", attack:"razor leaf"},
		{lvl:"13", attack:"razor leaf"},
		{lvl:"22", attack:"razor leaf"},
		{lvl:"30", attack:"razor leaf"},
		{lvl:"43", attack:"razor leaf"},
		{lvl:"55", attack:"sleep powder"},
		{lvl:"65", attack:"razor leaf"}
	]},
	"charmander" : {basestat:[39,52,43,65,50], type:["fire"], id:"#004", learnset:[
		{lvl:"1", attack:"ember"},
		{lvl:"1", attack:"scratch"},
		{lvl:"9", attack:"bite"},
		{lvl:"10", attack:"headbutt"},
		{lvl:"16", attack:"fire punch"},
		{lvl:"30", attack:"slash"},
		{lvl:"38", attack:"flamethrower"},
		{lvl:"46", attack:"flamethrower"}
	]},
	"charmeleon" : {basestat:[58,64,58,80,65], type:["fire"], id:"#005", learnset:[
		{lvl:"1", attack:"dragon rage"},
		{lvl:"1", attack:"flamethrower"},
		{lvl:"1", attack:"slash"},
		{lvl:"9", attack:"slash"},
		{lvl:"15", attack:"slash"},
		{lvl:"24", attack:"slash"},
		{lvl:"33", attack:"slash"},
		{lvl:"42", attack:"flamethrower"},
		{lvl:"56", attack:"flamethrower"}
	]},
	"charizard" : {basestat:[78,84,78,100,85], type:["fire","flying"], id:"#006", learnset:[
		{lvl:"1", attack:"flamethrower"},
		{lvl:"1", attack:"slash"},
		{lvl:"1", attack:"body slam"},
		{lvl:"1", attack:"earthquake"},
		{lvl:"9", attack:"slash"},
		{lvl:"15", attack:"slash"},
		{lvl:"24", attack:"slash"},
		{lvl:"55", attack:"flamethrower"},
		{lvl:"69", attack:"fire blast"},
		{lvl:"70", attack:"slash"}
	]},
	"squirtle" : {basestat:[44,48,65,43,50], type:["water"], id:"#007", learnset:[
		{lvl:"1", attack:"water gun"},
		{lvl:"1", attack:"tackle"},
		{lvl:"8", attack:"bite"},
		{lvl:"13", attack:"headbutt"},
		{lvl:"16", attack:"bubble beam"},
		{lvl:"28", attack:"waterfall"},
		{lvl:"35", attack:"skull bash"},
		{lvl:"42", attack:"hydro pump"}
	]},
	"wartortle" : {basestat:[59,63,80,58,65], type:["water"], id:"#008", learnset:[
		{lvl:"1", attack:"waterfall"},
		{lvl:"1", attack:"blizzard"},
		{lvl:"1", attack:"body slam"},
		{lvl:"1", attack:"dig"},
		{lvl:"8", attack:"waterfall"},
		{lvl:"15", attack:"waterfall"},
		{lvl:"24", attack:"dig"},
		{lvl:"31", attack:"dig"},
		{lvl:"39", attack:"dig"},
		{lvl:"47", attack:"hydro pump"}
	]},
	"blastoise" : {basestat:[79,83,100,78,85], type:["water"], id:"#009", learnset:[
		{lvl:"1", attack:"body slam"},
		{lvl:"1", attack:"hydro pump"},
		{lvl:"1", attack:"blizzard"},
		{lvl:"1", attack:"earthquake"},
		{lvl:"8", attack:"hydro pump"},
		{lvl:"15", attack:"earthquake"},
		{lvl:"24", attack:"body slam"},
		{lvl:"31", attack:"blizzard"},
		{lvl:"42", attack:"body slam"},
		{lvl:"52", attack:"hydro pump"}
	]},
	"caterpie" : {basestat:[45,30,35,45,20], type:["bug"], id:"#010"
, learnset:[
		{lvl:"1", attack:"tackle"},
		{lvl:"1", attack:"string shot"}
	]},
	"metapod" : {basestat:[50,20,55,30,25], type:["bug"], id:"#011", learnset:[
		{lvl:"1", attack:"harden"},
		{lvl:"1", attack:"tackle"}
	]},
	"butterfree" : {basestat:[60,45,50,70,80], type:["bug","flying"], id:"#012", learnset:[
		{lvl:"1", attack:"psybeam"},
		{lvl:"1", attack:"stun spore"},
		{lvl:"1", attack:"sleep powder"},
		{lvl:"12", attack:"psybeam"},
		{lvl:"15", attack:"stun spore"},
		{lvl:"16", attack:"stun spore"},
		{lvl:"17", attack:"stun spore"},
		{lvl:"21", attack:"stun spore"},
		{lvl:"26", attack:"stun spore"},
		{lvl:"32", attack:"sleep powder"}
	]},
	"weedle" : {basestat:[40,35,30,50,20], type:["bug","poison"], id:"#013", learnset:[
		{lvl:"1", attack:"poison sting"},
		{lvl:"1", attack:"string shot"}
	]},
	"kakuna" : {basestat:[45,25,50,35,25], type:["bug","poison"], id:"#014", learnset:[
		{lvl:"1", attack:"harden"},
		{lvl:"1", attack:"poison sting"}
	]},
	"beedrill" : {basestat:[65,80,40,75,45], type:["bug","poison"], id:"#015", learnset:[
		{lvl:"1", attack:"twineedle"},
		{lvl:"12", attack:"twineedle"},
		{lvl:"16", attack:"twineedle"},
		{lvl:"20", attack:"twineedle"},
		{lvl:"25", attack:"twineedle"},
		{lvl:"30", attack:"pin missile"},
		{lvl:"35", attack:"twineedle"}
	]},
	"pidgey" : {basestat:[40,45,40,56,35], type:["normal","flying"], id:"#016", learnset:[
		{lvl:"1", attack:"wing attack"},
		{lvl:"1", attack:"sand attack"},
		{lvl:"1", attack:"quick attack"},
		{lvl:"5", attack:"sand attack"},
		{lvl:"6", attack:"swift"},
		{lvl:"7", attack:"sand attack"},
		{lvl:"28", attack:"sand attack"},
		{lvl:"36", attack:"sand attack"},
		{lvl:"44", attack:"sand attack"}
	]},
	"pidgeotto" : {basestat:[63,60,55,71,50], type:["normal","flying"], id:"#017", learnset:[
		{lvl:"1", attack:"wing attack"},
		{lvl:"1", attack:"sand attack"},
		{lvl:"1", attack:"quick attack"},
		{lvl:"5", attack:"sand attack"},
		{lvl:"12", attack:"sand attack"},
		{lvl:"21", attack:"sand attack"},
		{lvl:"31", attack:"sand attack"},
		{lvl:"40", attack:"sand attack"},
		{lvl:"49", attack:"mirror move"}
	]},
	"pidgeot" : {basestat:[83,80,75,91,70], type:["normal","flying"], id:"#018", learnset:[
		{lvl:"1", attack:"razor wind"},
		{lvl:"1", attack:"sand attack"},
		{lvl:"1", attack:"quick attack"},
		{lvl:"1", attack:"hyper beam"},
		{lvl:"21", attack:"razor wind"},
		{lvl:"44", attack:"quick attack"}
	]},
	"rattata" : {basestat:[30,56,35,72,25], type:["normal"], id:"#019", learnset:[
		{lvl:"1", attack:"quick attack"},
		{lvl:"7", attack:"quick attack"},
		{lvl:"14", attack:"hyper Fang"},
		{lvl:"23", attack:"focus energy"},
		{lvl:"34", attack:"super Fang"}
	]},
	"raticate" : {basestat:[55,81,60,97,50], type:["normal"], id:"#020", learnset:[
		{lvl:"1", attack:"body slam"},
		{lvl:"1", attack:"super Fang"},
		{lvl:"1", attack:"dig"},
		{lvl:"1", attack:"hyper beam"},
		{lvl:"7", attack:"super Fang"},
		{lvl:"14", attack:"super Fang"},
		{lvl:"27", attack:"super Fang"},
		{lvl:"41", attack:"super Fang"}
	]},
	"spearow" : {basestat:[40,60,30,70,31], type:["normal","flying"], id:"#021", learnset:[
		{lvl:"1", attack:"peck"},
		{lvl:"1", attack:"growl"},
		{lvl:"9", attack:"leer"},
		{lvl:"15", attack:"fury attack"},
		{lvl:"22", attack:"mirror move"},
		{lvl:"29", attack:"drill peck"},
		{lvl:"36", attack:"agility"}
	]},
	"fearow" : {basestat:[65,90,65,100,61], type:["normal","flying"], id:"#022", learnset:[
		{lvl:"1", attack:"drill peck"},
		{lvl:"1", attack:"hyper beam"},
		{lvl:"1", attack:"razor wind"},
		{lvl:"9", attack:"drill peck"},
		{lvl:"15", attack:"drill peck"},
		{lvl:"25", attack:"drill peck"},
		{lvl:"34", attack:"drill peck"},
		{lvl:"43", attack:"drill peck"}
	]},
	"ekans" : {basestat:[35,60,44,55,40], type:["poison"], id:"#023", learnset:[
		{lvl:"1", attack:"wrap"},
		{lvl:"1", attack:"glare"},
		{lvl:"10", attack:"wrap"},
		{lvl:"15", attack:"earthquake"},
		{lvl:"16", attack:"rock Slide"},
		{lvl:"17", attack:"body slam"},
		{lvl:"18", attack:"glare"}
	]},
	"arbok" : {basestat:[60,85,69,80,65], type:["poison"], id:"#024", learnset:[
		{lvl:"1", attack:"wrap"},
		{lvl:"1", attack:"glare"},
		{lvl:"10", attack:"glare"},
		{lvl:"17", attack:"glare"},
		{lvl:"21", attack:"fissure"},
		{lvl:"36", attack:"glare"},
		{lvl:"47", attack:"glare"}
	]},
	"pikachu" : {basestat:[35,55,30,90,50], type:["electric"], id:"#025", learnset:[
		{lvl:"1", attack:"thunder Shock"},
		{lvl:"1", attack:"quick attack"},
		{lvl:"1", attack:"thunder wave"},
		{lvl:"9", attack:"headbutt"},
		{lvl:"16", attack:"thunder punch"},
		{lvl:"20", attack:"thunderbolt"},
		{lvl:"30", attack:"thunderbolt"},
		{lvl:"43", attack:"thunder"}
	]},
	"raichu" : {basestat:[60,90,55,100,90], type:["electric"], id:"#026", learnset:[
		{lvl:"1", attack:"thunderbolt"},
		{lvl:"1", attack:"body slam"},
		{lvl:"1", attack:"thunder wave"},
		{lvl:"1", attack:"surf"}
	]},
	"sandshrew" : {basestat:[50,75,85,40,30], type:["ground"], id:"#027", learnset:[
		{lvl:"1", attack:"slash"},
		{lvl:"1", attack:"sand attack"},
		{lvl:"10", attack:"sand attack"},
		{lvl:"16", attack:"dig"},
		{lvl:"24", attack:"slash"},
		{lvl:"31", attack:"slash"},
		{lvl:"38", attack:"earthquake"}
	]},
	"sandslash" : {basestat:[75,100,110,65,55], type:["ground"], id:"#028", learnset:[
		{lvl:"1", attack:"dig"},
		{lvl:"1", attack:"slash"},
		{lvl:"10", attack:"sand attack"},
		{lvl:"17", attack:"slash"},
		{lvl:"27", attack:"rock Slide"},
		{lvl:"40", attack:"earthquake"},
		{lvl:"47", attack:"body slam"}
	]},
	"nidoranf" : {basestat:[55,47,52,41,40], type:["poison"], id:"#029", learnset:[
		{lvl:"1", attack:"double kick"},
		{lvl:"1", attack:"bite"},
		{lvl:"1", attack:"toxic"},
		{lvl:"8", attack:"double kick"},
		{lvl:"14", attack:"double kick"},
		{lvl:"21", attack:"double kick"},
		{lvl:"29", attack:"double kick"},
		{lvl:"36", attack:"double kick"},
		{lvl:"43", attack:"double kick"}
	]},
	"nidorina" : {basestat:[70,62,67,56,55], type:["poison"], id:"#030", learnset:[
		{lvl:"1", attack:"double kick"},
		{lvl:"1", attack:"bite"},
		{lvl:"1", attack:"toxic"},
		{lvl:"8", attack:"double kick"},
		{lvl:"14", attack:"dig"},
		{lvl:"23", attack:"double kick"},
		{lvl:"32", attack:"double kick"},
		{lvl:"41", attack:"double kick"},
		{lvl:"50", attack:"double kick"}
	]},
	"nidoqueen" : {basestat:[90,82,87,76,75], type:["poison","ground"], id:"#031", learnset:[
		{lvl:"1", attack:"lovely kiss"},
		{lvl:"1", attack:"earthquake"},
		{lvl:"1", attack:"thunderbolt"},
		{lvl:"1", attack:"blizzard"},
		{lvl:"8", attack:"thunderbolt"},
		{lvl:"14", attack:"thunderbolt"},
		{lvl:"42", attack:"earthquake"}
	]},
	"nidoranf" : {basestat:[46,57,40,50,40], type:["poison"], id:"#032", learnset:[
		{lvl:"1", attack:"double kick"},
		{lvl:"1", attack:"horn attack"},
		{lvl:"1", attack:"toxic"},
		{lvl:"8", attack:"double kick"},
		{lvl:"12", attack:"dig"},
		{lvl:"21", attack:"double kick"},
		{lvl:"29", attack:"double kick"},
		{lvl:"36", attack:"double kick"},
		{lvl:"43", attack:"double kick"}
	]},
	"nidorino" : {basestat:[61,72,57,65,55], type:["poison"], id:"#033", learnset:[
		{lvl:"1", attack:"double kick"},
		{lvl:"1", attack:"toxic"},
		{lvl:"1", attack:"horn attack"},
		{lvl:"8", attack:"double kick"},
		{lvl:"14", attack:"dig"},
		{lvl:"23", attack:"double kick"},
		{lvl:"32", attack:"double kick"},
		{lvl:"41", attack:"double kick"},
		{lvl:"50", attack:"double kick"}
	]},
	"nidoking" : {basestat:[81,92,77,85,75], type:["poison","ground"], id:"#034", learnset:[
		{lvl:"1", attack:"blizzard"},
		{lvl:"1", attack:"thunderbolt"},
		{lvl:"1", attack:"lovely kiss"},
		{lvl:"1", attack:"earthquake"},
		{lvl:"8", attack:"thunderbolt"},
		{lvl:"14", attack:"thunderbolt"},
		{lvl:"42", attack:"earthquake"}
	]},
	"clefairy" : {basestat:[70,45,48,35,60], type:["normal"], id:"#035", learnset:[
		{lvl:"1", attack:"sing"},
		{lvl:"1", attack:"metronome"},
		{lvl:"13", attack:"sing"},
		{lvl:"18", attack:"sing"},
		{lvl:"24", attack:"double-edge"},
		{lvl:"31", attack:"metronome"},
		{lvl:"39", attack:"metronome"},
		{lvl:"48", attack:"metronome"}
	]},
	"clefable" : {basestat:[95,70,73,60,85], type:["normal"], id:"#036", learnset:[
		{lvl:"1", attack:"body slam"},
		{lvl:"1", attack:"blizzard"},
		{lvl:"1", attack:"psychic"},
		{lvl:"1", attack:"thunder wave"}
	]},
	"vulpix" : {basestat:[38,41,40,65,65], type:["fire"], id:"#037", learnset:[
		{lvl:"1", attack:"ember"},
		{lvl:"1", attack:"confuse Ray"},
		{lvl:"10", attack:"confuse Ray"},
		{lvl:"11", attack:"double-edge"},
		{lvl:"16", attack:"flamethrower"},
		{lvl:"35", attack:"flamethrower"},
		{lvl:"42", attack:"flamethrower"}
	]},
	"ninetales" : {basestat:[73,76,75,100,100], type:["fire"], id:"#038", learnset:[
		{lvl:"1", attack:"fire spin"}
	]},
	"jigglypuff" : {basestat:[115,45,20,20,25], type:["normal"], type:["normal"], id:"#039", learnset:[
		{lvl:"1", attack:"sing"},
		{lvl:"1", attack:"double-edge"},
		{lvl:"1", attack:"rest"},
		{lvl:"9", attack:"double-edge"},
		{lvl:"14", attack:"double-edge"},
		{lvl:"19", attack:"double-edge"},
		{lvl:"24", attack:"double-edge"},
		{lvl:"29", attack:"double-edge"},
		{lvl:"34", attack:"body slam"},
		{lvl:"39", attack:"double-edge"}
	]},
	"wigglytuff" : {basestat:[140,70,45,45,50], type:["normal"], id:"#040", learnset:[
		{lvl:"1", attack:"psychic"},
		{lvl:"1", attack:"blizzard"},
		{lvl:"1", attack:"double-edge"},
		{lvl:"1", attack:"thunder wave"}
	]},
	"zubat" : {basestat:[40,45,35,55,40], type:["poison","flying"], id:"#041", learnset:[
		{lvl:"1", attack:"wing attack"},
		{lvl:"1", attack:"toxic"},
		{lvl:"1", attack:"confuse Ray"},
		{lvl:"10", attack:"confuse Ray"},
		{lvl:"15", attack:"confuse Ray"},
		{lvl:"16", attack:"hypnosis"},
		{lvl:"28", attack:"confuse Ray"},
		{lvl:"58", attack:"hypnosis"}
	]},
	"golbat" : {basestat:[75,80,70,90,75], type:["poison","flying"], id:"#042", learnset:[
		{lvl:"1", attack:"confuse Ray"},
		{lvl:"1", attack:"razor wind"},
		{lvl:"1", attack:"mega drain"},
		{lvl:"1", attack:"hypnosis"},
		{lvl:"10", attack:"confuse Ray"},
		{lvl:"15", attack:"confuse Ray"},
		{lvl:"21", attack:"confuse Ray"},
		{lvl:"32", attack:"confuse Ray"},
		{lvl:"60", attack:"hypnosis"}
	]},
	"oddish" : {basestat:[45,50,55,30,75], type:["grass","poison"], id:"#043", learnset:[
		{lvl:"1", attack:"toxic"},
		{lvl:"1", attack:"acid"},
		{lvl:"1", attack:"stun spore"},
		{lvl:"1", attack:"mega drain"},
		{lvl:"14", attack:"sleep powder"},
		{lvl:"15", attack:"razor leaf"},
		{lvl:"19", attack:"sleep powder"},
		{lvl:"24", attack:"acid"},
		{lvl:"33", attack:"petal dance"},
		{lvl:"46", attack:"solar beam"}
	]},
	"gloom" : {basestat:[60,65,70,40,85], type:["grass","poison"], id:"#044", learnset:[
		{lvl:"1", attack:"petal dance"},
		{lvl:"1", attack:"sleep powder"},
		{lvl:"1", attack:"stun spore"},
		{lvl:"16", attack:"petal dance"},
		{lvl:"17", attack:"petal dance"},
		{lvl:"19", attack:"sleep powder"},
		{lvl:"28", attack:"stun spore"},
		{lvl:"38", attack:"stun spore"},
		{lvl:"52", attack:"petal dance"}
	]},
	"vileplume" : {basestat:[95,80,85,50,110], type:["grass","poison"], id:"#045", learnset:[
		{lvl:"1", attack:"sleep powder"},
		{lvl:"1", attack:"stun spore"},
		{lvl:"1", attack:"petal dance"},
		{lvl:"15", attack:"stun spore"},
		{lvl:"17", attack:"sleep powder"},
		{lvl:"19", attack:"petal dance"}
	]},
	"paras" : {basestat:[35,70,55,25,55], type:["bug","grass"], id:"#046", learnset:[
		{lvl:"1", attack:"leech life"},
		{lvl:"1", attack:"toxic"},
		{lvl:"1", attack:"mega drain"},
		{lvl:"1", attack:"stun spore"},
		{lvl:"13", attack:"stun spore"},
		{lvl:"20", attack:"stun spore"},
		{lvl:"27", attack:"spore"},
		{lvl:"34", attack:"spore"},
		{lvl:"41", attack:"spore"}
	]},
	"parasect" : {basestat:[60,95,80,30,80], type:["bug","grass"], id:"#047", learnset:[
		{lvl:"1", attack:"stun spore"},
		{lvl:"1", attack:"mega drain"},
		{lvl:"1", attack:"body slam"},
		{lvl:"1", attack:"spore"},
		{lvl:"13", attack:"stun spore"},
		{lvl:"20", attack:"stun spore"},
		{lvl:"30", attack:"stun spore"},
		{lvl:"39", attack:"stun spore"},
		{lvl:"48", attack:"stun spore"}
	]},
	"venonat" : {basestat:[60,55,50,45,40], type:["bug","poison"], id:"#048", learnset:[
		{lvl:"1", attack:"toxic"},
		{lvl:"1", attack:"psybeam"},
		{lvl:"1", attack:"stun spore"},
		{lvl:"24", attack:"stun spore"},
		{lvl:"27", attack:"stun spore"},
		{lvl:"30", attack:"stun spore"},
		{lvl:"35", attack:"psybeam"},
		{lvl:"38", attack:"sleep powder"},
		{lvl:"43", attack:"psychic"}
	]},
	"venomoth" : {basestat:[70,65,60,90,90], type:["bug","poison"], id:"#049", learnset:[
		{lvl:"1", attack:"psychic"},
		{lvl:"1", attack:"stun spore"},
		{lvl:"1", attack:"sleep powder"},
		{lvl:"24", attack:"stun spore"},
		{lvl:"27", attack:"stun spore"},
		{lvl:"30", attack:"stun spore"},
		{lvl:"38", attack:"stun spore"},
		{lvl:"43", attack:"sleep powder"},
		{lvl:"50", attack:"psychic"}
	]},
	"diglett" : {basestat:[10,55,25,95,45], type:["ground"], id:"#050", learnset:[
		{lvl:"1", attack:"sand attack"},
		{lvl:"1", attack:"slash"},
		{lvl:"15", attack:"sand attack"},
		{lvl:"19", attack:"dig"},
		{lvl:"24", attack:"sand attack"},
		{lvl:"31", attack:"slash"},
		{lvl:"40", attack:"earthquake"}
	]},
	"dugtrio" : {basestat:[35,80,50,120,70], type:["ground"], id:"#051", learnset:[
		{lvl:"1", attack:"dig"},
		{lvl:"1", attack:"sand attack"},
		{lvl:"1", attack:"body slam"},
		{lvl:"1", attack:"fissure"},
		{lvl:"15", attack:"dig"},
		{lvl:"19", attack:"dig"},
		{lvl:"24", attack:"dig"},
		{lvl:"35", attack:"slash"},
		{lvl:"39", attack:"earthquake"}
	]},
	"meowth" : {basestat:[40,45,35,90,40], type:["normal"], id:"#052", learnset:[
		{lvl:"1", attack:"bite"},
		{lvl:"12", attack:"bite"},
		{lvl:"17", attack:"pay day"},
		{lvl:"24", attack:"bite"},
		{lvl:"47", attack:"slash"},
		{lvl:"58", attack:"hypnosis"}
	]},
	"persian" : {basestat:[65,70,60,115,65], type:["normal"], id:"#053", learnset:[
		{lvl:"1", attack:"slash"},
		{lvl:"1", attack:"hypnosis"},
		{lvl:"12", attack:"slash"},
		{lvl:"17", attack:"slash"},
		{lvl:"24", attack:"slash"},
		{lvl:"51", attack:"slash"},
		{lvl:"63", attack:"hypnosis"}
	]},
	"psyduck" : {basestat:[50,52,48,55,50], type:["water"], id:"#054", learnset:[
		{lvl:"1", attack:"confusion"},
		{lvl:"1", attack:"bubble beam"},
		{lvl:"9", attack:"psybeam"},
		{lvl:"10", attack:"waterfall"},
		{lvl:"11", attack:"seismic toss"},
		{lvl:"12", attack:"hypnosis"},
		{lvl:"52", attack:"amnesia"}
	]},
	"golduck" : {basestat:[80,82,78,85,80], type:["water"], id:"#055", learnset:[
		{lvl:"1", attack:"waterfall"},
		{lvl:"1", attack:"psychic"},
		{lvl:"1", attack:"body slam"},
		{lvl:"1", attack:"hypnosis"},
		{lvl:"28", attack:"psychic"},
		{lvl:"31", attack:"psychic"},
		{lvl:"39", attack:"psychic"},
		{lvl:"48", attack:"hydro pump"},
		{lvl:"59", attack:"hypnosis"}
	]},
	"mankey" : {basestat:[40,80,35,70,35], type:["fighting"], id:"#056", learnset:[
		{lvl:"1", attack:"karate chop"},
		{lvl:"1", attack:"low kick"},
		{lvl:"11", attack:"seismic toss"},
		{lvl:"12", attack:"thrash"},
		{lvl:"13", attack:"submission"},
		{lvl:"14", attack:"double-edge"},
		{lvl:"39", attack:"thrash"}
	]},
	"primeape" : {basestat:[65,105,60,95,60], type:["fighting"], id:"#057", learnset:[
		{lvl:"1", attack:"submission"},
		{lvl:"1", attack:"body slam"},
		{lvl:"1", attack:"seismic toss"},
		{lvl:"1", attack:"rock Slide"},
		{lvl:"15", attack:"seismic toss"},
		{lvl:"21", attack:"seismic toss"},
		{lvl:"27", attack:"seismic toss"},
		{lvl:"37", attack:"seismic toss"},
		{lvl:"46", attack:"hi jump kick"}
	]},
	"growlithe" : {basestat:[55,70,45,60,50], type:["fire"], id:"#058", learnset:[
		{lvl:"1", attack:"bite"},
		{lvl:"1", attack:"take down"},
		{lvl:"1", attack:"ember"},
		{lvl:"9", attack:"bite"},
		{lvl:"10", attack:"swift"},
		{lvl:"12", attack:"double-edge"},
		{lvl:"14", attack:"flamethrower"},
		{lvl:"50", attack:"fire blast"}
	]},
	"arcanine" : {basestat:[90,110,80,95,80], type:["fire"], id:"#059", learnset:[
		{lvl:"1", attack:"fire blast"},
		{lvl:"1", attack:"body slam"},
		{lvl:"1", attack:"dig"}
	]},
	"poliwag" : {basestat:[40,50,40,90,40], type:["water"], id:"#060", learnset:[
		{lvl:"1", attack:"bubble beam"},
		{lvl:"1", attack:"hypnosis"},
		{lvl:"10", attack:"body slam"},
		{lvl:"11", attack:"body slam"},
		{lvl:"31", attack:"body slam"},
		{lvl:"38", attack:"body slam"},
		{lvl:"45", attack:"hydro pump"}
	]},
	"poliwhirl" : {basestat:[65,65,65,90,50], type:["water"], id:"#061", learnset:[
		{lvl:"1", attack:"submission"},
		{lvl:"1", attack:"waterfall"},
		{lvl:"1", attack:"hypnosis"},
		{lvl:"1", attack:"seismic toss"},
		{lvl:"14", attack:"submission"},
		{lvl:"15", attack:"seismic toss"},
		{lvl:"26", attack:"body slam"},
		{lvl:"33", attack:"hydro pump"},
		{lvl:"41", attack:"hydro pump"},
		{lvl:"49", attack:"hydro pump"}
	]},
	"poliwrath" : {basestat:[90,85,95,70,70], type:["water","fighting"], id:"#062", learnset:[
		{lvl:"1", attack:"waterfall"},
		{lvl:"1", attack:"ice beam"},
		{lvl:"1", attack:"earthquake"},
		{lvl:"1", attack:"lovely kiss"},
		{lvl:"35", attack:"blizzard"},
		{lvl:"40", attack:"hydro pump"}
	]},
	"abra" : {basestat:[25,20,15,90,105], type:["psychic"], id:"#063", learnset:[
		{lvl:"1", attack:"confusion"},
		{lvl:"1", attack:"kinesis"}
	]},
	"kadabra" : {basestat:[40,35,30,105,120], type:["psychic"], id:"#064", learnset:[
		{lvl:"1", attack:"kinesis"},
		{lvl:"1", attack:"psybeam"},
		{lvl:"1", attack:"thunder wave"},
		{lvl:"16", attack:"psybeam"},
		{lvl:"20", attack:"psybeam"},
		{lvl:"27", attack:"psybeam"},
		{lvl:"31", attack:"recover"},
		{lvl:"38", attack:"psychic"},
		{lvl:"42", attack:"seismic toss"}
	]},
	"alakazam" : {basestat:[55,50,45,120,135], type:["psychic"], id:"#065", learnset:[
		{lvl:"1", attack:"thunder wave"},
		{lvl:"1", attack:"psychic"},
		{lvl:"1", attack:"recover"},
		{lvl:"16", attack:"recover"},
		{lvl:"20", attack:"recover"},
		{lvl:"27", attack:"recover"},
		{lvl:"31", attack:"recover"},
		{lvl:"38", attack:"psychic"},
		{lvl:"42", attack:"recover"}
	]},
	"machop" : {basestat:[70,80,50,35,35], type:["fighting"], id:"#066", learnset:[
		{lvl:"1", attack:"karate chop"},
		{lvl:"1", attack:"low kick"},
		{lvl:"20", attack:"low kick"},
		{lvl:"25", attack:"low kick"},
		{lvl:"32", attack:"seismic toss"},
		{lvl:"39", attack:"seismic toss"},
		{lvl:"46", attack:"submission"}
	]},
	"machoke" : {basestat:[80,100,70,45,50], type:["fighting"], id:"#067", learnset:[
		{lvl:"1", attack:"karate chop"},
		{lvl:"1", attack:"low kick"},
		{lvl:"1", attack:"submission"},
		{lvl:"20", attack:"submission"},
		{lvl:"25", attack:"submission"},
		{lvl:"36", attack:"seismic toss"},
		{lvl:"44", attack:"seismic toss"},
		{lvl:"52", attack:"submission"}
	]},
	"machamp" : {basestat:[90,130,80,55,65], type:["fighting"], id:"#068", learnset:[
		{lvl:"1", attack:"submission"},
		{lvl:"1", attack:"body slam"},
		{lvl:"1", attack:"rock Slide"},
		{lvl:"1", attack:"earthquake"},
		{lvl:"20", attack:"submission"},
		{lvl:"25", attack:"submission"},
		{lvl:"36", attack:"submission"},
		{lvl:"44", attack:"submission"},
		{lvl:"52", attack:"hi jump kick"}
	]},
	"bellsprout" : {basestat:[50,75,35,40,70], type:["grass","poison"], id:"#069", learnset:[
		{lvl:"1", attack:"toxic"},
		{lvl:"1", attack:"stun spore"},
		{lvl:"1", attack:"double-edge"},
		{lvl:"10", attack:"mega drain"},
		{lvl:"11", attack:"sleep powder"},
		{lvl:"16", attack:"body slam"},
		{lvl:"21", attack:"sleep powder"},
		{lvl:"26", attack:"stun spore"},
		{lvl:"33", attack:"razor leaf"},
		{lvl:"42", attack:"slam"}
	]},
	"weepinbell" : {basestat:[65,90,50,55,85], type:["grass","poison"], id:"#070", learnset:[
		{lvl:"1", attack:"sleep powder"},
		{lvl:"1", attack:"stun spore"},
		{lvl:"1", attack:"body slam"},
		{lvl:"16", attack:"mega drain"},
		{lvl:"17", attack:"stun spore"},
		{lvl:"18", attack:"stun spore"},
		{lvl:"23", attack:"stun spore"},
		{lvl:"29", attack:"stun spore"},
		{lvl:"38", attack:"razor leaf"},
		{lvl:"49", attack:"sleep powder"}
	]},
	"victreebel" : {basestat:[80,105,65,70,100], type:["grass","poison"], id:"#071", learnset:[
		{lvl:"1", attack:"razor leaf"},
		{lvl:"1", attack:"stun spore"},
		{lvl:"1", attack:"body slam"},
		{lvl:"1", attack:"lovely kiss"},
		{lvl:"13", attack:"razor leaf"},
		{lvl:"15", attack:"razor leaf"},
		{lvl:"100", attack:"lovely kiss"}
	]},
	"tentacool" : {basestat:[40,40,35,70,100], type:["water","poison"], id:"#072", learnset:[
		{lvl:"1", attack:"wrap"},
		{lvl:"1", attack:"supersonic"},
		{lvl:"1", attack:"toxic"},
		{lvl:"1", attack:"bubble beam"},
		{lvl:"7", attack:"toxic"},
		{lvl:"13", attack:"toxic"},
		{lvl:"18", attack:"toxic"},
		{lvl:"22", attack:"toxic"},
		{lvl:"27", attack:"toxic"},
		{lvl:"33", attack:"toxic"},
		{lvl:"40", attack:"toxic"},
		{lvl:"48", attack:"hydro pump"}
	]},
	"tentacruel" : {basestat:[80,70,65,100,120], type:["water","poison"], id:"#073", learnset:[
		{lvl:"1", attack:"wrap"},
		{lvl:"1", attack:"surf"},
		{lvl:"7", attack:"wrap"},
		{lvl:"13", attack:"wrap"},
		{lvl:"18", attack:"wrap"},
		{lvl:"22", attack:"wrap"},
		{lvl:"27", attack:"wrap"},
		{lvl:"35", attack:"wrap"},
		{lvl:"43", attack:"wrap"},
		{lvl:"50", attack:"blizzard"}
	]},
	"geodude" : {basestat:[40,80,100,20,30], type:["rock","ground"], id:"#074", learnset:[
		{lvl:"1", attack:"selfdestruct"},
		{lvl:"11", attack:"selfdestruct"},
		{lvl:"16", attack:"selfdestruct"},
		{lvl:"21", attack:"rock Slide"},
		{lvl:"26", attack:"dig"},
		{lvl:"31", attack:"earthquake"},
		{lvl:"36", attack:"explosion"}
	]},
	"graveler" : {basestat:[55,95,115,35,45], type:["rock","ground"], id:"#075", learnset:[
		{lvl:"1", attack:"dig"},
		{lvl:"1", attack:"selfdestruct"},
		{lvl:"1", attack:"rock Slide"},
		{lvl:"1", attack:"explosion"},
		{lvl:"11", attack:"explosion"},
		{lvl:"16", attack:"explosion"},
		{lvl:"21", attack:"explosion"},
		{lvl:"29", attack:"explosion"},
		{lvl:"36", attack:"rock Slide"},
		{lvl:"42", attack:"earthquake"}
	]},
	"golem" : {basestat:[80,110,130,45,55], type:["rock","ground"], id:"#076", learnset:[
		{lvl:"1", attack:"body slam"},
		{lvl:"1", attack:"rock Slide"},
		{lvl:"1", attack:"earthquake"},
		{lvl:"1", attack:"explosion"},
		{lvl:"11", attack:"explosion"},
		{lvl:"16", attack:"explosion"},
		{lvl:"21", attack:"explosion"},
		{lvl:"29", attack:"explosion"},
		{lvl:"36", attack:"explosion"},
		{lvl:"43", attack:"explosion"}
	]},
	"ponyta" : {basestat:[50,85,55,90,65], type:["fire"], id:"#077", learnset:[
		{lvl:"1", attack:"ember"},
		{lvl:"1", attack:"double kick"},
		{lvl:"1", attack:"Stomp"},
		{lvl:"16", attack:"flamethrower"},
		{lvl:"18", attack:"double-edge"},
		{lvl:"24", attack:"hypnosis"},
		{lvl:"39", attack:"hypnosis"},
		{lvl:"43", attack:"hypnosis"},
		{lvl:"48", attack:"hypnosis"}
	]},
	"rapidash" : {basestat:[65,100,70,110,80], type:["fire"], id:"#078", learnset:[
		{lvl:"1", attack:"horn drill"},
		{lvl:"74", attack:"hypnosis"},
		{lvl:"75", attack:"hypnosis"},
		{lvl:"76", attack:"hypnosis"},
		{lvl:"77", attack:"hypnosis"},
		{lvl:"78", attack:"hypnosis"},
		{lvl:"79", attack:"hypnosis"}
	]},
	"slowpoke" : {basestat:[90,65,65,15,40], type:["water","psychic"], id:"#079", learnset:[
		{lvl:"1", attack:"confusion"},
		{lvl:"1", attack:"bubble beam"},
		{lvl:"1", attack:"headbutt"},
		{lvl:"18", attack:"confusion"},
		{lvl:"22", attack:"confusion"},
		{lvl:"27", attack:"confusion"},
		{lvl:"33", attack:"confusion"},
		{lvl:"40", attack:"amnesia"},
		{lvl:"48", attack:"psychic"}
	]},
	"slowbro" : {basestat:[95,75,110,30,80], type:["water","psychic"], id:"#080", learnset:[
		{lvl:"1", attack:"confusion"},
		{lvl:"1", attack:"waterfall"},
		{lvl:"1", attack:"thunder wave"},
		{lvl:"18", attack:"psychic"},
		{lvl:"22", attack:"surf"},
		{lvl:"27", attack:"psychic"},
		{lvl:"33", attack:"psychic"},
		{lvl:"37", attack:"amnesia"},
		{lvl:"44", attack:"amnesia"},
		{lvl:"55", attack:"psychic"}
	]},
	"magnemite" : {basestat:[25,35,70,45,95], type:["electric"], id:"#081", learnset:[
		{lvl:"1", attack:"thunderbolt"},
		{lvl:"1", attack:"sonicboom"},
		{lvl:"1", attack:"thunder wave"},
		{lvl:"1", attack:"double-edge"},
		{lvl:"21", attack:"thunderbolt"},
		{lvl:"25", attack:"thunderbolt"},
		{lvl:"29", attack:"thunderbolt"},
		{lvl:"35", attack:"thunderbolt"},
		{lvl:"41", attack:"thunderbolt"},
		{lvl:"47", attack:"thunderbolt"}
	]},
	"magneton" : {basestat:[50,60,95,70,120], type:["electric"], id:"#082", learnset:[
		{lvl:"1", attack:"thunder wave"},
		{lvl:"1", attack:"thunderbolt"},
		{lvl:"1", attack:"double Team"},
		{lvl:"1", attack:"double-edge"},
		{lvl:"21", attack:"double-edge"},
		{lvl:"25", attack:"double-edge"},
		{lvl:"29", attack:"double-edge"},
		{lvl:"38", attack:"double-edge"},
		{lvl:"46", attack:"double-edge"},
		{lvl:"54", attack:"double-edge"}
	]},
	"farfetch'd" : {basestat:[52,65,55,60,58], type:["normal","flying"], id:"#083", learnset:[
		{lvl:"1", attack:"substitute"},
		{lvl:"1", attack:"sand attack"},
		{lvl:"1", attack:"slash"},
		{lvl:"7", attack:"slash"},
		{lvl:"15", attack:"slash"},
		{lvl:"23", attack:"slash"},
		{lvl:"31", attack:"slash"},
		{lvl:"39", attack:"agility"}
	]},
	"doduo" : {basestat:[35,85,45,75,35], type:["normal","flying"], id:"#084", learnset:[
		{lvl:"1", attack:"peck"},
		{lvl:"1", attack:"take down"},
		{lvl:"1", attack:"double kick"},
		{lvl:"20", attack:"take down"},
		{lvl:"24", attack:"take down"},
		{lvl:"30", attack:"drill peck"},
		{lvl:"36", attack:"tri attack"},
		{lvl:"40", attack:"tri attack"},
		{lvl:"44", attack:"agility"}
	]},
	"dodrio" : {basestat:[60,110,70,100,60], type:["normal","flying"], id:"#085", learnset:[
		{lvl:"1", attack:"body slam"},
		{lvl:"1", attack:"hyper beam"},
		{lvl:"1", attack:"drill peck"},
		{lvl:"20", attack:"drill peck"},
		{lvl:"24", attack:"drill peck"},
		{lvl:"30", attack:"drill peck"},
		{lvl:"39", attack:"drill peck"},
		{lvl:"45", attack:"drill peck"},
		{lvl:"51", attack:"drill peck"}
	]},
	"seel" : {basestat:[65,45,55,45,70], type:["water"], id:"#086", learnset:[
		{lvl:"1", attack:"aurora beam"},
		{lvl:"1", attack:"headbutt"},
		{lvl:"1", attack:"bubble beam"},
		{lvl:"1", attack:"rest"},
		{lvl:"30", attack:"aurora beam"},
		{lvl:"35", attack:"aurora beam"},
		{lvl:"40", attack:"rest"},
		{lvl:"45", attack:"take down"},
		{lvl:"50", attack:"ice beam"}
	]},
	"dewgong" : {basestat:[90,70,80,70,95], type:["water","ice"], id:"#087", learnset:[
		{lvl:"1", attack:"ice beam"},
		{lvl:"1", attack:"waterfall"},
		{lvl:"1", attack:"body slam"},
		{lvl:"1", attack:"horn drill"},
		{lvl:"30", attack:"waterfall"},
		{lvl:"35", attack:"waterfall"},
		{lvl:"44", attack:"waterfall"},
		{lvl:"49", attack:"hydro pump"},
		{lvl:"50", attack:"rest"}
	]},
	"grimer" : {basestat:[80,80,50,25,40], type:["poison"], id:"#088", learnset:[
		{lvl:"1", attack:"toxic"},
		{lvl:"1", attack:"sludge"},
		{lvl:"1", attack:"explosion"},
		{lvl:"30", attack:"explosion"},
		{lvl:"33", attack:"explosion"},
		{lvl:"37", attack:"explosion"},
		{lvl:"42", attack:"explosion"},
		{lvl:"48", attack:"explosion"},
		{lvl:"55", attack:"acid armor"}
	]},
	"muk" : {basestat:[105,105,75,50,65], type:["poison"], id:"#089", learnset:[
		{lvl:"1", attack:"sludge"},
		{lvl:"1", attack:"explosion"},
		{lvl:"1", attack:"toxic"},
		{lvl:"1", attack:"body slam"},
		{lvl:"30", attack:"sludge"},
		{lvl:"33", attack:"sludge"},
		{lvl:"37", attack:"sludge"},
		{lvl:"45", attack:"sludge"},
		{lvl:"53", attack:"sludge"},
		{lvl:"60", attack:"sludge"}
	]},
	"shellder" : {basestat:[30,65,100,40,45], type:["water"], id:"#090", learnset:[
		{lvl:"1", attack:"explosion"},
		{lvl:"1", attack:"clamp"},
		{lvl:"1", attack:"aurora beam"},
		{lvl:"18", attack:"supersonic"},
		{lvl:"23", attack:"clamp"},
		{lvl:"30", attack:"aurora beam"},
		{lvl:"39", attack:"ice beam"},
		{lvl:"50", attack:"ice beam"}
	]},
	"cloyster" : {basestat:[50,95,180,70,85], type:["water","ice"], id:"#091", learnset:[
		{lvl:"1", attack:"explosion"},
		{lvl:"1", attack:"blizzard"},
		{lvl:"1", attack:"clamp"},
		{lvl:"50", attack:"explosion"}
	]},
	"gastly" : {basestat:[30,35,30,80,100], type:["ghost","poison"], id:"#092", learnset:[
		{lvl:"1", attack:"hypnosis"},
		{lvl:"1", attack:"confuse Ray"},
		{lvl:"1", attack:"night shade"},
		{lvl:"27", attack:"hypnosis"},
		{lvl:"35", attack:"hypnosis"}
	]},
	"haunter" : {basestat:[45,50,45,95,115], type:["ghost","poison"], id:"#093", learnset:[
		{lvl:"1", attack:"hypnosis"},
		{lvl:"1", attack:"confuse Ray"},
		{lvl:"1", attack:"night shade"},
		{lvl:"29", attack:"hypnosis"},
		{lvl:"56", attack:"psychic"}
	]},
	"gengar" : {basestat:[60,65,60,110,130], type:["ghost","poison"], id:"#094", learnset:[
		{lvl:"1", attack:"explosion"},
		{lvl:"1", attack:"hypnosis"},
		{lvl:"1", attack:"psychic"},
		{lvl:"1", attack:"night shade"},
		{lvl:"29", attack:"hypnosis"},
		{lvl:"100", attack:"seismic toss"}
	]},
	"onix" : {basestat:[35,45,160,70,30], type:["rock","ground"], id:"#095", learnset:[
		{lvl:"1", attack:"bind"},
		{lvl:"1", attack:"earthquake"},
		{lvl:"1", attack:"rock Slide"},
		{lvl:"15", attack:"bind"},
		{lvl:"19", attack:"bind"},
		{lvl:"25", attack:"bind"},
		{lvl:"33", attack:"bind"},
		{lvl:"43", attack:"bind"}
	]},
	"drowzee" : {basestat:[60,48,45,42,90], type:["psychic"], id:"#096", learnset:[
		{lvl:"1", attack:"confusion"},
		{lvl:"1", attack:"hypnosis"},
		{lvl:"12", attack:"thunder wave"},
		{lvl:"17", attack:"toxic"},
		{lvl:"24", attack:"psychic"},
		{lvl:"29", attack:"psychic"},
		{lvl:"32", attack:"psychic"},
		{lvl:"37", attack:"psychic"}
	]},
	"hypno" : {basestat:[85,73,70,67,115], type:["psychic"], id:"#097", learnset:[
		{lvl:"1", attack:"thunder wave"},
		{lvl:"1", attack:"hypnosis"},
		{lvl:"1", attack:"psychic"},
		{lvl:"12", attack:"hypnosis"},
		{lvl:"17", attack:"hypnosis"},
		{lvl:"24", attack:"hypnosis"},
		{lvl:"33", attack:"hypnosis"},
		{lvl:"37", attack:"hypnosis"},
		{lvl:"43", attack:"psychic"}
	]},
	"krabby" : {basestat:[30,105,90,50,25], type:["water"], id:"#098", learnset:[
		{lvl:"1", attack:"crabhammer"},
		{lvl:"1", attack:"vicegrip"},
		{lvl:"10", attack:"crabhammer"},
		{lvl:"14", attack:"body slam"},
		{lvl:"30", attack:"body slam"},
		{lvl:"35", attack:"body slam"},
		{lvl:"40", attack:"body slam"}
	]},
	"kingler" : {basestat:[55,130,115,75,50], type:["water"], id:"#099", learnset:[
		{lvl:"1", attack:"crabhammer"},
		{lvl:"1", attack:"body slam"},
		{lvl:"1", attack:"guillotine"},
		{lvl:"20", attack:"crabhammer"},
		{lvl:"25", attack:"crabhammer"},
		{lvl:"34", attack:"crabhammer"},
		{lvl:"42", attack:"crabhammer"},
		{lvl:"49", attack:"crabhammer"}
	]},
	"voltorb" : {basestat:[40,30,50,100,55], type:["electric"], id:"#100", learnset:[
		{lvl:"1", attack:"sonicboom"},
		{lvl:"1", attack:"selfdestruct"},
		{lvl:"1", attack:"explosion"},
		{lvl:"1", attack:"thunder wave"},
		{lvl:"17", attack:"sonicboom"},
		{lvl:"22", attack:"selfdestruct"},
		{lvl:"29", attack:"thunderbolt"},
		{lvl:"36", attack:"thunder wave"},
		{lvl:"43", attack:"explosion"}
	]},
	"electrode" : {basestat:[60,50,70,140,80], type:["electric"], id:"#101", learnset:[
		{lvl:"1", attack:"explosion"},
		{lvl:"1", attack:"thunderbolt"},
		{lvl:"1", attack:"thunder wave"},
		{lvl:"17", attack:"explosion"},
		{lvl:"22", attack:"explosion"},
		{lvl:"29", attack:"explosion"},
		{lvl:"40", attack:"explosion"},
		{lvl:"50", attack:"explosion"}
	]},
	"exeggcute" : {basestat:[80,65,80,40,80], type:["grass","psychic"], id:"#102", learnset:[
		{lvl:"1", attack:"hypnosis"},
		{lvl:"1", attack:"psybeam"},
		{lvl:"1", attack:"explosion"},
		{lvl:"1", attack:"stun spore"},
		{lvl:"20", attack:"sleep powder"},
		{lvl:"22", attack:"psychic"},
		{lvl:"32", attack:"psychic"},
		{lvl:"37", attack:"psychic"},
		{lvl:"42", attack:"psychic"},
		{lvl:"48", attack:"sleep powder"}
	]},
	"exeggutor" : {basestat:[95,95,85,55,125], type:["grass","psychic"], id:"#103", learnset:[
		{lvl:"1", attack:"stun spore"},
		{lvl:"1", attack:"sleep powder"},
		{lvl:"1", attack:"psychic"},
		{lvl:"28", attack:"psychic"}
	]},
	"cubone" : {basestat:[50,50,95,35,40], type:["ground"], id:"#104", learnset:[
		{lvl:"1", attack:"bone Club"},
		{lvl:"1", attack:"headbutt"},
		{lvl:"9", attack:"headbutt"},
		{lvl:"10", attack:"double-edge"},
		{lvl:"12", attack:"rock Slide"},
		{lvl:"13", attack:"bonemerang"},
		{lvl:"46", attack:"bonemerang"}
	]},
	"marowak" : {basestat:[60,80,110,45,50], type:["ground"], id:"#105", learnset:[
		{lvl:"1", attack:"bonemerang"},
		{lvl:"1", attack:"rock Slide"},
		{lvl:"1", attack:"earthquake"},
		{lvl:"1", attack:"body slam"},
		{lvl:"25", attack:"bonemerang"},
		{lvl:"33", attack:"bonemerang"},
		{lvl:"41", attack:"bonemerang"},
		{lvl:"48", attack:"bonemerang"},
		{lvl:"55", attack:"bonemerang"}
	]},
	"hitmonlee" : {basestat:[50,120,53,87,35], type:["fighting"], id:"#106", learnset:[
		{lvl:"1", attack:"hi jump kick"},
		{lvl:"1", attack:"body slam"},
		{lvl:"1", attack:"seismic toss"},
		{lvl:"33", attack:"hi jump kick"},
		{lvl:"38", attack:"hi jump kick"},
		{lvl:"43", attack:"hi jump kick"},
		{lvl:"48", attack:"hi jump kick"},
		{lvl:"53", attack:"hi jump kick"}
	]},
	"hitmonchan" : {basestat:[50,105,79,76,35], type:["fighting"], id:"#107", learnset:[
		{lvl:"1", attack:"submission"},
		{lvl:"1", attack:"body slam"},
		{lvl:"1", attack:"seismic toss"},
		{lvl:"33", attack:"seismic toss"},
		{lvl:"38", attack:"seismic toss"},
		{lvl:"43", attack:"seismic toss"},
		{lvl:"48", attack:"seismic toss"},
		{lvl:"53", attack:"seismic toss"}
	]},
	"lickitung" : {basestat:[90,55,75,30,60], type:["normal"], id:"#108", learnset:[
		{lvl:"1", attack:"Lick"},
		{lvl:"1", attack:"wrap"},
		{lvl:"1", attack:"body slam"},
		{lvl:"7", attack:"body slam"},
		{lvl:"15", attack:"body slam"},
		{lvl:"23", attack:"body slam"},
		{lvl:"31", attack:"earthquake"},
		{lvl:"39", attack:"hyper beam"}
	]},
	"koffing" : {basestat:[40,65,95,35,60], type:["poison"], id:"#109", learnset:[
		{lvl:"1", attack:"smokescreen"},
		{lvl:"1", attack:"sludge"},
		{lvl:"1", attack:"explosion"},
		{lvl:"1", attack:"toxic"},
		{lvl:"32", attack:"explosion"},
		{lvl:"37", attack:"explosion"},
		{lvl:"40", attack:"explosion"},
		{lvl:"45", attack:"explosion"},
		{lvl:"48", attack:"explosion"}
	]},
	"weezing" : {basestat:[65,90,120,60,85], type:["poison"], id:"#110", learnset:[
		{lvl:"1", attack:"toxic"},
		{lvl:"1", attack:"explosion"},
		{lvl:"1", attack:"sludge"},
		{lvl:"1", attack:"fire blast"},
		{lvl:"32", attack:"sludge"},
		{lvl:"39", attack:"sludge"},
		{lvl:"43", attack:"sludge"},
		{lvl:"49", attack:"explosion"},
		{lvl:"53", attack:"thunderbolt"}
	]},
	"rhyhorn" : {basestat:[80,85,95,25,30], type:["ground","rock"], id:"#111", learnset:[
		{lvl:"1", attack:"double-edge"},
		{lvl:"30", attack:"rock Slide"},
		{lvl:"35", attack:"rock Slide"},
		{lvl:"40", attack:"rock Slide"},
		{lvl:"42", attack:"earthquake"},
		{lvl:"50", attack:"rock Slide"},
		{lvl:"55", attack:"earthquake"}
	]},
	"rhydon" : {basestat:[105,130,120,40,45], type:["ground","rock"], id:"#112", learnset:[
		{lvl:"1", attack:"earthquake"},
		{lvl:"1", attack:"body slam"},
		{lvl:"1", attack:"rock Slide"},
		{lvl:"30", attack:"rock Slide"},
		{lvl:"40", attack:"rock Slide"},
		{lvl:"42", attack:"earthquake"},
		{lvl:"48", attack:"rock Slide"},
		{lvl:"55", attack:"rock Slide"},
		{lvl:"64", attack:"earthquake"}
	]},
	"chansey" : {basestat:[255,5,45,50,105], type:["normal"], id:"#113", learnset:[
		{lvl:"1", attack:"minimize"},
		{lvl:"1", attack:"seismic toss"},
		{lvl:"1", attack:"thunder wave"},
		{lvl:"1", attack:"softboiled"},
		{lvl:"24", attack:"thunderbolt"},
		{lvl:"25", attack:"ice beam"},
		{lvl:"38", attack:"ice beam"},
		{lvl:"44", attack:"thunderbolt"},
		{lvl:"48", attack:"softboiled"},
		{lvl:"54", attack:"softboiled"}
	]},
	"tangela" : {basestat:[65,55,115,60,100], type:["grass"], id:"#114", learnset:[
		{lvl:"1", attack:"stun spore"},
		{lvl:"1", attack:"sleep powder"},
		{lvl:"1", attack:"wrap"},
		{lvl:"29", attack:"stun spore"},
		{lvl:"32", attack:"stun spore"},
		{lvl:"36", attack:"stun spore"},
		{lvl:"39", attack:"sleep powder"},
		{lvl:"45", attack:"sleep powder"},
		{lvl:"49", attack:"sleep powder"}
	]},
	"kangaskhan" : {basestat:[105,95,80,90,75], type:["normal"], id:"#115", learnset:[
		{lvl:"1", attack:"body slam"},
		{lvl:"26", attack:"earthquake"},
		{lvl:"31", attack:"body slam"},
		{lvl:"36", attack:"body slam"},
		{lvl:"41", attack:"hyper beam"},
		{lvl:"46", attack:"hyper beam"}
	]},
	"horsea" : {basestat:[30,40,70,60,70], type:["water"], id:"#116", learnset:[
		{lvl:"1", attack:"toxic"},
		{lvl:"1", attack:"bubble beam"},
		{lvl:"1", attack:"smokescreen"},
		{lvl:"19", attack:"smokescreen"},
		{lvl:"24", attack:"smokescreen"},
		{lvl:"30", attack:"smokescreen"},
		{lvl:"37", attack:"smokescreen"},
		{lvl:"45", attack:"hydro pump"}
	]},
	"seadra" : {basestat:[55,65,95,85,95], type:["water"], id:"#117", learnset:[
		{lvl:"1", attack:"dragon rage"},
		{lvl:"19", attack:"dragon rage"},
		{lvl:"24", attack:"toxic"},
		{lvl:"30", attack:"hydro pump"},
		{lvl:"41", attack:"smokescreen"},
		{lvl:"52", attack:"hydro pump"}
	]},
	"goldeen" : {basestat:[45,67,60,63,50], type:["water"], id:"#118", learnset:[
		{lvl:"1", attack:"peck"},
		{lvl:"1", attack:"waterfall"},
		{lvl:"1", attack:"supersonic"},
		{lvl:"19", attack:"waterfall"},
		{lvl:"24", attack:"waterfall"},
		{lvl:"30", attack:"waterfall"},
		{lvl:"37", attack:"waterfall"},
		{lvl:"45", attack:"horn drill"},
		{lvl:"48", attack:"agility"}
	]},
	"seaking" : {basestat:[80,92,65,68,80], type:["water"], id:"#119", learnset:[
		{lvl:"1", attack:"horn drill"},
		{lvl:"19", attack:"bubble beam"},
		{lvl:"24", attack:"bubble beam"},
		{lvl:"30", attack:"bubble beam"},
		{lvl:"39", attack:"waterfall"},
		{lvl:"48", attack:"horn drill"},
		{lvl:"54", attack:"agility"}
	]},
	"staryu" : {basestat:[30,45,55,85,70], type:["water"], id:"#120", learnset:[
		{lvl:"1", attack:"double-edge"},
		{lvl:"17", attack:"water gun"},
		{lvl:"22", attack:"light screen"},
		{lvl:"27", attack:"bubble beam"},
		{lvl:"32", attack:"bubble beam"},
		{lvl:"37", attack:"recover"},
		{lvl:"42", attack:"thunder wave"},
		{lvl:"47", attack:"hydro pump"}
	]},
	"starmie" : {basestat:[60,75,85,115,100], type:["water","psychic"], id:"#121", learnset:[
		{lvl:"1", attack:"thunder wave"},
		{lvl:"1", attack:"blizzard"},
		{lvl:"1", attack:"thunderbolt"},
		{lvl:"1", attack:"recover"}
	]},
	"mr. mime" : {basestat:[40,45,65,90,100], type:["psychic"], id:"#122", learnset:[
		{lvl:"1", attack:"psybeam"},
		{lvl:"1", attack:"thunder wave"},
		{lvl:"15", attack:"thunder wave"},
		{lvl:"20", attack:"hypnosis"},
		{lvl:"25", attack:"thunderbolt"},
		{lvl:"39", attack:"psychic"}
	]},
	"scyther" : {basestat:[70,110,80,105,55], type:["bug","flying"], id:"#123", learnset:[
		{lvl:"1", attack:"substitute"},
		{lvl:"1", attack:"slash"},
		{lvl:"1", attack:"quick attack"},
		{lvl:"1", attack:"wing attack"},
		{lvl:"17", attack:"slash"},
		{lvl:"20", attack:"slash"},
		{lvl:"24", attack:"slash"},
		{lvl:"29", attack:"slash"},
		{lvl:"35", attack:"slash"},
		{lvl:"48", attack:"slash"}
	]},
	"jynx" : {basestat:[65,50,60,100,115], type:["ice","psychic"], id:"#124", learnset:[
		{lvl:"1", attack:"psychic"},
		{lvl:"1", attack:"lovely kiss"},
		{lvl:"1", attack:"blizzard"},
		{lvl:"18", attack:"lovely kiss"},
		{lvl:"23", attack:"lovely kiss"},
		{lvl:"31", attack:"lovely kiss"},
		{lvl:"39", attack:"lovely kiss"},
		{lvl:"47", attack:"lovely kiss"},
		{lvl:"58", attack:"lovely kiss"}
	]},
	"electabuzz" : {basestat:[65,95,60,110,100], type:["electric"], id:"#125", learnset:[
		{lvl:"1", attack:"psychic"},
		{lvl:"1", attack:"thunderbolt"},
		{lvl:"1", attack:"ice punch"},
		{lvl:"1", attack:"thunder wave"},
		{lvl:"34", attack:"psychic"},
		{lvl:"37", attack:"psychic"},
		{lvl:"42", attack:"psychic"},
		{lvl:"49", attack:"psychic"},
		{lvl:"54", attack:"psychic"}
	]},
	"magmar" : {basestat:[65,100,60,105,125], type:["fire"], id:"#126", learnset:[
		{lvl:"1", attack:"confuse Ray"},
		{lvl:"1", attack:"thunderbolt"},
		{lvl:"1", attack:"body slam"},
		{lvl:"1", attack:"fire blast"},
		{lvl:"36", attack:"confuse Ray"},
		{lvl:"39", attack:"confuse Ray"},
		{lvl:"43", attack:"confuse Ray"},
		{lvl:"48", attack:"confuse Ray"},
		{lvl:"52", attack:"confuse Ray"},
		{lvl:"75", attack:"solar beam"}
	]},
	"pinsir" : {basestat:[65,125,100,85,55], type:["bug"], id:"#127", learnset:[
		{lvl:"1", attack:"wrap"},
		{lvl:"1", attack:"guillotine"},
		{lvl:"1", attack:"body slam"},
		{lvl:"25", attack:"guillotine"},
		{lvl:"30", attack:"slash"},
		{lvl:"36", attack:"slash"},
		{lvl:"43", attack:"body slam"},
		{lvl:"49", attack:"slash"},
		{lvl:"54", attack:"guillotine"}
	]},
	"tauros" : {basestat:[75,105,95,115,70], type:["normal"], id:"#128", learnset:[
		{lvl:"1", attack:"body slam"},
		{lvl:"1", attack:"earthquake"},
		{lvl:"1", attack:"hyper beam"},
		{lvl:"21", attack:"earthquake"},
		{lvl:"28", attack:"earthquake"},
		{lvl:"35", attack:"earthquake"},
		{lvl:"44", attack:"earthquake"},
		{lvl:"51", attack:"earthquake"}
	]},
	"magikarp" : {basestat:[20,10,55,80,20], id:"#129", type:["water"], learnset:[
		{lvl:"1", attack:"splash"},
		{lvl:"1", attack:"bubble"},
		{lvl:"15", attack:"tackle"}
	]},
	"gyarados" : {basestat:[95,125,79,81,100], type:["water","flying"], id:"#130", learnset:[
		{lvl:"1", attack:"dragon rage"},
		{lvl:"25", attack:"waterfall"},
		{lvl:"30", attack:"thunderbolt"},
		{lvl:"32", attack:"body slam"},
		{lvl:"41", attack:"blizzard"},
		{lvl:"52", attack:"hydro pump"}
	]},
	"lapras" : {basestat:[130,85,80,60,95], type:["water","ice"], id:"#131", learnset:[
		{lvl:"1", attack:"dragon rage"},
		{lvl:"31", attack:"confuse Ray"},
		{lvl:"34", attack:"body slam"},
		{lvl:"36", attack:"thunderbolt"},
		{lvl:"38", attack:"blizzard"},
		{lvl:"40", attack:"blizzard"},
		{lvl:"76", attack:"surf"}
	]},
	"ditto" : {basestat:[100,100,100,100,100], type:["normal"], id:"#132", learnset:[
		{lvl:"1", attack:"Transform"}
	]},
	"eevee" : {basestat:[55,55,50,55,65], type:["normal"], id:"#133", learnset:[
		{lvl:"1", attack:"quick attack"},
		{lvl:"1", attack:"sand attack"},
		{lvl:"20", attack:"double-edge"},
		{lvl:"22", attack:"sand attack"},
		{lvl:"37", attack:"sand attack"},
		{lvl:"45", attack:"sand attack"}
	]},
	"vaporeon" : {basestat:[130,65,60,65,110], type:["water"], id:"#134", learnset:[
		{lvl:"1", attack:"ice beam"},
		{lvl:"1", attack:"waterfall"},
		{lvl:"1", attack:"sand attack"},
		{lvl:"1", attack:"body slam"},
		{lvl:"27", attack:"blizzard"},
		{lvl:"31", attack:"waterfall"},
		{lvl:"37", attack:"waterfall"},
		{lvl:"40", attack:"waterfall"},
		{lvl:"42", attack:"hydro pump"},
		{lvl:"44", attack:"hydro pump"},
		{lvl:"48", attack:"hydro pump"},
		{lvl:"54", attack:"hydro pump"}
	]},
	"jolteon" : {basestat:[65,65,60,130,110], type:["electric"], id:"#135", learnset:[
		{lvl:"1", attack:"pin missile"},
		{lvl:"1", attack:"sand attack"},
		{lvl:"1", attack:"thunder wave"},
		{lvl:"1", attack:"thunderbolt"},
		{lvl:"27", attack:"body slam"},
		{lvl:"31", attack:"body slam"},
		{lvl:"37", attack:"body slam"},
		{lvl:"40", attack:"body slam"},
		{lvl:"42", attack:"body slam"},
		{lvl:"44", attack:"body slam"},
		{lvl:"48", attack:"body slam"},
		{lvl:"54", attack:"thunderbolt"}
	]},
	"flareon" : {basestat:[65,130,60,65,110], type:["fire"], id:"#136", learnset:[
		{lvl:"1", attack:"body slam"},
		{lvl:"1", attack:"sand attack"},
		{lvl:"1", attack:"fire blast"},
		{lvl:"27", attack:"fire blast"},
		{lvl:"31", attack:"fire blast"},
		{lvl:"37", attack:"fire blast"},
		{lvl:"40", attack:"fire blast"},
		{lvl:"42", attack:"fire blast"},
		{lvl:"44", attack:"fire blast"},
		{lvl:"48", attack:"fire blast"},
		{lvl:"73", attack:"solar beam"}
	]},
	"porygon" : {basestat:[65,60,70,40,75], type:["normal"], id:"#137", learnset:[
		{lvl:"1", attack:"tri attack"},
		{lvl:"1", attack:"Sharpen"},
		{lvl:"1", attack:"conversion"},
		{lvl:"1", attack:"psybeam"},
		{lvl:"22", attack:"blizzard"},
		{lvl:"24", attack:"recover"},
		{lvl:"28", attack:"thunderbolt"},
		{lvl:"32", attack:"thunder wave"}
	]},
	"omanyte" : {basestat:[35,40,100,35,90], type:["rock","water"], id:"#138", learnset:[
		{lvl:"1", attack:"waterfall"},
		{lvl:"1", attack:"blizzard"},
		{lvl:"34", attack:"horn attack"},
		{lvl:"39", attack:"leer"},
		{lvl:"46", attack:"spike cannon"},
		{lvl:"53", attack:"hydro pump"}
	]},
	"omastar" : {basestat:[70,60,125,55,115], type:["rock","water"], id:"#139", learnset:[
		{lvl:"1", attack:"hydro pump"},
		{lvl:"1", attack:"blizzard"},
		{lvl:"1", attack:"seismic toss"},
		{lvl:"1", attack:"body slam"},
		{lvl:"34", attack:"seismic toss"},
		{lvl:"39", attack:"seismic toss"},
		{lvl:"44", attack:"seismic toss"},
		{lvl:"53", attack:"hydro pump"}
	]},
	"kabuto" : {basestat:[30,80,90,55,45], type:["rock","water"], id:"#140", learnset:[
		{lvl:"1", attack:"waterfall"},
		{lvl:"1", attack:"blizzard"},
		{lvl:"1", attack:"slash"},
		{lvl:"34", attack:"absorb"},
		{lvl:"39", attack:"slash"},
		{lvl:"44", attack:"leer"},
		{lvl:"45", attack:"blizzard"},
		{lvl:"49", attack:"hydro pump"}
	]},
	"kabutops" : {basestat:[60,115,105,80,70], type:["rock","water"], id:"#141", learnset:[
		{lvl:"1", attack:"hydro pump"},
		{lvl:"1", attack:"blizzard"},
		{lvl:"1", attack:"slash"},
		{lvl:"1", attack:"dig"},
		{lvl:"34", attack:"slash"},
		{lvl:"39", attack:"slash"},
		{lvl:"46", attack:"slash"},
		{lvl:"53", attack:"hydro pump"}
	]},
	"aerodactyl" : {basestat:[80,105,65,130,60], type:["rock","flying"], id:"#142", learnset:[
		{lvl:"1", attack:"fly"},
		{lvl:"33", attack:"razor wind"},
		{lvl:"38", attack:"earthquake"},
		{lvl:"45", attack:"rock Slide"},
		{lvl:"101", attack:"sky attack"}
	]},
	"snorlax" : {basestat:[160,110,65,30,65], type:["normal"], id:"#143", learnset:[
		{lvl:"1", attack:"headbutt"},
		{lvl:"1", attack:"rest"},
		{lvl:"1", attack:"selfdestruct"},
		{lvl:"35", attack:"body slam"},
		{lvl:"41", attack:"earthquake"},
		{lvl:"45", attack:"hyper beam"},
		{lvl:"88", attack:"lovely kiss"}
	]},
	"articuno" : {basestat:[105,85,100,85,125], type:["ice","flying"], id:"#144", learnset:[
		{lvl:"1", attack:"sky attack"},
		{lvl:"1", attack:"blizzard"},
		{lvl:"51", attack:"blizzard"},
		{lvl:"55", attack:"blizzard"},
		{lvl:"60", attack:"blizzard"}
	]},
	"zapdos" : {basestat:[90,90,85,100,125], type:["electric","flying"], id:"#145", learnset:[
		{lvl:"1", attack:"thunder wave"},
		{lvl:"1", attack:"drill peck"},
		{lvl:"51", attack:"drill peck"},
		{lvl:"55", attack:"drill peck"},
		{lvl:"60", attack:"thunderbolt"}
	]},
	"moltres" : {basestat:[90,100,90,90,125], type:["fire","flying"], id:"#146", learnset:[
		{lvl:"1", attack:"fire blast"},
		{lvl:"1", attack:"sky attack"},
		{lvl:"51", attack:"fire blast"},
		{lvl:"55", attack:"sky attack"},
		{lvl:"60", attack:"solar beam"}
	]},
	"dratini" : {basestat:[41,64,45,50,50], type:["dragon"], id:"#147", learnset:[
		{lvl:"1", attack:"wrap"},
		{lvl:"1", attack:"thunder wave"},
		{lvl:"1", attack:"dragon rage"},
		{lvl:"10", attack:"thunder wave"},
		{lvl:"20", attack:"thunder wave"},
		{lvl:"21", attack:"headbutt"},
		{lvl:"22", attack:"double-edge"},
		{lvl:"30", attack:"hyper beam"}
	]},
	"dragonair" : {basestat:[61,84,65,70,70], type:["dragon"], id:"#148", learnset:[
		{lvl:"1", attack:"dragon rage"},
		{lvl:"1", attack:"wrap"},
		{lvl:"1", attack:"thunder wave"},
		{lvl:"10", attack:"thunder wave"},
		{lvl:"20", attack:"thunder wave"},
		{lvl:"35", attack:"thunder wave"},
		{lvl:"45", attack:"blizzard"},
		{lvl:"55", attack:"hyper beam"}
	]},
	"dragonite" : {basestat:[91,134,95,80,100], type:["dragon","flying"], id:"#149", learnset:[
		{lvl:"1", attack:"wrap"},
		{lvl:"1", attack:"blizzard"},
		{lvl:"1", attack:"thunder wave"},
		{lvl:"10", attack:"thunder wave"},
		{lvl:"20", attack:"thunder wave"},
		{lvl:"35", attack:"thunder wave"},
		{lvl:"45", attack:"thunder wave"},
		{lvl:"60", attack:"thunder wave"}
	]},
	"mewtwo" : {basestat:[106,110,90,140,154], type:["psychic"], id:"#150", learnset:[
		{lvl:"1", attack:"thunder wave"},
		{lvl:"1", attack:"psychic"},
		{lvl:"1", attack:"body slam"},
		{lvl:"1", attack:"recover"},
		{lvl:"63", attack:"psychic"},
		{lvl:"66", attack:"psychic"},
		{lvl:"70", attack:"psychic"},
		{lvl:"75", attack:"psychic"},
		{lvl:"81", attack:"psychic"}
	]},
	"mew" : {basestat:[100,100,100,100,100], id:"#151", type:["psychic"], learnset:[
		{lvl:"1", attack:"pound"},
		{lvl:"2", attack:"thunder wave"},
		{lvl:"7", attack:"softboiled"},
		{lvl:"10", attack:"body slam"},
		{lvl:"12", attack:"psychic"}
	]}
};
const statSelect = (pokemon) => statTable[pokemon] || {basestat:[0,0,0,0,0], id:"#000", type:["???"]};

// functions section starts here

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

function generateTypeEntry(type) {
	return '<td class="' + type.toLowerCase() + '">' + titleCase(type) + '</td>';
}

function generateType(pokemon) {
	var types = statSelect(pokemon.toLowerCase()).type;
	var entry;
	for (var i in types) {
		entry += generateTypeEntry(types[i]);
	}
	return entry;
}

function generateLink(pokemon, path = '', content = pokemon) {
	pokemon = titleCase(pokemon);
	return '<a href="' + path + pokemon + '.html" title="' + pokemon + '">' + content + '</a>';
}

function generateButton(pokemon, direction, path = '') {
	pokemon = titleCase(pokemon);
	return '<button class="next" onclick="window.location.href = &quot;' + path + pokemon + '.html&quot;;" title="' + pokemon + '">' + direction + '</button> ';
}

function generateAttack(attack, path = '') {
	var type = attackSelect(attack.toLowerCase());
	var attackEntry = '<td>' + generateLink(titleCase(attack,[' ','-']), path) + '</td> ';
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
	var stats = statSelect(pokemon.toLowerCase()).basestat;
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

function generateTitle(pokemon) {
	var id = statSelect(pokemon.toLowerCase()).id;
	return '<h2>' + id + ' ' + pokemon + '</h2>';
}

function generateMoveTable(pokemon) {
	var learnset = statSelect(pokemon.toLowerCase()).learnset
	var moveTable = '<table class="movetbl">';
	moveTable += 	'<caption>Learnset</caption>';
	moveTable +=	'<tr>';
	moveTable +=		'<th>Lvl</th>';
	moveTable +=		'<th>Attack</th>';
	moveTable +=		'<th>Type</th>';
	moveTable +=	'</tr>';
	for(var i = 0; i < learnset.length; i++) {
		moveTable += '<tr>'
		moveTable += '<td>'+learnset[i].lvl+'</td>';
		moveTable += generateAttack(learnset[i].attack,'../attacks/');
		moveTable += '</tr>'
	}
	moveTable += '</table>';
	return moveTable;
}

function generatePokemonListEntry(pokemon) {
	var types = statSelect(pokemon.toLowerCase()).type;
	pokemon = titleCase(pokemon);
	var entry = '<tr>';
	entry +=	'<td>' + generateLink(pokemon,'../pokemon/',statSelect(pokemon.toLowerCase()).id) + '</td>';
	entry +=	'<td>' + generateLink(pokemon,'../pokemon/') + '</td>';
	for (var i in types) {
		entry += generateTypeEntry(types[i]);
	}
	if(types.length <= 1){
		entry += '<td></td>';
	}
	entry += 	'</tr>';
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
	for (var pokemon in statTable) {
		table += generatePokemonListEntry(pokemon);
	}
	table += '</table>';
	return table;
}