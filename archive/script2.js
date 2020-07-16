// create an object with all card data
const cardData = {
	card1: ['Mint', 'Cools the upper body'],
	card2: ['Mugwort Leaf', 'Stops bleeding especially in reproductive issues'],
	card3: [
		'Angelica Root',
		'Increases blood production and improves circulation',
	],
};

let cardIndex = 0;

// Add cardData to the flashcard HTML
// //select or get the flashcard
let displayFlashcard = document.getElementById('flashcardtext');

// //display front of first card
document.getElementById('flashcardtext').innerText = cardData.card1[0];

//make the card clickable
//create an event listener
// //add an event listener to the card, listening for a click
let div = document.getElementById('flashcard');
div.addEventListener('click', flipCard);

//when the card is clicked, display the back of the card or next card

function flipCard() {
	document.getElementById('flashcardtext').innerText = cardData.card1[1];
}

//create a for loop that progresses thru the cardData upon clicking
// function nextCard() {
//     document.getElementById("flashcardtext").innerText = cardData.card2[0];
//     let div = document.getElementById("flashcard");
//         div.addEventListener("click", flipCard);
//         function flipCard() {
// 					document.getElementById("flashcardtext").innerText =
// 						cardData.card2[1];
//                 }
//     nextCard();
// }
//   for (const cardProperty in cardData) {
//         console.log(`${cardData[cardProperty][0]}`);
//     }
//      for (const cardProperty in cardData) {
//         console.log(`${cardData[cardProperty][1]}`);
//     }

// function clickThruCardData() {
// for (let i = 0; i < cardData.length; i++) {

// }
// }

//create a function that flips thru the cards in progression

//?????adjust that function to take parameters "front" and "back"

//create a "start over" button
// create a reset button variable to hold the element to be removed
//get the element that is to be updated
const button = document.getElementById('resetButton');

//add an event listener for clicking on this button
document.getElementById('resetButton');
button.addEventListener('click', resetCard);

// code to execute upon button click
function resetCard() {
	document.getElementById('flashcardtext').innerText = cardData.card1[0];
}
