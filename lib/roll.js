export function roll(sides, dice, rolls) {
	let total = [];

	for (let i = 0; i < rolls; i++){
		let val = 0;
		for (let j = 0; j < dice; j++){
			val += Math.floor(Math.random() * sides) + 1;
		}
		total.push(val);
	}

	let result = {
		sides: sides,
		dice: dice,
		rolls: rolls,
		results: total,
	}
	return(result);
}