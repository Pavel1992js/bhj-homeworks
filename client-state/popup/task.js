const btnCloseModal = document.querySelector('.modal__close');
const modal = document.getElementById('subscribe-modal');

window.addEventListener('load', () => {
	if (getCookie('modal') === 'closed') {
		modal.classList.remove('modal_active');
		modal.classList.add('modal');
	}
});

btnCloseModal.addEventListener('click', () => {
	modal.classList.remove('modal_active');
	modal.classList.add('modal');
	setCookie('modal', 'closed');
});

function setCookie(name, value) {
	document.cookie = name + '=' + value;
}

function getCookie(name) {
	const value = `; ${document.cookie}`;
	let parts = value.split(`; ${name}=`);
	if (parts.length === 2) {
		return parts.pop().split(';').shift();
	}
}