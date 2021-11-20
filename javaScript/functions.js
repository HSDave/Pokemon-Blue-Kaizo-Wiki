// lookup tables and constants

const attackTable = {
	'absorb' : 'Grass',
	'acid' : 'Poison',
	'acid armor' : 'Poison',
	'agility' : 'Psychic',
	'amnesia' : 'Psychic',
	'aurora beam' : 'Ice',
	'barrage' : 'Normal',
	'barrier' : 'Psychic',
	'bide' : 'Normal',
	'bind' : 'Normal',
	'bite' : 'Normal',
	'blizzard' : 'Ice',
	'body slam' : 'Normal',
	'bone club' : 'Ground',
	'bonemerang' : 'Ground',
	'bubble' : 'Water',
	'bubble beam' : 'Water',
	'clamp' : 'Water',
	'comet punch' : 'Normal',
	'confuse ray' : 'Ghost',
	'confusion' : 'Psychic',
	'constrict' : 'Normal',
	'conversion' : 'Normal',
	'counter' : 'Fighting',
	'crabhammer' : 'Water',
	'cut' : 'Normal',
	'defense curl' : 'Normal',
	'dig' : 'Ground',
	'disable' : 'Normal',
	'dizzy punch' : 'Normal',
	'double kick' : 'Fighting',
	'double slap' : 'Normal',
	'double team' : 'Normal',
	'double-edge' : 'Normal',
	'dragon rage' : 'dragon',
	'dream eater' : 'Psychic',
	'drill peck' : 'Flying',
	'earthquake' : 'Ground',
	'egg bomb' : 'Normal',
	'ember' : 'Fire',
	'explosion' : 'Normal',
	'Fire blast' : 'Fire',
	'Fire punch' : 'Fire',
	'Fire spin' : 'Fire',
	'fissure' : 'Ground',
	'flamethrower' : 'Fire',
	'flash' : 'Normal',
	'fly' : 'Flying',
	'focus energy' : 'Normal',
	'fury attack' : 'Normal',
	'fury swipes' : 'Normal',
	'glare' : 'Normal',
	'growl' : 'Normal',
	'growth' : 'Normal',
	'guillotine' : 'Normal',
	'gust' : 'Flying',
	'harden' : 'Normal',
	'haze' : 'Ice',
	'headbutt' : 'Normal',
	'high jump kick' : 'Fighting',
	'horn attack' : 'Normal',
	'horn drill' : 'Normal',
	'hydro pump' : 'Water',
	'hyper beam' : 'Normal',
	'hyper fang' : 'Normal',
	'hypnosis' : 'Psychic',
	'Ice beam' : 'Ice',
	'Ice punch' : 'Ice',
	'jump kick' : 'Fighting',
	'karate chop' : 'Fighting',
	'kinesis' : 'Psychic',
	'leech life' : 'Bug',
	'leech seed' : 'Grass',
	'leer' : 'Normal',
	'lick' : 'Ghost',
	'light screen' : 'Psychic',
	'lovely kiss' : 'Normal',
	'low kick' : 'Fighting',
	'meditate' : 'Psychic',
	'mega drain' : 'Grass',
	'mega kick' : 'Normal',
	'mega punch' : 'Normal',
	'metronome' : 'Normal',
	'mimic' : 'Normal',
	'minimize' : 'Normal',
	'mirror move' : 'Flying',
	'mist' : 'Ice',
	'night shade' : 'Ghost',
	'pay day' : 'Normal',
	'peck' : 'Flying',
	'petal dance' : 'Grass',
	'pin missile' : 'Bug',
	'poison gas' : 'Poison',
	'poison powder' : 'Poison',
	'poison sting' : 'Poison',
	'pound' : 'Normal',
	'psybeam' : 'Psychic',
	'Psychic' : 'Psychic',
	'psywave' : 'Psychic',
	'quick attack' : 'Normal',
	'rage' : 'Normal',
	'razor leaf' : 'Grass',
	'razor wind' : 'Normal',
	'recover' : 'Normal',
	'reflect' : 'Psychic',
	'rest' : 'Psychic',
	'roar' : 'Normal',
	'rock slide' : 'Rock',
	'rock throw' : 'Rock',
	'rolling kick' : 'Fighting',
	'sand attack' : 'Ground',
	'scratch' : 'Normal',
	'screech' : 'Normal',
	'seismic toss' : 'Fighting',
	'self-destruct' : 'Normal',
	'sharpen' : 'Normal',
	'sing' : 'Normal',
	'skull bash' : 'Normal',
	'sky attack' : 'Flying',
	'slam' : 'Normal',
	'slash' : 'Normal',
	'sleep powder' : 'Grass',
	'sludge' : 'Poison',
	'smog' : 'Poison',
	'smokescreen' : 'Normal',
	'soft-boiled' : 'Normal',
	'solar beam' : 'Grass',
	'sonic boom' : 'Normal',
	'spike cannon' : 'Normal',
	'splash' : 'Normal',
	'spore' : 'Grass',
	'stomp' : 'Normal',
	'strength' : 'Normal',
	'string shot' : 'Bug',
	'struggle' : 'Normal',
	'stun spore' : 'Grass',
	'submission' : 'Fighting',
	'substitute' : 'Normal',
	'super fang' : 'Normal',
	'supersonic' : 'Normal',
	'surf' : 'Water',
	'swift' : 'Normal',
	'swords dance' : 'Normal',
	'tackle' : 'Normal',
	'tail whip' : 'Normal',
	'take down' : 'Normal',
	'teleport' : 'Psychic',
	'thrash' : 'Normal',
	'thunder' : 'Electric',
	'thunder punch' : 'Electric',
	'thunder shock' : 'Electric',
	'thunder wave' : 'Electric',
	'thunderbolt' : 'Electric',
	'toxic' : 'Poison',
	'transform' : 'Normal',
	'tri attack' : 'Normal',
	'twineedle' : 'Bug',
	'vine whip' : 'Grass',
	'vise grip' : 'Normal',
	'water gun' : 'Water',
	'waterfall' : 'Water',
	'whirlwind' : 'Normal',
	'wing attack' : 'Flying',
	'withdraw' : 'Water',
	'wrap' : 'Normal'
};
const attackSelect = (attack) => attackTable[attack] || 'Normal';

