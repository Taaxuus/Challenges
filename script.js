//
const scores = document.querySelectorAll('.card-1__steps--number');

//final scolre

let finalScore = 0;

let activeButton;
scores.forEach(score => {
	score.addEventListener('click', e => {
		if (activeButton) {
			activeButton.classList.remove('btn-clicked');
		}
		e.target.classList.add('btn-clicked');
		activeButton = e.target;
		console.log(activeButton);
	});
});
