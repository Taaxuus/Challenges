//
const scores = document.querySelectorAll('.card-1__steps--number');

const submitBtn = document.querySelector('button');

const card1 = document.querySelector('.card-1');
const card2 = document.querySelector('.card-2');

const result = document.querySelector('.card-2__score');

// final score

let finalScore = 0;

let activeButton;

//Score set up

const btnClicked = e => {
	if (activeButton) {
		activeButton.classList.remove('btn-clicked');
	}
	e.target.classList.add('btn-clicked');

	activeButton = e.target;

	finalScore = parseInt(activeButton.textContent);
	console.log(finalScore);
};

const submitFc = () => {
	//display swich
	card1.classList.add('d-none');
	card2.classList.remove('d-none');

	// add score to paragraph

	result.textContent = `You selected Add rating ${finalScore} of 5`;
};

submitBtn.addEventListener('click', submitFc);

//listener on each score btn
scores.forEach(score => {
	score.addEventListener('click', btnClicked);
});
