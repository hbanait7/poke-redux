const pokemon = [ 
   {
      "name":"Bulbasaur",
      "id":1,
      "type":["Grass", "Poison"],
      "stats":["Hit Points":45, "Attack":49, "Defense":49, "Special Attack":65, "Special Defense":65, "Speed":45],
      "description":"Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger."
   },
   {
      "name":"Ivysaur",
      "id":2,
      "type":["Grass", "Poison"],
      "stats":["Hit Points":60, "Attack":62, "Defense":63, "Special Attack":80, "Special Defense":80, "Speed":60],
      "description":"There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon."
   },
   {
      "name":"Venusaur",
      "id":3,
      "type":["Grass", "Poison"],
      "stats":["Hit Points":80, "Attack":82, "Defense":83, "Special Attack":100, "Special Defense":100, "Speed":80],
      "description":"There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people."
   },
   {
      "name":"Charmander",
      "id":4,
      "type":["Fire"],
      "stats":["Hit Points":39, "Attack":52, "Defense":43, "Special Attack":60, "Special Defense":50, "Speed":65],
      "description":"The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely."
   },
   {
      "name":"Charmeleon",
      "id":5,
      "type":["Fire"],
      "stats":["Hit Points":58, "Attack":64, "Defense":58, "Special Attack":80, "Special Defense":65, "Speed":80],
      "description":"Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color."
   },
   {
      "name":"Charizard",
      "id":6,
      "type":["Fire", "Flying"],
      "stats":["Hit Points":78, "Attack":84, "Defense":78, "Special Attack":109, "Special Defense":85, "Speed":100],
      "description":"Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself."
   },
   {
      "name":"Squirtle",
      "id":7,
      "type":["Water"],
      "stats":["Hit Points":44, "Attack":48, "Defense":65, "Special Attack":50, "Special Defense":64, "Speed":43],
      "description":"Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds."
   },
   {
      "name":"Wartortle",
      "id":8,
      "type":["Water"],
      "stats":["Hit Points":59, "Attack":63, "Defense":80, "Special Attack":65, "Special Defense":80, "Speed":58],
      "description":"Its tail is large and covered with a rich, thick fur. The tail becomes increasingly deeper in color as Wartortle ages. The scratches on its shell are evidence of this Pokémon's toughness as a battler."
   },
   {
      "name":"Blastoise",
      "id":9,
      "type":["Water"],
      "stats":["Hit Points":79, "Attack":83, "Defense":100, "Special Attack":85, "Special Defense":105, "Speed":78],
      "description":"Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet."
   },
   {
      "name":"Caterpie",
      "id":10,
      "type":["Bug"],
      "stats":["Hit Points":45, "Attack":30, "Defense":35, "Special Attack":20, "Special Defense":20, "Speed":45],
      "description":"Caterpie has a voracious appetite. It can devour leaves bigger than its body right before your eyes. From its antenna, this Pokémon releases a terrifically strong odor."
   },
   {
      "name":"Metapod",
      "id":11,
      "type":["Bug"],
      "stats":["Hit Points":50, "Attack":20, "Defense":55, "Special Attack":25, "Special Defense":25, "Speed":30],
      "description":"The shell covering this Pokémon's body is as hard as an iron slab. Metapod does not move very much. It stays still because it is preparing its soft innards for evolution inside the hard shell."
   },   
   {
      "name":"Butterfree",
      "id":12,
      "type":["Bug", "Flying"],
      "stats":["Hit Points":60, "Attack":45, "Defense":50, "Special Attack":90, "Special Defense":80, "Speed":70],
      "description":"Butterfree has a superior ability to search for delicious honey from flowers. It can even search out, extract, and carry honey from flowers that are blooming over six miles from its nest."
   },
   {
      "name":"Weedle",
      "id":13,
      "type":["Bug", "Poison"],
      "stats":["Hit Points":40, "Attack":35, "Defense":30, "Special Attack":20, "Special Defense":20, "Speed":50],
      "description":"Weedle has an extremely acute sense of smell. It is capable of distinguishing its favorite kinds of leaves from those it dislikes just by sniffing with its big red proboscis (nose)."
   },
   {
      "name":"Kakuna",
      "id":14,
      "type":["Bug", "Poison"],
      "stats":["Hit Points":45, "Attack":25, "Defense":50, "Special Attack":25, "Special Defense":25, "Speed":35],
      "description":"Kakuna remains virtually immobile as it clings to a tree. However, on the inside, it is extremely busy as it prepares for its coming evolution. This is evident from how hot the shell becomes to the touch."
   },
   {
      "name":"Beedrill",
      "id":15,
      "type":["Bug", "Poison"],
      "stats":["Hit Points":65, "Attack":90, "Defense":40, "Special Attack":45, "Special Defense":80, "Speed":75],
      "description":"Beedrill is extremely territorial. No one should ever approach its nest—this is for their own safety. If angered, they will attack in a furious swarm."
   },      
   {
      "name":"Pidgey",
      "id":16,
      "type":["Normal", "Flying"],
      "stats":["Hit Points":40, "Attack":45, "Defense":40, "Special Attack":35, "Special Defense":35, "Speed":56],
      "description":"Pidgey has an extremely sharp sense of direction. It is capable of unerringly returning home to its nest, however far it may be removed from its familiar surroundings."
   }, 
   {
      "name":"Pidgeotto",
      "id":17,
      "type":["Normal", "Flying"],
      "stats":["Hit Points":63, "Attack":60, "Defense":55, "Special Attack":50, "Special Defense":50, "Speed":71],
      "description":"Pidgeotto claims a large area as its own territory. This Pokémon flies around, patrolling its living space. If its territory is violated, it shows no mercy in thoroughly punishing the foe with its sharp claws."
   }, 
   {
      "name":"Pidgeot",
      "id":18,
      "type":["Normal", "Flying"],
      "stats":["Hit Points":83, "Attack":80, "Defense":75, "Special Attack":70, "Special Defense":70, "Speed":101],
      "description":"This Pokémon has a dazzling plumage of beautifully glossy feathers. Many Trainers are captivated by the striking beauty of the feathers on its head, compelling them to choose Pidgeot as their Pokémon."
   }, 
   {
      "name":"Rattata",
      "id":19,
      "type":["Normal"],
      "stats":["Hit Points":30, "Attack":56, "Defense":35, "Special Attack":25, "Special Defense":35, "Speed":72],
      "description":"Rattata is cautious in the extreme. Even while it is asleep, it constantly listens by moving its ears around. It is not picky about where it lives—it will make its nest anywhere."
   }, 
   {
      "name":"Raticate",
      "id":20,
      "type":["Normal"],
      "stats":["Hit Points":55, "Attack":81, "Defense":60, "Special Attack":50, "Special Defense":70, "Speed":97],
      "description":"Raticate's sturdy fangs grow steadily. To keep them ground down, it gnaws on rocks and logs. It may even chew on the walls of houses."
   }, 
   {
      "name":"Spearow",
      "id":21,
      "type":["Normal", "Flying"],
      "stats":["Hit Points":40, "Attack":60, "Defense":30, "Special Attack":31, "Special Defense":31, "Speed":70],
      "description":"Spearow has a very loud cry that can be heard over half a mile away. If its high, keening cry is heard echoing all around, it is a sign that they are warning each other of danger."
   }, 
   {
      "name":"Fearow",
      "id":22,
      "type":["Normal", "Flying"],
      "stats":["Hit Points":65, "Attack":90, "Defense":65, "Special Attack":61, "Special Defense":61, "Speed":100],
      "description":"Fearow is recognized by its long neck and elongated beak. They are conveniently shaped for catching prey in soil or water. It deftly moves its long and skinny beak to pluck prey."
   }, 
   {
      "name":"Ekans",
      "id":23,
      "type":["Poison"],
      "stats":["Hit Points":35, "Attack":60, "Defense":44, "Special Attack":40, "Special Defense":54, "Speed":55],
      "description":"Ekans curls itself up in a spiral while it rests. Assuming this position allows it to quickly respond to a threat from any direction with a glare from its upraised head."
   }, 
   {
      "name":"Arbok",
      "id":24,
      "type":["Poison"],
      "stats":["Hit Points":60, "Attack":85, "Defense":69, "Special Attack":65, "Special Defense":79, "Speed":80],
      "description":"This Pokémon is terrifically strong in order to constrict things with its body. It can even flatten steel oil drums. Once Arbok wraps its body around its foe, escaping its crunching embrace is impossible."
   },
   {
      "name":"Pikachu",
      "id":25,
      "type":["Electric"],
      "stats":["Hit Points":35, "Attack":55, "Defense":45, "Special Attack":50, "Special Defense":50, "Speed":90],
      "description":"Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge."
   },     
   {
      "name":"Raichu",
      "id":26,
      "type":["Electric"],
      "stats":["Hit Points":60, "Attack":90, "Defense":55, "Special Attack":90, "Special Defense":80, "Speed":110],
      "description":"If the electrical sacs become excessively charged, Raichu plants its tail in the ground and discharges. Scorched patches of ground will be found near this Pokémon's nest."
   },  
   {
      "name":"Sandshrew",
      "id":27,
      "type":["Ground"],
      "stats":["Hit Points":50, "Attack":75, "Defense":85, "Special Attack":20, "Special Defense":30, "Speed":40],
      "description":"Sandshrew's body is configured to absorb water without waste, enabling it to survive in an arid desert. This Pokémon curls up to protect itself from its enemies."
   }, 
   {
      "name":"Sandslash",
      "id":28,
      "type":["Ground"],
      "stats":["Hit Points":75, "Attack":100, "Defense":110, "Special Attack":45, "Special Defense":55, "Speed":65],
      "description":"Sandslash's body is covered by tough spikes, which are hardened sections of its hide. Once a year, the old spikes fall out, to be replaced with new spikes that grow out from beneath the old ones."
   }, 
   {
      "name":"Nidoran (F)",
      "id":29,
      "type":["Poison"],
      "stats":["Hit Points":55, "Attack":47, "Defense":52, "Special Attack":40, "Special Defense":40, "Speed":41],
      "description":"Nidoran (F) has barbs that secrete a powerful poison. They are thought to have developed as protection for this small-bodied Pokémon. When enraged, it releases a horrible toxin from its horn."
   },
   {
      "name":"Nidorina",
      "id":30,
      "type":["Poison"],
      "stats":["Hit Points":70, "Attack":62, "Defense":67, "Special Attack":55, "Special Defense":55, "Speed":56],
      "description":"When Nidorina are with their friends or family, they keep their barbs tucked away to prevent hurting each other. This Pokémon appears to become nervous if separated from the others."
   },     
   {
      "name":"Nidoqueen",
      "id":31,
      "type":["Poison", "Ground"],
      "stats":["Hit Points":90, "Attack":92, "Defense":87, "Special Attack":75, "Special Defense":85, "Speed":76],
      "description":"Nidoqueen's body is encased in extremely hard scales. It is adept at sending foes flying with harsh tackles. This Pokémon is at its strongest when it is defending its young."
   }, 
   {
      "name":"Nidoran (M)",
      "id":32,
      "type":["Poison"],
      "stats":["Hit Points":46, "Attack":57, "Defense":40, "Special Attack":40, "Special Defense":40, "Speed":50],
      "description":"Nidoran (M) has developed muscles for moving its ears. Thanks to them, the ears can be freely moved in any direction. Even the slightest sound does not escape this Pokémon's notice."
   },
   {
      "name":"Nidorino",
      "id":33,
      "type":["Poison"],
      "stats":["Hit Points":61, "Attack":72, "Defense":57, "Special Attack":55, "Special Defense":55, "Speed":65],
      "description":"Nidorino has a horn that is harder than a diamond. If it senses a hostile presence, all the barbs on its back bristle up at once, and it challenges the foe with all its might."
   },     
   {
      "name":"Nidoking",
      "id":34,
      "type":["Poison", "Ground"],
      "stats":["Hit Points":81, "Attack":102, "Defense":77, "Special Attack":85, "Special Defense":75, "Speed":85],
      "description":"Nidoking's thick tail packs enormously destructive power. With one swing, it can topple a metal transmission tower. Once this Pokémon goes on a rampage, there is no stopping it."
   },
   {
      "name":"Clefairy",
      "id":35,
      "type":["Fairy"],
      "stats":["Hit Points":70, "Attack":45, "Defense":48, "Special Attack":60, "Special Defense":65, "Speed":35],
      "description":"On every night of a full moon, groups of this Pokémon come out to play. When dawn arrives, the tired Clefairy return to their quiet mountain retreats and go to sleep nestled up against each other."
   },
   {
      "name":"Clefable",
      "id":36,
      "type":["Fairy"],
      "stats":["Hit Points":95, "Attack":70, "Defense":73, "Special Attack":95, "Special Defense":90, "Speed":60],
      "description":"Clefable moves by skipping lightly as if it were flying using its wings. Its bouncy step lets it even walk on water. It is known to take strolls on lakes on quiet, moonlit nights."
   },
   {
      "name":"Vulpix",
      "id":37,
      "type":["Fire"],
      "stats":["Hit Points":38, "Attack":41, "Defense":40, "Special Attack":50, "Special Defense":65, "Speed":65],
      "description":"At the time of its birth, Vulpix has one white tail. The tail separates into six if this Pokémon receives plenty of love from its Trainer. The six tails become magnificently curled."
   },             
   {
      "name":"Ninetales",
      "id":38,
      "type":["Fire"],
      "stats":["Hit Points":73, "Attack":76, "Defense":75, "Special Attack":81, "Special Defense":100, "Speed":100],
      "description":"Ninetales casts a sinister light from its bright red eyes to gain total control over its foe's mind. This Pokémon is said to live for a thousand years."
   },
   {
      "name":"Jigglypuff",
      "id":39,
      "type":["Normal", "Fairy"],
      "stats":["Hit Points":115, "Attack":45, "Defense":20, "Special Attack":45, "Special Defense":25, "Speed":20],
      "description":"Jigglypuff's vocal cords can freely adjust the wavelength of its voice. This Pokémon uses this ability to sing at precisely the right wavelength to make its foes most drowsy."
   }, 
   {
      "name":"Wigglytuff",
      "id":40,
      "type":["Normal", "Fairy"],
      "stats":["Hit Points":140, "Attack":70, "Defense":45, "Special Attack":85, "Special Defense":50, "Speed":45],
      "description":"Wigglytuff has large, saucerlike eyes. The surfaces of its eyes are always covered with a thin layer of tears. If any dust gets in this Pokémon's eyes, it is quickly washed away."
   },        
   {
      "name":"Zubat",
      "id":41,
      "type":["Poison", "Flying"],
      "stats":["Hit Points":40, "Attack":45, "Defense":35, "Special Attack":30, "Special Defense":40, "Speed":55],
      "description":"Zubat remains quietly unmoving in a dark spot during the bright daylight hours. It does so because prolonged exposure to the sun causes its body to become slightly burned."
   }, 
   {
      "name":"Golbat",
      "id":42,
      "type":["Poison", "Flying"],
      "stats":["Hit Points":75, "Attack":80, "Defense":70, "Special Attack":65, "Special Defense":75, "Speed":90],
      "description":"Golbat loves to drink the blood of living things. It is particularly active in the pitch black of night. This Pokémon flits around in the night skies, seeking fresh blood."
   },
   {
      "name":"Oddish",
      "id":43,
      "type":["Poison", "Grass"],
      "stats":["Hit Points":45, "Attack":50, "Defense":55, "Special Attack":75, "Special Defense":65, "Speed":30],
      "description":"During the daytime, Oddish buries itself in soil to absorb nutrients from the ground using its entire body. The more fertile the soil, the glossier its leaves become."
   }, 
   {
      "name":"Gloom",
      "id":44,
      "type":["Poison", "Grass"],
      "stats":["Hit Points":60, "Attack":65, "Defense":70, "Special Attack":85, "Special Defense":75, "Speed":40],
      "description":"Gloom releases a foul fragrance from the pistil of its flower. When faced with danger, the stench worsens. If this Pokémon is feeling calm and secure, it does not release its usual stinky aroma."
   },        
   {
      "name":"Vileplume",
      "id":45,
      "type":["Poison", "Grass"],
      "stats":["Hit Points":75, "Attack":80, "Defense":85, "Special Attack":110, "Special Defense":90, "Speed":50],
      "description":"Vileplume's toxic pollen triggers atrocious allergy attacks. That's why it is advisable never to approach any attractive flowers in a jungle, however pretty they may be."
   },
   {
      "name":"Paras",
      "id":46,
      "type":["Bug", "Grass"],
      "stats":["Hit Points":35, "Attack":70, "Defense":55, "Special Attack":45, "Special Defense":55, "Speed":25],
      "description":"Paras has parasitic mushrooms growing on its back called tochukaso. They grow large by drawing nutrients from this Bug Pokémon host. They are highly valued as a medicine for extending life."
   },   
   {
      "name":"Parasect",
      "id":47,
      "type":["Bug", "Grass"],
      "stats":["Hit Points":60, "Attack":95, "Defense":80, "Special Attack":60, "Special Defense":80, "Speed":30],
      "description":"Parasect is known to infest large trees en masse and drain nutrients from the lower trunk and roots. When an infested tree dies, they move onto another tree all at once."
   }, 
   {
      "name":"Venonat",
      "id":48,
      "type":["Bug", "Poison"],
      "stats":["Hit Points":60, "Attack":55, "Defense":50, "Special Attack":40, "Special Defense":55, "Speed":45],
      "description":"Venonat is said to have evolved with a coat of thin, stiff hair that covers its entire body for protection. It possesses large eyes that never fail to spot even minuscule prey."
   }, 
   {
      "name":"Venomoth",
      "id":49,
      "type":["Bug", "Poison"],
      "stats":["Hit Points":70, "Attack":65, "Defense":60, "Special Attack":90, "Special Defense":75, "Speed":90],
      "description":"Venomoth is nocturnal—it is a Pokémon that only becomes active at night. Its favorite prey are small insects that gather around streetlights, attracted by the light in the darkness."
   }, 
   {
      "name":"Diglett",
      "id":50,
      "type":["Ground"],
      "stats":["Hit Points":10, "Attack":55, "Defense":25, "Special Attack":35, "Special Defense":45, "Speed":95],
      "description":"Diglett are raised in most farms. The reason is simple— wherever this Pokémon burrows, the soil is left perfectly tilled for planting crops. This soil is made ideal for growing delicious vegetables."
   },
   {
      "name":"Dugtrio",
      "id":51,
      "type":["Ground"],
      "stats":["Hit Points":35, "Attack":80, "Defense":50, "Special Attack":50, "Special Defense":70, "Speed":120],
      "description":"Dugtrio are actually triplets that emerged from one body. As a result, each triplet thinks exactly like the other two triplets. They work cooperatively to burrow endlessly."
   },
   {
      "name":"Meowth",
      "id":52,
      "type":["Normal"],
      "stats":["Hit Points":40, "Attack":45, "Defense":35, "Special Attack":40, "Special Defense":40, "Speed":90],
      "description":"Meowth withdraws its sharp claws into its paws to slinkily sneak about without making any incriminating footsteps. For some reason, this Pokémon loves shiny coins that glitter with light."
   },
   {
      "name":"Persian",
      "id":53,
      "type":["Normal"],
      "stats":["Hit Points":65, "Attack":70, "Defense":60, "Special Attack":65, "Special Defense":65, "Speed":115],
      "description":"Persian has six bold whiskers that give it a look of toughness. The whiskers sense air movements to determine what is in the Pokémon's surrounding vicinity. It becomes docile if grabbed by the whiskers."
   },
   {
      "name":"Psyduck",
      "id":54,
      "type":["Water"],
      "stats":["Hit Points":50, "Attack":52, "Defense":48, "Special Attack":65, "Special Defense":50, "Speed":55],
      "description":"Psyduck uses a mysterious power. When it does so, this Pokémon generates brain waves that are supposedly only seen in sleepers. This discovery spurred controversy among scholars."
   },
   {
      "name":"Golduck",
      "id":55,
      "type":["Water"],
      "stats":["Hit Points":80, "Attack":82, "Defense":78, "Special Attack":95, "Special Defense":80, "Speed":85],
      "description":"The webbed flippers on its forelegs and hind legs and the streamlined body of Golduck give it frightening speed. This Pokémon is definitely much faster than even the most athletic swimmer."
   },
   {
      "name":"Mankey",
      "id":56,
      "type":["Fighting"],
      "stats":["Hit Points":40, "Attack":80, "Defense":35, "Special Attack":35, "Special Defense":45, "Speed":70],
      "description":"When Mankey starts shaking and its nasal breathing turns rough, it's a sure sign that it is becoming angry. However, because it goes into a towering rage almost instantly, it is impossible for anyone to flee its wrath."
   },
   {
      "name":"Primeape",
      "id":57,
      "type":["Fighting"],
      "stats":["Hit Points":65, "Attack":105, "Defense":60, "Special Attack":60, "Special Defense":70, "Speed":95],
      "description":"When Primeape becomes furious, its blood circulation is boosted. In turn, its muscles are made even stronger. However, it also becomes much less intelligent at the same time."
   },
   {
      "name":"Growlithe",
      "id":58,
      "type":["Fire"],
      "stats":["Hit Points":55, "Attack":70, "Defense":45, "Special Attack":70, "Special Defense":50, "Speed":60],
      "description":"Growlithe has a superb sense of smell. Once it smells anything, this Pokémon won't forget the scent, no matter what. It uses its advanced olfactory sense to determine the emotions of other living things."
   },   
   {
      "name":"Arcanine",
      "id":59,
      "type":["Fire"],
      "stats":["Hit Points":90, "Attack":110, "Defense":80, "Special Attack":100, "Special Defense":80, "Speed":95],
      "description":"Arcanine is known for its high speed. It is said to be capable of running over 6,200 miles in a single day and night. The fire that blazes wildly within this Pokémon's body is its source of power."
   },
   {
      "name":"Poliwag",
      "id":60,
      "type":["Water"],
      "stats":["Hit Points":40, "Attack":50, "Defense":40, "Special Attack":40, "Special Defense":40, "Speed":90],
      "description":"Poliwag has a very thin skin. It is possible to see the Pokémon's spiral innards right through the skin. Despite its thinness, however, the skin is also very flexible. Even sharp fangs bounce right off it."
   },
   {
      "name":"Poliwhirl",
      "id":61,
      "type":["Water"],
      "stats":["Hit Points":65, "Attack":65, "Defense":65, "Special Attack":50, "Special Defense":50, "Speed":90],
      "description":"The surface of Poliwhirl's body is always wet and slick with a slimy fluid. Because of this slippery covering, it can easily slip and slide out of the clutches of any enemy in battle."
   },   
   {
      "name":"Poliwrath",
      "id":62,
      "type":["Water", "Fighting"],
      "stats":["Hit Points":90, "Attack":95, "Defense":95, "Special Attack":70, "Special Defense":90, "Speed":70],
      "description":"Poliwrath's highly developed, brawny muscles never grow fatigued, however much it exercises. It is so tirelessly strong, this Pokémon can swim back and forth across the ocean without effort."
   },
   {
      "name":"Abra",
      "id":63,
      "type":["Psychic"],
      "stats":["Hit Points":25, "Attack":20, "Defense":15, "Special Attack":105, "Special Defense":55, "Speed":90],
      "description":"Abra sleeps for eighteen hours a day. However, it can sense the presence of foes even while it is sleeping. In such a situation, this Pokémon immediately teleports to safety."
   },
   {
      "name":"Kadabra",
      "id":64,
      "type":["Psychic"],
      "stats":["Hit Points":40, "Attack":35, "Defense":30, "Special Attack":120, "Special Defense":70, "Speed":105],
      "description":"Kadabra emits a peculiar alpha wave if it develops a headache. Only those people with a particularly strong psyche can hope to become a Trainer of this Pokémon."
   },      
   {
      "name":"Alakazam",
      "id":65,
      "type":["Psychic"],
      "stats":["Hit Points":55, "Attack":50, "Defense":45, "Special Attack":135, "Special Defense":95, "Speed":120],
      "description":"Alakazam's brain continually grows, making its head far too heavy to support with its neck. This Pokémon holds its head up using its psychokinetic power instead."
   },
   {
      "name":"Machop",
      "id":66,
      "type":["Fighting"],
      "stats":["Hit Points":70, "Attack":80, "Defense":50, "Special Attack":35, "Special Defense":35, "Speed":35],
      "description":"Machop's muscles are special—they never get sore no matter how much they are used in exercise. This Pokémon has sufficient power to hurl a hundred adult humans."
   },
   {
      "name":"Machoke",
      "id":67,
      "type":["Fighting"],
      "stats":["Hit Points":80, "Attack":100, "Defense":70, "Special Attack":50, "Special Defense":60, "Speed":45],
      "description":"Machoke's thoroughly toned muscles possess the hardness of steel. This Pokémon has so much strength, it can easily hold aloft a sumo wrestler on just one finger."
   },   
   {
      "name":"Machamp",
      "id":68,
      "type":["Fighting"],
      "stats":["Hit Points":90, "Attack":130, "Defense":80, "Special Attack":65, "Special Defense":85, "Speed":55],
      "description":"Machamp has the power to hurl anything aside. However, trying to do any work requiring care and dexterity causes its arms to get tangled. This Pokémon tends to leap into action before it thinks."
   },
   {
      "name":"Bellsprout",
      "id":69,
      "type":["Grass", "Poison"],
      "stats":["Hit Points":50, "Attack":75, "Defense":35, "Special Attack":70, "Special Defense":30, "Speed":40],
      "description":"Bellsprout's thin and flexible body lets it bend and sway to avoid any attack, however strong it may be. From its mouth, this Pokémon spits a corrosive fluid that melts even iron."
   },
   {
      "name":"Weepinbell",
      "id":70,
      "type":["Grass", "Poison"],
      "stats":["Hit Points":65, "Attack":90, "Defense":50, "Special Attack":85, "Special Defense":45, "Speed":55],
      "description":"Weepinbell has a large hook on its rear end. At night, the Pokémon hooks on to a tree branch and goes to sleep. If it moves around in its sleep, it may wake up to find itself on the ground."
   },   
   {
      "name":"Victreebell",
      "id":71,
      "type":["Grass", "Poison"],
      "stats":["Hit Points":80, "Attack":105, "Defense":65, "Special Attack":100, "Special Defense":70, "Speed":70],
      "description":"Victreebel has a long vine that extends from its head. This vine is waved and flicked about as if it were an animal to attract prey. When an unsuspecting prey draws near, this Pokémon swallows it whole."
   },
   {
      "name":"Tentacool",
      "id":72,
      "type":["Water", "Poison"],
      "stats":["Hit Points":40, "Attack":40, "Defense":35, "Special Attack":50, "Special Defense":100, "Speed":70],
      "description":"Tentacool's body is largely composed of water. If it is removed from the sea, it dries up like parchment. If this Pokémon happens to become dehydrated, put it back into the sea."
   },
   {
      "name":"Tentacruel",
      "id":73,
      "type":["Water", "Poison"],
      "stats":["Hit Points":80, "Attack":70, "Defense":65, "Special Attack":80, "Special Defense":120, "Speed":100],
      "description":"Tentacruel has large red orbs on its head. The orbs glow before lashing the vicinity with a harsh ultrasonic blast. This Pokémon's outburst creates rough waves around it."
   },
   {
      "name":"Geodude",
      "id":74,
      "type":["Rock", "Ground"],
      "stats":["Hit Points":40, "Attack":80, "Defense":100, "Special Attack":30, "Special Defense":30, "Speed":20],
      "description":"The longer a Geodude lives, the more its edges are chipped and worn away, making it more rounded in appearance. However, this Pokémon's heart will remain hard, craggy, and rough always."
   },
   {
      "name":"Graveler",
      "id":75,
      "type":["Rock", "Ground"],
      "stats":["Hit Points":55, "Attack":95, "Defense":115, "Special Attack":45, "Special Defense":45, "Speed":35],
      "description":"Graveler grows by feeding on rocks. Apparently, it prefers to eat rocks that are covered in moss. This Pokémon eats its way through a ton of rocks on a daily basis."
   },   
   {
      "name":"Golem",
      "id":76,
      "type":["Rock", "Ground"],
      "stats":["Hit Points":80, "Attack":120, "Defense":130, "Special Attack":55, "Special Defense":65, "Speed":45],
      "description":"Golem live up on mountains. If there is a large earthquake, these Pokémon will come rolling down off the mountains en masse to the foothills below."
   },
   {
      "name":"Ponyta",
      "id":77,
      "type":["Fire"],
      "stats":["Hit Points":50, "Attack":85, "Defense":55, "Special Attack":65, "Special Defense":65, "Speed":90],
      "description":"Ponyta is very weak at birth. It can barely stand up. This Pokémon becomes stronger by stumbling and falling to keep up with its parent."
   },
   {
      "name":"Rapidash",
      "id":78,
      "type":["Fire"],
      "stats":["Hit Points":90, "Attack":65, "Defense":65, "Special Attack":40, "Special Defense":40, "Speed":15],
      "description":"Rapidash usually can be seen casually cantering in the fields and plains. However, when this Pokémon turns serious, its fiery manes flare and blaze as it gallops its way up to 150 mph."
   },
   {
      "name":"Slowpoke",
      "id":79,
      "type":["Rock", "Ground"],
      "stats":["Hit Points":95, "Attack":75, "Defense":110, "Special Attack":100, "Special Defense":80, "Speed":30],
      "description":"Slowpoke uses its tail to catch prey by dipping it in water at the side of a river. However, this Pokémon often forgets what it's doing and often spends entire days just loafing at water's edge."
   },
   {
      "name":"Slowbro",
      "id":80,
      "type":["Rock", "Ground"],
      "stats":["Hit Points":80, "Attack":120, "Defense":130, "Special Attack":55, "Special Defense":65, "Speed":45],
      "description":"Slowbro's tail has a Shellder firmly attached with a bite. As a result, the tail can't be used for fishing anymore. This causes Slowbro to grudgingly swim and catch prey instead."
   },
   {
      "name":"Magnemite",
      "id":81,
      "type":["Electric"],
      "stats":["Hit Points":25, "Attack":35, "Defense":70, "Special Attack":95, "Special Defense":55, "Speed":45],
      "description":"Magnemite attaches itself to power lines to feed on electricity. If your house has a power outage, check your circuit breakers. You may find a large number of this Pokémon clinging to the breaker box."
   },
   {
      "name":"Magneton",
      "id":82,
      "type":["Electric"],
      "stats":["Hit Points":50, "Attack":60, "Defense":95, "Special Attack":120, "Special Defense":70, "Speed":70],
      "description":"Magneton emits a powerful magnetic force that is fatal to mechanical devices. As a result, large cities sound sirens to warn citizens of large-scale outbreaks of this Pokémon."
   },
   {
      "name":"Farfetch'd",
      "id":83,
      "type":["Normal", "Flying"],
      "stats":["Hit Points":52, "Attack":65, "Defense":55, "Special Attack":60, "Special Defense":62, "Speed":60],
      "description":"Farfetch'd is always seen with a stalk from a plant of some sort. Apparently, there are good stalks and bad stalks. This Pokémon has been known to fighting with others over stalks."
   },
   {
      "name":"Doduo",
      "id":84,
      "type":["Normal", "Flying"],
      "stats":["Hit Points":35, "Attack":85, "Defense":45, "Special Attack":35, "Special Defense":35, "Speed":75],
      "description":"Doduo's two heads never sleep at the same time. Its two heads take turns sleeping, so one head can always keep watch for enemies while the other one sleeps."
   },
   {
      "name":"Dodrio",
      "id":85,
      "type":["Normal", "Flying"],
      "stats":["Hit Points":60, "Attack":110, "Defense":70, "Special Attack":60, "Special Defense":60, "Speed":100],
      "description":"Watch out if Dodrio's three heads are looking in three separate directions. It's a sure sign that it is on its guard. Don't go near this Pokémon if it's being wary—it may decide to peck you."
   },
   {
      "name":"Seel",
      "id":86,
      "type":["Water"],
      "stats":["Hit Points":65, "Attack":45, "Defense":55, "Special Attack":45, "Special Defense":70, "Speed":45],
      "description":"Seel hunts for prey in the frigid sea underneath sheets of ice. When it needs to breathe, it punches a hole through the ice with the sharply protruding section of its head."
   },
   {
      "name":"Dewgong",
      "id":87,
      "type":["Water", "Ice"],
      "stats":["Hit Points":90, "Attack":70, "Defense":80, "Special Attack":70, "Special Defense":95, "Speed":70],
      "description":"Dewgong loves to snooze on bitterly cold ice. The sight of this Pokémon sleeping on a glacier was mistakenly thought to be a mermaid by a mariner long ago."
   },
   {
      "name":"Grimer",
      "id":88,
      "type":["Poison"],
      "stats":["Hit Points":80, "Attack":80, "Defense":50, "Special Attack":40, "Special Defense":50, "Speed":25],
      "description":"Grimer's sludgy and rubbery body can be forced through any opening, however small it may be. This Pokémon enters sewer pipes to drink filthy wastewater."
   },
   {
      "name":"Muk",
      "id":89,
      "type":["Poison"],
      "stats":["Hit Points":105, "Attack":105, "Defense":75, "Special Attack":65, "Special Defense":100, "Speed":50],
      "description":"From Muk's body seeps a foul fluid that gives off a nose-bendingly horrible stench. Just one drop of this Pokémon's body fluid can turn a pool stagnant and rancid."
   },
   {
      "name":"Shellder",
      "id":90,
      "type":["Water"],
      "stats":["Hit Points":30, "Attack":65, "Defense":100, "Special Attack":45, "Special Defense":25, "Speed":40],
      "description":"At night, this Pokémon uses its broad tongue to burrow a hole in the seafloor sand and then sleep in it. While it is sleeping, Shellder closes its shell, but leaves its tongue hanging out."
   },   
   {
      "name":"Cloyster",
      "id":91,
      "type":["Water", "Ice"],
      "stats":["Hit Points":50, "Attack":95, "Defense":180, "Special Attack":85, "Special Defense":45, "Speed":70],
      "description":"Cloyster is capable of swimming in the sea. It does so by swallowing water, then jetting it out toward the rear. This Pokémon shoots spikes from its shell using the same system."
   },  
   {
      "name":"Gastly",
      "id":92,
      "type":["Poison", "Ghost"],
      "stats":["Hit Points":30, "Attack":35, "Defense":30, "Special Attack":100, "Special Defense":35, "Speed":80],
      "description":"Gastly is largely composed of gaseous matter. When exposed to a strong wind, the gaseous body quickly dwindles away. Groups of this Pokémon cluster under the eaves of houses to escape the ravages of wind."
   },
   {
      "name":"Haunter",
      "id":93,
      "type":["Poison", "Ghost"],
      "stats":["Hit Points":45, "Attack":50, "Defense":45, "Special Attack":115, "Special Defense":55, "Speed":95],
      "description":"Haunter is a dangerous Pokémon. If one beckons you while floating in darkness, you must never approach it. This Pokémon will try to lick you with its tongue and steal your life away."
   },      
   {
      "name":"Gengar",
      "id":94,
      "type":["Poison", "Ghost"],
      "stats":["Hit Points":60, "Attack":65, "Defense":60, "Special Attack":130, "Special Defense":75, "Speed":110],
      "description":"Sometimes, on a dark night, your shadow thrown by a streetlight will suddenly and startlingly overtake you. It is actually a Gengar running past you, pretending to be your shadow."
   }, 
   {
      "name":"Onix",
      "id":95,
      "type":["Rock", "Ground"],
      "stats":["Hit Points":35, "Attack":45, "Defense":160, "Special Attack":30, "Special Defense":45, "Speed":70],
      "description":"Onix has a magnet in its brain. It acts as a compass so that this Pokémon does not lose direction while it is tunneling. As it grows older, its body becomes increasingly rounder and smoother."
   }, 
   {
      "name":"Drowzee",
      "id":96,
      "type":["Psychic"],
      "stats":["Hit Points":60, "Attack":48, "Defense":45, "Special Attack":43, "Special Defense":90, "Speed":42],
      "description":"If your nose becomes itchy while you are sleeping, it's a sure sign that one of these Pokémon is standing above your pillow and trying to eat your dream through your nostrils."
   }, 
   {
      "name":"Hypno",
      "id":97,
      "type":["Psychic"],
      "stats":["Hit Points":85, "Attack":73, "Defense":70, "Special Attack":73, "Special Defense":115, "Speed":67],
      "description":"Hypno holds a pendulum in its hand. The arcing movement and glitter of the pendulum lull the foe into a deep state of hypnosis. While this Pokémon searches for prey, it polishes the pendulum."
   }, 
   {
      "name":"Krabby",
      "id":98,
      "type":["Water"],
      "stats":["Hit Points":30, "Attack":105, "Defense":90, "Special Attack":25, "Special Defense":25, "Speed":50],
      "description":"Krabby live on beaches, burrowed inside holes dug into the sand. On sandy beaches with little in the way of food, these Pokémon can be seen squabbling with each other over territory."
   }, 
   {
      "name":"Kingler",
      "id":99,
      "type":["Water"],
      "stats":["Hit Points":55, "Attack":130, "Defense":115, "Special Attack":50, "Special Defense":50, "Speed":75],
      "description":"Kingler has an enormous, oversized claw. It waves this huge claw in the air to communicate with others. However, because the claw is so heavy, the Pokémon quickly tires."
   }, 
   {
      "name":"Voltorb",
      "id":100,
      "type":["Electric"],
      "stats":["Hit Points":40, "Attack":30, "Defense":50, "Special Attack":55, "Special Defense":55, "Speed":100],
      "description":"Voltorb was first sighted at a company that manufactures Poké Balls. The link between that sighting and the fact that this Pokémon looks very similar to a Poké Ball remains a mystery."
   }, 
   {
      "name":"Electrode",
      "id":101,
      "type":["Electric"],
      "stats":["Hit Points":60, "Attack":50, "Defense":70, "Special Attack":80, "Special Defense":80, "Speed":140],
      "description":"Electrode eats electricity in the atmosphere. On days when lightning strikes, you can see this Pokémon exploding all over the place from eating too much electricity."
   },
   {
      "name":"Exeggcute",
      "id":102,
      "type":["Grass", "Psychic"],
      "stats":["Hit Points":60, "Attack":40, "Defense":80, "Special Attack":60, "Special Defense":45, "Speed":40],
      "description":"This Pokémon consists of six eggs that form a closely knit cluster. The six eggs attract each other and spin around. When cracks increasingly appear on the eggs, Exeggcute is close to evolution."
   },    
   {
      "name":"Exeggutor",
      "id":103,
      "type":["Grass", "Psychic"],
      "stats":["Hit Points":95, "Attack":95, "Defense":85, "Special Attack":125, "Special Defense":65, "Speed":55],
      "description":"Exeggutor originally came from the tropics. Its heads steadily grow larger from exposure to strong sunlight. It is said that when the heads fall off, they group together to form Exeggcute."
   },  
   {
      "name":"Cubone",
      "id":104,
      "type":["Ground"],
      "stats":["Hit Points":50, "Attack":50, "Defense":95, "Special Attack":40, "Special Defense":50, "Speed":35],
      "description":"Cubone pines for the mother it will never see again. Seeing a likeness of its mother in the full moon, it cries. The stains on the skull the Pokémon wears are made by the tears it sheds."
   },  
   {
      "name":"Marowak",
      "id":105,
      "type":["Ground"],
      "stats":["Hit Points":60, "Attack":80, "Defense":110, "Special Attack":50, "Special Defense":80, "Speed":45],
      "description":"Marowak is the evolved form of a Cubone that has overcome its sadness at the loss of its mother and grown tough. This Pokémon's tempered and hardened spirit is not easily broken."
   },  
   {
      "name":"Hitmonlee",
      "id":106,
      "type":["Fighting"],
      "stats":["Hit Points":50, "Attack":120, "Defense":53, "Special Attack":35, "Special Defense":110, "Speed":87],
      "description":"Hitmonlee's legs freely contract and stretch. Using these springlike legs, it bowls over foes with devastating kicks. After battle, it rubs down its legs and loosens the muscles to overcome fatigue."
   },  
   {
      "name":"Hitmonchan",
      "id":107,
      "type":["Fighting"],
      "stats":["Hit Points":50, "Attack":105, "Defense":79, "Special Attack":35, "Special Defense":110, "Speed":76],
      "description":"Hitmonchan is said to possess the spirit of a boxer who had been working toward a world championship. This Pokémon has an indomitable spirit and will never give up in the face of adversity."
   },  
   {
      "name":"Lickitung",
      "id":108,
      "type":["Normal"],
      "stats":["Hit Points":90, "Attack":55, "Defense":75, "Special Attack":60, "Special Defense":75, "Speed":30],
      "description":"Whenever Lickitung comes across something new, it will unfailingly give it a lick. It does so because it memorizes things by texture and by taste. It is somewhat put off by sour things."
   },  
   {
      "name":"Koffing",
      "id":109,
      "type":["Poison"],
      "stats":["Hit Points":40, "Attack":65, "Defense":95, "Special Attack":60, "Special Defense":45, "Speed":35],
      "description":"If Koffing becomes agitated, it raises the toxicity of its internal gases and jets them out from all over its body. This Pokémon may also overinflate its round body, then explode."
   },  
   {
      "name":"Weezing",
      "id":110,
      "type":["Poison"],
      "stats":["Hit Points":65, "Attack":90, "Defense":120, "Special Attack":85, "Special Defense":70, "Speed":60],
      "description":"Weezing loves the gases given off by rotted kitchen garbage. This Pokémon will find a dirty, unkempt house and make it its home. At night, when the people in the house are asleep, it will go through the trash."
   },  
   {
      "name":"Rhyhorn",
      "id":111,
      "type":["Ground", "Rock"],
      "stats":["Hit Points":80, "Attack":85, "Defense":95, "Special Attack":30, "Special Defense":30, "Speed":25],
      "description":"Rhyhorn runs in a straight line, smashing everything in its path. It is not bothered even if it rushes headlong into a block of steel. This Pokémon may feel some pain from the collision the next day, however."
   },  
   {
      "name":"Rhydon",
      "id":112,
      "type":["Ground", "Rock"],
      "stats":["Hit Points":105, "Attack":130, "Defense":120, "Special Attack":45, "Special Defense":45, "Speed":40],
      "description":"Rhydon's horn can crush even uncut diamonds. One sweeping blow of its tail can topple a building. This Pokémon's hide is extremely tough. Even direct cannon hits don't leave a scratch."
   },  
   {
      "name":"Chansey",
      "id":113,
      "type":["Normal"],
      "stats":["Hit Points":250, "Attack":5, "Defense":5, "Special Attack":35, "Special Defense":105, "Speed":50],
      "description":"Chansey lays nutritionally excellent eggs on an everyday basis. The eggs are so delicious, they are easily and eagerly devoured by even those people who have lost their appetite."
   },  
   {
      "name":"Tangela",
      "id":114,
      "type":["Normal"],
      "stats":["Hit Points":65, "Attack":55, "Defense":115, "Special Attack":100, "Special Defense":40, "Speed":60],
      "description":"Tangela's vines snap off easily if they are grabbed. This happens without pain, allowing it to make a quick getaway. The lost vines are replaced by newly grown vines the very next day."
   },  
   {
      "name":"Kangaskhan",
      "id":115,
      "type":["Normal"],
      "stats":["Hit Points":105, "Attack":95, "Defense":80, "Special Attack":40, "Special Defense":80, "Speed":90],
      "description":"If you come across a young Kangaskhan playing by itself, you must never disturb it or attempt to catch it. The baby Pokémon's parent is sure to be in the area, and it will become violently enraged at you."
   },  
   {
      "name":"Horsea",
      "id":116,
      "type":["Water"],
      "stats":["Hit Points":30, "Attack":40, "Defense":70, "Special Attack":70, "Special Defense":25, "Speed":60],
      "description":"Horsea eats small insects and moss off of rocks. If the ocean current turns fast, this Pokémon anchors itself by wrapping its tail around rocks or coral to prevent being washed away."
   },  
   {
      "name":"Seadra",
      "id":117,
      "type":["Water"],
      "stats":["Hit Points":55, "Attack":65, "Defense":95, "Special Attack":95, "Special Defense":45, "Speed":85],
      "description":"Seadra sleeps after wriggling itself between the branches of coral. Those trying to harvest coral are occasionally stung by this Pokémon's poison barbs if they fail to notice it."
   },  
   {
      "name":"Goldeen",
      "id":118,
      "type":["Water"],
      "stats":["Hit Points":45, "Attack":67, "Defense":60, "Special Attack":35, "Special Defense":50, "Speed":63],
      "description":"Goldeen is a very beautiful Pokémon with fins that billow elegantly in water. However, don't let your guard down around this Pokémon—it could ram you powerfully with its horn."
   },  
   {
      "name":"Seaking",
      "id":119,
      "type":["Water"],
      "stats":["Hit Points":80, "Attack":92, "Defense":65, "Special Attack":65, "Special Defense":80, "Speed":68],
      "description":"In the autumn, Seaking males can be seen performing courtship dances in riverbeds to woo females. During this season, this Pokémon's body coloration is at its most beautiful."
   },
   {
      "name":"Staryu",
      "id":120,
      "type":["Water"],
      "stats":["Hit Points":30, "Attack":45, "Defense":55, "Special Attack":70, "Special Defense":55, "Speed":85],
      "description":"Staryu's center section has an organ called the core that shines bright red. If you go to a beach toward the end of summer, the glowing cores of these Pokémon look like the stars in the sky."
   },       
   {
      "name":"Starmie",
      "id":121,
      "type":["Water", "Psychic"],
      "stats":["Hit Points":60, "Attack":75, "Defense":85, "Special Attack":100, "Special Defense":85, "Speed":115],
      "description":"Starmie\'s center section—the core—glows brightly in seven colors. Because of its luminous nature, this Pokémon has been given the nickname 'the gem of the sea.'"
   },  
   {
      "name":"Mr. Mime",
      "id":122,
      "type":["Psychic", "Fairy"],
      "stats":["Hit Points":40, "Attack":45, "Defense":65, "Special Attack":100, "Special Defense":120, "Speed":90],
      "description":"Mr. Mime is a master of pantomime. Its gestures and motions convince watchers that something unseeable actually exists. Once the watchers are convinced, the unseeable thing exists as if it were real."
   },  
   {
      "name":"Scyther",
      "id":123,
      "type":["Bug", "Flying"],
      "stats":["Hit Points":70, "Attack":110, "Defense":80, "Special Attack":55, "Special Defense":80, "Speed":105],
      "description":"Scyther is blindingly fast. Its blazing speed enhances the effectiveness of the twin scythes on its forearms. This Pokémon's scythes are so effective, they can slice through thick logs in one wicked stroke."
   },  
   {
      "name":"Jynx",
      "id":124,
      "type":["Ice", "Psychic"],
      "stats":["Hit Points":65, "Attack":50, "Defense":35, "Special Attack":115, "Special Defense":95, "Speed":95],
      "description":"Jynx walks rhythmically, swaying and shaking its hips as if it were dancing. Its motions are so bouncingly alluring, people seeing it are compelled to shake their hips without giving any thought to what they are doing."
   },  
   {
      "name":"Electabuzz",
      "id":125,
      "type":["Electric"],
      "stats":["Hit Points":65, "Attack":83, "Defense":57, "Special Attack":95, "Special Defense":85, "Speed":105],
      "description":"When a storm arrives, gangs of this Pokémon compete with each other to scale heights that are likely to be stricken by lightning bolts. Some towns use Electabuzz in place of lightning rods."
   },  
   {
      "name":"Magmar",
      "id":126,
      "type":["Fire"],
      "stats":["Hit Points":65, "Attack":95, "Defense":57, "Special Attack":100, "Special Defense":85, "Speed":93],
      "description":"In battle, Magmar blows out intensely hot flames from all over its body to intimidate its opponent. This Pokémon's fiery bursts create heat waves that ignite grass and trees in its surroundings."
   },  
   {
      "name":"Pinsir",
      "id":127,
      "type":["Bug"],
      "stats":["Hit Points":65, "Attack":125, "Defense":100, "Special Attack":55, "Special Defense":70, "Speed":85],
      "description":"Pinsir is astoundingly strong. It can grip a foe weighing twice its weight in its horns and easily lift it. This Pokémon's movements turn sluggish in cold places."
   },  
   {
      "name":"Tauros",
      "id":128,
      "type":["Normal"],
      "stats":["Hit Points":75, "Attack":100, "Defense":95, "Special Attack":40, "Special Defense":70, "Speed":110],
      "description":"This Pokémon is not satisfied unless it is rampaging at all times. If there is no opponent for Tauros to battle, it will charge at thick trees and knock them down to calm itself."
   },  
   {
      "name":"Magikarp",
      "id":129,
      "type":["Water"],
      "stats":["Hit Points":20, "Attack":10, "Defense":55, "Special Attack":15, "Special Defense":20, "Speed":80],
      "description":"Magikarp is a pathetic excuse for a Pokémon that is only capable of flopping and splashing. This behavior prompted scientists to undertake research into it."
   },  
   {
      "name":"Gyarados",
      "id":130,
      "type":["Water", "Flying"],
      "stats":["Hit Points":95, "Attack":125, "Defense":79, "Special Attack":60, "Special Defense":100, "Speed":81],
      "description":"When Magikarp evolves into Gyarados, its brain cells undergo a structural transformation. It is said that this transformation is to blame for this Pokémon's wildly violent nature."
   },  
   {
      "name":"Lapras",
      "id":131,
      "type":["Water", "Ice"],
      "stats":["Hit Points":130, "Attack":85, "Defense":80, "Special Attack":85, "Special Defense":95, "Speed":60],
      "description":"People have driven Lapras almost to the point of extinction. In the evenings, this Pokémon is said to sing plaintively as it seeks what few others of its kind still remain."
   }, 
   {
      "name":"Ditto",
      "id":132,
      "type":["Normal"],
      "stats":["Hit Points":48, "Attack":48, "Defense":48, "Special Attack":48, "Special Defense":48, "Speed":48],
      "description":"Ditto rearranges its cell structure to transform itself into other shapes. However, if it tries to transform itself into something by relying on its memory, this Pokémon manages to get details wrong."
   },     
   {
      "name":"Eevee",
      "id":133,
      "type":["Normal"],
      "stats":["Hit Points":55, "Attack":55, "Defense":50, "Special Attack":45, "Special Defense":65, "Speed":55],
      "description":"Eevee has an unstable genetic makeup that suddenly mutates due to the environment in which it lives. Radiation from various stones causes this Pokémon to evolve."
   },  
   {
      "name":"Vaporeon",
      "id":134,
      "type":["Water"],
      "stats":["Hit Points":130, "Attack":65, "Defense":60, "Special Attack":110, "Special Defense":95, "Speed":65],
      "description":"Vaporeon underwent a spontaneous mutation and grew fins and gills that allow it to live underwater. This Pokémon has the ability to freely control water."
   },      
   {
      "name":"Jolteon",
      "id":135,
      "type":["Electric"],
      "stats":["Hit Points":65, "Attack":65, "Defense":60, "Special Attack":110, "Special Defense":95, "Speed":130],
      "description":"Jolteon's cells generate a low level of electricity. This power is amplified by the static electricity of its fur, enabling the Pokémon to drop thunderbolts. The bristling fur is made of electrically charged needles."
   },   
   {
      "name":"Flareon",
      "id":136,
      "type":["Fire"],
      "stats":["Hit Points":65, "Attack":130, "Defense":60, "Special Attack":95, "Special Defense":110, "Speed":65],
      "description":"Flareon's fluffy fur has a functional purpose—it releases heat into the air so that its body does not get excessively hot. This Pokémon's body temperature can rise to a maximum of 1,650 degrees Fahrenheit."
   },   
   {
      "name":"Porygon",
      "id":137,
      "type":["Normal"],
      "stats":["Hit Points":65, "Attack":60, "Defense":70, "Special Attack":85, "Special Defense":75, "Speed":40],
      "description":"Porygon is capable of reverting itself entirely back to program data and entering cyberspace. This Pokémon is copy protected so it cannot be duplicated by copying."
   }, 
   {
      "name":"Omanyte",
      "id":138,
      "type":["Rock", "Water"],
      "stats":["Hit Points":35, "Attack":40, "Defense":100, "Special Attack":90, "Special Defense":55, "Speed":35],
      "description":"Omanyte is one of the ancient and long-since-extinct Pokémon that have been regenerated from fossils by people. If attacked by an enemy, it withdraws itself inside its hard shell."
   }, 
   {
      "name":"Omastar",
      "id":139,
      "type":["Rock", "Water"],
      "stats":["Hit Points":70, "Attack":60, "Defense":125, "Special Attack":115, "Special Defense":70, "Speed":55],
      "description":"Omastar uses its tentacles to capture its prey. It is believed to have become extinct because its shell grew too large and heavy, causing its movements to become too slow and ponderous."
   }, 
   {
      "name":"Kabuto",
      "id":140,
      "type":["Rock", "Water"],
      "stats":["Hit Points":30, "Attack":80, "Defense":90, "Special Attack":55, "Special Defense":45, "Speed":55],
      "description":"Kabuto is a Pokémon that has been regenerated from a fossil. However, in extremely rare cases, living examples have been discovered. The Pokémon has not changed at all for 300 million years."
   }, 
   {
      "name":"Kabutops",
      "id":141,
      "type":["Rock", "Water"],
      "stats":["Hit Points":60, "Attack":115, "Defense":105, "Special Attack":65, "Special Defense":70, "Speed":80],
      "description":"Kabutops swam underwater to hunt for its prey in ancient times. The Pokémon was apparently evolving from being a water dweller to living on land as evident from the beginnings of change in its gills and legs."
   }, 
   {
      "name":"Aerodactyl",
      "id":142,
      "type":["Rock", "Flying"],
      "stats":["Hit Points":80, "Attack":105, "Defense":65, "Special Attack":60, "Special Defense":75, "Speed":130],
      "description":"Aerodactyl is a Pokémon from the age of dinosaurs. It was regenerated from genetic material extracted from amber. It is imagined to have been the king of the skies in ancient times."
   }, 
   {
      "name":"Snorlax",
      "id":143,
      "type":["Normal"],
      "stats":["Hit Points":160, "Attack":110, "Defense":65, "Special Attack":65, "Special Defense":110, "Speed":30],
      "description":"Snorlax's typical day consists of nothing more than eating and sleeping. It is such a docile Pokémon that there are children who use its expansive belly as a place to play."
   }, 
   {
      "name":"Articuno",
      "id":144,
      "type":["Ice", "Flying"],
      "stats":["Hit Points":90, "Attack":85, "Defense":100, "Special Attack":95, "Special Defense":125, "Speed":85],
      "description":"Articuno is a legendary bird Pokémon that can control ice. The flapping of its wings chills the air. As a result, it is said that when this Pokémon flies, snow will fall."
   }, 
   {
      "name":"Zapdos",
      "id":145,
      "type":["Electric", "Flying"],
      "stats":["Hit Points":90, "Attack":90, "Defense":85, "Special Attack":125, "Special Defense":90, "Speed":100],
      "description":"Zapdos is a legendary bird Pokémon that has the ability to control electricity. It usually lives in thunderclouds. The Pokémon gains power if it is stricken by lightning bolts."
   }, 
   {
      "name":"Moltres",
      "id":146,
      "type":["Fire", "Flying"],
      "stats":["Hit Points":90, "Attack":100, "Defense":90, "Special Attack":125, "Special Defense":85, "Speed":90],
      "description":"Moltres is a legendary bird Pokémon that has the ability to control fire. If this Pokémon is injured, it is said to dip its body in the molten magma of a volcano to burn and heal itself."
   }, 
   {
      "name":"Dratini",
      "id":147,
      "type":["Dragon"],
      "stats":["Hit Points":41, "Attack":64, "Defense":45, "Special Attack":50, "Special Defense":50, "Speed":50],
      "description":"Dratini continually molts and sloughs off its old skin. It does so because the life energy within its body steadily builds to reach uncontrollable levels."
   }, 
   {
      "name":"Dragonair",
      "id":148,
      "type":["Dragon"],
      "stats":["Hit Points":61, "Attack":84, "Defense":65, "Special Attack":70, "Special Defense":70, "Speed":70],
      "description":"Dragonair stores an enormous amount of energy inside its body. It is said to alter weather conditions in its vicinity by discharging energy from the crystals on its neck and tail."
   }, 
   {
      "name":"Dragonite",
      "id":149,
      "type":["Dragon", "Flying"],
      "stats":["Hit Points":90, "Attack":134, "Defense":95, "Special Attack":100, "Special Defense":100, "Speed":80],
      "description":"Dragonite is capable of circling the globe in just 16 hours. It is a kindhearted Pokémon that leads lost and foundering ships in a storm to the safety of land."
   }, 
   {
      "name":"Mewtwo",
      "id":150,
      "type":["Psychic"],
      "stats":["Hit Points":106, "Attack":110, "Defense":90, "Special Attack":154, "Special Defense":90, "Speed":130],
      "description":"Mewtwo is a Pokémon that was created by genetic manipulation. However, even though the scientific power of humans created this Pokémon's body, they failed to endow Mewtwo with a compassionate heart."
   }, 
   {
      "name":"Mew",
      "id":151,
      "type":["Ice", "Flying"],
      "stats":["Hit Points":100, "Attack":100, "Defense":100, "Special Attack":100, "Special Defense":100, "Speed":100],
      "description":"Mew is said to possess the genetic composition of all Pokémon. It is capable of making itself invisible at will, so it entirely avoids notice even if it approaches people."
   }
];

export { pokemon };

// http://veekun.com/dex/pokemon/search?sort=evolution-chain&introduced_in=1














