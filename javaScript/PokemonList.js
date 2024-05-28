class C_Move {
	constructor(name, accuracy, strength, pp, type, pokemonreference, description) {
		this.m_name = name;
		this.m_accuracy = accuracy;
		this.m_strength = strength;
		this.m_pp = pp;
		this.m_type = type;
		this.m_pokemonreference = pokemonreference;
		this.m_description = description;
	}
	
	isMove(move) {
		return move.toLowerCase() == this.m_name.toLowerCase();
	}
};

class C_Attack_List {

	static getIndex(move) {
		for(var i in this.m_Attack_List) {
			if(this.m_Attack_List[i].isMove(move)) {
				return i;
			}
		}
		return null;
	}
	
	static getAttack(move) {
		for(var i in this.m_Attack_List) {
			if(this.m_Attack_List[i].isMove(move)) {
				return this.m_Attack_List[i];
			}
		}
		return null;
	}

	static m_Attack_List = {
		1 : new C_Move("absorb",255/256,20,20,"grass",[1,140],
			"Absorb does damage, and up to 50% of the damage dealt to the target is restored to the user as HP." +
			" If this attack does 1 HP of damage, 1 HP will be restored to the user. If Absorb breaks a " +
			generateLink("AttackIndex","substitute","../attacks/") + ", no HP will be restored to the user. If HP is" +
			" restored to the user when its current HP would be greater than its maximum HP, its current HP will be" +
			" set equal to its maximum HP."),
		2 : new C_Move("acid",255/256,40,30,"poison",[43,88],
			"Acid does damage and has a 33% chance of lowering the target's Defense stat by one stage."),
		3 : new C_Move("acid armor",255/256,0,40,"poison",[88],"Acid Armor increases the user's Defense by two stages."),
		4 : new C_Move("agility",255/256,0,30,"psychic",[21,83,84,118,119],"Agility increases the user's Speed by two stages."),
		5 : new C_Move("amnesia",255/256,0,20,"psychic",[54,79,80],"Amnesia increases the user's Special by two stages."),
		6 : new C_Move("aurora beam",255/256,65,20,"ice",[86,90],
			"Aurora Beam does damage and has a 33% chance of lowering the target's Attack stat by one stage."),
		7 : new C_Move("barrage",216/256,15,20,"normal",[],
			"Barrage does damage, hitting the target 2-5 times per use. There is a 37.5% chance that it will hit 2 times," +
			" a 37.5% chance that it will hit 3 times, a 12.5% chance that it will hit 4 times, and a 12.5% chance that it will" +
			" hit 5 times. Although only the first strike can be a critical hit, each successive one will deal the same amount of" +
			" damage. Barrage will end immediately if it breaks a " + generateLink("AttackIndex","substitute","../attacks/") + ". " +
			generateLink("AttackIndex","bide","../attacks/") + " and " + generateLink("AttackIndex","counter","../attacks/") + " will only" +
			" acknowledge the last strike of this move."),
		8 : new C_Move("barrier",255/256,0,30,"psychic",[],"Barrier increases the user's Defense by two stages."),
		9 : new C_Move("bide",256/256,0,10,"normal",[],
			"After Bide is selected, the user will be unable to select a move for an idling period of 2-3 turns (chosen randomly)," +
			" though it will still be able to switch out during the move's effect. Afterwards, Bide will do damage equal to twice" +
			" the damage received during the idling period. If the user is not directly attacked during the biding period, it will" +
			" fail on the turn it would have released. Although Bide is a Normal-type move, type has no effect on the calculated" +
			" damage inflicted by this attack, so Bide does neutral damage on Rock and Ghost types and does not receive the" +
			" same-type attack bonus. Bide bypasses accuracy checks to always hit, even during the semi-invulnerable turn of a move" +
			" such as " + generateLink("AttackIndex","dig","../attacks/") + ". The damage received during the period is counted as equal" +
			" to the last amount of damage done. The last amount of damage done will include crash damage, an opponent's self-inflicted" +
			" confusion damage, and the full damage absorbed by a " + generateLink("AttackIndex","substitute","../attacks/") + ". Additionally," +
			" if the opponent does not use an attack that misses, the last amount of damage done will not be reset, effectively resulting" +
			" in damage done during the previous turn also being counted as damage done during that turn. Sleep, freeze, partial trap" +
			" duration, and flinching will pause but not disrupt the duration of Bide."),
		10 : new C_Move("bind",191/256,15,20,"normal",[95],
			"Bind does damage for 2-5 turns. There is a 37.5% chance that it will attack for 2 turns," +
			" a 37.5% chance that it will attack for 3 turns, a 12.5% chance that it will attack for 4 turns," +
			" and a 12.5% chance that it will attack for 5 turns. Though technically only the first attack can" +
			" score a critical hit, every attack during the duration will do the same amount of damage." +
			" During this turn duration, the target will be unable to attack, and if the user of Bind attacks" +
			" before the target when used, the target will be unable to attack during that round as well. Damage" +
			" done by Bind's continuing duration is done after recurrent damage. If the user switches out before" +
			" the turn duration ends, the target will be unable to attack during that turn, since it did not get" +
			" to select a move. If the target switches out before the turn duration ends, Bind will automatically" *
			" be used against the incoming Pokémon, deducting an additional PP from the move. If at such a time Bind" +
			" has 0 PP, Bind will still be used against the incoming Pokémon. After that use, the current PP of Bind" +
			" will roll over to 63, and full PP Ups will be applied to it. Even if Bind misses, it will negate the" +
			" recharge turn normally required for " + generateLink("AttackIndex","hyper beam","../attacks/") + ". Additionally," +
			" if the user of Bind attacks before the user of " + generateLink("AttackIndex","hyper beam","../attacks/") +
			" during a recharge turn and the use of Bind misses, the user of" + generateLink("AttackIndex","hyper beam","../attacks/") +
			" will automatically use " + generateLink("AttackIndex","hyper beam","../attacks/") + " during that turn." +
			" If at such a time " + generateLink("AttackIndex","hyper beam","../attacks/") + " has 0 PP, " +
			generateLink("AttackIndex","hyper beam","../attacks/") + " will still be used, and afterwards its current PP will" +
			" roll over to 63, and full PP ups will be applied to it. The target will get to select a move during each" +
			" turn of Bind's duration, and will attack the player's incoming Pokémon with the selected move if the" +
			" player decides to switch before the duration is over. Although Bind cannot damage Ghost-type Pokémon," +
			" it can still make them unable to attack for its duration. If Bind is successful, the text will say that" +
			" it \"didn't affect\" the Ghost-type Pokémon regardless, and Bind's animation will not play on the initial" +
			" turn (but will during the subsequent turns of its duration)."),
		11 : new C_Move("bite",255/256,60,25,"normal",[4,7,29,30,52,58],
			"Bite does damage and has a 10% chance of causing the target to flinch."),
		12 : new C_Move("blizzard",229/256,120,5,"ice",[8,9,31,34,36,40,62,73,91,121,124,130,131,134,137,138,13,140,141,144,148,149],
			"Blizzard does damage and has a 10% chance of freezing the target."),
		13 : new C_Move("body slam",255/256,85,15,"normal",
			[2,3,6,8,9,20,23,26,28,36,39,47,51,55,57,59,60,61,68,
			 69,70,71,76,85,87,89,98,99,105,106,107,108,112,115,
			 126,127,128,130,131,134,135,136,139,134,150,151],
			"Body Slam does damage and has a 33% chance of paralyzing the target. It cannot paralyze Normal-type Pokémon."),
		14 : new C_Move("bone club",216/256,65,20,"ground",[104],
			"Bone Club does damage and has a 10% chance of causing the target to flinch. Bone Club cannot cause a target with a " +
			generateLink("AttackIndex","substitute","../attacks/") + " to flinch."),
		15 : new C_Move("bonemerang",229/256,60,10,"ground",[104,105],
			"Bonemerang does damage, hitting the target twice per use. Although only the first strike can be a critical hit, the" +
			" second one will deal the same amount of damage. Bonemerang will end immediately if the first strike breaks a " +
			generateLink("AttackIndex","substitute","../attacks/") + ". " + generateLink("AttackIndex","bide","../attacks/") + " will only" +
			" acknowledge the second strike of this move."),
		16 : new C_Move("bubble",255/256,20,30,"water",[129],
			"Bubble does damage and has a 33% chance of lowering the target's Speed stat by one stage."),
		17 : new C_Move("bubble beam",255/256,65,20,"water",[7,54,60,72,79,86,116,119,120],
			"BubbleBeam does damage and has a 33% chance of lowering the target's Speed stat by one stage."),
		18 : new C_Move("clamp",191/256,35,10,"water",[90,91],
			"Clamp does damage and traps the target for 2-5 turns. There is a 37.5% chance that it will attack for 2 turns," +
			" a 37.5% chance that it will attack for 3 turns, a 12.5% chance that it will attack for 4 turns," +
			" and a 12.5% chance that it will attack for 5 turns. Though technically only the first attack can" +
			" score a critical hit, every attack during the duration will do the same amount of damage. While the" +
			" target is trapped, it will be unable to attack, and if the user of Clamp attacks before the target" +
			" when used, the target will be unable to attack during the same turn. Damage done by Clamps continuing" +
			" duration is done after recurrent damage. If the user switches out before the turn duration ends, the" +
			" target will be unable to attack during that turn, since it did not get to select a move. If the target switches" +
			" out before the turn duration ends, Clamp will automatically be used against the incoming Pokémon, deducting" +
			" an additional PP from the move. If at such a time Clamp has 0 PP, Clamp will still be used against the incoming" +
			" Pokémon. After that use, the current PP of Clamp will roll over to 63, and full PP Ups will be applied to it." +
			" Even if Clamp misses, it will negate the recharge turn normally required for " +
			+ generateLink("AttackIndex","hyper beam","../attacks/") + ". Additionally, if the user of Clamp attacks before the" +
			" user of " + generateLink("AttackIndex","hyper beam","../attacks/") + " during a recharge turn and the use of Clamp" +
			" misses, the user of " + generateLink("AttackIndex","hyper beam","../attacks/") + " will automatically use " +
			generateLink("AttackIndex","hyper beam","../attacks/") + " during that turn. If at such a time " +
			generateLink("AttackIndex","hyper beam","../attacks/") + " has 0 PP, " + generateLink("AttackIndex","hyper beam","../attacks/") +
			" will still be used, and afterwards its current PP will roll over to 63, and full PP ups will roll over to 63," +
			" and full PP ups will be applied to it. The target will get to select a move during each turn of Clamps duration," +
			" and will attack the player's incoming Pokémon with the selected move if the player decides to switch before the" +
			" duration is over."),
		19 : new C_Move("comet punch",216/256,18,15,"normal",[],
			"Comet Punch does damage, hitting the target 2-5 times per use." +
			" There is a 37.5% chance that it will hit 2 times, a 37.5% chance that it will hit 3 times," +
			" a 12.5% chance that it will hit 4 times, and a 12.5% chance that it will hit 5 times." +
			" Although only the first strike can be a critical hit, each successive one will deal" +
			" the same amount of damage. Comet Punch will end immediately if it breaks a " + 
			generateLink("AttackIndex","substitute","../attacks/") + ". " + generateLink("AttackIndex","bide","../attacks/") +
			" and " + generateLink("AttackIndex","counter","../attacks/") + " will only acknowledge the last strike of this move."),
		20 : new C_Move("confuse ray",255/256,0,10,"ghost",[37,41,42,92,93,126,131],
			"Confuse Ray causes the target to become confused."),
		21 : new C_Move("confusion",255/256,50,25,"psychic",[54,63,79,80,96],
			"Confusion does damage and has a 10% chance of confusing the target."),
		22 : new C_Move("constrict",255/256,10,35,"normal",[],
			"Constrict does damage and has a 33% chance of lowering the target's Speed stat by one stage."),
		23 : new C_Move("conversion",255/256,0,30,"normal",[137],
			"Conversion changes the user's current type(s) to the target's current type(s). The user's original type(s) are" +
			" restored once it is switched out, faints, or the current battle ends. This move can be used repeatedly even if the" +
			" user and target already have the same type(s). In the summary screen, the user is shown with its original type(s)," +
			" unaffected by Conversion."),
		24 : new C_Move("counter",255/256,1,20,"fighting",[],
			"If the last amount of damage done before the use of Counter is greater than 0 and was dealt by a Normal-type" +
			" or Fighting-type attack (except Counter), Counter will do twice as much damage to the opponent. Otherwise, Counter" +
			" misses. Although Counter does Fighting-type damage, it is not affected by type effectiveness (so it can affect" +
			" Ghost-type Pokémon). Counter is a decreased priority move. If the opponent does not use a decreased priority move" +
			" during the round that it is used, Counter will go last regardless of the user's or opponent's speed. If the opponent" +
			" also uses a decreased priority move during the same round, the attack order of the users will be determined normally." +
			" If the user is put to sleep or is frozen during the round that Counter is (or attempts to be) used, Counters decreased" +
			" speed priority will not be reset. Subsequently, it will only be reset on the turn after the user wakes up or is defrosted," +
			" or if the user switches out. Counter can cause a critical hit, but the actual amount of damage dealt by it will not be" +
			" altered by a critical hit. Counter will only counter the last hit of a multi-hit move and the last attack of a partial" +
			" trapping move. Counter will always miss if called by " + generateLink("AttackIndex","metronome","../attacks/") + ". If both" +
			" active Pokémon use Counter during the same round, both attacks will fail. An attack absorbed by a " +
			generateLink("AttackIndex","substitute","../attacks/") + " can be countered for the amount of damage it would have done to the" +
			" user had the user not had a " + generateLink("AttackIndex","substitute","../attacks/") + "."),
		25 : new C_Move("crabhammer",229/256,90,10,"water",[98,99],"Crabhammer does damage."),
		26 : new C_Move("cut",242/256,50,30,"normal",[],"Cut does damage."),
		27 : new C_Move("defense curl",255/256,0,40,"normal",[],"Defense Curl increases the user's Defense by one stage."),
		28 : new C_Move("dig",255/256,75,10,"ground",[8,20,27,28,30,32,33,50,51,59,74,75,141],
			"On the turn that Dig is selected, the user will dig underground and become semi-invulnerable, where the only attacks it" +
			" cannot avoid are " + generateLink("AttackIndex","bide","../attacks/") + ", " + generateLink("AttackIndex","swift","../attacks/") +
			", and " + generateLink("AttackIndex","transform","../attacks/") + ". On the following turn, Dig will do damage, PP will be" +
			" deducted from it, and it will count as the last move used. Once Dig is selected, the user will not be able to switch out" +
			" until it is disrupted or fully executed. If Dig is not fully executed, PP will not be deducted from it, and it will not" +
			" count as the last move used. If the opponent uses " + generateLink("AttackIndex","mirror move","../attacks/") + " during the" +
			" turn that the user digs underground, " + generateLink("AttackIndex","mirror move","../attacks/") + " will copy the move that" +
			" the user executed immediately before using Dig (or fail if it cannot). Full paralysis and self-inflicted damage due to" +
			" confusion will disrupt Dig. Additionally, if the user is fully paralyzed during the mostly-invulnerable turn of Dig,"+
			" the semi-invulnerable part will not be reset until the user switches out or fully executes Dig. Pokémon can be caught" +
			" during the semi-invulnerable stage of Dig."),
		29 : new C_Move("disable",140/256,0,20,"normal",[],
			"Disable randomly selects one move that is in the target's current move set and whose current PP is greater than 0," +
			" and gives it a randomly chosen disable duration length of 0 to 7, which is reduced by 1 each time the Pokémon attempts" +
			" to execute an attack. While the move is disabled, a message of \"disabled!\" will appear in place of the disabled" +
			" move's PP, and the target will be unable to use the move until the round after Disable wears off (attempting to select" +
			" the move will just result in a notice that the move is disabled). Disable will fail if one of the target's moves is already" +
			" disabled. If the target does manage to select the move (such as if it knows the move twice because of " +
			generateLink("AttackIndex","mimic","../attacks/") + ", or if the user is faster than the target and disables the attack that" +
			" the target was going to use during that round) and attempts to execute it before the disable duration is over, it will" +
			" only result in a wasted turn and a message that the move is disabled. Since the check to see if a move is disabled happens" +
			" after the duration reduction, it is possible to disable the move the target was about to use for only 1 turn and as a result" +
			" have Disable end immediately, still allowing the target to use said move during that round. It is also possible for the" +
			" target to still use the disabled move if it is called via " + generateLink("AttackIndex","mirror move","../attacks/") + ".If the" +
			" target has only one move and that move is successfully disabled, it will use " + generateLink("AttackIndex","struggle","../attacks/") +
			" until it can select its move again. Disable will fail if the target has no PP for any of its moves. Turns spent flinching," +
			" fast asleep, frozen solid, recharging, or partially trapped will not count towards the Disable duration length. Even if" +
			" unsuccessful (for any reason), using Disable against a Pokémon using " + generateLink("AttackIndex","rage","../attacks/") +
			" will cause its rage to build."),
		30 : new C_Move("dizzy punch",255/256,70,10,"normal",[],"Dizzy Punch does damage."),
		31 : new C_Move("double kick",255/256,30,30,"fighting",[29,30,32,33,77,84],
			"Double Kick does damage, hitting the target twice per use. Although only the first strike" +
			" can be a critical hit, the second one will deal the same amount of damage. Double Kick will" +
			" end immediately if the first strike breaks a " + generateLink("AttackIndex","substitute","../attacks/") +
			". " + generateLink("AttackIndex","bide","../attacks/") + " and " + generateLink("AttackIndex","counter","../attacks/") +
			" will only acknowledge the second strike of this move."),
		32 : new C_Move("double slap",216/256,15,10,"normal",[],
			"Double Slap does damage, hitting the target 2-5 times per use." +
			" There is a 37.5% chance that it will hit 2 times, a 37.5% chance that it will hit 3 times," +
			" a 12.5% chance that it will hit 4 times, and a 12.5% chance that it will hit 5 times." +
			" Although only the first strike can be a critical hit, each successive one will deal" +
			" the same amount of damage. Double Slap will end immediately if it breaks a " + 
			generateLink("AttackIndex","substitute","../attacks/") + ". " + generateLink("AttackIndex","bide","../attacks/") +
			" and " + generateLink("AttackIndex","counter","../attacks/") + " will only acknowledge the last strike of this move."),
		33 : new C_Move("double team",255/256,0,1,"normal",[3,82],"Double Team increases the user's evasion by one stage."),
		34 : new C_Move("double-edge",255/256,100,15,"normal",[1,35,37,39,40,56,58,69,77,81,82,104,111,120,133,147],
			"Double-Edge does damage, and the user receives recoil damage equal to &frac14; of the damage done to the target." +
			" If the user of Double-Edge attacks first and faints due to recoil damage, the opponent will not attack or be subjected" +
			" to recurrent damage during that round. Self-inflicted recoil damage from Double-Edge from the previous turn can" +
			" be countered if the opponent does not make a move on the following turn. If Double-Edge breaks a " + 
			generateLink("AttackIndex","substitute","../attacks/") + ", the user will take no recoil damage."),
		35 : new C_Move("dragon rage",255/256,1,10,"dragon",[5,117,130,131,147,148],
			"Dragon Rage always does exactly 40 HP damage if it hits. It has no secondary effects" +
			" and does not take weaknesses or resistances into account."),
		36 : new C_Move("dream eater",255/256,100,15,"psychic",[],
			"Dream Eater only works if the target is asleep. Dream Eater does damage, and up to 50% of the damage dealt to the target" +
			" is restored to the user as HP. If this attack does 1 HP of damage, 1 HP will be restored to the user. If Dream Eater breaks a " +
			generateLink("AttackIndex","substitute","../attacks/") + ", no HP will be restored to the user. If HP is restored to the user when" +
			" its current HP is greater than its maximum HP, its current HP will be set equal to its maximum HP. Dream Eater always does" +
			" nothing if the target is not asleep."),
		37 : new C_Move("drill peck",255/256,80,20,"flying",[21,22,84,85,145],"Drill Peck does damage."),
		38 : new C_Move("earthquake",255/256,100,10,"ground",[6,9,23,27,28,31,34,50,51,62,68,74,75,76,95,105,108,111,112,115,128,142,143],
			"Earthquake does damage."),
		39 : new C_Move("egg bomb",191/256,100,10,"normal",[],"Egg Bomb does damage."),
		40 : new C_Move("ember",255/256,40,25,"fire",[4,37,58,77],
			"Ember does damage and has a 10% chance of burning the target."),
		41 : new C_Move("explosion",255/256,170,1,"normal",[74,75,76,88,89,90,91,94,100,101,102,109,110],
			"Explosion does damage and causes the user to faint. Though its power is listed as 170, the target's Defense" +
			" will be halved during damage calculation (unless it is at a value of 1), effectively doubling the power to 340. The" +
			" user of Explosion will faint even if the attack misses or the opponent is immune to it (due to being Ghost type)." +
			" If Explosion breaks a target's " + generateLink("AttackIndex","substitute","../attacks/") + ", the user will not faint," +
			" though its image will be replaced by a blank image. Additionally, if the user of Explosion had a " +
			generateLink("AttackIndex","substitute","../attacks/") + " at the time of such a situation, uses " +
			generateLink("AttackIndex","substitute","../attacks/") + " later, or switches out, its regular image will once again become" +
			" visible. If the user of Explosion attacks first and faints itself, the opponent will not attack or be subjected to" +
			" recurrent damage during that round."),
		42 : new C_Move("fire blast",216/256,120,5,"fire",[6,58,59,110,126,136,146],
			"Fire Blast does damage and has a 33% chance of burning the target."),
		43 : new C_Move("fire punch",255/256,75,15,"fire",[4],
			"Fire Punch does damage and has a 10% chance of burning the opponent."),
		44 : new C_Move("fire spin",178/256,15,15,"fire",[38],
			"Fire Spin does damage and traps the target for 2-5 turns. There is a 37.5% chance that it will attack for 2 turns," +
			" a 37.5% chance that it will attack for 3 turns, a 12.5% chance that it will attack for 4 turns," +
			" and a 12.5% chance that it will attack for 5 turns. Though technically only the first attack can" +
			" score a critical hit, every attack during the duration will do the same amount of damage. While the" +
			" target is trapped, it will be unable to attack, and if the user of Fire Spin attacks before the target" +
			" when used, the target will be unable to attack during the same turn. Damage done by Fire Spins continuing" +
			" duration is done after recurrent damage. If the user switches out before the turn duration ends, the" +
			" target will be unable to attack during that turn, since it did not get to select a move. If the target switches" +
			" out before the turn duration ends, Fire Spin will automatically be used against the incoming Pokémon, deducting" +
			" an additional PP from the move. If at such a time Fire Spin has 0 PP, Fire Spin will still be used against the incoming" +
			" Pokémon. After that use, the current PP of Fire Spin will roll over to 63, and full PP Ups will be applied to it." +
			" Even if Fire Spin misses, it will negate the recharge turn normally required for " +
			+ generateLink("AttackIndex","hyper beam","../attacks/") + ". Additionally, if the user of Fire Spin attacks before the" +
			" user of " + generateLink("AttackIndex","hyper beam","../attacks/") + " during a recharge turn and the use of Fire Spin" +
			" misses, the user of " + generateLink("AttackIndex","hyper beam","../attacks/") + " will automatically use " +
			generateLink("AttackIndex","hyper beam","../attacks/") + " during that turn. If at such a time " +
			generateLink("AttackIndex","hyper beam","../attacks/") + " has 0 PP, " + generateLink("AttackIndex","hyper beam","../attacks/") +
			" will still be used, and afterwards its current PP will roll over to 63, and full PP ups will roll over to 63," +
			" and full PP ups will be applied to it. Fire Spin cannot thaw a frozen target. The target will get to select a move" +
			" during each turn of Fire Spins duration, and will attack the player's incoming Pokémon with the selected move if" +
			" the player decides to switch before the duration is over."),
		45 : new C_Move("fissure",76/256,1,1,"ground",[24,51],
			"Fissure always does exactly 65535 HP damage if it hits. Fissure will break a " +
			generateLink("AttackIndex","substitute","../attacks/") + " if it hits. Unlike other moves that skip the damage formula," +
			" Fissure does not bypass type immunities. Fissure will not affect a target whose current Speed stat is greater than" +
			" the user's current Speed stat."),
		46 : new C_Move("flamethrower",255/256,95,15,"fire",[4,5,6,37,58,77],
			"Flamethrower does damage and has a 10% chance of burning the target."),
		47 : new C_Move("flash",178/256,0,20,"normal",[],"Flash decreases the target's accuracy stat by one stage."),
		48 : new C_Move("fly",255/256,60,15,"flying",[142],"Fly does damage."),
		49 : new C_Move("focus energy",255/256,0,30,"normal",[19],
			"Focus Energy divides the users critical hit ratio by four. Focus Energy will be removed by switching or " +
			generateLink("AttackIndex","haze","../attacks/") + ". The effect of Focus Energy cannot stack, and it will fail" +
			" if the user is already under its effect."),
		50 : new C_Move("fury attack",216/256,15,20,"normal",[21],
			"Fury Attack does damage, hitting the target 2-5 times per use. There is a 37.5% chance that it will hit 2 times," +
			" a 37.5% chance that it will hit 3 times, a 12.5% chance that it will hit 4 times, and a 12.5% chance that it will" +
			" hit 5 times. Although only the first strike can be a critical hit, each successive one will deal the same amount of" +
			" damage. Fury Attack will end immediately if it breaks a " + generateLink("AttackIndex","substitute","../attacks/") + ". " +
			generateLink("AttackIndex","bide","../attacks/") + " and " + generateLink("AttackIndex","counter","../attacks/") + " will only" +
			" acknowledge the last strike of this move."),
		51 : new C_Move("fury swipes",204/256,18,15,"normal",[],
			"Fury Swipes does damage, hitting the target 2-5 times per use. There is a 37.5% chance that it will hit 2 times," +
			" a 37.5% chance that it will hit 3 times, a 12.5% chance that it will hit 4 times, and a 12.5% chance that it will" +
			" hit 5 times. Although only the first strike can be a critical hit, each successive one will deal the same amount of" +
			" damage. Fury Swipes will end immediately if it breaks a " + generateLink("AttackIndex","substitute","../attacks/") + ". " +
			generateLink("AttackIndex","bide","../attacks/") + " and " + generateLink("AttackIndex","counter","../attacks/") + " will only" +
			" acknowledge the last strike of this move."),
		52 : new C_Move("glare",229/256,0,30,"normal",[23,24],
			"Glare paralyzes the target. It has an accuracy of 75%. It can hit Ghost-type Pokémon."),
		53 : new C_Move("growl",255/256,0,40,"normal",[21],
			"Growl decreases the Attack stat of the opponent by one stage."),
		54 : new C_Move("growth",255/256,0,40,"normal",[],
			"Growth increases the user's Special stat by one stage."),
		55 : new C_Move("guillotine",76/256,1,1,"normal",[99,127],
			"Guillotine always does exactly 65535 HP damage if it hits. Guillotine will break a " +
			generateLink("AttackIndex","substitute","../attacks/") + " if it hits. Unlike other moves that skip the damage formula," +
			" Guillotine does not bypass type immunities. Guillotine will not affect a target whose current Speed stat is greater" +
			" than the user's current Speed stat."),
		56 : new C_Move("gust",255/256,40,35,"normal",[],"Gust does damage."),
		57 : new C_Move("harden",255/256,0,30,"normal",[11,14],"Harden increases the user's Defense stat by one stage."),
		58 : new C_Move("haze",255/256,0,30,"ice",[],
			"Haze resets the stat stages of both active Pokémon to 0 and removes the stat reductions due to burns and paralysis." +
			"It also lifts the effects of " + generateLink("AttackIndex","focus energy","../attacks/") + ", " +
			generateLink("AttackIndex","mist","../attacks/") + ", " + generateLink("AttackIndex","leech seed","../attacks/") + ", " +
			generateLink("AttackIndex","disable","../attacks/") + ", " + generateLink("AttackIndex","reflect","../attacks/") + " and " +
			generateLink("AttackIndex","light screen","../attacks/") + " from both sides of the field. Additionally, Haze cures confusion" +
			" and turns bad poison into regular poison for both active Pokémon, and also removes any non-volatile status condition" +
			" from the opponent. Haze does not remove any non-volatile status ailments that the user has, does not change the" +
			" generic Minimize graphic back to the Pokémon's regular image, and does not reset either Pokémon's current type, moves," +
			" or species. If a frozen or sleeping opponent has its status removed via Haze, it cannot make a move in the same turn." +
			" If a frozen Pokémon that has not recharged from " + generateLink("AttackIndex","hyper beam","../attacks/") + " has its freeze" +
			" status eliminated via Haze, it will remain unable to attack, switch, or do anything else, and nothing will then be able to" +
			" change this until it faints or is forcefully switched out."),
		59 : new C_Move("headbutt",255/256,70,15,"normal",[1,4,7,25,79,86,104,143,147],
			"Headbutt does damage and has a 33% chance of causing the target to flinch."),
		60 : new C_Move("high jump kick",229/256,85,25,"fighting",[57,68,106],
			"High Jump Kick does damage. If it misses, the user will take crash damage of 1 HP. If used against a Ghost-type, then the" +
			" user will not take crash damage. If the user of High Jump Kick attacks first and faints itself due to crash damage, the" +
			" target will not attack or be subjected to recurrent damage during that round."),
		62 : new C_Move("horn drill",76/256,1,1,"normal",[78,87,118,119],
			"Horn Drill always does exactly 65535 HP damage if it hits. Horn Drill will break a " +
			generateLink("AttackIndex","substitute","../attacks/") + " if it hits. Unlike other moves that skip the damage formula, Horn Drill" +
			" does not bypass type immunities. Horn Drill will not affect a target whose current Speed stat is greater than the user's" +
			" current Speed stat."),
		63 : new C_Move("hydro pump",204/256,120,5,"water",[7,8,9,55,60,61,62,72,87,116,117,120,130,134,138,139,140,141],
			"Hydro Pump does damage."),
		64 : new C_Move("hyper beam",229/256,150,5,"normal",[18,20,22,85,108,115,128,143,147,148],
			"Hyper Beam does damage. A recharge turn is required on the turn after damage is done, during which no action" +
			" may be performed. Hyper Beam will not require a recharge turn if it misses, it breaks a " + 
			generateLink("AttackIndex","substitute","../attacks/") + ", it knocks out the target, the user is targeted by a" +
			" binding move (even if it misses), the user flinches, or the user is put to sleep after the attack but before the" +
			" recharge turn. However, freeze does not prevent the need for the recharge turn of Hyper Beam. If the user is" +
			" confused, the recharge turn of Hyper Beam will not count towards the number of turns the user will remain confused." +
			" If one Pokémon attacks first with a binding move that misses in a round in which the other Pokémon must recharge" +
			" from a use of Hyper Beam, the user of Hyper Beam will automatically use Hyper Beam again during that turn instead" +
			" of recharging. If at such a time Hyper Beam has 0 PP, Hyper Beam will still be used, and afterward its PP will roll" +
			" over to 63, and full PP Ups will be applied to it. An opponent can still use items on the user while it's recharging," +
			" in which case it will recharge the turn after."),
		65 : new C_Move("hyper fang",229/256,80,15,"normal",[19],"Hyper Fang does damage and has a 10% chance of causing the target to flinch."),
		66 : new C_Move("hypnosis",178/256,0,20,"psychic",[41,42,52,53,54,55,60,61,77,78,92,93,94,96,97,102,122],
			"Hypnosis puts the target to sleep. Hypnosis can affect a target behind a " + generateLink("AttackIndex","substitute","../attacks/") + "."),
		67 : new C_Move("ice beam",255/256,95,10,"ice",[62,86,87,90,113,134],
			"Ice Beam does damage and has a 10% chance of freezing the target."),
		68 : new C_Move("ice punch",255/256,75,15,"ice",[125],
			"Ice Punch does damage and has a 10% chance of freezing the target."),
		69 : new C_Move("jump kick",242/256,70,25,"fighting",[],
			"Jump Kick does damage. If it misses, the user will take crash damage of 1 HP." +
			" If used against a Ghost-type, it always counts as a miss. In this generation" +
			" only, if the user of Jump Kick attacks first and faints itself due to crash damage," +
			" the opponent will not attack or be subjected to recurrent damage during that round."),
		61 : new C_Move("horn attack",255/256,65,25,"normal",[32,33,138],"Horn Attack does damage."),
		70 : new C_Move("karate chop",255/256,50,25,"normal",[56,66,67],
			"Karate Chop has a higher critical hit ratio (x8)."),
		71 : new C_Move("kinesis",204/256,0,15,"psychic",[63,64],"Kinesis decreases the target's accuracy stat by one stage."),
		72 : new C_Move("leech life",255/256,20,15,"bug",[46],
			"Leech Life does damage, and up to 50% of the damage dealt to the target is restored to the user as HP." +
			" If this attack does 1 HP of damage, 1 HP will be restored to the user. If Leech Life breaks a " +
			generateLink("AttackIndex","substitute","../attacks/") + ", no HP will be restored to the user. If HP is" +
			" restored to the user when its current HP would be greater than its maximum HP, its current HP will be" +
			" set equal to its maximum HP."),
		73 : new C_Move("leech seed",229/256,0,10,"grass",[],
			"Leech Seed plants a seed on the target. After a target under the effect of Leech Seed takes its turn, 1/16 of its HP" +
			" will be drained (rounded down, but not less than 1), and the same amount of HP will be restored to the target's opponent" +
			" (even if it was not the Pokémon that originally used the attack). Recurrent Leech Seed draining will not occur if the" +
			" seeded Pokémon defeats the target. Unlike other types of damage, the recurrent damage done by Leech Seed can exceed the" +
			" target's current HP. Leech Seed will not work against Grass-type Pokémon, and attempts to seed an already-seeded Pokémon" +
			" will fail. Leech Seed draining will occur even if the seeded Pokémon knocks itself out with crash damage, recoil damage," +
			" or self-inflicted confusion damage, or by making a " + generateLink("AttackIndex","substitute","../attacks/") + " before the end" +
			" of its turn. Draining from Leech Seed is done after continuing partial trapping damage and recurrent poison or burn damage." +
			" Leech Seed can be removed by " + generateLink("AttackIndex","haze","../attacks/") + " or switching. If the target is seeded during" +
			" a round that it switches in, it will take recurrent damage during that round, but only if its speed is less than or equal to" +
			" the user's speed. If the target of Leech Seed is also under the effect of " + generateLink("AttackIndex","toxic","../attacks/") +
			" (or was under that effect and healed itself with Rest), because Leech Seed and " + generateLink("AttackIndex","toxic","../attacks/") +
			" both use the same damage algorithm, Leech Seed damage will be affected by " + generateLink("AttackIndex","substitute","../attacks/") +
			"'s N parameter, and will increase each turn."),
		74 : new C_Move("leer",255/256,0,30,"normal",[21,138,140],
			"Leer decreases the Defense stat of the opponent by one stage."),
		75 : new C_Move("lick",255/256,20,30,"ghost",[108],
			"Lick does damage and has a 33% chance of paralyzing the target. Lick cannot paralyze Ghost-type Pokémon."),
		76 : new C_Move("light screen",255/256,0,30,"psychic",[120],
			"Light Screen doubles the user's Special when the opponent damages the user with a special move. Light Screen will fail if the" +
			" user is already under its effect. The effect of Light Screen is ignored by critical hits. If Light Screen causes the user's" +
			" special to reach 1024 or higher at any time during battle calculations, it will be reduced by mod 1024. The effects of Light" +
			" Screen can be lifted by " + generateLink("AttackIndex","haze","../attacks/") + "."),
		77 : new C_Move("lovely kiss",229/256,0,10,"normal",[31,34,62,71,124,143],"Lovely Kiss causes the target to fall asleep."),
		78 : new C_Move("low kick",229/256,50,20,"fighting",[56,66,67],
			"Low Kick does damage and has a 33% chance of causing the target to flinch. Low Kick cannot make a target with a " +
			generateLink("AttackIndex","substitute","../attacks/") + " flinch."),
		79 : new C_Move("meditate",255/256,0,40,"psychic",[],
			"Meditate increases the user's Attack by one stage."),
		80 : new C_Move("mega drain",255/256,40,10,"grass",[42,43,46,47,69,70],
			"Mega Drain does damage, and up to 50% of the damage dealt to the target is restored to the user as HP." +
			" If this attack does 1 HP of damage, 1 HP will be restored to the user. If Mega Drain breaks a" +
			generateLink("AttackIndex","substitute","../attacks/") + ", no HP will be restored to the user. If HP is" +
			" restored to the user when its current HP would be greater than its maximum HP, its current HP will be" +
			" set equal to its maximum HP."),
		81 : new C_Move("mega kick",191/256,120,5,"normal",[],"Mega Kick does damage."),
		82 : new C_Move("mega punch",216/256,80,20,"normal",[],"Mega Punch does damage."),
		83 : new C_Move("metronome",255/256,0,10,"normal",[35],
			"Metronome randomly selects a move and fully executes the attack. An attack called by Metronome in this way counts as the" +
			" last move used. If Metronome successfully calls " + generateLink("AttackIndex","hyper beam","../attacks/") + " or a partial" +
			" trapping move and has 0 PP before the move fully executes, its PP can roll over in the same manner as the move is called," +
			" with full PP Ups applied. A Pokémon will be able to use a move that is disabled if called via Metronome. Because Metronome" +
			" has normal move priority, a move with higher or lower priority may be executed other than when it normally would. For instance," +
			" Metronome may cause " + generateLink("AttackIndex","quick attack","../attacks/") + " to be used after a normal priority move or " +
			generateLink("AttackIndex","roar","../attacks/") + " to be used before a normal priority move."),
		84 : new C_Move("mimic",255/256,0,10,"normal",[],
			"In battles against a non-player character or wild Pokémon, Mimic allows the user to see the target's moveset" +
			" and select one of its moves to copy. The user will retain the copied attack in Mimic's place until it faints" +
			" , is switched out or the battle ends. Mimic can copy all selectable moves, including the opponent's Mimic, " +
			generateLink("AttackIndex","transform","../attacks/") + ", and " + generateLink("AttackIndex","metronome","../attacks/") +
			", as well as any move that the user already knows. However, Mimic can't copy " +
			generateLink("AttackIndex","struggle","../attacks/") + " because it is not a normally selectable move. The copied move" +
			" will use Mimic's PP (therefore, Mimic itself loses PP whenever a move copied by Mimic is used). If a Pokémon" +
			" uses Mimic as a result of " + generateLink("AttackIndex","mirror move","../attacks/") + " or " +
			generateLink("AttackIndex","metronome","../attacks/") + ", then the copied move will use the PP of the move that called" +
			" it. If the player uses any PP-healing items, they will heal up to Mimic's (or " + generateLink("AttackIndex","mirror move","../attacks/") +
			"'s, or Metronome's) maximum PP. If a Pokémon uses Mimic which was acquired from " + generateLink("AttackIndex","transform","../attacks/") +
			" (or if a Pokémon uses Mimic as a result of " + generateLink("AttackIndex","mirror move","../attacks/") + " or " +
			generateLink("AttackIndex","metronome","../attacks/") + " acquired from " + generateLink("AttackIndex","transform","../attacks/") +
			"), then the 5 PP that is given by Transform will be used for the copied move as well, instead of using the Pokémon's own" +
			" PP. In the list of moves, the maximum PP displayed is taken from the copied move, even though this value is not used" +
			" in battle. If Mimic (as well as " + generateLink("AttackIndex","mirror move","../attacks/") + " or " +
			generateLink("AttackIndex","metronome","../attacks/") + ") has its PP increased by any PP Ups, this unused maximum PP displayed" +
			" is affected by the PP Ups. For instance, if Mimic copies " + generateLink("AttackIndex","tackle","../attacks/") + " and currently" +
			" has 9 PP, this can be displayed as \"" + generateLink("AttackIndex","tackle","../attacks/") + " 9/35\" (where \"35\" is" +
			generateLink("AttackIndex","tackle","../attacks/") + "'s maximum PP, with no PP Ups), or possibly \"" +
			generateLink("AttackIndex","tackle","../attacks/") + " 9/56\" (if three PP Ups have been used on Mimic). However, the true" +
			" maximum PP usable in battle is Mimic's PP as displayed in the summary screen, not the maximum PP displayed in the list" +
			" of moves. If a Pokémon that used Mimic levels up in battle and learns a new move, Mimic's effect is reverted. The move" +
			" copied by Mimic is lost, and Mimic will be usable again. If Mimic copies a partial trapping move, and if the target" +
			" switches out when its PP is 0 and before its duration is over, the current PP of the move will roll over to 63 and" +
			" full PP Ups will be applied to it. This increased PP value can be used normally (and, as usual, other moves copied" +
			" by Mimic will also use this PP value), and the user will retain the full PP Ups indefinitely. However, if the move's" +
			" PP is healed (for instance, by using a PP-healing item or a Pokémon Center), then it will return to its legitimate" +
			" maximum value (with full PP Ups)."),
		85 : new C_Move("minimize",255/256,0,1,"normal",[113],
			"Minimize raises the user's evasion stat by one stage and replaces the user's regular image with a tiny, generic" +
			" image until the user faints or is switched out, or the battle ends."),
		86 : new C_Move("mirror move",255/256,0,20,"flying",[17,21],
				"Mirror Move uses the last move targeted at the user by a Pokémon still on the field. A move called by Mirror Move" +
				" in this way counts as the last move used. Mirror Move will fail if no moves were targeted at the user (by a Pokémon" +
				" still on the field) before the use of Mirror Move, if the user of the move that would be called by Mirror Move" +
				" switches out during the turn Mirror Move is used, or if Mirror Move would call itself. Paralysis, confusion," +
				" recharging, and building up for a multi-turn move have no effect on the last move used; if Mirror Move is used" +
				" against a target that was fully paralyzed, hurt itself in confusion, or executed the first part of a multi-turn" +
				" move right before its use, Mirror Move will not count this as using a move. A Pokémon will be able to use a move" +
				" that is disabled if it is called via Mirror Move."),
		87 : new C_Move("mist",255/256,0,30,"ice",[],
			"Mist protects the user from having its stats decreased by opponents' status moves until the user switches out." +
			" Damaging moves that lower the target's stats as a side effect, such as " + generateLink("AttackIndex","acid","../attacks/") +
			" or " + generateLink("AttackIndex","psychic","../attacks/") + ", can still decrease the Pokémon's stats. Mist does not" +
			" remove any stat stage changes already in effect, and it does not prevent the user from lowering their own stats." +
			" The effect of Mist can be removed by " + generateLink("AttackIndex","haze","../attacks/") + ". Mist will fail if it is" +
			" already under effect. Mist does not stack with the effect of " + generateLink("Item","guard spec","../items/") + "."),
		88 : new C_Move("night shade",255/256,1,15,"ghost",[92,93,94],
			"Night Shade does damage equal to the user's level. Although Night Shade is a Ghost-type move, its type does" +
			" not alter the amount of damage it does. Night Shade is not affected by type immunities, so can hit both" +
			" Normal-type and Psychic-type Pokémon, both of which have immunities to Ghost-type moves during Generation I."),
		89 : new C_Move("pay day",255/256,40,20,"normal",[52],
			"Pay Day does damage and scatters coins on the ground with a value equal to twice the user's level for each time it is used." +
			" Regardless of who used Pay Day, these coins are picked up afterwards if the player wins the battle." +
			" No money is obtained if they flee or if the player captures the opponent Pokemon. No coins will be scattered" +
			" if Pay Day breaks a " + generateLink("AttackIndex","substitute","../attacks/") + "."),
		90 : new C_Move("peck",255/256,35,35,"flying",[21,84,118],"Peck does damage."),
		91 : new C_Move("petal dance",255/256,120,5,"grass",[43,44,45],
			"Petal Dance does damage, and up to 50% of the damage dealt to the target is restored to the user as HP." +
			" If this attack does 1 HP of damage, 1 HP will be restored to the user. If Petal Dance breaks a" +
			generateLink("AttackIndex","substitute","../attacks/") + ", no HP will be restored to the user. If HP is" +
			" restored to the user when its current HP would be greater than its maximum HP, its current HP will be" +
			" set equal to its maximum HP."),
		92 : new C_Move("pin missile",216/256,14,20,"bug",[15,135],
			"Pin Missile does damage, hitting the target 2-5 times per use. There is a 37.5% chance that it will hit 2 times," +
			" a 37.5% chance that it will hit 3 times, a 12.5% chance that it will hit 4 times, and a 12.5% chance that it will hit 5" +
			" times. Although only the first strike can be a critical hit, each successive one will deal the same amount of damage." +
			" Pin Missile will end immediately if it breaks a " + generateLink("AttackIndex","substitute","../attacks/") + ". " +
			generateLink("AttackIndex","bide","../attacks/") + " and " + generateLink("AttackIndex","counter","../attacks/") + " will only" +
			" acknowledge the last strike of this move. "),
		93 : new C_Move("poison gas",140/256,0,40,"poison",[],"Poison Gas poisons the target."),
		94 : new C_Move("poison powder",191/256,0,35,"poison",[1],
			"PoisonPowder poisons the target. Poison-type Pokémon are unaffected by PoisonPowder."),
		95 : new C_Move("poison sting",255/256,15,35,"poison",[13,14],
			"Poison Sting does damage and has a 20% chance of poisoning the target."),
		96 : new C_Move("pound",255/256,40,35,"normal",[151],"Pound does damage."),
		97 : new C_Move("psybeam",255/256,65,20,"psychic",[12,48,54,64,102,122,137],
			"Psybeam does damage and has a 10% chance of confusing the target."),
		98 : new C_Move("psychic",255/256,90,10,"psychic",[36,40,48,49,55,64,65,79,80,93,94,96,97,102,103,122,124,125,150,151],
			"Psychic does damage and has a 33% chance of lowering the target's Special by one stage."),
		99 : new C_Move("psywave",204/256,1,15,"psychic",[],
			"Psywave does a random amount of damage, varying between 1 damage and 1.5× the user's level."),
		100 : new C_Move("quick attack",255/256,40,30,"normal",[16,17,18,19,25,123,133],
			"Quick Attack does damage. It has a priority of +1, so it is used before all moves that do not have increased" +
			" priority. If the user is put to sleep or frozen during the turn that Quick Attack is (or attempts to be) used," +
			" its increased priority will not be reset during the sleep or freeze. Subsequently, it can only be reset on the" +
			" turn after the user wakes up or is defrosted, or if the user switches out."),
		101 : new C_Move("rage",255/256,20,20,"normal",[],
			"Rage does damage and it will not be possible for the player to do anything other than let the user continue to" +
			" use Rage, and it will not stop using Rage until it faints or the battle ends. Every time the user is damaged by" +
			" an attack or is targeted by " + generateLink("AttackIndex","disable","../attacks/") + ", its rage will build, causing" +
			" its Attack stat to increase by one stage. Being hit by a multi-hit move will raise the user's Attack once for each" +
			" hit. Rage will use 1 PP when selected, but not use any PP on any subsequent turns. If Rage misses during the turn" +
			" it is selected, its secondary effects will not activate. If Rage misses due to the 99.6% accuracy bug of 100%-accuracy" +
			" moves when there are no other accuracy or evasion modifiers in effect, or in case said modifiers cancel each other," +
			" its accuracy will be unaffected. However, if Rage misses due to an accuracy or evasion check when its decision-removing" +
			" effect is active, the accuracy of Rage will subsequently become 0.4%. The duration of Rage will be paused but not" +
			" disrupted by anything, including sleep, freeze, partial trapping, flinching, or if the user hurts itself due to" +
			" confusion. Rage will not attempt to increase the user's Attack if it has reached a stage of +6, and will not successfully" +
			" increase the user's Attack if it has reached a value of 999."),
		102 : new C_Move("razor leaf",255/256,55,25,"grass",[1,2,3,43,69,70,71],
			"Razor Leaf does damage and has an increased critical hit ratio (x8)."),
		103 : new C_Move("razor wind",255/256,120,5,"normal",[18,22,42,142],
			"Razor Wind does damage and has a 33% chance of causing the target to flinch."),
		104 : new C_Move("recover",255/256,0,20,"normal",[64,65,120,121,137,150],
			"Recover restores up to 50% of the user's maximum HP. Recover will fail if the difference between the user's maximum" +
			" HP and current HP leaves a remainder of 255 when divided by 256 (such as 255 or 511)."),
		105 : new C_Move("reflect",255/256,0,20,"psychic",[],
			"Reflect doubles the user's Defense when the opponent damages the user with a physical move. Reflect will fail if the user" +
			" is already under its effect. The effect of Reflect is ignored by self-inflicted confusion damage and critical hits. If" +
			" Reflect causes the user's defense to reach 1024 or higher at any time during battle calculations, it will be reduced mod" +
			" 1024. The effects of Reflect can be lifted by " + generateLink("AttackIndex","haze","../attacks/") + ". If the opponent has" +
			" Reflect, this lowers the user's confusion damage."),
		106 : new C_Move("rest",255/256,0,10,"psychic",[39,86,87,143],
			"Rest causes the user to fall asleep, restoring its HP to its maximum amount and replacing any existing non-volatile status" +
			" condition. The user will then be asleep for two turns, waking up on the second. Rest will fail if the user has full HP. A" +
			" glitch causes the stat reductions associated with paralysis and burn to remain despite the fact that the Pokémon no longer" +
			" has that status, though this can be alleviated by switching out. If a Pokémon that has been badly poisoned by " +
			generateLink("AttackIndex","tpxic","../attacks/") + " successfully uses Rest, it will be cured of poison, but " +
			generateLink("AttackIndex","toxic","../attacks/") + "'s counter is not reset; if it then suffers burn, " +
			generateLink("AttackIndex","leech seed","../attacks/") + " or poison damage, that damage will be calculated with the formula for" +
			" bad poison, still being calculated as N * x, and the N value will still increase by 1 each time (however, if the Pokémon is" +
			" poisoned with " + generateLink("AttackIndex","toxic","../attacks/") + " again, the N value will be reset to 1). Rest will also"+
			" fail if the difference between the user's maximum HP and current HP leaves a remainder of 255 when divided by 256 (such" +
			" as 255 or 511)."),
		107 : new C_Move("roar",255/256,0,20,"normal",[],
			"If Roar is successfully used in a wild Pokémon battle by either Pokémon, the battle will automatically end." +
			" In a Trainer battle, Roar has no effect. Roar has normal priority. If the user's level is less than" +
			" the target's level, there is a chance that Roar will fail, between approximately 10% and 25%, depending" +
			" on the levels of the two Pokémon. The chance of failure typically increases the higher the target's level is" +
			" than the user's. Specifically, the chance of failure is the following:" +
			" FailureChance = ((LevelTarget / 4) / (LevelTarget + LevelUser + 1))"),
		108 : new C_Move("rock slide",229/256,75,10,"rock",[23,28,57,68,74,75,76,95,104,105,111,112,142],"Rock Slide does damage."),
		109 : new C_Move("rock throw",165/256,50,15,"rock",[],"Rock Throw does damage."),
		110 : new C_Move("rolling kick",216/256,60,15,"fighting",[],
			"Rolling Kick does damage and has a 33% chance of causing the target to flinch. Rolling Kick cannot make" +
			" a target with a " + generateLink("AttackIndex","substitute","../attacks/") + " flinch."),
		111 : new C_Move("sand attack",255/256,0,15,"normal",[16,17,18,27,28,50,51,83,133,134,135,136],
			"Sand Attack decreases the target's accuracy stat by one stage."),
		112 : new C_Move("scratch",255/256,40,35,"normal",[4],"Scratch does damage."),
		113 : new C_Move("screech",216/256,0,40,"normal",[],"Screech decreases the target's Defense stat by two stat stages."),
		114 : new C_Move("seismic toss",255/256,1,20,"fighting",[54,56,57,61,64,66,67,94,106,107,113,139],
			"Seismic Toss does damage equal to the user's level. Although Seismic Toss is a Fighting-type move," +
			" its type does not alter the amount of damage it does. Seismic Toss is not affected by type immunities," +
			" so it can hit Ghost-type Pokémon."),
		115 : new C_Move("self-destruct",255/256,130,1,"normal",[74,75,100,143],
			"Self-Destruct does damage and causes the user to faint. Though its power is listed as 130, the target's Defense" +
			" will be halved during damage calculation (unless it is at a value of 1), effectively doubling the power to 260. The" +
			" user of Self-Destruct will faint even if the attack misses or the opponent is immune to it (due to being Ghost type)." +
			" If Self-Destruct breaks a target's " + generateLink("AttackIndex","substitute","../attacks/") + ", the user will not faint," +
			" though its image will be replaced by a blank image. Additionally, if the user of Self-Destruct had a " +
			generateLink("AttackIndex","substitute","../attacks/") + " at the time of such a situation, uses " +
			generateLink("AttackIndex","substitute","../attacks/") + " later, or switches out, its regular image will once again become" +
			" visible. If the user of Self-Destruct attacks first and faints itself, the opponent will not attack or be subjected to" +
			" recurrent damage during that round."),
		116 : new C_Move("sharpen",255/256,0,30,"normal",[137],"Sharpen increases the user's Attack stat by one stage."),
		117 : new C_Move("sing",140/256,0,15,"normal",[35,39],
			"Sing puts the target to sleep and can affect a target behind " + generateLink("AttackIndex","substitute","../attacks/") + "."),
		118 : new C_Move("skull bash",255/256,100,15,"normal",[7],
			"Skull Bash does nothing on the turn it is selected, other than say that the user lowered its head. On the following turn," +
			" Skull Bash will do damage, PP will be deducted from it, and it will count as the last move used. Once Skull Bash is selected," +
			" the user won't be able to switch out until it is disrupted or fully executed. If Skull Bash is not fully executed, PP will" +
			" not be deducted from it, and it will not count as the last move used. If the opponent uses " +
			generateLink("AttackIndex","mirror move","../attacks/") + " during the turn that the user lowers its head, " +
			generateLink("AttackIndex","mirror move","../attacks/") + " will copy the move that the user executed immediately before using Skull" +
			" Bash (or fail if it can't). Sleep, freeze, partial trapping, and flinching will pause but not disrupt the duration of Skull Bash."),
		119 : new C_Move("sky attack",229/256,140,5,"flying",[142,144,146],
			"Sky Attack does damage and has a 33% chance of causing the target to flinch."),
		120 : new C_Move("slam",191/256,80,20,"normal",[69],"Slam does damage."),
		121 : new C_Move("slash",255/256,70,20,"normal",[4,5,6,27,28,50,51,52,53,83,123,127,140,141],
			"Slash does damage and has an increased critical hit ratio (x8)."),
		122 : new C_Move("sleep powder",204/256,0,15,"grass",[1,2,3,12,43,44,45,48,49,69,70,102,103,114],
			"Sleep Powder puts the target to sleep. Sleep Powder can affect a target behind a " +
			generateLink("AttackIndex","substitute","../attacks/") + "."),
		123 : new C_Move("sludge",255/256,65,20,"poison",[88,89,109,110],"Sludge does damage and has a 40% chance of poisoning the target."),
		124 : new C_Move("smog",178/256,20,20,"poison",[],"Smog does damage and has a 40% chance of poisoning the target."),
		125 : new C_Move("smokescreen",255/256,0,20,"normal",[109,116,117],"Smokescreen lowers the target's accuracy stat by one stage."),
		126 : new C_Move("soft-boiled",255/256,0,10,"normal",[113,151],
			"Soft-Boiled restores up to 50% of the user's maximum HP. Soft-Boiled will fail if the difference between the user's maximum" +
			" HP and current HP leaves a remainder of 255 when divided by 256 (i.e. if this difference is 255 or 511)."),
		127 : new C_Move("solar beam",255/256,120,5,"grass",[43,126,136,146],"Solar Beam does damage."),
		128 : new C_Move("sonic boom",229/256,1,20,"normal",[81,100],
			"Sonic Boom always does exactly 20 damage if it hits. It has no secondary effects and does not take weaknesses" +
			" or resistances into account. SonicBoom can hit Ghost-type Pokémon."),
		129 : new C_Move("spike cannon",255/256,20,15,"normal",[138],
			"Spike Cannon does damage, hitting the target 2-5 times per use. There is a 37.5% chance that it will hit 2 times," +
			" a 37.5% chance that it will hit 3 times, a 12.5% chance that it will hit 4 times, and a 12.5% chance that it will" +
			" hit 5 times. Although only the first strike can be a critical hit, each successive one will deal the same amount of" +
			" damage. Spike Cannon will end immediately if it breaks a " + generateLink("AttackIndex","substitute","../attacks/") + ". " +
			generateLink("AttackIndex","bide","../attacks/") + " and " + generateLink("AttackIndex","counter","../attacks/") + " will only" +
			" acknowledge the last strike of this move."),
		130 : new C_Move("splash",255/256,0,40,"normal",[129],"Splash has no effect."),
		131 : new C_Move("spore",255/256,0,15,"grass",[46,47],
			"Spore puts the target to sleep. Spore can affect a target behind a " + generateLink("AttackIndex","substitute","../attacks/") + "."),
		132 : new C_Move("stomp",255/256,65,20,"normal",[77],
			"Stomp does damage and has a 33% chance of causing the target to flinch."),
		133 : new C_Move("strength",255/256,80,15,"normal",[],"Strength does damage."),
		134 : new C_Move("string shot",242/256,0,40,"bug",[10,13],
			"String Shot decreases the targets' Speed stat by one stage."),
		135 : new C_Move("struggle",255/256,50,10,"normal",[],
			"Struggle inflicts damage, and the user receives recoil damage equal to 1/2 of the damage done to the target. Struggle" +
			" will automatically be used by a Pokémon that has no usable moves but is ordered to attack. Struggle is capable of" +
			" striking a critical hit. Struggle has 10 base PP, though no PP would ever be deducted from it. Struggle has an accuracy" +
			" of 100%. If the user of Struggle attacks first and knocks itself out due to recoil damage, the opponent will not attack" +
			" or be subjected to recurrent damage during that round. If Struggle breaks a " + generateLink("AttackIndex","substitute","../attacks/") +
			", the user will take no recoil damage. Self-inflicted recoil damage from Struggle from the previous turn can be countered" +
			" if the opponent did not make a move on the following turn. Struggle deals Normal-type damage, meaning it is not very" +
			" effective against Rock-type Pokémon and ineffective against Ghost-type Pokémon. If the only usable move is disabled by " +
			generateLink("AttackIndex","disable","../attacks/") + ", the affected Pokémon will use Struggle."),
		136 : new C_Move("stun spore",204/256,0,30,"grass",[12,43,44,45,46,47,48,49,69,70,71,102,103,114],
			"Stun Spore paralyzes the target. Stun Spore can affect a target behind a " + generateLink("AttackIndex","substitute","../attacks/") + "."),
		137 : new C_Move("submission",204/256,80,25,"fighting",[56,57,61,66,67,68,107],
			"Submission does damage, and the user receives recoil damage equal to 25% of the damage done to the target." +
			" If the user of Submission attacks first and faints due to recoil damage, the target will not attack or be" +
			" subjected to recurrent damage during that round. However, the user will still be subject to recurrent damage" +
			" even if the target faints. Self-inflicted recoil damage from Submission from the previous turn can be countered" +
			" if the target does not make a move on the following turn. If Submission breaks a " +
			generateLink("AttackIndex","substitute","../attacks/") + ", the user will take no recoil damage."),
		138 : new C_Move("substitute",255/256,0,10,"normal",[83,123],
			"By decreasing its HP by 25% (rounded down) of its maximum HP, the user creates a substitute with 1 HP more than the amount of HP" +
			" lost by the user. If the user's current HP is less than 25% (rounded down) of its maximum HP, Substitute fails. If the user's" +
			" current HP is exactly equal to 25% (rounded down) of its maximum HP, it will faint upon creating the substitute. If the user's" +
			" maximum HP is 3 or less, it will not lose any HP when the substitute is made. The substitute always has the same type and stats" +
			" as the Pokémon that created it currently has. If a Pokémon has a substitute, any damage the Pokémon would take from an opponent's" +
			" moves is taken by the substitute instead. If the substitute runs out of HP or is hit by a one-hit KO move, it breaks. Other damage" +
			" (except self-inflicted confusion damage), such as recoil damage or damage from status conditions, is not affected by a substitute." +
			" Due to a glitch, if a Pokémon behind a substitute takes self-inflicted confusion damage, the damage is applied to the opponent's" +
			" substitute instead. If the opponent does not have a substitute, no Pokémon or substitute takes damage. While behind a substitute," +
			" its opponent's moves cannot lower its stat stages, poison it, freeze it, burn it, or cause it to flinch. A Pokémon behind a" +
			" substitute can be inflicted with paralysis or sleep by status moves (such as " + generateLink("AttackIndex","thunder wave","../attacks/") +
			" and " + generateLink("AttackIndex","hypnosis","../attacks/") + "), but not by damaging moves (such as "
			+ generateLink("AttackIndex","thunderbolt","../attacks/") + "). Conversely, a Pokémon behind a substitute cannot be confused by status moves" +
			" (such as " + generateLink("AttackIndex","confuse ray","../attacks/") + "), but can be confused by damaging moves (such as "
			+ generateLink("AttackIndex","confusion","../attacks/") + ") as long as they do not break the substitute. Even if a move breaks a" +
			" substitute, it cannot inflict any effects it would not be able to inflict to a Pokémon behind a substitute. Additionally," +
			" Substitute does not affect the opponent's " + generateLink("AttackIndex","disable","../attacks/") + ", " +
			generateLink("AttackIndex","leech seed","../attacks/") + ", " + generateLink("AttackIndex","super fang","../attacks/") + ", " +
			generateLink("AttackIndex","transform","../attacks/") + ", or binding moves; the user's " +
			generateLink("AttackIndex","bide","../attacks/") + ", " + generateLink("AttackIndex","counter","../attacks/") + ", or " +
			generateLink("AttackIndex","rage","../attacks/") + "; nor either Pokémon's " + generateLink("AttackIndex","haze","../attacks/") + "."+
			" Draining moves can hit and drain HP, but will not drain any HP if they break the substitute. If a Pokémon breaks a substitute" +
			" with " + generateLink("AttackIndex","hyper beam","../attacks/") + ", it will not need to recharge. If a Pokémon breaks a substitute" +
			" with " + generateLink("AttackIndex","explosion","../attacks/") + " or " + generateLink("AttackIndex","self-destruct","../attacks/") + ","+
			" it will not faint, although its sprite will still disappear until it switches out (or uses Substitute). If a Pokémon breaks" +
			" a substitute with a recoil move, it will not take any recoil damage. If a Pokémon breaks a substitute with " +
			generateLink("AttackIndex","pay day","../attacks/") + ", that use of " + generateLink("AttackIndex","pay day","../attacks/") + " will" +
			" not count toward the money its Trainer picks up at the end of the battle. If a Pokémon attacks a substitute with a" +
			" multi-strike move, the hits will automatically end if the substitute breaks."),
		139 : new C_Move("super fang",229/256,1,10,"normal",[19,20],
			"Super Fang does damage equal to 50% of the target's current HP. It always deals at least 1 HP of damage. It will" +
			" hit Ghost-type Pokémon, even though the type has immunity to Normal-type moves."),
		140 : new C_Move("supersonic",140/256,0,20,"normal",[72,90,118],
			"Supersonic causes the target to become confused. Supersonic will fail if the target has a " +
			generateLink("AttackIndex","substitute","../attacks/") + " or is already confused."),
		141 : new C_Move("surf",255/256,95,15,"water",[26,73,80,131],"Surf does damage."),
		142 : new C_Move("swift",256/256,60,20,"normal",[16,58],
			"Swift does damage and bypasses accuracy checks. It can hit a Pokémon even during the semi-invulnerable turn of a move such as " +
			generateLink("AttackIndex","dig","../attacks/") + "."),
		143 : new C_Move("swords dance",255/256,0,30,"normal",[],
			"Swords Dance increases the user's Attack stat by two stages."),
		144 : new C_Move("tackle",242/256,35,35,"normal",[1,7,10,11,129],"Tackle does damage."),
		145 : new C_Move("tail whip",255/256,0,30,"normal",[],
			"Tail Whip decreases the Defense stat of all adjacent opponents by one stage."),
		146 : new C_Move("take down",216/256,90,20,"normal",[58,84,86],
			"Take Down does damage, and the user receives recoil damage equal to 1/4 of the damage done to the target." +
			" If the user of Take Down attacks first and faints due to recoil damage, the opponent will not attack or be subjected" +
			" to recurrent damage during that round. Self-inflicted recoil damage from Take Down from the previous turn can" +
			" be countered if the opponent does not make a move on the following turn. If Take Down breaks a " + 
			generateLink("AttackIndex","substitute","../attacks/") + ", the user will take no recoil damage."),
		147 : new C_Move("teleport",255/256,0,20,"psychic",[],
			"If Teleport is successfully used in a wild Pokémon battle the user flees and the battle automatically ends." +
			" In a Trainer battle, Teleport always fails. Teleport has normal priority. If the user's level is less than" +
			" the target's level, there is a chance that Teleport will fail, between approximately 10% and 25%, depending" +
			" on the levels of the two Pokémon. The chance of failure typically increases the higher the target's level is" +
			" than the user's. Specifically, the chance of failure is the following:" +
			" FailureChance = ((LevelTarget / 4) / (LevelTarget + LevelUser + 1))"),
		148 : new C_Move("thrash",255/256,90,20,"normal",[56],
			"Thrash does damage for 2-3 turns. PP is deducted only on the turn Thrash is first called. Once" +
			" called, even if the move misses, the user will only be able to use Thrash, and will not be able to" +
			" switch out. After Thrash is finished, the user becomes confused, due to fatigue. If the Thrash duration" +
			" is disrupted (such as by full paralysis or hurting itself due to confusion), it will immediately end." +
			" The user will only become confused if Thrash is fully executed, without its duration being disrupted." +
			" Sleep, freeze, partial trapping, and flinching will pause but not disrupt the duration of Thrash."),
		149 : new C_Move("thunder",178/256,120,10,"electric",[25],"Thunder does damage."),
		150 : new C_Move("thunder punch",255/256,75,15,"electric",[25],
			"Thunder Punch does damage and has a 10% chance of paralyzing the opponent. Thunder Punch cannot paralyze Electric-type Pokémon."),
		151 : new C_Move("thunder shock",255/256,40,30,"electric",[25],
			"Thunder Shock does damage and has a 10% chance of paralyzing the target. Thunder Shock cannot paralyze Electric-type Pokémon."),
		152 : new C_Move("thunder wave",255/256,0,20,"electric",[25,26,36,40,64,65,80,81,82,96,97,100,101,113,120,121,122,125,135,137,145,
				147,148,149,150,151],
				"Thunder Wave paralyzes the target. Thander Wave takes types into consideration, so it cannot affect Ground-type Pokemon." +
				" Thunder Wave can affect a target behind a " + generateLink("AttackIndex","substitute","../attacks/") + "."),
		153 : new C_Move("thunderbolt",255/256,95,15,"electric",[25,26,31,34,81,82,100,101,110,113,121,122,125,126,130,131,135,137,145],
			"Thunderbolt does damage."),
		154 : new C_Move("toxic",216/256,0,10,"poison",[1,29,30,32,33,41,43,46,48,69,72,88,89,96,109,110,116,117],
			"Toxic badly poisons the target. When the target takes damage from the poison, the damage done will be N * x," +
			" where N starts at 1 and x is 1/16 of the target's maximum HP (rounded down, but not less than 1). While a" +
			" Pokémon is badly poisoned, N increases by 1 each time it takes either Toxic or " +
			generateLink("AttackIndex","leech seed","../attacks/") + " damage (meaning it may increase twice per turn if a Pokémon" +
			" is affected by both). When an afflicted Pokémon is affected by " + generateLink("AttackIndex","haze","../attacks/") +
			", switches out, or when the battle ends, the Pokémon's poison status becomes regular poison. If a badly poisoned" +
			" Pokémon successfully uses " + generateLink("AttackIndex","rest","../attacks/") + ", it will be cured of poison, but N" +
			" is not reset; if it then suffers burn, " + generateLink("AttackIndex","leech seed","../attacks/") + " or poison damage," +
			" that damage will still be calculated as N * x, and the N value will still increase by 1 each time (however," +
			" if the Pokémon is poisoned with Toxic, the N value will be reset to 1). Toxic cannot affect Poison-type Pokémon."),
		155 : new C_Move("transform",256/256,0,10,"normal",[132],
			"Transform changes the user's current species, form, type, stats (including base stats and determinant values (DV);" +
			" except the current and maximum HP are not copied), stat modifications and moves to that of the target's. The" +
			" Transform user retains its own species name or nickname, as well as its level and status conditions. The user's" +
			" original moves will be unusable as long as it is transformed, being replaced by those copied from the target." +
			" All moves copied by Transform will initially have 5 remaining PP, except any moves whose maximum PP is fewer" +
			" than 5 will simply have their full PP. A transformed Pokémon can use moves exclusive to a species it has" +
			" transformed into. In the summary and party screens, the user is shown in its original state, unaffected by" +
			" Transform. The user returns to its original state once it is switched out, faints, or the current battle ends. " +
			" If a transformed Pokémon takes damage from a critical hit, its original stats will be used rather than its stats" +
			" after Transform. The probability of a transformed Pokémon scoring a critical hit is based on the original" +
			" Pokémon's base Speed, not the base Speed of the Pokémon it transformed into. PP-restoring items such as " +
			generateLink("Item","ether","../items/") + " used from the Bag can only restore PP to moves the Pokémon knows" +
			" before transforming. Transform bypasses accuracy checks to always hit, even if the target is in the" +
			" semi-invulnerable turn of a move such as " + generateLink("AttackIndex","dig","../attacks/") + ". The level up" +
			" moveset glitch causes a Transformed Pokémon to use its original moveset (unaffected by Transform) if it" +
			" it levels up and learns a new move during a battle."),
		156 : new C_Move("tri attack",255/256,80,10,"normal",[84,137],"Tri Attack does damage."),
		157 : new C_Move("twineedle",255/256,25,20,"bug",[15],
			"Twineedle does damage, hitting the target twice per use. The second strike has a 20% chance of poisoning the" +
			" target, unless the target is Poison-type. Although only the first strike can be a critical hit, the second one will" +
			" deal the same amount of damage. Twineedle will end immediately if the first strike breaks a " +
			generateLink("AttackIndex","substitute","../attacks/") + ". " + generateLink("AttackIndex","bide","../attacks/") + " and " +
			generateLink("AttackIndex","counter","../attacks/") + " will only acknowledge the second strike of this move."),
		158 : new C_Move("vine whip",255/256,35,10,"grass",[1],"Vine Whip does damage."),
		159 : new C_Move("vice grip",255/256,55,30,"normal",[98],"Vice Grip does damage."),
		160 : new C_Move("water gun",255/256,40,25,"water",[7,120],"Water Gun does damage."),
		161 : new C_Move("waterfall",255/256,80,15,"water",[7,8,54,55,61,62,80,87,118,119,130,134,138,140],"Waterfall does damage."),
		162 : new C_Move("whirlwind",216/256,0,20,"normal",[],
			"If Whirlwind is successfully used in a wild Pokémon battle by either Pokémon, the battle will automatically end." +
			" In a Trainer battle, Whirlwind has no effect. Whirlwind has normal priority. If the user's level is less than" +
			" the target's level, there is a chance that Whirlwind will fail, between approximately 10% and 25%, depending" +
			" on the levels of the two Pokémon. The chance of failure typically increases the higher the target's level is" +
			" than the user's. Specifically, the chance of failure is the following:" +
			" FailureChance = ((LevelTarget / 4) / (LevelTarget + LevelUser + 1))"),
		163 : new C_Move("wing attack",255/256,35,35,"flying",[16,17,41,123],"Wing Attack does damage."),
		164 : new C_Move("withdraw",255/256,0,40,"water",[],"Withdraw increases the user's Defense by one stage."),
		165 : new C_Move("wrap",216/256,15,20,"normal",[23,24,72,73,108,114,127,147,148,149],
			"Wrap does damage and traps the target for 2-5 turns. There is a 37.5% chance that it will attack for 2 turns," +
			" a 37.5% chance that it will attack for 3 turns, a 12.5% chance that it will attack for 4 turns," +
			" and a 12.5% chance that it will attack for 5 turns. Though technically only the first attack can" +
			" score a critical hit, every attack during the duration will do the same amount of damage." +
			" While the target is trapped, it will be unable to attack, and if the user of Wrap attacks" +
			" before the target when used, the target will be unable to attack during the same turn." +
			" While it's inflicting damage, the text \"<Pokémon>'s attack continues!\" appears. Damage" +
			" done by Wrap's continuing duration is done after recurrent damage. If the user switches out before" +
			" the turn duration ends, the target will be unable to attack during that turn, since it did not get" +
			" to select a move. If the target switches out before the turn duration ends, Wrap will automatically" *
			" be used against the incoming Pokémon, deducting an additional PP from the move. If at such a time Wrap" +
			" has 0 PP, Wrap will still be used against the incoming Pokémon. After that use, the current PP of Wrap" +
			" will roll over to 63, and full PP Ups will be applied to it. Even if Wrap misses, it will negate the" +
			" recharge turn normally required for " + generateLink("AttackIndex","hyper beam","../attacks/") + ". Additionally," +
			" if the user of Wrap attacks before the user of " + generateLink("AttackIndex","hyper beam","../attacks/") +
			" during a recharge turn and the use of Wrap misses, the user of " + generateLink("AttackIndex","hyper beam","../attacks/") +
			" will automatically use " + generateLink("AttackIndex","hyper beam","../attacks/") + " during that turn." +
			" If at such a time " + generateLink("AttackIndex","hyper beam","../attacks/") + " has 0 PP, " +
			generateLink("AttackIndex","hyper beam","../attacks/") + " will still be used, and afterwards its current PP will" +
			" roll over to 63, and full PP ups will be applied to it. The target will get to select a move during each" +
			" turn of Wrap's duration, and will attack the player's incoming Pokémon with the selected move if the" +
			" player decides to switch before the duration is over. Although Wrap cannot damage Ghost-type Pokémon," +
			" it can still make them unable to attack for its duration. If Wrap is successful, the text will say that" +
			" it \"didn't affect\" the Ghost-type Pokémon regardless, and Wrap's animation will not play on the initial" +
			" turn (but will during the subsequent turns of its duration).")
	};
};

