const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.responseType = 'json';
xhr.send();

xhr.addEventListener('readystatechange', () => {
	if (xhr.readyState === xhr.DONE) {
		const request = xhr.response;
		const pollTitle = document.querySelector('.poll__title');
		const pollAnswers = document.querySelector('.poll__answers');
		pollTitle.textContent = request.data.title;
		request.data.answers.forEach(button => {
			pollAnswers.appendChild(createAnswer(button));
		});
	}
});

function createAnswer(question) {
	const answer = document.createElement('button');
	answer.setAttribute('class', 'poll__answer');
	answer.textContent = question;
	answer.addEventListener('click', () => alert('Спасибо, ваш голос засчитан!'));
	return answer;
}