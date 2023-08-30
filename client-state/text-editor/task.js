const inputText = document.getElementById('editor');

document.addEventListener('keyup', () => {
	localStorage.setItem('lastText', inputText.value);
});

window.addEventListener('load', () => {
	inputText.value = localStorage.getItem('lastText');
});