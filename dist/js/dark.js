const elementHtml = document.querySelector('html');
const elementButton = document.querySelector('#btn-theme');

elementButton.addEventListener('click', () => {
    elementHtml.classList.toggle('dark');
})