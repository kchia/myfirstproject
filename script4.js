// create an object with all card data
const cardData = [
	['Mint', 'Cools the upper body'],
	['Mugwort Leaf', 'Stops bleeding especially in reproductive issues'],
	['Angelica Root', 'Increases blood production and improves circulation'],
];
//declare a variable to hold the card index
let cardIndex = 0;

// Add cardData to the flashcard HTML
// //select or get the flashcard
let displayFlashcard = document.getElementById("antFlashcardText");
// //display front of first card
document.getElementById("antFlashcardText").innerText = cardData[cardIndex][0];
document.getElementById("postFlashcardText").innerText = cardData[cardIndex][1];
//make the card hoverable
// //add an event listener to the card, listening for a click
let card = document.getElementsByClassName("flip-card");

// card.addEventListener('mouseover', flipCard);

//when the card is clicked, display the back of the card
function flipCard(event) {
	// event.target.
	document.getElementsByClassName('antFlashcardText').innerText =
		cardData[cardIndex][1];
	
}

//click a button to move to the next card
// //get the "next" button
const next = document.getElementById("forwardButton");
// add an event listener to the "next" button
next.addEventListener('click', handleNext);
// when the "next" button is clicked, display the following card in the cardData sequence
function handleNext() {
	if (cardIndex < cardData.length - 1) {
		cardIndex++;
		document.getElementById("antFlashcardText").innerText =
			cardData[cardIndex][0];
		document.getElementById("postFlashcardText").innerText = cardData[cardIndex][1];
	}
}
//click a button to move to the previous card
// //get the "back" button
const back = document.getElementById("backButton");
// add an event listener to the "back" button
back.addEventListener('click', handleBack);
// when the "back" button is clicked, display the previous card in the cardData sequence
function handleBack() {
	if (cardIndex < cardData.length) {
		cardIndex--;
		document.getElementById("antFlashcardText").innerText = cardData[cardIndex][0];
		document.getElementById('postFlashcardText').innerText =
			cardData[cardIndex][1];
	}
}

//create a "start over" button
// create a reset button variable to hold the element to be removed
//get the element that is to be updated
const startOver = document.getElementById('resetButton');

//add an event listener for clicking on this button
// document.getElementById('resetButton');
startOver.addEventListener('click', resetCard);

// code to execute upon button click
function resetCard() {
	cardIndex = 0;
	document.getElementById('antFlashcardText').innerText =
		cardData[cardIndex][0];
	document.getElementById('postFlashcardText').innerText =
		cardData[cardIndex][1];
}

//Display an "end of flashcard set" notification via modal:
// Grabbing modal element
const modal = document.getElementById('modal')

// Grabbing close button
// const close = document.getElementById('close')

//Add event listener to the last card cardData[2][1]
// // use a conditional?
cardData[2][1].addEventListener('click', openModal)

// Function to change modal display to 'block'
const openModal = () => {
  modal.style.display = 'block';
}

//Add event listener to Close button
// close.addEventListener('click', closeModal)

// Event handler to close the modal
// const closeModal = () => {
//   modal.style.display = 'none'
// }

// setTimeout(closeModal, 5000);