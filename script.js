//
const scores = document.querySelectorAll('.card-1__steps--number');

scores.forEach(score => {
	score.addEventListener('click', e => {
		e.target.classList.contains('btn-clicked')
			? e.target.classList.remove('btn-clicked')
			: e.target.classList.add('btn-clicked');
	});
});
