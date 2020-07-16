const cardSeq = [
	'Mint',
	'Cools the upper body',
	'Mugwort Leaf',
	'Stops bleeding especially in reproductive issues',
	'Angelica Root',
	'Increases blood production and improves circulation',
];

let displayFlashcard = document.getElementById('flashcardtext');

document.getElementById('flashcardtext').innerText = cardSeq[0];

let div = document.getElementById('flashcard');

div.addEventListener('click', flipCard);

function flipCard() {
    if (document.getElementById('flashcardtext').innerText === cardSeq[0]) {
			document.getElementById('flashcardtext').innerText = cardSeq[1];
		} else if (document.getElementById('flashcardtext').innerText === cardSeq[1]){
			document.getElementById('flashcardtext').innerText === cardSeq[2];
		// } else if (document.getElementById('flashcardtext').innerText === cardSeq[2]){
			// document.getElementById('flashcardtext').innerText = cardSeq[3];
		// } 
		// if (document.getElementById('flashcardtext').innerText === cardSeq[2]) {
		// 	document.getElementById('flashcardtext').innerText = cardSeq[3];
		}
}

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