const statTable = {
	"bulbasaur" : {basestat:[45,49,49,45,65], id:"#001", learnset:[
		{lvl:"1", attack:"Vine Whip"},
		{lvl:"1", attack:"Tackle"},
		{lvl:"1", attack:"Toxic"},
		{lvl:"7", attack:"Absorb"},
		{lvl:"10", attack:"Headbutt"},
		{lvl:"20", attack:"Poison Powder"},
		{lvl:"22", attack:"Razor Leaf"},
		{lvl:"22", attack:"Double-Edge"},
		{lvl:"41", attack:"Sleep Powder"},
		{lvl:"48", attack:"Sleep Powder"}
	]},
	"ivysaur" : {basestat:[60,62,63,60,80], id:"#002", learnset:[
		{lvl:"1", attack:"Sleep Powder"},
		{lvl:"1", attack:"Body Slam"},
		{lvl:"1", attack:"Razor Leaf"},
		{lvl:"30", attack:"Razor Leaf"},
		{lvl:"31", attack:"Razor Leaf"},
		{lvl:"32", attack:"Razor Leaf"},
		{lvl:"33", attack:"Razor Leaf"},
		{lvl:"38", attack:"Razor Leaf"},
		{lvl:"46", attack:"Razor Leaf"},
		{lvl:"54", attack:"Sleep Powder"}
	]},
	"venusaur" : {basestat:[80,82,83,80,100], id:"#003", learnset:[
		{lvl:"1", attack:"Sleep Powder"},
		{lvl:"1", attack:"Body Slam"},
		{lvl:"1", attack:"Razor Leaf"},
		{lvl:"1", attack:"Double Team"},
		{lvl:"7", attack:"Razor Leaf"},
		{lvl:"13", attack:"Razor Leaf"},
		{lvl:"22", attack:"Razor Leaf"},
		{lvl:"30", attack:"Razor Leaf"},
		{lvl:"43", attack:"Razor Leaf"},
		{lvl:"55", attack:"Sleep Powder"},
		{lvl:"65", attack:"Razor Leaf"}
	]},
	"charmander" : {basestat:[39,52,43,65,50], id:"#004", learnset:[
		{lvl:"1", attack:"Ember"},
		{lvl:"1", attack:"Scratch"},
		{lvl:"9", attack:"Bite"},
		{lvl:"10", attack:"Headbutt"},
		{lvl:"16", attack:"Fire Punch"},
		{lvl:"30", attack:"Slash"},
		{lvl:"38", attack:"Flamethrower"},
		{lvl:"46", attack:"Flamethrower"}
	]},
	"charmeleon" : {basestat:[58,64,58,80,65], id:"#005", learnset:[
		{lvl:"1", attack:"Dragon Rage"},
		{lvl:"1", attack:"Flamethrower"},
		{lvl:"1", attack:"Slash"},
		{lvl:"9", attack:"Slash"},
		{lvl:"15", attack:"Slash"},
		{lvl:"24", attack:"Slash"},
		{lvl:"33", attack:"Slash"},
		{lvl:"42", attack:"Flamethrower"},
		{lvl:"56", attack:"Flamethrower"}
	]},
	"charizard" : {basestat:[78,84,78,100,85], id:"#006", learnset:[
		{lvl:"1", attack:"Flamethrower"},
		{lvl:"1", attack:"Slash"},
		{lvl:"1", attack:"Body Slam"},
		{lvl:"1", attack:"Earthquake"},
		{lvl:"9", attack:"Slash"},
		{lvl:"15", attack:"Slash"},
		{lvl:"24", attack:"Slash"},
		{lvl:"55", attack:"Flamethrower"},
		{lvl:"69", attack:"Fire Blast"},
		{lvl:"70", attack:"Slash"}
	]},
	"squirtle" : {basestat:[44,48,65,43,50], id:"#007", learnset:[
		{lvl:"1", attack:"Water Gun"},
		{lvl:"1", attack:"Tackle"},
		{lvl:"8", attack:"Bite"},
		{lvl:"13", attack:"Headbutt"},
		{lvl:"16", attack:"Bubble Beam"},
		{lvl:"28", attack:"Waterfall"},
		{lvl:"35", attack:"Skull Bash"},
		{lvl:"42", attack:"Hydro Pump"}
	]},
	"wartortle" : {basestat:[59,63,80,58,65], id:"#008", learnset:[
		{lvl:"1", attack:"Waterfall"},
		{lvl:"1", attack:"Blizzard"},
		{lvl:"1", attack:"Body Slam"},
		{lvl:"1", attack:"Dig"},
		{lvl:"8", attack:"Waterfall"},
		{lvl:"15", attack:"Waterfall"},
		{lvl:"24", attack:"Dig"},
		{lvl:"31", attack:"Dig"},
		{lvl:"39", attack:"Dig"},
		{lvl:"47", attack:"Hydro Pump"}
	]},
	"blastoise" : {basestat:[79,83,100,78,85], id:"#009", learnset:[
		{lvl:"1", attack:"Body Slam"},
		{lvl:"1", attack:"Hydro Pump"},
		{lvl:"1", attack:"Blizzard"},
		{lvl:"1", attack:"Earthquake"},
		{lvl:"8", attack:"Hydro Pump"},
		{lvl:"15", attack:"Earthquake"},
		{lvl:"24", attack:"Body Slam"},
		{lvl:"31", attack:"Blizzard"},
		{lvl:"42", attack:"Body Slam"},
		{lvl:"52", attack:"Hydro Pump"}
	]},
	"caterpie" : {basestat:[45,30,35,45,20], id:"#010"
, learnset:[
		{lvl:"1", attack:"Tackle"},
		{lvl:"1", attack:"String Shot"}
	]},
	"metapod" : {basestat:[50,20,55,30,25], id:"#011", learnset:[
		{lvl:"1", attack:"Harden"},
		{lvl:"1", attack:"Tackle"}
	]},
	"butterfree" : {basestat:[60,45,50,70,80], id:"#012", learnset:[
		{lvl:"1", attack:"Psybeam"},
		{lvl:"1", attack:"Stun Spore"},
		{lvl:"1", attack:"Sleep Powder"},
		{lvl:"12", attack:"Psybeam"},
		{lvl:"15", attack:"Stun Spore"},
		{lvl:"16", attack:"Stun Spore"},
		{lvl:"17", attack:"Stun Spore"},
		{lvl:"21", attack:"Stun Spore"},
		{lvl:"26", attack:"Stun Spore"},
		{lvl:"32", attack:"Sleep Powder"}
	]},
	"weedle" : {basestat:[40,35,30,50,20], id:"#013", learnset:[
		{lvl:"1", attack:"Poison Sting"},
		{lvl:"1", attack:"String Shot"}
	]},
	"kakuna" : {basestat:[45,25,50,35,25], id:"#014", learnset:[
		{lvl:"1", attack:"Harden"},
		{lvl:"1", attack:"Poison Sting"}
	]},
	"beedrill" : {basestat:[65,80,40,75,45], id:"#015", learnset:[
		{lvl:"1", attack:"Twineedle"},
		{lvl:"12", attack:"Twineedle"},
		{lvl:"16", attack:"Twineedle"},
		{lvl:"20", attack:"Twineedle"},
		{lvl:"25", attack:"Twineedle"},
		{lvl:"30", attack:"Pin Missile"},
		{lvl:"35", attack:"Twineedle"}
	]},
	"pidgey" : {basestat:[40,45,40,56,35], id:"#016", learnset:[
		{lvl:"1", attack:"Wing Attack"},
		{lvl:"1", attack:"Sand Attack"},
		{lvl:"1", attack:"Quick Attack"},
		{lvl:"5", attack:"Sand Attack"},
		{lvl:"6", attack:"Swift"},
		{lvl:"7", attack:"Sand Attack"},
		{lvl:"28", attack:"Sand Attack"},
		{lvl:"36", attack:"Sand Attack"},
		{lvl:"44", attack:"Sand Attack"}
	]},
	"pidgeotto" : {basestat:[63,60,55,71,50], id:"#017", learnset:[
		{lvl:"1", attack:"Wing Attack"},
		{lvl:"1", attack:"Sand Attack"},
		{lvl:"1", attack:"Quick Attack"},
		{lvl:"5", attack:"Sand Attack"},
		{lvl:"12", attack:"Sand Attack"},
		{lvl:"21", attack:"Sand Attack"},
		{lvl:"31", attack:"Sand Attack"},
		{lvl:"40", attack:"Sand Attack"},
		{lvl:"49", attack:"Mirror Move"}
	]},
	"pidgeot" : {basestat:[83,80,75,91,70], id:"#018", learnset:[
		{lvl:"1", attack:"Razor Wind"},
		{lvl:"1", attack:"Sand Attack"},
		{lvl:"1", attack:"Quick Attack"},
		{lvl:"1", attack:"Hyper Beam"},
		{lvl:"21", attack:"Razor Wind"},
		{lvl:"44", attack:"Quick Attack"}
	]},
	"rattata" : {basestat:[30,56,35,72,25], id:"#019", learnset:[
		{lvl:"1", attack:"Quick Attack"},
		{lvl:"7", attack:"Quick Attack"},
		{lvl:"14", attack:"Hyper Fang"},
		{lvl:"23", attack:"Focus Energy"},
		{lvl:"34", attack:"Super Fang"}
	]},
	"raticate" : {basestat:[55,81,60,97,50], id:"#020", learnset:[
		{lvl:"1", attack:"Body Slam"},
		{lvl:"1", attack:"Super Fang"},
		{lvl:"1", attack:"Dig"},
		{lvl:"1", attack:"Hyper Beam"},
		{lvl:"7", attack:"Super Fang"},
		{lvl:"14", attack:"Super Fang"},
		{lvl:"27", attack:"Super Fang"},
		{lvl:"41", attack:"Super Fang"}
	]},
	"spearow" : {basestat:[40,60,30,70,31], id:"#021", learnset:[
		{lvl:"1", attack:"Peck"},
		{lvl:"1", attack:"Growl"},
		{lvl:"9", attack:"Leer"},
		{lvl:"15", attack:"Fury Attack"},
		{lvl:"22", attack:"Mirror Move"},
		{lvl:"29", attack:"Drill Peck"},
		{lvl:"36", attack:"Agility"}
	]},
	"fearow" : {basestat:[65,90,65,100,61], id:"#022", learnset:[
		{lvl:"1", attack:"Drill Peck"},
		{lvl:"1", attack:"Hyper Beam"},
		{lvl:"1", attack:"Razor Wind"},
		{lvl:"9", attack:"Drill Peck"},
		{lvl:"15", attack:"Drill Peck"},
		{lvl:"25", attack:"Drill Peck"},
		{lvl:"34", attack:"Drill Peck"},
		{lvl:"43", attack:"Drill Peck"}
	]},
	"ekans" : {basestat:[35,60,44,55,40], id:"#023", learnset:[
		{lvl:"1", attack:"Wrap"},
		{lvl:"1", attack:"Glare"},
		{lvl:"10", attack:"Wrap"},
		{lvl:"15", attack:"Earthquake"},
		{lvl:"16", attack:"Rock Slide"},
		{lvl:"17", attack:"Body Slam"},
		{lvl:"18", attack:"Glare"}
	]},
	"arbok" : {basestat:[60,85,69,80,65], id:"#024", learnset:[
		{lvl:"1", attack:"Wrap"},
		{lvl:"1", attack:"Glare"},
		{lvl:"10", attack:"Glare"},
		{lvl:"17", attack:"Glare"},
		{lvl:"21", attack:"Fissure"},
		{lvl:"36", attack:"Glare"},
		{lvl:"47", attack:"Glare"}
	]},
	"pikachu" : {basestat:[35,55,30,90,50], id:"#025", learnset:[
		{lvl:"1", attack:"Thundershock"},
		{lvl:"1", attack:"Quick Attack"},
		{lvl:"1", attack:"Thunder Wave"},
		{lvl:"9", attack:"Headbutt"},
		{lvl:"16", attack:"Thunderpunch"},
		{lvl:"20", attack:"Thunderbolt"},
		{lvl:"30", attack:"Thunderbolt"},
		{lvl:"43", attack:"Thunder"}
	]},
	"raichu" : {basestat:[60,90,55,100,90], id:"#026", learnset:[
		{lvl:"1", attack:"Thunderbolt"},
		{lvl:"1", attack:"Body Slam"},
		{lvl:"1", attack:"Thunder Wave"},
		{lvl:"1", attack:"Surf"}
	]},
	"sandshrew" : {basestat:[50,75,85,40,30], id:"#027", learnset:[
		{lvl:"1", attack:"Slash"},
		{lvl:"1", attack:"Sand Attack"},
		{lvl:"10", attack:"Sand Attack"},
		{lvl:"16", attack:"Dig"},
		{lvl:"24", attack:"Slash"},
		{lvl:"31", attack:"Slash"},
		{lvl:"38", attack:"Earthquake"}
	]},
	"sandslash" : {basestat:[75,100,110,65,55], id:"#028", learnset:[
		{lvl:"1", attack:"Dig"},
		{lvl:"1", attack:"Slash"},
		{lvl:"10", attack:"Sand Attack"},
		{lvl:"17", attack:"Slash"},
		{lvl:"27", attack:"Rock Slide"},
		{lvl:"40", attack:"Earthquake"},
		{lvl:"47", attack:"Body Slam"}
	]},
	"nidoranf" : {basestat:[55,47,52,41,40], id:"#029", learnset:[
		{lvl:"1", attack:"Double Kick"},
		{lvl:"1", attack:"Bite"},
		{lvl:"1", attack:"Toxic"},
		{lvl:"8", attack:"Double Kick"},
		{lvl:"14", attack:"Double Kick"},
		{lvl:"21", attack:"Double Kick"},
		{lvl:"29", attack:"Double Kick"},
		{lvl:"36", attack:"Double Kick"},
		{lvl:"43", attack:"Double Kick"}
	]},
	"nidorina" : {basestat:[70,62,67,56,55], id:"#030", learnset:[
		{lvl:"1", attack:"Double Kick"},
		{lvl:"1", attack:"Bite"},
		{lvl:"1", attack:"Toxic"},
		{lvl:"8", attack:"Double Kick"},
		{lvl:"14", attack:"Dig"},
		{lvl:"23", attack:"Double Kick"},
		{lvl:"32", attack:"Double Kick"},
		{lvl:"41", attack:"Double Kick"},
		{lvl:"50", attack:"Double Kick"}
	]},
	"nidoqueen" : {basestat:[90,82,87,76,75], id:"#031", learnset:[
		{lvl:"1", attack:"Lovely Kiss"},
		{lvl:"1", attack:"Earthquake"},
		{lvl:"1", attack:"Thunderbolt"},
		{lvl:"1", attack:"Blizzard"},
		{lvl:"8", attack:"Thunderbolt"},
		{lvl:"14", attack:"Thunderbolt"},
		{lvl:"42", attack:"Earthquake"}
	]},
	"nidoranf" : {basestat:[46,57,40,50,40], id:"#032", learnset:[
		{lvl:"1", attack:"Double Kick"},
		{lvl:"1", attack:"Horn Attack"},
		{lvl:"1", attack:"Toxic"},
		{lvl:"8", attack:"Double Kick"},
		{lvl:"12", attack:"Dig"},
		{lvl:"21", attack:"Double Kick"},
		{lvl:"29", attack:"Double Kick"},
		{lvl:"36", attack:"Double Kick"},
		{lvl:"43", attack:"Double Kick"}
	]},
	"nidorino" : {basestat:[61,72,57,65,55], id:"#033", learnset:[
		{lvl:"1", attack:"Double Kick"},
		{lvl:"1", attack:"Toxic"},
		{lvl:"1", attack:"Horn Attack"},
		{lvl:"8", attack:"Double Kick"},
		{lvl:"14", attack:"Dig"},
		{lvl:"23", attack:"Double Kick"},
		{lvl:"32", attack:"Double Kick"},
		{lvl:"41", attack:"Double Kick"},
		{lvl:"50", attack:"Double Kick"}
	]},
	"nidoking" : {basestat:[81,92,77,85,75], id:"#034", learnset:[
		{lvl:"1", attack:"Blizzard"},
		{lvl:"1", attack:"Thunderbolt"},
		{lvl:"1", attack:"Lovely Kiss"},
		{lvl:"1", attack:"Earthquake"},
		{lvl:"8", attack:"Thunderbolt"},
		{lvl:"14", attack:"Thunderbolt"},
		{lvl:"42", attack:"Earthquake"}
	]},
	"clefairy" : {basestat:[70,45,48,35,60], id:"#035", learnset:[
		{lvl:"1", attack:"Sing"},
		{lvl:"1", attack:"Metronome"},
		{lvl:"13", attack:"Sing"},
		{lvl:"18", attack:"Sing"},
		{lvl:"24", attack:"Double-Edge"},
		{lvl:"31", attack:"Metronome"},
		{lvl:"39", attack:"Metronome"},
		{lvl:"48", attack:"Metronome"}
	]},
	"clefable" : {basestat:[95,70,73,60,85], id:"#036", learnset:[
		{lvl:"1", attack:"Body Slam"},
		{lvl:"1", attack:"Blizzard"},
		{lvl:"1", attack:"Psychic"},
		{lvl:"1", attack:"Thunder Wave"}
	]},
	"vulpix" : {basestat:[38,41,40,65,65], id:"#037", learnset:[
		{lvl:"1", attack:"Ember"},
		{lvl:"1", attack:"Confuse Ray"},
		{lvl:"10", attack:"Confuse Ray"},
		{lvl:"11", attack:"Double-Edge"},
		{lvl:"16", attack:"Flamethrower"},
		{lvl:"35", attack:"Flamethrower"},
		{lvl:"42", attack:"Flamethrower"}
	]},
	"ninetales" : {basestat:[73,76,75,100,100], id:"#038", learnset:[
		{lvl:"1", attack:"Fire Spin"}
	]},
	"jigglypuff" : {basestat:[115,45,20,20,25], id:"#039", learnset:[
		{lvl:"1", attack:"Sing"},
		{lvl:"1", attack:"Double-Edge"},
		{lvl:"1", attack:"Rest"},
		{lvl:"9", attack:"Double-Edge"},
		{lvl:"14", attack:"Double-Edge"},
		{lvl:"19", attack:"Double-Edge"},
		{lvl:"24", attack:"Double-Edge"},
		{lvl:"29", attack:"Double-Edge"},
		{lvl:"34", attack:"Body Slam"},
		{lvl:"39", attack:"Double-Edge"}
	]},
	"wigglytuff" : {basestat:[140,70,45,45,50], id:"#040", learnset:[
		{lvl:"1", attack:"Psychic"},
		{lvl:"1", attack:"Blizzard"},
		{lvl:"1", attack:"Double-Edge"},
		{lvl:"1", attack:"Thunder Wave"}
	]},
	"zubat" : {basestat:[40,45,35,55,40], id:"#041", learnset:[
		{lvl:"1", attack:"Wing Attack"},
		{lvl:"1", attack:"Toxic"},
		{lvl:"1", attack:"Confuse Ray"},
		{lvl:"10", attack:"Confuse Ray"},
		{lvl:"15", attack:"Confuse Ray"},
		{lvl:"16", attack:"Hypnosis"},
		{lvl:"28", attack:"Confuse Ray"},
		{lvl:"58", attack:"Hypnosis"}
	]},
	"golbat" : {basestat:[75,80,70,90,75], id:"#042", learnset:[
		{lvl:"1", attack:"Confuse Ray"},
		{lvl:"1", attack:"Razor Wind"},
		{lvl:"1", attack:"Mega Drain"},
		{lvl:"1", attack:"Hypnosis"},
		{lvl:"10", attack:"Confuse Ray"},
		{lvl:"15", attack:"Confuse Ray"},
		{lvl:"21", attack:"Confuse Ray"},
		{lvl:"32", attack:"Confuse Ray"},
		{lvl:"60", attack:"Hypnosis"}
	]},
	"oddish" : {basestat:[45,50,55,30,75], id:"#043", learnset:[
		{lvl:"1", attack:"Toxic"},
		{lvl:"1", attack:"Acid"},
		{lvl:"1", attack:"Stun Spore"},
		{lvl:"1", attack:"Mega Drain"},
		{lvl:"14", attack:"Sleep Powder"},
		{lvl:"15", attack:"Razor Leaf"},
		{lvl:"19", attack:"Sleep Powder"},
		{lvl:"24", attack:"Acid"},
		{lvl:"33", attack:"Petal Dance"},
		{lvl:"46", attack:"Solar Beam"}
	]},
	"gloom" : {basestat:[60,65,70,40,85], id:"#044", learnset:[
		{lvl:"1", attack:"Petal Dance"},
		{lvl:"1", attack:"Sleep Powder"},
		{lvl:"1", attack:"Stun Spore"},
		{lvl:"16", attack:"Petal Dance"},
		{lvl:"17", attack:"Petal Dance"},
		{lvl:"19", attack:"Sleep Powder"},
		{lvl:"28", attack:"Stun Spore"},
		{lvl:"38", attack:"Stun Spore"},
		{lvl:"52", attack:"Petal Dance"}
	]},
	"vileplume" : {basestat:[95,80,85,50,110], id:"#045", learnset:[
		{lvl:"1", attack:"Sleep Powder"},
		{lvl:"1", attack:"Stun Spore"},
		{lvl:"1", attack:"Petal Dance"},
		{lvl:"15", attack:"Stun Spore"},
		{lvl:"17", attack:"Sleep Powder"},
		{lvl:"19", attack:"Petal Dance"}
	]},
	"paras" : {basestat:[35,70,55,25,55], id:"#046", learnset:[
		{lvl:"1", attack:"Leech Life"},
		{lvl:"1", attack:"Toxic"},
		{lvl:"1", attack:"Mega Drain"},
		{lvl:"1", attack:"Stun Spore"},
		{lvl:"13", attack:"Stun Spore"},
		{lvl:"20", attack:"Stun Spore"},
		{lvl:"27", attack:"Spore"},
		{lvl:"34", attack:"Spore"},
		{lvl:"41", attack:"Spore"}
	]},
	"parasect" : {basestat:[60,95,80,30,80], id:"#047", learnset:[
		{lvl:"1", attack:"Stun Spore"},
		{lvl:"1", attack:"Mega Drain"},
		{lvl:"1", attack:"Body Slam"},
		{lvl:"1", attack:"Spore"},
		{lvl:"13", attack:"Stun Spore"},
		{lvl:"20", attack:"Stun Spore"},
		{lvl:"30", attack:"Stun Spore"},
		{lvl:"39", attack:"Stun Spore"},
		{lvl:"48", attack:"Stun Spore"}
	]},
	"venonat" : {basestat:[60,55,50,45,40], id:"#048", learnset:[
		{lvl:"1", attack:"Toxic"},
		{lvl:"1", attack:"Psybeam"},
		{lvl:"1", attack:"Stun Spore"},
		{lvl:"24", attack:"Stun Spore"},
		{lvl:"27", attack:"Stun Spore"},
		{lvl:"30", attack:"Stun Spore"},
		{lvl:"35", attack:"Psybeam"},
		{lvl:"38", attack:"Sleep Powder"},
		{lvl:"43", attack:"Psychic"}
	]},
	"venomoth" : {basestat:[70,65,60,90,90], id:"#049", learnset:[
		{lvl:"1", attack:"Psychic"},
		{lvl:"1", attack:"Stun Spore"},
		{lvl:"1", attack:"Sleep Powder"},
		{lvl:"24", attack:"Stun Spore"},
		{lvl:"27", attack:"Stun Spore"},
		{lvl:"30", attack:"Stun Spore"},
		{lvl:"38", attack:"Stun Spore"},
		{lvl:"43", attack:"Sleep Powder"},
		{lvl:"50", attack:"Psychic"}
	]},
	"diglett" : {basestat:[10,55,25,95,45], id:"#050", learnset:[
		{lvl:"1", attack:"Sand Attack"},
		{lvl:"1", attack:"Slash"},
		{lvl:"15", attack:"Sand Attack"},
		{lvl:"19", attack:"Dig"},
		{lvl:"24", attack:"Sand Attack"},
		{lvl:"31", attack:"Slash"},
		{lvl:"40", attack:"Earthquake"}
	]},
	"dugtrio" : {basestat:[35,80,50,120,70], id:"#051", learnset:[
		{lvl:"1", attack:"Dig"},
		{lvl:"1", attack:"Sand Attack"},
		{lvl:"1", attack:"Body Slam"},
		{lvl:"1", attack:"Fissure"},
		{lvl:"15", attack:"Dig"},
		{lvl:"19", attack:"Dig"},
		{lvl:"24", attack:"Dig"},
		{lvl:"35", attack:"Slash"},
		{lvl:"39", attack:"Earthquake"}
	]},
	"meowth" : {basestat:[40,45,35,90,40], id:"#052", learnset:[
		{lvl:"1", attack:"Bite"},
		{lvl:"12", attack:"Bite"},
		{lvl:"17", attack:"Pay Day"},
		{lvl:"24", attack:"Bite"},
		{lvl:"47", attack:"Slash"},
		{lvl:"58", attack:"Hypnosis"}
	]},
	"persian" : {basestat:[65,70,60,115,65], id:"#053", learnset:[
		{lvl:"1", attack:"Slash"},
		{lvl:"1", attack:"Hypnosis"},
		{lvl:"12", attack:"Slash"},
		{lvl:"17", attack:"Slash"},
		{lvl:"24", attack:"Slash"},
		{lvl:"51", attack:"Slash"},
		{lvl:"63", attack:"Hypnosis"}
	]},
	"psyduck" : {basestat:[50,52,48,55,50], id:"#054", learnset:[
		{lvl:"1", attack:"Confusion"},
		{lvl:"1", attack:"Bubble Beam"},
		{lvl:"9", attack:"Psybeam"},
		{lvl:"10", attack:"Waterfall"},
		{lvl:"11", attack:"Seismic Toss"},
		{lvl:"12", attack:"Hypnosis"},
		{lvl:"52", attack:"Amnesia"}
	]},
	"golduck" : {basestat:[80,82,78,85,80], id:"#055", learnset:[
		{lvl:"1", attack:"Waterfall"},
		{lvl:"1", attack:"Psychic"},
		{lvl:"1", attack:"Body Slam"},
		{lvl:"1", attack:"Hypnosis"},
		{lvl:"28", attack:"Psychic"},
		{lvl:"31", attack:"Psychic"},
		{lvl:"39", attack:"Psychic"},
		{lvl:"48", attack:"Hydro Pump"},
		{lvl:"59", attack:"Hypnosis"}
	]},
	"mankey" : {basestat:[40,80,35,70,35], id:"#056", learnset:[
		{lvl:"1", attack:"Karate Chop"},
		{lvl:"1", attack:"Low Kick"},
		{lvl:"11", attack:"Seismic Toss"},
		{lvl:"12", attack:"Thrash"},
		{lvl:"13", attack:"Submission"},
		{lvl:"14", attack:"Double-Edge"},
		{lvl:"39", attack:"Thrash"}
	]},
	"primeape" : {basestat:[65,105,60,95,60], id:"#057", learnset:[
		{lvl:"1", attack:"Submission"},
		{lvl:"1", attack:"Body Slam"},
		{lvl:"1", attack:"Seismic Toss"},
		{lvl:"1", attack:"Rock Slide"},
		{lvl:"15", attack:"Seismic Toss"},
		{lvl:"21", attack:"Seismic Toss"},
		{lvl:"27", attack:"Seismic Toss"},
		{lvl:"37", attack:"Seismic Toss"},
		{lvl:"46", attack:"Hi Jump Kick"}
	]},
	"growlithe" : {basestat:[55,70,45,60,50], id:"#058", learnset:[
		{lvl:"1", attack:"Bite"},
		{lvl:"1", attack:"Take Down"},
		{lvl:"1", attack:"Ember"},
		{lvl:"9", attack:"Bite"},
		{lvl:"10", attack:"Swift"},
		{lvl:"12", attack:"Double-Edge"},
		{lvl:"14", attack:"Flamethrower"},
		{lvl:"50", attack:"Fire Blast"}
	]},
	"arcanine" : {basestat:[90,110,80,95,80], id:"#059", learnset:[
		{lvl:"1", attack:"Fire Blast"},
		{lvl:"1", attack:"Body Slam"},
		{lvl:"1", attack:"Dig"}
	]},
	"poliwag" : {basestat:[40,50,40,90,40], id:"#060", learnset:[
		{lvl:"1", attack:"Bubble Beam"},
		{lvl:"1", attack:"Hypnosis"},
		{lvl:"10", attack:"Body Slam"},
		{lvl:"11", attack:"Body Slam"},
		{lvl:"31", attack:"Body Slam"},
		{lvl:"38", attack:"Body Slam"},
		{lvl:"45", attack:"Hydro Pump"}
	]},
	"poliwhirl" : {basestat:[65,65,65,90,50], id:"#061", learnset:[
		{lvl:"1", attack:"Submission"},
		{lvl:"1", attack:"Waterfall"},
		{lvl:"1", attack:"Hypnosis"},
		{lvl:"1", attack:"Seismic Toss"},
		{lvl:"14", attack:"Submission"},
		{lvl:"15", attack:"Seismic Toss"},
		{lvl:"26", attack:"Body Slam"},
		{lvl:"33", attack:"Hydro Pump"},
		{lvl:"41", attack:"Hydro Pump"},
		{lvl:"49", attack:"Hydro Pump"}
	]},
	"poliwrath" : {basestat:[90,85,95,70,70], id:"#062", learnset:[
		{lvl:"1", attack:"Waterfall"},
		{lvl:"1", attack:"Ice Beam"},
		{lvl:"1", attack:"Earthquake"},
		{lvl:"1", attack:"Lovely Kiss"},
		{lvl:"35", attack:"Blizzard"},
		{lvl:"40", attack:"Hydro Pump"}
	]},
	"abra" : {basestat:[25,20,15,90,105], id:"#063", learnset:[
		{lvl:"1", attack:"Confusion"},
		{lvl:"1", attack:"Kinesis"}
	]},
	"kadabra" : {basestat:[40,35,30,105,120], id:"#064", learnset:[
		{lvl:"1", attack:"Kinesis"},
		{lvl:"1", attack:"Psybeam"},
		{lvl:"1", attack:"Thunder Wave"},
		{lvl:"16", attack:"Psybeam"},
		{lvl:"20", attack:"Psybeam"},
		{lvl:"27", attack:"Psybeam"},
		{lvl:"31", attack:"Recover"},
		{lvl:"38", attack:"Psychic"},
		{lvl:"42", attack:"Seismic Toss"}
	]},
	"alakazam" : {basestat:[55,50,45,120,135], id:"#065", learnset:[
		{lvl:"1", attack:"Thunder Wave"},
		{lvl:"1", attack:"Psychic"},
		{lvl:"1", attack:"Recover"},
		{lvl:"16", attack:"Recover"},
		{lvl:"20", attack:"Recover"},
		{lvl:"27", attack:"Recover"},
		{lvl:"31", attack:"Recover"},
		{lvl:"38", attack:"Psychic"},
		{lvl:"42", attack:"Recover"}
	]},
	"machop" : {basestat:[70,80,50,35,35], id:"#066", learnset:[
		{lvl:"1", attack:"Karate Chop"},
		{lvl:"1", attack:"Low Kick"},
		{lvl:"20", attack:"Low Kick"},
		{lvl:"25", attack:"Low Kick"},
		{lvl:"32", attack:"Seismic Toss"},
		{lvl:"39", attack:"Seismic Toss"},
		{lvl:"46", attack:"Submission"}
	]},
	"machoke" : {basestat:[80,100,70,45,50], id:"#067", learnset:[
		{lvl:"1", attack:"Karate Chop"},
		{lvl:"1", attack:"Low Kick"},
		{lvl:"1", attack:"Submission"},
		{lvl:"20", attack:"Submission"},
		{lvl:"25", attack:"Submission"},
		{lvl:"36", attack:"Seismic Toss"},
		{lvl:"44", attack:"Seismic Toss"},
		{lvl:"52", attack:"Submission"}
	]},
	"machamp" : {basestat:[90,130,80,55,65], id:"#068", learnset:[
		{lvl:"1", attack:"Submission"},
		{lvl:"1", attack:"Body Slam"},
		{lvl:"1", attack:"Rock Slide"},
		{lvl:"1", attack:"Earthquake"},
		{lvl:"20", attack:"Submission"},
		{lvl:"25", attack:"Submission"},
		{lvl:"36", attack:"Submission"},
		{lvl:"44", attack:"Submission"},
		{lvl:"52", attack:"Hi Jump Kick"}
	]},
	"bellsprout" : {basestat:[50,75,35,40,70], id:"#069", learnset:[
		{lvl:"1", attack:"Toxic"},
		{lvl:"1", attack:"Stun Spore"},
		{lvl:"1", attack:"Double-Edge"},
		{lvl:"10", attack:"Mega Drain"},
		{lvl:"11", attack:"Sleep Powder"},
		{lvl:"16", attack:"Body Slam"},
		{lvl:"21", attack:"Sleep Powder"},
		{lvl:"26", attack:"Stun Spore"},
		{lvl:"33", attack:"Razor Leaf"},
		{lvl:"42", attack:"Slam"}
	]},
	"weepinbell" : {basestat:[65,90,50,55,85], id:"#070", learnset:[
		{lvl:"1", attack:"Sleep Powder"},
		{lvl:"1", attack:"Stun Spore"},
		{lvl:"1", attack:"Body Slam"},
		{lvl:"16", attack:"Mega Drain"},
		{lvl:"17", attack:"Stun Spore"},
		{lvl:"18", attack:"Stun Spore"},
		{lvl:"23", attack:"Stun Spore"},
		{lvl:"29", attack:"Stun Spore"},
		{lvl:"38", attack:"Razor Leaf"},
		{lvl:"49", attack:"Sleep Powder"}
	]},
	"victreebel" : {basestat:[80,105,65,70,100], id:"#071", learnset:[
		{lvl:"1", attack:"Razor Leaf"},
		{lvl:"1", attack:"Stun Spore"},
		{lvl:"1", attack:"Body Slam"},
		{lvl:"1", attack:"Lovely Kiss"},
		{lvl:"13", attack:"Razor Leaf"},
		{lvl:"15", attack:"Razor Leaf"},
		{lvl:"100", attack:"Lovely Kiss"}
	]},
	"tentacool" : {basestat:[40,40,35,70,100], id:"#072", learnset:[
		{lvl:"1", attack:"Wrap"},
		{lvl:"1", attack:"Supersonic"},
		{lvl:"1", attack:"Toxic"},
		{lvl:"1", attack:"Bubble Beam"},
		{lvl:"7", attack:"Toxic"},
		{lvl:"13", attack:"Toxic"},
		{lvl:"18", attack:"Toxic"},
		{lvl:"22", attack:"Toxic"},
		{lvl:"27", attack:"Toxic"},
		{lvl:"33", attack:"Toxic"},
		{lvl:"40", attack:"Toxic"},
		{lvl:"48", attack:"Hydro Pump"}
	]},
	"tentacruel" : {basestat:[80,70,65,100,120], id:"#073", learnset:[
		{lvl:"1", attack:"Wrap"},
		{lvl:"1", attack:"Surf"},
		{lvl:"7", attack:"Wrap"},
		{lvl:"13", attack:"Wrap"},
		{lvl:"18", attack:"Wrap"},
		{lvl:"22", attack:"Wrap"},
		{lvl:"27", attack:"Wrap"},
		{lvl:"35", attack:"Wrap"},
		{lvl:"43", attack:"Wrap"},
		{lvl:"50", attack:"Blizzard"}
	]},
	"geodude" : {basestat:[40,80,100,20,30], id:"#074", learnset:[
		{lvl:"1", attack:"Selfdestruct"},
		{lvl:"11", attack:"Selfdestruct"},
		{lvl:"16", attack:"Selfdestruct"},
		{lvl:"21", attack:"Rock Slide"},
		{lvl:"26", attack:"Dig"},
		{lvl:"31", attack:"Earthquake"},
		{lvl:"36", attack:"Explosion"}
	]},
	"graveler" : {basestat:[55,95,115,35,45], id:"#075", learnset:[
		{lvl:"1", attack:"Dig"},
		{lvl:"1", attack:"Selfdestruct"},
		{lvl:"1", attack:"Rock Slide"},
		{lvl:"1", attack:"Explosion"},
		{lvl:"11", attack:"Explosion"},
		{lvl:"16", attack:"Explosion"},
		{lvl:"21", attack:"Explosion"},
		{lvl:"29", attack:"Explosion"},
		{lvl:"36", attack:"Rock Slide"},
		{lvl:"42", attack:"Earthquake"}
	]},
	"golem" : {basestat:[80,110,130,45,55], id:"#076", learnset:[
		{lvl:"1", attack:"Body Slam"},
		{lvl:"1", attack:"Rock Slide"},
		{lvl:"1", attack:"Earthquake"},
		{lvl:"1", attack:"Explosion"},
		{lvl:"11", attack:"Explosion"},
		{lvl:"16", attack:"Explosion"},
		{lvl:"21", attack:"Explosion"},
		{lvl:"29", attack:"Explosion"},
		{lvl:"36", attack:"Explosion"},
		{lvl:"43", attack:"Explosion"}
	]},
	"ponyta" : {basestat:[50,85,55,90,65], id:"#077", learnset:[
		{lvl:"1", attack:"Ember"},
		{lvl:"1", attack:"Double Kick"},
		{lvl:"1", attack:"Stomp"},
		{lvl:"16", attack:"Flamethrower"},
		{lvl:"18", attack:"Double-Edge"},
		{lvl:"24", attack:"Hypnosis"},
		{lvl:"39", attack:"Hypnosis"},
		{lvl:"43", attack:"Hypnosis"},
		{lvl:"48", attack:"Hypnosis"}
	]},
	"rapidash" : {basestat:[65,100,70,110,80], id:"#078", learnset:[
		{lvl:"1", attack:"Horn Drill"},
		{lvl:"74", attack:"Hypnosis"},
		{lvl:"75", attack:"Hypnosis"},
		{lvl:"76", attack:"Hypnosis"},
		{lvl:"77", attack:"Hypnosis"},
		{lvl:"78", attack:"Hypnosis"},
		{lvl:"79", attack:"Hypnosis"}
	]},
	"slowpoke" : {basestat:[90,65,65,15,40], id:"#079", learnset:[
		{lvl:"1", attack:"Confusion"},
		{lvl:"1", attack:"Bubble Beam"},
		{lvl:"1", attack:"Headbutt"},
		{lvl:"18", attack:"Confusion"},
		{lvl:"22", attack:"Confusion"},
		{lvl:"27", attack:"Confusion"},
		{lvl:"33", attack:"Confusion"},
		{lvl:"40", attack:"Amnesia"},
		{lvl:"48", attack:"Psychic"}
	]},
	"slowbro" : {basestat:[95,75,110,30,80], id:"#080", learnset:[
		{lvl:"1", attack:"Confusion"},
		{lvl:"1", attack:"Waterfall"},
		{lvl:"1", attack:"Thunder Wave"},
		{lvl:"18", attack:"Psychic"},
		{lvl:"22", attack:"Surf"},
		{lvl:"27", attack:"Psychic"},
		{lvl:"33", attack:"Psychic"},
		{lvl:"37", attack:"Amnesia"},
		{lvl:"44", attack:"Amnesia"},
		{lvl:"55", attack:"Psychic"}
	]},
	"magnemite" : {basestat:[25,35,70,45,95], id:"#081", learnset:[
		{lvl:"1", attack:"Thunderbolt"},
		{lvl:"1", attack:"Sonicboom"},
		{lvl:"1", attack:"Thunder Wave"},
		{lvl:"1", attack:"Double-Edge"},
		{lvl:"21", attack:"Thunderbolt"},
		{lvl:"25", attack:"Thunderbolt"},
		{lvl:"29", attack:"Thunderbolt"},
		{lvl:"35", attack:"Thunderbolt"},
		{lvl:"41", attack:"Thunderbolt"},
		{lvl:"47", attack:"Thunderbolt"}
	]},
	"magneton" : {basestat:[50,60,95,70,120], id:"#082", learnset:[
		{lvl:"1", attack:"Thunder Wave"},
		{lvl:"1", attack:"Thunderbolt"},
		{lvl:"1", attack:"Double Team"},
		{lvl:"1", attack:"Double-Edge"},
		{lvl:"21", attack:"Double-Edge"},
		{lvl:"25", attack:"Double-Edge"},
		{lvl:"29", attack:"Double-Edge"},
		{lvl:"38", attack:"Double-Edge"},
		{lvl:"46", attack:"Double-Edge"},
		{lvl:"54", attack:"Double-Edge"}
	]},
	"farfetch'd" : {basestat:[52,65,55,60,58], id:"#083", learnset:[
		{lvl:"1", attack:"Substitute"},
		{lvl:"1", attack:"Sand Attack"},
		{lvl:"1", attack:"Slash"},
		{lvl:"7", attack:"Slash"},
		{lvl:"15", attack:"Slash"},
		{lvl:"23", attack:"Slash"},
		{lvl:"31", attack:"Slash"},
		{lvl:"39", attack:"Agility"}
	]},
	"doduo" : {basestat:[35,85,45,75,35], id:"#084", learnset:[
		{lvl:"1", attack:"Peck"},
		{lvl:"1", attack:"Take Down"},
		{lvl:"1", attack:"Double Kick"},
		{lvl:"20", attack:"Take Down"},
		{lvl:"24", attack:"Take Down"},
		{lvl:"30", attack:"Drill Peck"},
		{lvl:"36", attack:"Tri Attack"},
		{lvl:"40", attack:"Tri Attack"},
		{lvl:"44", attack:"Agility"}
	]},
	"dodrio" : {basestat:[60,110,70,100,60], id:"#085", learnset:[
		{lvl:"1", attack:"Body Slam"},
		{lvl:"1", attack:"Hyper Beam"},
		{lvl:"1", attack:"Drill Peck"},
		{lvl:"20", attack:"Drill Peck"},
		{lvl:"24", attack:"Drill Peck"},
		{lvl:"30", attack:"Drill Peck"},
		{lvl:"39", attack:"Drill Peck"},
		{lvl:"45", attack:"Drill Peck"},
		{lvl:"51", attack:"Drill Peck"}
	]},
	"seel" : {basestat:[65,45,55,45,70], id:"#086", learnset:[
		{lvl:"1", attack:"Aurora Beam"},
		{lvl:"1", attack:"Headbutt"},
		{lvl:"1", attack:"Bubble Beam"},
		{lvl:"1", attack:"Rest"},
		{lvl:"30", attack:"Aurora Beam"},
		{lvl:"35", attack:"Aurora Beam"},
		{lvl:"40", attack:"Rest"},
		{lvl:"45", attack:"Take Down"},
		{lvl:"50", attack:"Ice Beam"}
	]},
	"dewgong" : {basestat:[90,70,80,70,95], id:"#087", learnset:[
		{lvl:"1", attack:"Ice Beam"},
		{lvl:"1", attack:"Waterfall"},
		{lvl:"1", attack:"Body Slam"},
		{lvl:"1", attack:"Horn Drill"},
		{lvl:"30", attack:"Waterfall"},
		{lvl:"35", attack:"Waterfall"},
		{lvl:"44", attack:"Waterfall"},
		{lvl:"49", attack:"Hydro Pump"},
		{lvl:"50", attack:"Rest"}
	]},
	"grimer" : {basestat:[80,80,50,25,40], id:"#088", learnset:[
		{lvl:"1", attack:"Toxic"},
		{lvl:"1", attack:"Sludge"},
		{lvl:"1", attack:"Explosion"},
		{lvl:"30", attack:"Explosion"},
		{lvl:"33", attack:"Explosion"},
		{lvl:"37", attack:"Explosion"},
		{lvl:"42", attack:"Explosion"},
		{lvl:"48", attack:"Explosion"},
		{lvl:"55", attack:"Acid Armor"}
	]},
	"muk" : {basestat:[105,105,75,50,65], id:"#089", learnset:[
		{lvl:"1", attack:"Sludge"},
		{lvl:"1", attack:"Explosion"},
		{lvl:"1", attack:"Toxic"},
		{lvl:"1", attack:"Body Slam"},
		{lvl:"30", attack:"Sludge"},
		{lvl:"33", attack:"Sludge"},
		{lvl:"37", attack:"Sludge"},
		{lvl:"45", attack:"Sludge"},
		{lvl:"53", attack:"Sludge"},
		{lvl:"60", attack:"Sludge"}
	]},
	"shellder" : {basestat:[30,65,100,40,45], id:"#090", learnset:[
		{lvl:"1", attack:"Explosion"},
		{lvl:"1", attack:"Clamp"},
		{lvl:"1", attack:"Aurora Beam"},
		{lvl:"18", attack:"Supersonic"},
		{lvl:"23", attack:"Clamp"},
		{lvl:"30", attack:"Aurora Beam"},
		{lvl:"39", attack:"Ice Beam"},
		{lvl:"50", attack:"Ice Beam"}
	]},
	"cloyster" : {basestat:[50,95,180,70,85], id:"#091", learnset:[
		{lvl:"1", attack:"Explosion"},
		{lvl:"1", attack:"Blizzard"},
		{lvl:"1", attack:"Clamp"},
		{lvl:"50", attack:"Explosion"}
	]},
	"gastly" : {basestat:[30,35,30,80,100], id:"#092", learnset:[
		{lvl:"1", attack:"Hypnosis"},
		{lvl:"1", attack:"Confuse Ray"},
		{lvl:"1", attack:"Night Shade"},
		{lvl:"27", attack:"Hypnosis"},
		{lvl:"35", attack:"Hypnosis"}
	]},
	"haunter" : {basestat:[45,50,45,95,115], id:"#093", learnset:[
		{lvl:"1", attack:"Hypnosis"},
		{lvl:"1", attack:"Confuse Ray"},
		{lvl:"1", attack:"Night Shade"},
		{lvl:"29", attack:"Hypnosis"},
		{lvl:"56", attack:"Psychic"}
	]},
	"gengar" : {basestat:[60,65,60,110,130], id:"#094", learnset:[
		{lvl:"1", attack:"Explosion"},
		{lvl:"1", attack:"Hypnosis"},
		{lvl:"1", attack:"Psychic"},
		{lvl:"1", attack:"Night Shade"},
		{lvl:"29", attack:"Hypnosis"},
		{lvl:"100", attack:"Seismic Toss"}
	]},
	"onix" : {basestat:[35,45,160,70,30], id:"#095", learnset:[
		{lvl:"1", attack:"Bind"},
		{lvl:"1", attack:"Earthquake"},
		{lvl:"1", attack:"Rock Slide"},
		{lvl:"15", attack:"Bind"},
		{lvl:"19", attack:"Bind"},
		{lvl:"25", attack:"Bind"},
		{lvl:"33", attack:"Bind"},
		{lvl:"43", attack:"Bind"}
	]},
	"drowzee" : {basestat:[60,48,45,42,90], id:"#096", learnset:[
		{lvl:"1", attack:"Confusion"},
		{lvl:"1", attack:"Hypnosis"},
		{lvl:"12", attack:"Thunder Wave"},
		{lvl:"17", attack:"Toxic"},
		{lvl:"24", attack:"Psychic"},
		{lvl:"29", attack:"Psychic"},
		{lvl:"32", attack:"Psychic"},
		{lvl:"37", attack:"Psychic"}
	]},
	"hypno" : {basestat:[85,73,70,67,115], id:"#097", learnset:[
		{lvl:"1", attack:"Thunder Wave"},
		{lvl:"1", attack:"Hypnosis"},
		{lvl:"1", attack:"Psychic"},
		{lvl:"12", attack:"Hypnosis"},
		{lvl:"17", attack:"Hypnosis"},
		{lvl:"24", attack:"Hypnosis"},
		{lvl:"33", attack:"Hypnosis"},
		{lvl:"37", attack:"Hypnosis"},
		{lvl:"43", attack:"Psychic"}
	]},
	"krabby" : {basestat:[30,105,90,50,25], id:"#098", learnset:[
		{lvl:"1", attack:"Crabhammer"},
		{lvl:"1", attack:"Vicegrip"},
		{lvl:"10", attack:"Crabhammer"},
		{lvl:"14", attack:"Body Slam"},
		{lvl:"30", attack:"Body Slam"},
		{lvl:"35", attack:"Body Slam"},
		{lvl:"40", attack:"Body Slam"}
	]},
	"kingler" : {basestat:[55,130,115,75,50], id:"#099", learnset:[
		{lvl:"1", attack:"Crabhammer"},
		{lvl:"1", attack:"Body Slam"},
		{lvl:"1", attack:"Guillotine"},
		{lvl:"20", attack:"Crabhammer"},
		{lvl:"25", attack:"Crabhammer"},
		{lvl:"34", attack:"Crabhammer"},
		{lvl:"42", attack:"Crabhammer"},
		{lvl:"49", attack:"Crabhammer"}
	]},
	"voltorb" : {basestat:[40,30,50,100,55], id:"#100", learnset:[
		{lvl:"1", attack:"Sonicboom"},
		{lvl:"1", attack:"Selfdestruct"},
		{lvl:"1", attack:"Explosion"},
		{lvl:"1", attack:"Thunder Wave"},
		{lvl:"17", attack:"Sonicboom"},
		{lvl:"22", attack:"Selfdestruct"},
		{lvl:"29", attack:"Thunderbolt"},
		{lvl:"36", attack:"Thunder Wave"},
		{lvl:"43", attack:"Explosion"}
	]},
	"electrode" : {basestat:[60,50,70,140,80], id:"#101", learnset:[
		{lvl:"1", attack:"Explosion"},
		{lvl:"1", attack:"Thunderbolt"},
		{lvl:"1", attack:"Thunder Wave"},
		{lvl:"17", attack:"Explosion"},
		{lvl:"22", attack:"Explosion"},
		{lvl:"29", attack:"Explosion"},
		{lvl:"40", attack:"Explosion"},
		{lvl:"50", attack:"Explosion"}
	]},
	"exeggcute" : {basestat:[80,65,80,40,80], id:"#102", learnset:[
		{lvl:"1", attack:"Hypnosis"},
		{lvl:"1", attack:"Psybeam"},
		{lvl:"1", attack:"Explosion"},
		{lvl:"1", attack:"Stun Spore"},
		{lvl:"20", attack:"Sleep Powder"},
		{lvl:"22", attack:"Psychic"},
		{lvl:"32", attack:"Psychic"},
		{lvl:"37", attack:"Psychic"},
		{lvl:"42", attack:"Psychic"},
		{lvl:"48", attack:"Sleep Powder"}
	]},
	"exeggutor" : {basestat:[95,95,85,55,125], id:"#103", learnset:[
		{lvl:"1", attack:"Stun Spore"},
		{lvl:"1", attack:"Sleep Powder"},
		{lvl:"1", attack:"Psychic"},
		{lvl:"28", attack:"Psychic"}
	]},
	"cubone" : {basestat:[50,50,95,35,40], id:"#104", learnset:[
		{lvl:"1", attack:"Bone Club"},
		{lvl:"1", attack:"Headbutt"},
		{lvl:"9", attack:"Headbutt"},
		{lvl:"10", attack:"Double-Edge"},
		{lvl:"12", attack:"Rock Slide"},
		{lvl:"13", attack:"Bonemerang"},
		{lvl:"46", attack:"Bonemerang"}
	]},
	"marowak" : {basestat:[60,80,110,45,50], id:"#105", learnset:[
		{lvl:"1", attack:"Bonemerang"},
		{lvl:"1", attack:"Rock Slide"},
		{lvl:"1", attack:"Earthquake"},
		{lvl:"1", attack:"Body Slam"},
		{lvl:"25", attack:"Bonemerang"},
		{lvl:"33", attack:"Bonemerang"},
		{lvl:"41", attack:"Bonemerang"},
		{lvl:"48", attack:"Bonemerang"},
		{lvl:"55", attack:"Bonemerang"}
	]},
	"hitmonlee" : {basestat:[50,120,53,87,35], id:"#106", learnset:[
		{lvl:"1", attack:"Hi Jump Kick"},
		{lvl:"1", attack:"Body Slam"},
		{lvl:"1", attack:"Seismic Toss"},
		{lvl:"33", attack:"Hi Jump Kick"},
		{lvl:"38", attack:"Hi Jump Kick"},
		{lvl:"43", attack:"Hi Jump Kick"},
		{lvl:"48", attack:"Hi Jump Kick"},
		{lvl:"53", attack:"Hi Jump Kick"}
	]},
	"hitmonchan" : {basestat:[50,105,79,76,35], id:"#107", learnset:[
		{lvl:"1", attack:"Submission"},
		{lvl:"1", attack:"Body Slam"},
		{lvl:"1", attack:"Seismic Toss"},
		{lvl:"33", attack:"Seismic Toss"},
		{lvl:"38", attack:"Seismic Toss"},
		{lvl:"43", attack:"Seismic Toss"},
		{lvl:"48", attack:"Seismic Toss"},
		{lvl:"53", attack:"Seismic Toss"}
	]},
	"lickitung" : {basestat:[90,55,75,30,60], id:"#108", learnset:[
		{lvl:"1", attack:"Lick"},
		{lvl:"1", attack:"Wrap"},
		{lvl:"1", attack:"Body Slam"},
		{lvl:"7", attack:"Body Slam"},
		{lvl:"15", attack:"Body Slam"},
		{lvl:"23", attack:"Body Slam"},
		{lvl:"31", attack:"Earthquake"},
		{lvl:"39", attack:"Hyper Beam"}
	]},
	"koffing" : {basestat:[40,65,95,35,60], id:"#109", learnset:[
		{lvl:"1", attack:"Smokescreen"},
		{lvl:"1", attack:"Sludge"},
		{lvl:"1", attack:"Explosion"},
		{lvl:"1", attack:"Toxic"},
		{lvl:"32", attack:"Explosion"},
		{lvl:"37", attack:"Explosion"},
		{lvl:"40", attack:"Explosion"},
		{lvl:"45", attack:"Explosion"},
		{lvl:"48", attack:"Explosion"}
	]},
	"weezing" : {basestat:[65,90,120,60,85], id:"#110", learnset:[
		{lvl:"1", attack:"Toxic"},
		{lvl:"1", attack:"Explosion"},
		{lvl:"1", attack:"Sludge"},
		{lvl:"1", attack:"Fire Blast"},
		{lvl:"32", attack:"Sludge"},
		{lvl:"39", attack:"Sludge"},
		{lvl:"43", attack:"Sludge"},
		{lvl:"49", attack:"Explosion"},
		{lvl:"53", attack:"Thunderbolt"}
	]},
	"rhyhorn" : {basestat:[80,85,95,25,30], id:"#111", learnset:[
		{lvl:"1", attack:"Double-Edge"},
		{lvl:"30", attack:"Rock Slide"},
		{lvl:"35", attack:"Rock Slide"},
		{lvl:"40", attack:"Rock Slide"},
		{lvl:"42", attack:"Earthquake"},
		{lvl:"50", attack:"Rock Slide"},
		{lvl:"55", attack:"Earthquake"}
	]},
	"rhydon" : {basestat:[105,130,120,40,45], id:"#112", learnset:[
		{lvl:"1", attack:"Earthquake"},
		{lvl:"1", attack:"Body Slam"},
		{lvl:"1", attack:"Rock Slide"},
		{lvl:"30", attack:"Rock Slide"},
		{lvl:"40", attack:"Rock Slide"},
		{lvl:"42", attack:"Earthquake"},
		{lvl:"48", attack:"Rock Slide"},
		{lvl:"55", attack:"Rock Slide"},
		{lvl:"64", attack:"Earthquake"}
	]},
	"chansey" : {basestat:[255,5,45,50,105], id:"#113", learnset:[
		{lvl:"1", attack:"Minimize"},
		{lvl:"1", attack:"Seismic Toss"},
		{lvl:"1", attack:"Thunder Wave"},
		{lvl:"1", attack:"Softboiled"},
		{lvl:"24", attack:"Thunderbolt"},
		{lvl:"25", attack:"Ice Beam"},
		{lvl:"38", attack:"Ice Beam"},
		{lvl:"44", attack:"Thunderbolt"},
		{lvl:"48", attack:"Softboiled"},
		{lvl:"54", attack:"Softboiled"}
	]},
	"tangela" : {basestat:[65,55,115,60,100], id:"#114", learnset:[
		{lvl:"1", attack:"Stun Spore"},
		{lvl:"1", attack:"Sleep Powder"},
		{lvl:"1", attack:"Wrap"},
		{lvl:"29", attack:"Stun Spore"},
		{lvl:"32", attack:"Stun Spore"},
		{lvl:"36", attack:"Stun Spore"},
		{lvl:"39", attack:"Sleep Powder"},
		{lvl:"45", attack:"Sleep Powder"},
		{lvl:"49", attack:"Sleep Powder"}
	]},
	"kangaskhan" : {basestat:[105,95,80,90,75], id:"#115", learnset:[
		{lvl:"1", attack:"Body Slam"},
		{lvl:"26", attack:"Earthquake"},
		{lvl:"31", attack:"Body Slam"},
		{lvl:"36", attack:"Body Slam"},
		{lvl:"41", attack:"Hyper Beam"},
		{lvl:"46", attack:"Hyper Beam"}
	]},
	"horsea" : {basestat:[30,40,70,60,70], id:"#116", learnset:[
		{lvl:"1", attack:"Toxic"},
		{lvl:"1", attack:"Bubble Beam"},
		{lvl:"1", attack:"Smokescreen"},
		{lvl:"19", attack:"Smokescreen"},
		{lvl:"24", attack:"Smokescreen"},
		{lvl:"30", attack:"Smokescreen"},
		{lvl:"37", attack:"Smokescreen"},
		{lvl:"45", attack:"Hydro Pump"}
	]},
	"seadra" : {basestat:[55,65,95,85,95], id:"#117", learnset:[
		{lvl:"1", attack:"Dragon Rage"},
		{lvl:"19", attack:"Dragon Rage"},
		{lvl:"24", attack:"Toxic"},
		{lvl:"30", attack:"Hydro Pump"},
		{lvl:"41", attack:"Smokescreen"},
		{lvl:"52", attack:"Hydro Pump"}
	]},
	"goldeen" : {basestat:[45,67,60,63,50], id:"#118", learnset:[
		{lvl:"1", attack:"Peck"},
		{lvl:"1", attack:"Waterfall"},
		{lvl:"1", attack:"Supersonic"},
		{lvl:"19", attack:"Waterfall"},
		{lvl:"24", attack:"Waterfall"},
		{lvl:"30", attack:"Waterfall"},
		{lvl:"37", attack:"Waterfall"},
		{lvl:"45", attack:"Horn Drill"},
		{lvl:"48", attack:"Agility"}
	]},
	"seaking" : {basestat:[80,92,65,68,80], id:"#119", learnset:[
		{lvl:"1", attack:"Horn Drill"},
		{lvl:"19", attack:"Bubble Beam"},
		{lvl:"24", attack:"Bubble Beam"},
		{lvl:"30", attack:"Bubble Beam"},
		{lvl:"39", attack:"Waterfall"},
		{lvl:"48", attack:"Horn Drill"},
		{lvl:"54", attack:"Agility"}
	]},
	"staryu" : {basestat:[30,45,55,85,70], id:"#120", learnset:[
		{lvl:"1", attack:"Double-Edge"},
		{lvl:"17", attack:"Water Gun"},
		{lvl:"22", attack:"Light Screen"},
		{lvl:"27", attack:"Bubble Beam"},
		{lvl:"32", attack:"Bubble Beam"},
		{lvl:"37", attack:"Recover"},
		{lvl:"42", attack:"Thunder Wave"},
		{lvl:"47", attack:"Hydro Pump"}
	]},
	"starmie" : {basestat:[60,75,85,115,100], id:"#121", learnset:[
		{lvl:"1", attack:"Thunder Wave"},
		{lvl:"1", attack:"Blizzard"},
		{lvl:"1", attack:"Thunderbolt"},
		{lvl:"1", attack:"Recover"}
	]},
	"mr. mime" : {basestat:[40,45,65,90,100], id:"#122", learnset:[
		{lvl:"1", attack:"Psybeam"},
		{lvl:"1", attack:"Thunder Wave"},
		{lvl:"15", attack:"Thunder Wave"},
		{lvl:"20", attack:"Hypnosis"},
		{lvl:"25", attack:"Thunderbolt"},
		{lvl:"39", attack:"Psychic"}
	]},
	"scyther" : {basestat:[70,110,80,105,55], id:"#123", learnset:[
		{lvl:"1", attack:"Substitute"},
		{lvl:"1", attack:"Slash"},
		{lvl:"1", attack:"Quick Attack"},
		{lvl:"1", attack:"Wing Attack"},
		{lvl:"17", attack:"Slash"},
		{lvl:"20", attack:"Slash"},
		{lvl:"24", attack:"Slash"},
		{lvl:"29", attack:"Slash"},
		{lvl:"35", attack:"Slash"},
		{lvl:"48", attack:"Slash"}
	]},
	"jynx" : {basestat:[65,50,60,100,115], id:"#124", learnset:[
		{lvl:"1", attack:"Psychic"},
		{lvl:"1", attack:"Lovely Kiss"},
		{lvl:"1", attack:"Blizzard"},
		{lvl:"18", attack:"Lovely Kiss"},
		{lvl:"23", attack:"Lovely Kiss"},
		{lvl:"31", attack:"Lovely Kiss"},
		{lvl:"39", attack:"Lovely Kiss"},
		{lvl:"47", attack:"Lovely Kiss"},
		{lvl:"58", attack:"Lovely Kiss"}
	]},
	"electabuzz" : {basestat:[65,95,60,110,100], id:"#125", learnset:[
		{lvl:"1", attack:"Psychic"},
		{lvl:"1", attack:"Thunderbolt"},
		{lvl:"1", attack:"Ice Punch"},
		{lvl:"1", attack:"Thunder Wave"},
		{lvl:"34", attack:"Psychic"},
		{lvl:"37", attack:"Psychic"},
		{lvl:"42", attack:"Psychic"},
		{lvl:"49", attack:"Psychic"},
		{lvl:"54", attack:"Psychic"}
	]},
	"magmar" : {basestat:[65,100,60,105,125], id:"#126", learnset:[
		{lvl:"1", attack:"Confuse Ray"},
		{lvl:"1", attack:"Thunderbolt"},
		{lvl:"1", attack:"Body Slam"},
		{lvl:"1", attack:"Fire Blast"},
		{lvl:"36", attack:"Confuse Ray"},
		{lvl:"39", attack:"Confuse Ray"},
		{lvl:"43", attack:"Confuse Ray"},
		{lvl:"48", attack:"Confuse Ray"},
		{lvl:"52", attack:"Confuse Ray"},
		{lvl:"75", attack:"Solar Beam"}
	]},
	"pinsir" : {basestat:[65,125,100,85,55], id:"#127", learnset:[
		{lvl:"1", attack:"Wrap"},
		{lvl:"1", attack:"Guillotine"},
		{lvl:"1", attack:"Body Slam"},
		{lvl:"25", attack:"Guillotine"},
		{lvl:"30", attack:"Slash"},
		{lvl:"36", attack:"Slash"},
		{lvl:"43", attack:"Body Slam"},
		{lvl:"49", attack:"Slash"},
		{lvl:"54", attack:"Guillotine"}
	]},
	"tauros" : {basestat:[75,105,95,115,70], id:"#128", learnset:[
		{lvl:"1", attack:"Body Slam"},
		{lvl:"1", attack:"Earthquake"},
		{lvl:"1", attack:"Hyper Beam"},
		{lvl:"21", attack:"Earthquake"},
		{lvl:"28", attack:"Earthquake"},
		{lvl:"35", attack:"Earthquake"},
		{lvl:"44", attack:"Earthquake"},
		{lvl:"51", attack:"Earthquake"}
	]},
	"magikarp" : {basestat:[20,10,55,80,20], id:"#129"}, learnset:[
		{lvl:"1", attack:"Splash"},
		{lvl:"1", attack:"Bubble"},
		{lvl:"15", attack:"Tackle"}
	],
	"gyarados" : {basestat:[95,125,79,81,100], id:"#130", learnset:[
		{lvl:"1", attack:"Dragon Rage"},
		{lvl:"25", attack:"Waterfall"},
		{lvl:"30", attack:"Thunderbolt"},
		{lvl:"32", attack:"Body Slam"},
		{lvl:"41", attack:"Blizzard"},
		{lvl:"52", attack:"Hydro Pump"}
	]},
	"lapras" : {basestat:[130,85,80,60,95], id:"#131", learnset:[
		{lvl:"1", attack:"Dragon Rage"},
		{lvl:"31", attack:"Confuse Ray"},
		{lvl:"34", attack:"Body Slam"},
		{lvl:"36", attack:"Thunderbolt"},
		{lvl:"38", attack:"Blizzard"},
		{lvl:"40", attack:"Blizzard"},
		{lvl:"76", attack:"Surf"}
	]},
	"ditto" : {basestat:[100,100,100,100,100], id:"#132", learnset:[
		{lvl:"1", attack:"Transform"}
	]},
	"eevee" : {basestat:[55,55,50,55,65], id:"#133", learnset:[
		{lvl:"1", attack:"Quick Attack"},
		{lvl:"1", attack:"Sand Attack"},
		{lvl:"20", attack:"Double-Edge"},
		{lvl:"22", attack:"Sand Attack"},
		{lvl:"37", attack:"Sand Attack"},
		{lvl:"45", attack:"Sand Attack"}
	]},
	"vaporeon" : {basestat:[130,65,60,65,110], id:"#134", learnset:[
		{lvl:"1", attack:"Ice Beam"},
		{lvl:"1", attack:"Waterfall"},
		{lvl:"1", attack:"Sand Attack"},
		{lvl:"1", attack:"Body Slam"},
		{lvl:"27", attack:"Blizzard"},
		{lvl:"31", attack:"Waterfall"},
		{lvl:"37", attack:"Waterfall"},
		{lvl:"40", attack:"Waterfall"},
		{lvl:"42", attack:"Hydro Pump"},
		{lvl:"44", attack:"Hydro Pump"},
		{lvl:"48", attack:"Hydro Pump"},
		{lvl:"54", attack:"Hydro Pump"}
	]},
	"jolteon" : {basestat:[65,65,60,130,110], id:"#135", learnset:[
		{lvl:"1", attack:"Pin Missile"},
		{lvl:"1", attack:"Sand Attack"},
		{lvl:"1", attack:"Thunder Wave"},
		{lvl:"1", attack:"Thunderbolt"},
		{lvl:"27", attack:"Body Slam"},
		{lvl:"31", attack:"Body Slam"},
		{lvl:"37", attack:"Body Slam"},
		{lvl:"40", attack:"Body Slam"},
		{lvl:"42", attack:"Body Slam"},
		{lvl:"44", attack:"Body Slam"},
		{lvl:"48", attack:"Body Slam"},
		{lvl:"54", attack:"Thunderbolt"}
	]},
	"flareon" : {basestat:[65,130,60,65,110], id:"#136", learnset:[
		{lvl:"1", attack:"Body Slam"},
		{lvl:"1", attack:"Sand Attack"},
		{lvl:"1", attack:"Fire Blast"},
		{lvl:"27", attack:"Fire Blast"},
		{lvl:"31", attack:"Fire Blast"},
		{lvl:"37", attack:"Fire Blast"},
		{lvl:"40", attack:"Fire Blast"},
		{lvl:"42", attack:"Fire Blast"},
		{lvl:"44", attack:"Fire Blast"},
		{lvl:"48", attack:"Fire Blast"},
		{lvl:"73", attack:"Solar Beam"}
	]},
	"porygon" : {basestat:[65,60,70,40,75], id:"#137", learnset:[
		{lvl:"1", attack:"Tri Attack"},
		{lvl:"1", attack:"Sharpen"},
		{lvl:"1", attack:"Conversion"},
		{lvl:"1", attack:"Psybeam"},
		{lvl:"22", attack:"Blizzard"},
		{lvl:"24", attack:"Recover"},
		{lvl:"28", attack:"Thunderbolt"},
		{lvl:"32", attack:"Thunder Wave"}
	]},
	"omanyte" : {basestat:[35,40,100,35,90], id:"#138", learnset:[
		{lvl:"1", attack:"Waterfall"},
		{lvl:"1", attack:"Blizzard"},
		{lvl:"34", attack:"Horn Attack"},
		{lvl:"39", attack:"Leer"},
		{lvl:"46", attack:"Spike Cannon"},
		{lvl:"53", attack:"Hydro Pump"}
	]},
	"omastar" : {basestat:[70,60,125,55,115], id:"#139", learnset:[
		{lvl:"1", attack:"Hydro Pump"},
		{lvl:"1", attack:"Blizzard"},
		{lvl:"1", attack:"Seismic Toss"},
		{lvl:"1", attack:"Body Slam"},
		{lvl:"34", attack:"Seismic Toss"},
		{lvl:"39", attack:"Seismic Toss"},
		{lvl:"44", attack:"Seismic Toss"},
		{lvl:"53", attack:"Hydro Pump"}
	]},
	"kabuto" : {basestat:[30,80,90,55,45], id:"#140", learnset:[
		{lvl:"1", attack:"Waterfall"},
		{lvl:"1", attack:"Blizzard"},
		{lvl:"1", attack:"Slash"},
		{lvl:"34", attack:"Absorb"},
		{lvl:"39", attack:"Slash"},
		{lvl:"44", attack:"Leer"},
		{lvl:"45", attack:"Blizzard"},
		{lvl:"49", attack:"Hydro Pump"}
	]},
	"kabutops" : {basestat:[60,115,105,80,70], id:"#141", learnset:[
		{lvl:"1", attack:"Hydro Pump"},
		{lvl:"1", attack:"Blizzard"},
		{lvl:"1", attack:"Slash"},
		{lvl:"1", attack:"Dig"},
		{lvl:"34", attack:"Slash"},
		{lvl:"39", attack:"Slash"},
		{lvl:"46", attack:"Slash"},
		{lvl:"53", attack:"Hydro Pump"}
	]},
	"aerodactyl" : {basestat:[80,105,65,130,60], id:"#142", learnset:[
		{lvl:"1", attack:"Fly"},
		{lvl:"33", attack:"Razor Wind"},
		{lvl:"38", attack:"Earthquake"},
		{lvl:"45", attack:"Rock Slide"},
		{lvl:"101", attack:"Sky Attack"}
	]},
	"snorlax" : {basestat:[160,110,65,30,65], id:"#143", learnset:[
		{lvl:"1", attack:"Headbutt"},
		{lvl:"1", attack:"Rest"},
		{lvl:"1", attack:"Selfdestruct"},
		{lvl:"35", attack:"Body Slam"},
		{lvl:"41", attack:"Earthquake"},
		{lvl:"45", attack:"Hyper Beam"},
		{lvl:"88", attack:"Lovely Kiss"}
	]},
	"articuno" : {basestat:[105,85,100,85,125], id:"#144", learnset:[
		{lvl:"1", attack:"Sky Attack"},
		{lvl:"1", attack:"Blizzard"},
		{lvl:"51", attack:"Blizzard"},
		{lvl:"55", attack:"Blizzard"},
		{lvl:"60", attack:"Blizzard"}
	]},
	"zapdos" : {basestat:[90,90,85,100,125], id:"#145", learnset:[
		{lvl:"1", attack:"Thunder Wave"},
		{lvl:"1", attack:"Drill Peck"},
		{lvl:"51", attack:"Drill Peck"},
		{lvl:"55", attack:"Drill Peck"},
		{lvl:"60", attack:"Thunderbolt"}
	]},
	"moltres" : {basestat:[90,100,90,90,125], id:"#146", learnset:[
		{lvl:"1", attack:"Fire Blast"},
		{lvl:"1", attack:"Sky Attack"},
		{lvl:"51", attack:"Fire Blast"},
		{lvl:"55", attack:"Sky Attack"},
		{lvl:"60", attack:"Solar Beam"}
	]},
	"dratini" : {basestat:[41,64,45,50,50], id:"#147", learnset:[
		{lvl:"1", attack:"Wrap"},
		{lvl:"1", attack:"Thunder Wave"},
		{lvl:"1", attack:"Dragon Rage"},
		{lvl:"10", attack:"Thunder Wave"},
		{lvl:"20", attack:"Thunder Wave"},
		{lvl:"21", attack:"Headbutt"},
		{lvl:"22", attack:"Double-Edge"},
		{lvl:"30", attack:"Hyper Beam"}
	]},
	"dragonair" : {basestat:[61,84,65,70,70], id:"#148", learnset:[
		{lvl:"1", attack:"Dragon Rage"},
		{lvl:"1", attack:"Wrap"},
		{lvl:"1", attack:"Thunder Wave"},
		{lvl:"10", attack:"Thunder Wave"},
		{lvl:"20", attack:"Thunder Wave"},
		{lvl:"35", attack:"Thunder Wave"},
		{lvl:"45", attack:"Blizzard"},
		{lvl:"55", attack:"Hyper Beam"}
	]},
	"dragonite" : {basestat:[91,134,95,80,100], id:"#149", learnset:[
		{lvl:"1", attack:"Wrap"},
		{lvl:"1", attack:"Blizzard"},
		{lvl:"1", attack:"Thunder Wave"},
		{lvl:"10", attack:"Thunder Wave"},
		{lvl:"20", attack:"Thunder Wave"},
		{lvl:"35", attack:"Thunder Wave"},
		{lvl:"45", attack:"Thunder Wave"},
		{lvl:"60", attack:"Thunder Wave"}
	]},
	"mewtwo" : {basestat:[106,110,90,140,154], id:"#150", learnset:[
		{lvl:"1", attack:"Thunder Wave"},
		{lvl:"1", attack:"Psychic"},
		{lvl:"1", attack:"Body Slam"},
		{lvl:"1", attack:"Recover"},
		{lvl:"63", attack:"Psychic"},
		{lvl:"66", attack:"Psychic"},
		{lvl:"70", attack:"Psychic"},
		{lvl:"75", attack:"Psychic"},
		{lvl:"81", attack:"Psychic"}
	]},
	"mew" : {basestat:[100,100,100,100,100], id:"#151", learnset:[
		{lvl:"1", attack:"Pound"},
		{lvl:"2", attack:"Thunder Wave"},
		{lvl:"7", attack:"Softboiled"},
		{lvl:"10", attack:"Body Slam"},
		{lvl:"12", attack:"Psychic"}
	]}
};
const statSelect = (pokemon) => statTable[pokemon] || {basestat:[0,0,0,0,0],id:"#000"};

