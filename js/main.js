let database = {
	beginning : [
		"Two wrongs",
		"No man",
		"Fortune",
		"Birds of a feather",
		"A picture",
		"The early bird",
		"God",
		"Beggars",
		"Action",
		"Perfect"
	],
	middle: [ 
		"is",
		"don't",
		"favors",
		"flock",
		"is",
		"catches",
		"helps",
		"can't",
		"speak",
		"makes"
	],
	end: [
		"make a right.",
		"an island.",
		"the bold.",
		"together.",
		"worth a thousands.",
		"the worm.",
		"those who help themselves",
		"be choosers.",
		"louder than words.",
		"perfect."
	]
}

let database2 = {
	beginning: [
		"Absence",
		"All good things",
		"All that",
		"A bad workman",
		"Barking dogs",
		"Beauty",
		"A bird in the hand",
		"Clothes",
		"First",
		"Honest"
	],
	middle: [
		"makes",
		"must come to",
		"glitters is",
		"always blames",
		"seldom",
		"is only",
		"is worth",
		"do not make",
		"come",
		"is"
	],
	end: [
		"the heart grow fonder.",
		"an end.",
		"not gold.",
		"his/her tools.",
		"bites.",
		"skin deep.",
		"two in the bush.",
		"the man.",
		"first served.",
		"the best policy."
	]
}

let generateFromDatabase = data => { 
	let numberOfQuotes = document.getElementById("numberOfQuotes");
	let numberOfQuotesUpdated = Number(numberOfQuotes.value);
	numberOfQuotes.value = "";
	let displayQuote = document.getElementById("displayQuote");
	displayQuote.innerHTML = "";
	if(numberOfQuotesUpdated >= 1 && numberOfQuotesUpdated <= 5){
		let newDiv = document.createElement('div');
		for (let i = 0; i < numberOfQuotesUpdated; i++) {
			let quote = "";
			Object.keys(data).forEach(key => {
				let randomNumber = Math.floor(Math.random() * (data[key].length - 1));
				let addingToQuote = data[key][randomNumber];
				quote = quote + " " + addingToQuote;
			});	
			let para = document.createElement('p');
			para.innerHTML = (quote);
			newDiv.appendChild(para);
		}
		displayQuote.appendChild(newDiv);
	} else {
		let para = document.createElement('p');
		para.innerHTML = "Enter a number between 1 and 5";
		displayQuote.appendChild(para);
	}
}

document.getElementById("first").addEventListener("click", () => generateFromDatabase(database));

document.getElementById("second").addEventListener("click", () => generateFromDatabase(database2));