const cardData = {
	card1: ['Mint', 'Cools the upper body'],
	card2: ['Mugwort Leaf', 'Stops bleeding especially in reproductive issues'],
	card3: [
		'Angelica Root',
		'Increases blood production and improves circulation',
	],
};

//create a function that console.logs the cards in progression:

function CardData() {
for (let i = cardData.card1[0]; i < cardData.length; i++) {
    console.log(i);
    }
}
// ;

for (const cardProperty in cardData) {
        console.log(`${cardData[cardProperty][0]}`);
    }
     for (const cardProperty in cardData) {
        console.log(`${cardData[cardProperty][1]}`);
    }




// const array = ["name", "age", "class"];
// const object = {}
//  for (let i=0; i< array.length; i++) {
//      if(array[i] !== undefined) {
//          object[i] = array[i];
//         }
//  }

//  const array = ["name", "age", "class"];
//  const object = {...array}
//  console.log(object);