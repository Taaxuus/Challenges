//
const scores = document.querySelectorAll('.card-1__steps--number');

//final scolre

let finalScore = 0;

scores.forEach(score => {
	score.addEventListener('click', e => {
		e.target.classList.toggle('btn-clicked');
	});
});
