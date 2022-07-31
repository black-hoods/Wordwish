class Wordwish{
	static defaultWordsArrays = [
		['super', 'hyper', 'mega', 'giga', 'ultra', 'the', 'real', 'imaginary', 'mystic', 'legendary', 'epic'],
		['blue', 'green', 'red', 'black', 'white', 'pink', 'grey', 'brown', 'purple', 'cyan', 'dark-blue', 'light', 'dark', 'masked', 'heroic', 'brave', 'shiny', 'magic', 'amazing', 'awesome', 'happy', 'euphoric', 'dreamy', 'nice', 'friendly', 'sympathetic', 'pleasing', 'distinct', 'elegant', 'chic', 'classy', 'golden', 'diamond', 'strong', 'discreet', 'noisy', 'enthousiast', 'optimistic', 'flying', 'running', 'incredible', 'sleepy', 'falling', 'fast', 'slow', 'average', 'powerfull', 'fat', 'slim', 'tall', 'athletic', 'rich', 'poor', 'ruined', 'glowing', 'fluo', 'great', 'large', 'popular', 'basic', 'united', 'hot', 'scared', 'emotional', 'strong', 'cute', 'rare', 'serious', 'boring', 'alive', 'lucky', 'ugly', 'asleep', 'odd', 'single', 'open', 'creative', 'original', 'beautiful', 'junior', 'perfect', 'young', 'extreme', 'dead', 'narrow', 'bold', 'royal', 'senior', 'funny', 'gross', 'ill', 'dirty', 'neat', 'silly', 'outstanding'],
		['lion', 'tiger', 'pig', 'bird', 'deer', 'buffalo', 'elephant', 'horse', 'octopus', 'shark', 'daulphin', 'mammoth', 'fish', 'dog', 'cat', 'hamster', 'panda', 'licorn', 'unicorn', 'eagle', 't-rex', 'diplodocus', 'raptor', 'alligator', 'pterodactyl', 'policeman', 'firefighter', 'pilot', 'brigant', 'banker', 'journalist', 'weatherman', 'bus', 'car', 'plane', 'superman', 'panther', 'player', 'athlete', 'barman', 'boy', 'man', 'men', 'girl', 'woman', 'women', 'human', 'dude', 'chief', 'major', 'general', 'artist', 'lollipop', 'banana', 'peach', 'melon', 'berry', 'blackberry', 'strawberry', 'woodberry', 'tomato', 'potato', 'navet', 'leek', 'lemon', 'lime', 'orange', 'submarin', 'pen', 'eraser', 'gum', 'ruler', 'pencil', 'goblin', 'orc', 'elven', 'human', 'turtle', 'bear', 'dragon', 'princess', 'queen', 'king', 'knight', 'squeleton', 'drake', 'werewolf', 'pixi', 'hunter', 'necromancer', 'penguin', 'hippo', 'pinapple', 'apple', 'marshmallow', 'sushi', 'maki', 'skewer', 'bbq', 'astonaut', 'postman', 'goldenboy', 'stipper', 'mummy', 'pharaoh', 'spaceship', 'boat', 'bicycle', 'teapot', 'blade', 'sword', 'shied', 'wallet', 'coin', 'money', 'treasur', 'cup', 'hat', 'boot', 'glove', 'shirt', 'bermuda', 'baracuda', 'bass', 'guitar', 'drum', 'band', 'brigand', 'chicken', 'dwarf', 'monk', 'gundam', 'bot', 'robot', 'woodpicker', 'cactus', 'bunny'  ]
	];

	static generate(options = { arrays: [...Wordwish.defaultWordsArrays], separator: "-" }){
		let ww = "";

		for(let i = 0; i < options.arrays.length; i++){
			if(i > 0){
				ww += options.separator;
			}
			ww += options.arrays[i][Math.floor(Math.random() * options.arrays[i].length)];
		}

		return ww;
	}
}