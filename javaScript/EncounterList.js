
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