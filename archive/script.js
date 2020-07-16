//preload app with data
//card1
const flashCard1 = {
    front: "Mint",
    back: "Cools the upper body"
};

// card2
const flashCard2 = {
    front: "Mugwort Leaf",
    back: "Stops bleeding especially in reproductive issues"
};

//card3
const flashCard3 = {
    front: "Angelica Root",
    back: "Increases blood production and improves circulation"
};

// const cardData = [flashCard1, flashCard2, flashCard3];
// let cardIndex = 0;

//make the card clickable
// //select or get the flashcard
let displayFlashcard = document.getElementById("flashcardtext");
// //display front of first card
document.getElementById("flashcardtext").innerText = flashCard1.front;
// //add an event listener to the card, listening for a click
let div = document.getElementById("flashcard");
div.addEventListener('click', flipCard);

//when the card is clicked, display the back of the card or next card

function flipCard() {
document.getElementById('flashcardtext').innerText = flashCard1.back;
    // switch () {
        // case document.getElementById('flashcardtext').innerText = flashCard1.front:
        // document.getElementById('flashcardtext').innerText = flashCard1.back;
    // break;
    // }
}

//make click able to see the next card

//click cards to review current card
// switch between 'front' and 'back'

/* SUGGESTED


//let user flip thru card quickly back or front

//use the keyboard to flip cards

//mark whether they got it right or not

//track cards that were incorrect

//display until the user gets them right
*/

/* COMPLETED
//preload app with data
//button to restart the game

*/