// functions section starts here

function generateType(type)
{
	return '<td class="'+type.toLowerCase()+'">'+type+'</td>';
}

function generateLink(pokemon, path = '', content = pokemon)
{
	return '<a href="' + path + pokemon + '.html" title="' + pokemon + '">' + content + '</a>';
}

function generateButton(pokemon, direction, path = '')
{
	return '<button class="next" onclick="window.location.href = &quot;'+path+pokemon+'.html&quot;;" title="'+pokemon+'">'+direction+'</button> ';
}

function generateAttack(attack, path = '')
{
	var type = attackSelect(attack.toLowerCase());
	var attackEntry = '<td>'+generateLink(attack, path)+'</td> ';
	attackEntry += generateType(type);
	return attackEntry;
}

function generateHeader(path = '')
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

function generateTitle(pokemon)
{
	var id = statSelect(pokemon.toLowerCase()).id;
	return '<h2>'+id+' '+pokemon+'</h2>';
}

function generateMoveTable(pokemon)
{
	var learnset = statSelect(pokemon.toLowerCase()).learnset
	moveTable = '<table class="movetbl">';
	moveTable += 	'<caption>Learnset</caption>';
	moveTable +=	'<tr>';
	moveTable +=		'<th>Lvl</th>';
	moveTable +=		'<th>Attack</th>';
	moveTable +=		'<th>Type</th>';
	moveTable +=	'</tr>';
	for(var i = 0; i < learnset.length; i++)
	{
		moveTable += '<tr>'
		moveTable += '<td>'+learnset[i].lvl+'</td>';
		moveTable += generateAttack(learnset[i].attack,'../attacks/');
		moveTable += '</tr>'
	}
	moveTable += '</table>';
	return moveTable;
}