class C_MoveReference {
	constructor(name, learncondition) {
		this.m_name = name;
		this.m_learncondition = learncondition;
		this.m_movereference = C_Attack_List.getIndex(name);
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
			info += paraclass + preevolution.m_condition + ' from ' + generateLink("Pokemon", preevolution.m_pokemon, "../pokemon/") + '.';
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
	constructor(name, basestats, type, learnset, evolution, encounter_id) {
		this.m_basestat = basestats;
		this.m_type = type;
		this.m_learnset = learnset;
		this.m_name = name;
		this.m_evolution = evolution.m_evolution;
		this.m_encounter_id = encounter_id;
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
				if(typeof moves == 'undefined') {
					moves = this.m_learnset[i]
				} else {
					moves = [...moves, this.m_learnset[i]];
				}
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
			],  new C_Evolution(null,new C_EvolutionEntry(16,"ivysaur")), [22]),
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
		],  	new C_Evolution(new C_EvolutionEntry(16,"bulbasaur"), new C_EvolutionEntry(32,"venusaur")), [7]),
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
		],  	new C_Evolution(new C_EvolutionEntry(32,"ivysaur"), null), []),
		4 : new C_Pokemon("charmander",[39,52,43,65,50],["fire"],[
				new C_MoveReference("ember",1),
				new C_MoveReference("scratch",1),
				new C_MoveReference("bite",9),
				new C_MoveReference("headbutt",10),
				new C_MoveReference("fire punch",16),
				new C_MoveReference("slash",30),
				new C_MoveReference("flamethrower",38),
				new C_MoveReference("flamethrower",46)
		],  	new C_Evolution(null, new C_EvolutionEntry(16,"charmeleon")), [22]),
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
		],  	new C_Evolution(new C_EvolutionEntry(16,"charmander"), new C_EvolutionEntry(32,"charizard")), [7]),
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
		],  	new C_Evolution(new C_EvolutionEntry(32,"charmeleon"), null), [46,47]),
		7 : new C_Pokemon("squirtle",[44,48,65,43,50],["water"],[
				new C_MoveReference("water gun",1),
				new C_MoveReference("tackle",1),
				new C_MoveReference("bite",8),
				new C_MoveReference("headbutt",13),
				new C_MoveReference("bubble beam",16),
				new C_MoveReference("waterfall",28),
				new C_MoveReference("skull bash",35),
				new C_MoveReference("hydro pump",42)
		],  	new C_Evolution(null, new C_EvolutionEntry(16,"wartortle")), [22]),
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
		],  	new C_Evolution(new C_EvolutionEntry(16,"squirtle"), new C_EvolutionEntry(32,"blastoise")), [7,19,20,21]),
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
		],  	new C_Evolution(new C_EvolutionEntry(32,"wartortle"), null), [41,42,43,44,45]),
		10 : new C_Pokemon("caterpie",[45,30,35,45,20],["bug"],[
				new C_MoveReference("tackle",1),
				new C_MoveReference("string shot",1)
		],  	new C_Evolution(null, new C_EvolutionEntry(7,"metapod")), [1]),
		11 : new C_Pokemon("metapod",[50,20,55,30,25],["bug"],[
				new C_MoveReference("harden",1),
				new C_MoveReference("tackle",1)
		],  	new C_Evolution(new C_EvolutionEntry(7,"caterpie"), new C_EvolutionEntry(10,"butterfree")), [26]),
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
		],  	new C_Evolution(new C_EvolutionEntry(10,"metapod"), null), [6,9,25]),
		13 : new C_Pokemon("weedle",[40,35,30,50,20],["bug","poison"],[
				new C_MoveReference("poison sting",1),
				new C_MoveReference("string shot",1)
		],  	new C_Evolution(null, new C_EvolutionEntry(7,"kakuna")), [1]),
		14 : new C_Pokemon("kakuna",[45,25,50,35,25],["bug","poison"],[
				new C_MoveReference("harden",1),
				new C_MoveReference("poison sting",1)
		],  	new C_Evolution(new C_EvolutionEntry(7,"weedle"), new C_EvolutionEntry(10,"beedrill")), [26]),
		15 : new C_Pokemon("beedrill",[65,80,40,75,45],["bug","poison"],[
				new C_MoveReference("twineedle",1),
				new C_MoveReference("twineedle",12),
				new C_MoveReference("twineedle",16),
				new C_MoveReference("twineedle",20),
				new C_MoveReference("twineedle",25),
				new C_MoveReference("pin missile",30),
				new C_MoveReference("twineedle",35)
		],  	new C_Evolution(new C_EvolutionEntry(10,"kakuna"), null), [6,9,25]),
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
		],  	new C_Evolution(null, new C_EvolutionEntry(9,"pidgeotto")), [1,3,26]),
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
		],  	new C_Evolution(new C_EvolutionEntry(9,"pidgey"), new C_EvolutionEntry(20,"pidgeot")), [5,6,7,24]),
		18 : new C_Pokemon("pidgeot",[83,80,75,91,70],["normal","flying"],[
				new C_MoveReference("razor wind",1),
				new C_MoveReference("sand attack",1),
				new C_MoveReference("quick attack",1),
				new C_MoveReference("hyper beam",1),
				new C_MoveReference("razor wind",21),
				new C_MoveReference("quick attack",44)
		],  	new C_Evolution(new C_EvolutionEntry(20,"pidgeotto"), null), [14,15,18,21]),
		19 : new C_Pokemon("rattata",[30,56,35,72,25],["normal"],[
				new C_MoveReference("quick attack",1),
				new C_MoveReference("quick attack",7),
				new C_MoveReference("hyper fang",14),
				new C_MoveReference("focus energy",23),
				new C_MoveReference("super fang",34)
		],  	new C_Evolution(null, new C_EvolutionEntry(20,"raticate")), [1]),			// Todo: verify
		20 : new C_Pokemon("raticate",[55,81,60,97,50],["normal"],[
				new C_MoveReference("body slam",1),
				new C_MoveReference("super fang",1),
				new C_MoveReference("dig",1),
				new C_MoveReference("hyper beam",1),
				new C_MoveReference("super fang",7),
				new C_MoveReference("super fang",14),
				new C_MoveReference("super fang",27),
				new C_MoveReference("super fang",41)
		],  	new C_Evolution(new C_EvolutionEntry(20,"rattata"), null), [12,13,16,18,49]), 			// Todo: verify
		21 : new C_Pokemon("spearow",[40,60,30,70,31],["normal","flying"],[
				new C_MoveReference("peck",1),
				new C_MoveReference("growl",1),
				new C_MoveReference("leer",9),
				new C_MoveReference("fury attack",15),
				new C_MoveReference("mirror move",22),
				new C_MoveReference("drill peck",29),
				new C_MoveReference("agility",36)
		],  	new C_Evolution(null, new C_EvolutionEntry(20,"fearow")), [1,3,5]),
		22 : new C_Pokemon("fearow",[65,90,65,100,61],["normal","flying"],[
				new C_MoveReference("drill peck",1),
				new C_MoveReference("hyper beam",1),
				new C_MoveReference("razor wind",1),
				new C_MoveReference("drill peck",9),
				new C_MoveReference("drill peck",15),
				new C_MoveReference("drill peck",25),
				new C_MoveReference("drill peck",34),
				new C_MoveReference("drill peck",43)
		],  	new C_Evolution(new C_EvolutionEntry(20,"spearow"), null), [12,13,17,18]),
		23 : new C_Pokemon("ekans",[35,60,44,55,40],["poison"],[
				new C_MoveReference("wrap",1),
				new C_MoveReference("glare",1),
				new C_MoveReference("wrap",10),
				new C_MoveReference("earthquake",15),
				new C_MoveReference("rock Slide",16),
				new C_MoveReference("body slam",17),
				new C_MoveReference("glare",18)
		],  	new C_Evolution(null, new C_EvolutionEntry(16,"arbok")), [1,2,3,10]),
		24 : new C_Pokemon("arbok",[60,85,69,80,65],["poison"],[
				new C_MoveReference("wrap",1),
				new C_MoveReference("glare",1),
				new C_MoveReference("glare",10),
				new C_MoveReference("glare",17),
				new C_MoveReference("fissure",21),
				new C_MoveReference("glare",36),
				new C_MoveReference("glare",47)
		],  	new C_Evolution(new C_EvolutionEntry(16,"ekans"), null), [13,15,21]),
		25 : new C_Pokemon("pikachu",[35,55,30,90,50],["electric"],[
				new C_MoveReference("thunder Shock",1),
				new C_MoveReference("quick attack",1),
				new C_MoveReference("thunder wave",1),
				new C_MoveReference("headbutt",9),
				new C_MoveReference("thunder punch",16),
				new C_MoveReference("thunderbolt",20),
				new C_MoveReference("thunderbolt",30),
				new C_MoveReference("thunder",43)
		],  	new C_Evolution(null, new C_EvolutionEntry("thunderstone","raichu")), [1,4,6,15,26,32]),
		26 : new C_Pokemon("raichu",[60,90,55,100,90],["electric"],[
				new C_MoveReference("thunderbolt",1),
				new C_MoveReference("body slam",1),
				new C_MoveReference("thunder wave",1),
				new C_MoveReference("surf",1)
		],  	new C_Evolution(new C_EvolutionEntry("thunderstone","pikachu"), null), [56]),
		27 : new C_Pokemon("sandshrew",[50,75,85,40,30],["ground"],[
				new C_MoveReference("slash",1),
				new C_MoveReference("sand attack",1),
				new C_MoveReference("sand attack",10),
				new C_MoveReference("dig",16),
				new C_MoveReference("slash",24),
				new C_MoveReference("slash",31),
				new C_MoveReference("earthquake",38)
		],  	new C_Evolution(null, new C_EvolutionEntry(22,"sandslash")), [1,2,5,10,11,29]),
		28 : new C_Pokemon("sandslash",[75,100,110,65,55],["ground"],[
				new C_MoveReference("dig",1),
				new C_MoveReference("slash",1),
				new C_MoveReference("sand attack",10),
				new C_MoveReference("slash",17),
				new C_MoveReference("rock Slide",27),
				new C_MoveReference("earthquake",40),
				new C_MoveReference("body slam",47)
		],  	new C_Evolution(new C_EvolutionEntry(22,"sandshrew"), null), [13,15,16,21,23]),
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
		],  	new C_Evolution(null, new C_EvolutionEntry(16,"nidorina")), [1,22,25]),
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
		],  	new C_Evolution(new C_EvolutionEntry(16,"nidoranf"), new C_EvolutionEntry("moonstone","nidoqueen")), [6,7,16]),
		31 : new C_Pokemon("nidoqueen",[90,82,87,76,75],["poison","ground"],[
				new C_MoveReference("lovely kiss",1),
				new C_MoveReference("earthquake",1),
				new C_MoveReference("thunderbolt",1),
				new C_MoveReference("blizzard",1),
				new C_MoveReference("thunderbolt",8),
				new C_MoveReference("thunderbolt",14),
				new C_MoveReference("earthquake",42)
		],  	new C_Evolution(new C_EvolutionEntry("moonstone","nidorina"), null), [33,34,51,53,54]),
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
		],  	new C_Evolution(null, new C_EvolutionEntry(16,"nidorino")), [1,22,25]),
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
		],  	new C_Evolution(new C_EvolutionEntry(16,"nidoranm"), new C_EvolutionEntry("moonstone","nidoking")), [6,7,16]),
		34 : new C_Pokemon("nidoking",[81,92,77,85,75],["poison","ground"],[
				new C_MoveReference("blizzard",1),
				new C_MoveReference("thunderbolt",1),
				new C_MoveReference("lovely kiss",1),
				new C_MoveReference("earthquake",1),
				new C_MoveReference("thunderbolt",8),
				new C_MoveReference("thunderbolt",14),
				new C_MoveReference("earthquake",42)
		],  	new C_Evolution(new C_EvolutionEntry("moonstone","nidorino"), null), [33,35,51,52,53,54]),
		35 : new C_Pokemon("clefairy",[70,45,48,35,60],["normal"],[
				new C_MoveReference("sing",1),
				new C_MoveReference("metronome",1),
				new C_MoveReference("sing",13),
				new C_MoveReference("sing",18),
				new C_MoveReference("double-edge",24),
				new C_MoveReference("metronome",31),
				new C_MoveReference("metronome",39),
				new C_MoveReference("metronome",48)
		],  	new C_Evolution(null, new C_EvolutionEntry("moonstone","clefable")), [27,28,29]),
		36 : new C_Pokemon("clefable",[95,70,73,60,85],["normal"],[
				new C_MoveReference("body slam",1),
				new C_MoveReference("blizzard",1),
				new C_MoveReference("psychic",1),
				new C_MoveReference("thunder wave",1)
		],  	new C_Evolution(new C_EvolutionEntry("moonstone","clefairy"), null), [33,35,46,53]),
		37 : new C_Pokemon("vulpix",[38,41,40,65,65],["fire"],[
				new C_MoveReference("ember",1),
				new C_MoveReference("confuse ray",1),
				new C_MoveReference("confuse ray",10),
				new C_MoveReference("double-edge",11),
				new C_MoveReference("flamethrower",16),
				new C_MoveReference("flamethrower",35),
				new C_MoveReference("flamethrower",42)
		],  	new C_Evolution(null, new C_EvolutionEntry("firestone","ninetales")), [2,8,11,24]),
		38 : new C_Pokemon("ninetales",[73,76,75,100,100],["fire"],[
				new C_MoveReference("fire spin",1)
		],  	new C_Evolution(new C_EvolutionEntry("firestone","vulpix"), null), [46,47,48]),
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
		],  	new C_Evolution(null, new C_EvolutionEntry("moonstone","wigglytuff")), [2,3,8]),
		40 : new C_Pokemon("wigglytuff",[140,70,45,45,50],["normal"],[
				new C_MoveReference("psychic",1),
				new C_MoveReference("blizzard",1),
				new C_MoveReference("double-edge",1),
				new C_MoveReference("thunder wave",1)
		],  	new C_Evolution(new C_EvolutionEntry("moonstone","jigglypuff"), null), [14,16]),
		41 : new C_Pokemon("zubat",[40,45,35,55,40],["poison","flying"],[
				new C_MoveReference("wing attack",1),
				new C_MoveReference("toxic",1),
				new C_MoveReference("confuse ray",1),
				new C_MoveReference("confuse ray",10),
				new C_MoveReference("confuse ray",15),
				new C_MoveReference("hypnosis",16),
				new C_MoveReference("confuse ray",28),
				new C_MoveReference("hypnosis",58)
		],  	new C_Evolution(null, new C_EvolutionEntry(16,"golbat")), [27]),
		42 : new C_Pokemon("golbat",[75,80,70,90,75],["poison","flying"],[
				new C_MoveReference("confuse ray",1),
				new C_MoveReference("razor wind",1),
				new C_MoveReference("mega drain",1),
				new C_MoveReference("hypnosis",1),
				new C_MoveReference("confuse ray",10),
				new C_MoveReference("confuse ray",15),
				new C_MoveReference("confuse ray",21),
				new C_MoveReference("confuse ray",32),
				new C_MoveReference("hypnosis",60)
		],  	new C_Evolution(new C_EvolutionEntry(16,"zubat"), null), [30,31,41,44,45]),
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
		],  	new C_Evolution(null, new C_EvolutionEntry(16,"gloom")), [4,24,26]),
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
		],  	new C_Evolution(new C_EvolutionEntry(16,"oddish"), new C_EvolutionEntry("leafstone","vileplume")), [9,12,16,31]),
		45 : new C_Pokemon("vileplume",[95,80,85,50,110],["grass","poison"],[
				new C_MoveReference("sleep powder",1),
				new C_MoveReference("stun spore",1),
				new C_MoveReference("petal dance",1),
				new C_MoveReference("stun spore",15),
				new C_MoveReference("sleep powder",17),
				new C_MoveReference("petal dance",19)
		],  	new C_Evolution(new C_EvolutionEntry("leafstone","gloom"), null), [21,48,51,52]),
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
		],  	new C_Evolution(null, new C_EvolutionEntry(24,"parasect")), [5,10,26,27,28,29]),
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
		],  	new C_Evolution(new C_EvolutionEntry(24,"paras"), null), [12,14,15,48,49]),
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
		],  	new C_Evolution(null, new C_EvolutionEntry(31,"venomoth")), [10,26]),
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
		],  	new C_Evolution(new C_EvolutionEntry(31,"venonat"), null), [15,34,35,49]),
		50 : new C_Pokemon("diglett",[10,55,25,95,45],["ground"],[
				new C_MoveReference("sand attack",1),
				new C_MoveReference("slash",1),
				new C_MoveReference("sand attack",15),
				new C_MoveReference("dig",19),
				new C_MoveReference("sand attack",24),
				new C_MoveReference("slash",31),
				new C_MoveReference("earthquake",40)
		],  	new C_Evolution(null, new C_EvolutionEntry(26,"dugtrio")), [2,27,28,29,30,50]),
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
		],  	new C_Evolution(new C_EvolutionEntry(26,"diglett"), null), [23,35,56]),
		52 : new C_Pokemon("meowth",[40,45,35,90,40],["normal"],[
				new C_MoveReference("bite",1),
				new C_MoveReference("bite",12),
				new C_MoveReference("pay day",17),
				new C_MoveReference("bite",24),
				new C_MoveReference("slash",47),
				new C_MoveReference("hypnosis",58)
		],  	new C_Evolution(null, new C_EvolutionEntry(28,"persian")), [2,5]),
		53 : new C_Pokemon("persian",[65,70,60,115,65],["normal"],[
				new C_MoveReference("slash",1),
				new C_MoveReference("hypnosis",1),
				new C_MoveReference("slash",12),
				new C_MoveReference("slash",17),
				new C_MoveReference("slash",24),
				new C_MoveReference("slash",51),
				new C_MoveReference("hypnosis",63)
		],  	new C_Evolution(new C_EvolutionEntry(28,"meowth"), null), [33,35,55]),
		54 : new C_Pokemon("psyduck",[50,52,48,55,50],["water"],[
				new C_MoveReference("confusion",1),
				new C_MoveReference("bubble beam",1),
				new C_MoveReference("psybeam",9),
				new C_MoveReference("waterfall",10),
				new C_MoveReference("seismic toss",11),
				new C_MoveReference("hypnosis",12),
				new C_MoveReference("amnesia",52)
		],  	new C_Evolution(null, new C_EvolutionEntry(20,"golduck")), [2,3,4,8,10,14,25]),
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
		],  	new C_Evolution(new C_EvolutionEntry(20,"psyduck"), null), [18,21,41,43,44,45,51]),
		56 : new C_Pokemon("mankey",[40,80,35,70,35],["fighting"],[
				new C_MoveReference("karate chop",1),
				new C_MoveReference("low kick",1),
				new C_MoveReference("seismic toss",11),
				new C_MoveReference("thrash",12),
				new C_MoveReference("submission",13),
				new C_MoveReference("double-edge",14),
				new C_MoveReference("thrash",39)
		],  	new C_Evolution(null, new C_EvolutionEntry(20,"primeape")), [2,25]),
		57 : new C_Pokemon("primeape",[65,105,60,95,60],["fighting"],[
				new C_MoveReference("submission",1),
				new C_MoveReference("body slam",1),
				new C_MoveReference("seismic toss",1),
				new C_MoveReference("rock Slide",1),
				new C_MoveReference("seismic toss",15),
				new C_MoveReference("seismic toss",21),
				new C_MoveReference("seismic toss",27),
				new C_MoveReference("seismic toss",37),
				new C_MoveReference("high jump kick",46)
		],  	new C_Evolution(new C_EvolutionEntry(20,"mankey"), null), [15,18,31,42,43]),
		58 : new C_Pokemon("growlithe",[55,70,45,60,50],["fire"],[
				new C_MoveReference("bite",1),
				new C_MoveReference("take down",1),
				new C_MoveReference("ember",1),
				new C_MoveReference("bite",9),
				new C_MoveReference("swift",10),
				new C_MoveReference("double-edge",12),
				new C_MoveReference("flamethrower",14),
				new C_MoveReference("fire blast",50)
		],  	new C_Evolution(null, new C_EvolutionEntry("firestone","arcanine")), [2,4,8,11,17,24]),
		59 : new C_Pokemon("arcanine",[90,110,80,95,80],["fire"],[
				new C_MoveReference("fire blast",1),
				new C_MoveReference("body slam",1),
				new C_MoveReference("dig",1)
		],  	new C_Evolution(new C_EvolutionEntry("firestone","growlithe"), null), [46,47,48]),
		60 : new C_Pokemon("poliwag",[40,50,40,90,40],["water"],[
				new C_MoveReference("bubble beam",1),
				new C_MoveReference("hypnosis",1),
				new C_MoveReference("body slam",10),
				new C_MoveReference("body slam",11),
				new C_MoveReference("body slam",31),
				new C_MoveReference("body slam",38),
				new C_MoveReference("hydro pump",45)
		],  	new C_Evolution(null, new C_EvolutionEntry(14,"poliwhirl")), [3,25,26]),
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
		],  	new C_Evolution(new C_EvolutionEntry(14,"poliwag"), new C_EvolutionEntry("waterstone","poliwrath")), [8,9,12,19,20,21,24]),
		62 : new C_Pokemon("poliwrath",[90,85,95,70,70],["water","fighting"],[
				new C_MoveReference("waterfall",1),
				new C_MoveReference("ice beam",1),
				new C_MoveReference("earthquake",1),
				new C_MoveReference("lovely kiss",1),
				new C_MoveReference("blizzard",35),
				new C_MoveReference("hydro pump",40)
		],  	new C_Evolution(new C_EvolutionEntry("waterstone","poliwhirl"), null), [41,42,43,44,45]),
		63 : new C_Pokemon("abra",[25,20,15,90,105],["psychic"],[
				new C_MoveReference("confusion",1),
				new C_MoveReference("kinesis",1)
		],  	new C_Evolution(null, new C_EvolutionEntry(16,"kadabra")), [23]),
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
		],  	new C_Evolution(new C_EvolutionEntry(16,"abra"), new C_EvolutionEntry(100,"alakazam")), [34,35]),
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
		],  	new C_Evolution(new C_EvolutionEntry(100,"kadabra"), null), [55,56,57]),
		66 : new C_Pokemon("machop",[70,80,50,35,35],["fighting"],[
				new C_MoveReference("karate chop",1),
				new C_MoveReference("low kick",1),
				new C_MoveReference("low kick",20),
				new C_MoveReference("low kick",25),
				new C_MoveReference("seismic toss",32),
				new C_MoveReference("seismic toss",39),
				new C_MoveReference("submission",46)
		],  	new C_Evolution(null, new C_EvolutionEntry(22,"machoke")), [3,7,27,29,30]),
		67 : new C_Pokemon("machoke",[80,100,70,45,50],["fighting"],[
				new C_MoveReference("karate chop",1),
				new C_MoveReference("low kick",1),
				new C_MoveReference("submission",1),
				new C_MoveReference("submission",20),
				new C_MoveReference("submission",25),
				new C_MoveReference("seismic toss",36),
				new C_MoveReference("seismic toss",44),
				new C_MoveReference("submission",52)
		],  	new C_Evolution(new C_EvolutionEntry(22,"machop"), new C_EvolutionEntry(42,"machamp")), [14,31,41]),
		68 : new C_Pokemon("machamp",[90,130,80,55,65],["fighting"],[
				new C_MoveReference("submission",1),
				new C_MoveReference("body slam",1),
				new C_MoveReference("rock Slide",1),
				new C_MoveReference("earthquake",1),
				new C_MoveReference("submission",20),
				new C_MoveReference("submission",25),
				new C_MoveReference("submission",36),
				new C_MoveReference("submission",44),
				new C_MoveReference("high jump kick",52)
		],  	new C_Evolution(new C_EvolutionEntry(42,"machoke"), null), [34,43,45,52]),
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
		],  	new C_Evolution(null, new C_EvolutionEntry(16,"weepinbell")), [4,24,26]),
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
		],  	new C_Evolution(new C_EvolutionEntry(16,"bellsprout"), new C_EvolutionEntry("leafstone","victreebel")), [9,12,16]),
		71 : new C_Pokemon("victreebel",[80,105,65,70,100],["grass","poison"],[
				new C_MoveReference("razor leaf",1),
				new C_MoveReference("stun spore",1),
				new C_MoveReference("body slam",1),
				new C_MoveReference("lovely kiss",1),
				new C_MoveReference("razor leaf",13),
				new C_MoveReference("razor leaf",15),
				new C_MoveReference("lovely kiss",100)
		],  	new C_Evolution(new C_EvolutionEntry("leafstone","weepinbell"), null), [21,34,51,52]),
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
		],  	new C_Evolution(null, new C_EvolutionEntry(30,"tentacruel")), [19,20,21]),
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
		],  	new C_Evolution(new C_EvolutionEntry(30,"tentacool"), null), [19,20,21,44]),
		74 : new C_Pokemon("geodude",[40,80,100,20,30],["rock","ground"],[
				new C_MoveReference("self-destruct",1),
				new C_MoveReference("self-destruct",11),
				new C_MoveReference("self-destruct",16),
				new C_MoveReference("rock Slide",21),
				new C_MoveReference("dig",26),
				new C_MoveReference("earthquake",31),
				new C_MoveReference("explosion",36)
		],  	new C_Evolution(null, new C_EvolutionEntry(25,"graveler")), [3,27,28,30]),
		75 : new C_Pokemon("graveler",[55,95,115,35,45],["rock","ground"],[
				new C_MoveReference("dig",1),
				new C_MoveReference("self-destruct",1),
				new C_MoveReference("rock Slide",1),
				new C_MoveReference("explosion",1),
				new C_MoveReference("explosion",11),
				new C_MoveReference("explosion",16),
				new C_MoveReference("explosion",21),
				new C_MoveReference("explosion",29),
				new C_MoveReference("rock Slide",36),
				new C_MoveReference("earthquake",42)
		],  	new C_Evolution(new C_EvolutionEntry(25,"geodude"), new C_EvolutionEntry(42,"golem")), [17,30,31,42,43,44]),
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
		],  	new C_Evolution(new C_EvolutionEntry(42,"graveler"), null), [33,51,52,56]),
		77 : new C_Pokemon("ponyta",[50,85,55,90,65],["fire"],[
				new C_MoveReference("ember",1),
				new C_MoveReference("double kick",1),
				new C_MoveReference("stomp",1),
				new C_MoveReference("flamethrower",16),
				new C_MoveReference("double-edge",18),
				new C_MoveReference("hypnosis",24),
				new C_MoveReference("hypnosis",39),
				new C_MoveReference("hypnosis",43),
				new C_MoveReference("hypnosis",48)
		],  	new C_Evolution(null, new C_EvolutionEntry(26,"rapidash")), [3,5,8,9,14,15,16,24,26]),
		78 : new C_Pokemon("rapidash",[65,100,70,110,80],["fire"],[
				new C_MoveReference("horn drill",1),
				new C_MoveReference("hypnosis",74),
				new C_MoveReference("hypnosis",75),
				new C_MoveReference("hypnosis",76),
				new C_MoveReference("hypnosis",77),
				new C_MoveReference("hypnosis",78),
				new C_MoveReference("hypnosis",79)
		],  	new C_Evolution(new C_EvolutionEntry(26,"ponyta"), null), []),
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
		],  	new C_Evolution(null, new C_EvolutionEntry(37,"slowbro")), [55]),
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
		],  	new C_Evolution(new C_EvolutionEntry(37,"slowpoke"), null), [23]),
		81 : new C_Pokemon("magnemite",[25,35,70,45,95],["electric"],[
				new C_MoveReference("thunderbolt",1),
				new C_MoveReference("sonic boom",1),
				new C_MoveReference("thunder wave",1),
				new C_MoveReference("double-edge",1),
				new C_MoveReference("thunderbolt",21),
				new C_MoveReference("thunderbolt",25),
				new C_MoveReference("thunderbolt",29),
				new C_MoveReference("thunderbolt",35),
				new C_MoveReference("thunderbolt",41),
				new C_MoveReference("thunderbolt",47)
		],  	new C_Evolution(null, new C_EvolutionEntry(20,"magneton")), [4,7,9,10,11,18,31]),
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
		],  	new C_Evolution(new C_EvolutionEntry(20,"magnemite"), null), [56]),
		83 : new C_Pokemon("farfetch'd",[52,65,55,60,58],["normal","flying"],[
				new C_MoveReference("substitute",1),
				new C_MoveReference("sand attack",1),
				new C_MoveReference("slash",1),
				new C_MoveReference("slash",7),
				new C_MoveReference("slash",15),
				new C_MoveReference("slash",23),
				new C_MoveReference("slash",31),
				new C_MoveReference("agility",39)
		],  	new C_Evolution(null, null), [11,12,24]),
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
		],  	new C_Evolution(null, new C_EvolutionEntry(31,"dodrio")), [5,7,11,16,24]),
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
		],  	new C_Evolution(new C_EvolutionEntry(31,"doduo"), null), [14,17,18,21,23]),
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
		],  	new C_Evolution(null, new C_EvolutionEntry(26,"dewgong")), [4,11,19,20,21,25,27]),
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
		],  	new C_Evolution(new C_EvolutionEntry(26,"seel"), null), [21,41,42,44,45]),
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
		],  	new C_Evolution(null, new C_EvolutionEntry(24,"muk")), [4,8,10,17,28,29,30]),
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
		],  	new C_Evolution(new C_EvolutionEntry(24,"grimer"), null), [17,18,34,43,46,47,48,49]),
		90 : new C_Pokemon("shellder",[30,65,100,40,45],["water"],[
				new C_MoveReference("explosion",1),
				new C_MoveReference("clamp",1),
				new C_MoveReference("aurora beam",1),
				new C_MoveReference("supersonic",18),
				new C_MoveReference("clamp",23),
				new C_MoveReference("aurora beam",30),
				new C_MoveReference("ice beam",39),
				new C_MoveReference("ice beam",50)
		],  	new C_Evolution(null, new C_EvolutionEntry("waterstone","cloyster")), []),
		91 : new C_Pokemon("cloyster",[50,95,180,70,85],["water","ice"],[
				new C_MoveReference("explosion",1),
				new C_MoveReference("blizzard",1),
				new C_MoveReference("clamp",1),
				new C_MoveReference("explosion",50)
		],  	new C_Evolution(new C_EvolutionEntry("waterstone","shellder"), null), [34,56]),
		92 : new C_Pokemon("gastly",[30,35,30,80,100],["ghost","poison"],[
				new C_MoveReference("hypnosis",1),
				new C_MoveReference("confuse ray",1),
				new C_MoveReference("night shade",1),
				new C_MoveReference("hypnosis",27),
				new C_MoveReference("hypnosis",35)
		],  	new C_Evolution(null, new C_EvolutionEntry(25,"haunter")), [36,37]),
		93 : new C_Pokemon("haunter",[45,50,45,95,115],["ghost","poison"],[
				new C_MoveReference("hypnosis",1),
				new C_MoveReference("confuse ray",1),
				new C_MoveReference("night shade",1),
				new C_MoveReference("hypnosis",29),
				new C_MoveReference("psychic",56)
		],  	new C_Evolution(new C_EvolutionEntry(25,"gastly"), new C_EvolutionEntry(55,"gengar")), [35,37,38,49]),
		94 : new C_Pokemon("gengar",[60,65,60,110,130],["ghost","poison"],[
				new C_MoveReference("explosion",1),
				new C_MoveReference("hypnosis",1),
				new C_MoveReference("psychic",1),
				new C_MoveReference("night shade",1),
				new C_MoveReference("hypnosis",29),
				new C_MoveReference("seismic toss",100)
		],  	new C_Evolution(new C_EvolutionEntry(55,"haunter"), null), [55,57]),
		95 : new C_Pokemon("onix",[35,45,160,70,30],["rock","ground"],[
				new C_MoveReference("bind",1),
				new C_MoveReference("earthquake",1),
				new C_MoveReference("rock Slide",1),
				new C_MoveReference("bind",15),
				new C_MoveReference("bind",19),
				new C_MoveReference("bind",25),
				new C_MoveReference("bind",33),
				new C_MoveReference("bind",43)
		],  	new C_Evolution(null, null), [27,28,30,31,43]),
		96 : new C_Pokemon("drowzee",[60,48,45,42,90],["psychic"],[
				new C_MoveReference("confusion",1),
				new C_MoveReference("hypnosis",1),
				new C_MoveReference("thunder wave",12),
				new C_MoveReference("toxic",17),
				new C_MoveReference("psychic",24),
				new C_MoveReference("psychic",29),
				new C_MoveReference("psychic",32),
				new C_MoveReference("psychic",37)
		],  	new C_Evolution(null, new C_EvolutionEntry(26,"hypno")), [23]),
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
		],  	new C_Evolution(new C_EvolutionEntry(26,"drowzee"), null), [35]),
		98 : new C_Pokemon("krabby",[30,105,90,50,25],["water"],[
				new C_MoveReference("crabhammer",1),
				new C_MoveReference("vice grip",1),
				new C_MoveReference("crabhammer",10),
				new C_MoveReference("body slam",14),
				new C_MoveReference("body slam",30),
				new C_MoveReference("body slam",35),
				new C_MoveReference("body slam",40)
		],  	new C_Evolution(null, new C_EvolutionEntry(16,"kingler")), [4,10,13,24,25]),
		99 : new C_Pokemon("kingler",[55,130,115,75,50],["water"],[
				new C_MoveReference("crabhammer",1),
				new C_MoveReference("body slam",1),
				new C_MoveReference("guillotine",1),
				new C_MoveReference("crabhammer",20),
				new C_MoveReference("crabhammer",25),
				new C_MoveReference("crabhammer",34),
				new C_MoveReference("crabhammer",42),
				new C_MoveReference("crabhammer",49)
		],  	new C_Evolution(new C_EvolutionEntry(16,"krabby"), null), [41,42]),
		100 : new C_Pokemon("voltorb",[40,30,50,100,55],["electric"],[
				new C_MoveReference("sonic boom",1),
				new C_MoveReference("self-destruct",1),
				new C_MoveReference("explosion",1),
				new C_MoveReference("thunder wave",1),
				new C_MoveReference("sonic boom",17),
				new C_MoveReference("self-destruct",22),
				new C_MoveReference("thunderbolt",29),
				new C_MoveReference("thunder wave",36),
				new C_MoveReference("explosion",43)
		],  	new C_Evolution(null, new C_EvolutionEntry(30,"electrode")), [4,10,11,17,28,29,30,31]),
		101 : new C_Pokemon("electrode",[60,50,70,140,80],["electric"],[
				new C_MoveReference("explosion",1),
				new C_MoveReference("thunderbolt",1),
				new C_MoveReference("thunder wave",1),
				new C_MoveReference("explosion",17),
				new C_MoveReference("explosion",22),
				new C_MoveReference("explosion",29),
				new C_MoveReference("explosion",40),
				new C_MoveReference("explosion",50)
		],  	new C_Evolution(new C_EvolutionEntry(30,"voltorb"), null), [17,32,33,49,57]),
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
		],  	new C_Evolution(null, new C_EvolutionEntry("leafstone","exeggutor")), [23]),
		103 : new C_Pokemon("exeggutor",[95,95,85,55,125],["grass","psychic"],[
				new C_MoveReference("stun spore",1),
				new C_MoveReference("sleep powder",1),
				new C_MoveReference("psychic",1),
				new C_MoveReference("psychic",28)
		],  	new C_Evolution(new C_EvolutionEntry("leafstone","exeggcute"), null), [55,57]),
		104 : new C_Pokemon("cubone",[50,50,95,35,40],["ground"],[
				new C_MoveReference("bone Club",1),
				new C_MoveReference("headbutt",1),
				new C_MoveReference("headbutt",9),
				new C_MoveReference("double-edge",10),
				new C_MoveReference("rock Slide",12),
				new C_MoveReference("bonemerang",13),
				new C_MoveReference("bonemerang",46)
		],  	new C_Evolution(null, new C_EvolutionEntry(16,"marowak")), [2,11,22,27,39]),
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
		],  	new C_Evolution(new C_EvolutionEntry(16,"cubone"), null), [13,14,40,41,42,44]),
		106 : new C_Pokemon("hitmonlee",[50,120,53,87,35],["fighting"],[
				new C_MoveReference("high jump kick",1),
				new C_MoveReference("body slam",1),
				new C_MoveReference("seismic toss",1),
				new C_MoveReference("high jump kick",33),
				new C_MoveReference("high jump kick",38),
				new C_MoveReference("high jump kick",43),
				new C_MoveReference("high jump kick",48),
				new C_MoveReference("high jump kick",53)
		],  	new C_Evolution(null, null), [6,43]),
		107 : new C_Pokemon("hitmonchan",[50,105,79,76,35],["fighting"],[
				new C_MoveReference("submission",1),
				new C_MoveReference("body slam",1),
				new C_MoveReference("seismic toss",1),
				new C_MoveReference("seismic toss",33),
				new C_MoveReference("seismic toss",38),
				new C_MoveReference("seismic toss",43),
				new C_MoveReference("seismic toss",48),
				new C_MoveReference("seismic toss",53)
		],  	new C_Evolution(null, null), [6]),
		108 : new C_Pokemon("lickitung",[90,55,75,30,60],["normal"],[
				new C_MoveReference("Lick",1),
				new C_MoveReference("wrap",1),
				new C_MoveReference("body slam",1),
				new C_MoveReference("body slam",7),
				new C_MoveReference("body slam",15),
				new C_MoveReference("body slam",23),
				new C_MoveReference("earthquake",31),
				new C_MoveReference("hyper beam",39)
		],  	new C_Evolution(null, null), [5,6,8,9,12,13,30]),
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
		],  	new C_Evolution(null, new C_EvolutionEntry(24,"weezing")), [8,10,17,28,29,30]),
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
		],  	new C_Evolution(new C_EvolutionEntry(24,"koffing"), null), [17,18,46,47,48,49]),
		111 : new C_Pokemon("rhyhorn",[80,85,95,25,30],["ground","rock"],[
				new C_MoveReference("double-edge",1),
				new C_MoveReference("rock Slide",30),
				new C_MoveReference("rock Slide",35),
				new C_MoveReference("rock Slide",40),
				new C_MoveReference("earthquake",42),
				new C_MoveReference("rock Slide",50),
				new C_MoveReference("earthquake",55)
		],  	new C_Evolution(null, new C_EvolutionEntry(42,"rhydon")), [3,16,27,28,29]),
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
		],  	new C_Evolution(new C_EvolutionEntry(42,"rhyhorn"), null), [34,51,53,55]),
		113 : new C_Pokemon("chansey",[255,5,45,50,105],["normal"],[
				new C_MoveReference("minimize",1),
				new C_MoveReference("seismic toss",1),
				new C_MoveReference("thunder wave",1),
				new C_MoveReference("soft-boiled",1),
				new C_MoveReference("thunderbolt",24),
				new C_MoveReference("ice beam",25),
				new C_MoveReference("ice beam",38),
				new C_MoveReference("thunderbolt",44),
				new C_MoveReference("soft-boiled",48),
				new C_MoveReference("soft-boiled",54)
		],  	new C_Evolution(null, null), [56]),
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
		],  	new C_Evolution(null, null), [5,9,12,13,18,21]),
		115 : new C_Pokemon("kangaskhan",[105,95,80,90,75],["normal"],[
				new C_MoveReference("body slam",1),
				new C_MoveReference("earthquake",26),
				new C_MoveReference("body slam",31),
				new C_MoveReference("body slam",36),
				new C_MoveReference("hyper beam",41),
				new C_MoveReference("hyper beam",46)
		],  	new C_Evolution(null, null), [21,33,35,44,45,51,52,53,54]),
		116 : new C_Pokemon("horsea",[30,40,70,60,70],["water"],[
				new C_MoveReference("toxic",1),
				new C_MoveReference("bubble beam",1),
				new C_MoveReference("smokescreen",1),
				new C_MoveReference("smokescreen",19),
				new C_MoveReference("smokescreen",24),
				new C_MoveReference("smokescreen",30),
				new C_MoveReference("smokescreen",37),
				new C_MoveReference("hydro pump",45)
		],  	new C_Evolution(null, new C_EvolutionEntry(32,"seadra")), [19,20]),
		117 : new C_Pokemon("seadra",[55,65,95,85,95],["water"],[
				new C_MoveReference("dragon rage",1),
				new C_MoveReference("dragon rage",19),
				new C_MoveReference("toxic",24),
				new C_MoveReference("hydro pump",30),
				new C_MoveReference("smokescreen",41),
				new C_MoveReference("hydro pump",52)
		],  	new C_Evolution(new C_EvolutionEntry(32,"horsea"), null), [21,41]),
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
		],  	new C_Evolution(null, new C_EvolutionEntry(33,"seaking")), [19,20,21]),
		119 : new C_Pokemon("seaking",[80,92,65,68,80],["water"],[
				new C_MoveReference("horn drill",1),
				new C_MoveReference("bubble beam",19),
				new C_MoveReference("bubble beam",24),
				new C_MoveReference("bubble beam",30),
				new C_MoveReference("waterfall",39),
				new C_MoveReference("horn drill",48),
				new C_MoveReference("agility",54)
		],  	new C_Evolution(new C_EvolutionEntry(33,"goldeen"), null), []),
		120 : new C_Pokemon("staryu",[30,45,55,85,70],["water"],[
				new C_MoveReference("double-edge",1),
				new C_MoveReference("water gun",17),
				new C_MoveReference("light screen",22),
				new C_MoveReference("bubble beam",27),
				new C_MoveReference("bubble beam",32),
				new C_MoveReference("recover",37),
				new C_MoveReference("thunder wave",42),
				new C_MoveReference("hydro pump",47)
		],  	new C_Evolution(null, new C_EvolutionEntry("waterstone","starmie")), []),
		121 : new C_Pokemon("starmie",[60,75,85,115,100],["water","psychic"],[
				new C_MoveReference("thunder wave",1),
				new C_MoveReference("blizzard",1),
				new C_MoveReference("thunderbolt",1),
				new C_MoveReference("recover",1)
		],  	new C_Evolution(new C_EvolutionEntry("waterstone","staryu"), null), [57]),
		122 : new C_Pokemon("mr. mime",[40,45,65,90,100],["psychic"],[
				new C_MoveReference("psybeam",1),
				new C_MoveReference("thunder wave",1),
				new C_MoveReference("thunder wave",15),
				new C_MoveReference("hypnosis",20),
				new C_MoveReference("thunderbolt",25),
				new C_MoveReference("psychic",39)
		],  	new C_Evolution(null, null), [25,35,53]),
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
		],  	new C_Evolution(null, null), [8,9,13,14,15]),
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
		],  	new C_Evolution(null, null), [55]),
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
		],  	new C_Evolution(null, null), [32,33,52,53,54]),
		126 : new C_Pokemon("magmar",[65,100,60,105,125],["fire"],[
				new C_MoveReference("confuse ray",1),
				new C_MoveReference("thunderbolt",1),
				new C_MoveReference("body slam",1),
				new C_MoveReference("fire blast",1),
				new C_MoveReference("confuse ray",36),
				new C_MoveReference("confuse ray",39),
				new C_MoveReference("confuse ray",43),
				new C_MoveReference("confuse ray",48),
				new C_MoveReference("confuse ray",52),
				new C_MoveReference("solar beam",75)
		],  	new C_Evolution(null, null), [46,47,48,52,53,54]),
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
		],  	new C_Evolution(null, null), [55]),
		128 : new C_Pokemon("tauros",[75,105,95,115,70],["normal"],[
				new C_MoveReference("body slam",1),
				new C_MoveReference("earthquake",1),
				new C_MoveReference("hyper beam",1),
				new C_MoveReference("earthquake",21),
				new C_MoveReference("earthquake",28),
				new C_MoveReference("earthquake",35),
				new C_MoveReference("earthquake",44),
				new C_MoveReference("earthquake",51)
		],  	new C_Evolution(null, null), [57]),
		129 : new C_Pokemon("magikarp",[20,10,55,80,20],["water"],[
				new C_MoveReference("splash",1),
				new C_MoveReference("bubble",1),
				new C_MoveReference("tackle",15)
		],  	new C_Evolution(null, new C_EvolutionEntry(24,"gyarados")), [19,20]),
		130 : new C_Pokemon("gyarados",[95,125,79,81,100],["water","flying"],[
				new C_MoveReference("dragon rage",1),
				new C_MoveReference("waterfall",25),
				new C_MoveReference("thunderbolt",30),
				new C_MoveReference("body slam",32),
				new C_MoveReference("blizzard",41),
				new C_MoveReference("hydro pump",52)
		],  	new C_Evolution(new C_EvolutionEntry(24,"magikarp"), null), [33,43,44,56]),
		131 : new C_Pokemon("lapras",[130,85,80,60,95],["water","ice"],[
				new C_MoveReference("dragon rage",1),
				new C_MoveReference("confuse ray",31),
				new C_MoveReference("body slam",34),
				new C_MoveReference("thunderbolt",36),
				new C_MoveReference("blizzard",38),
				new C_MoveReference("blizzard",40),
				new C_MoveReference("surf",76)
		],  	new C_Evolution(null, null), [57]),
		132 : new C_Pokemon("ditto",[100,100,100,100,100],["normal"],[
				new C_MoveReference("Transform",1)
		],  	new C_Evolution(null, null), [5,6,7,22,42]),
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
				]), []),
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
		],		new C_Evolution(new C_EvolutionEntry("waterstone","eevee"), null), [23,34]),
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
		],		new C_Evolution(new C_EvolutionEntry("thunderstone","eevee"), null), [23,34]),
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
		],		new C_Evolution(new C_EvolutionEntry("firestone","eevee"), null), [12,23,46,47,48]),
		137 : new C_Pokemon("porygon",[65,60,70,40,75],["normal"],[
				new C_MoveReference("tri attack",1),
				new C_MoveReference("Sharpen",1),
				new C_MoveReference("conversion",1),
				new C_MoveReference("psybeam",1),
				new C_MoveReference("blizzard",22),
				new C_MoveReference("recover",24),
				new C_MoveReference("thunderbolt",28),
				new C_MoveReference("thunder wave",32)
		],  	new C_Evolution(null, null), [32,51,54]),
		138 : new C_Pokemon("omanyte",[35,40,100,35,90],["rock","water"],[
				new C_MoveReference("waterfall",1),
				new C_MoveReference("blizzard",1),
				new C_MoveReference("horn attack",34),
				new C_MoveReference("leer",39),
				new C_MoveReference("spike cannon",46),
				new C_MoveReference("hydro pump",53)
		],  	new C_Evolution(null, new C_EvolutionEntry(40,"omastar")), [47,48]),
		139 : new C_Pokemon("omastar",[70,60,125,55,115],["rock","water"],[
				new C_MoveReference("hydro pump",1),
				new C_MoveReference("blizzard",1),
				new C_MoveReference("seismic toss",1),
				new C_MoveReference("body slam",1),
				new C_MoveReference("seismic toss",34),
				new C_MoveReference("seismic toss",39),
				new C_MoveReference("seismic toss",44),
				new C_MoveReference("hydro pump",53)
		],  	new C_Evolution(new C_EvolutionEntry(40,"omanyte"), null), [49]),
		140 : new C_Pokemon("kabuto",[30,80,90,55,45],["rock","water"],[
				new C_MoveReference("waterfall",1),
				new C_MoveReference("blizzard",1),
				new C_MoveReference("slash",1),
				new C_MoveReference("absorb",34),
				new C_MoveReference("slash",39),
				new C_MoveReference("leer",44),
				new C_MoveReference("blizzard",45),
				new C_MoveReference("hydro pump",49)
		],  	new C_Evolution(null, new C_EvolutionEntry(40,"kabutops")), [47,48]),
		141 : new C_Pokemon("kabutops",[60,115,105,80,70],["rock","water"],[
				new C_MoveReference("hydro pump",1),
				new C_MoveReference("blizzard",1),
				new C_MoveReference("slash",1),
				new C_MoveReference("dig",1),
				new C_MoveReference("slash",34),
				new C_MoveReference("slash",39),
				new C_MoveReference("slash",46),
				new C_MoveReference("hydro pump",53)
		],  	new C_Evolution(new C_EvolutionEntry(40,"kabuto"), null), [49]),
		142 : new C_Pokemon("aerodactyl",[80,105,65,130,60],["rock","flying"],[
				new C_MoveReference("fly",1),
				new C_MoveReference("razor wind",33),
				new C_MoveReference("earthquake",38),
				new C_MoveReference("rock Slide",45),
				new C_MoveReference("sky attack",101)
		],  	new C_Evolution(null, null), [56]),
		143 : new C_Pokemon("snorlax",[160,110,65,30,65],["normal"],[
				new C_MoveReference("headbutt",1),
				new C_MoveReference("rest",1),
				new C_MoveReference("self-destruct",1),
				new C_MoveReference("body slam",35),
				new C_MoveReference("earthquake",41),
				new C_MoveReference("hyper beam",45),
				new C_MoveReference("lovely kiss",88)
		],  	new C_Evolution(null, null), [57]),
		144 : new C_Pokemon("articuno",[105,85,100,85,125],["ice","flying"],[
				new C_MoveReference("sky attack",1),
				new C_MoveReference("blizzard",1),
				new C_MoveReference("blizzard",51),
				new C_MoveReference("blizzard",55),
				new C_MoveReference("blizzard",60)
		],  	new C_Evolution(null, null), [56]),
		145 : new C_Pokemon("zapdos",[90,90,85,100,125],["electric","flying"],[
				new C_MoveReference("thunder wave",1),
				new C_MoveReference("drill peck",1),
				new C_MoveReference("drill peck",51),
				new C_MoveReference("drill peck",55),
				new C_MoveReference("thunderbolt",60)
		],  	new C_Evolution(null, null), [57]),
		146 : new C_Pokemon("moltres",[90,100,90,90,125],["fire","flying"],[
				new C_MoveReference("fire blast",1),
				new C_MoveReference("sky attack",1),
				new C_MoveReference("fire blast",51),
				new C_MoveReference("sky attack",55),
				new C_MoveReference("solar beam",60)
		],  	new C_Evolution(null, null), [55]),
		147 : new C_Pokemon("dratini",[41,64,45,50,50],["dragon"],[
				new C_MoveReference("wrap",1),
				new C_MoveReference("thunder wave",1),
				new C_MoveReference("dragon rage",1),
				new C_MoveReference("thunder wave",10),
				new C_MoveReference("thunder wave",20),
				new C_MoveReference("headbutt",21),
				new C_MoveReference("double-edge",22),
				new C_MoveReference("hyper beam",30)
		],  	new C_Evolution(null, new C_EvolutionEntry(30,"dragonair")), [53,54]),
		148 : new C_Pokemon("dragonair",[61,84,65,70,70],["dragon"],[
				new C_MoveReference("dragon rage",1),
				new C_MoveReference("wrap",1),
				new C_MoveReference("thunder wave",1),
				new C_MoveReference("thunder wave",10),
				new C_MoveReference("thunder wave",20),
				new C_MoveReference("thunder wave",35),
				new C_MoveReference("blizzard",45),
				new C_MoveReference("hyper beam",55)
		],  	new C_Evolution(new C_EvolutionEntry(30,"dratini"), new C_EvolutionEntry(55,"dragonite")), []),
		149 : new C_Pokemon("dragonite",[91,134,95,80,100],["dragon","flying"],[
				new C_MoveReference("wrap",1),
				new C_MoveReference("blizzard",1),
				new C_MoveReference("thunder wave",1),
				new C_MoveReference("thunder wave",10),
				new C_MoveReference("thunder wave",20),
				new C_MoveReference("thunder wave",35),
				new C_MoveReference("thunder wave",45),
				new C_MoveReference("thunder wave",60)
		],  	new C_Evolution(new C_EvolutionEntry(55,"dragonair"), null), [55]),
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
		],  	new C_Evolution(null, null), []),
		151 : new C_Pokemon("mew",[100,100,100,100,100],["psychic"],[
				new C_MoveReference("pound",1),
				new C_MoveReference("thunder wave",2),
				new C_MoveReference("soft-boiled",7),
				new C_MoveReference("body slam",10),
				new C_MoveReference("psychic",12)
		],  	new C_Evolution(null, null), [57])
	};
};
