const CardDeck = [];

for(let i = 0; i<=57; i++) {
	CardDeck[i] = i+1;
}

const shuffle = () => {

for (let i = CardDeck.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i+1));
  let k = CardDeck[i];
  CardDeck[i] = CardDeck[j];
  CardDeck[j] = k;
}

for (let i = CardDeck.length -1; i > 0; i--) {
	document.write(`${CardDeck[i]},`);
}
}

shuffle();