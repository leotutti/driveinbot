const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');

menuBtn.addEventListener('click', function () {
  mobileMenu.classList.remove('hidden');
});

closeMenu.addEventListener('click', function () {
  mobileMenu.classList.add('hidden');
});

const menuLinks = mobileMenu.querySelectorAll('a');
menuLinks.forEach(link => {
  link.addEventListener('click', function () {
    mobileMenu.classList.add('hidden');
  });
});

const htmlElement = document.querySelector('html');
const darkBtn = document.querySelector('#darkBtn');

darkBtn.addEventListener('click', () =>{
    htmlElement.classList.toggle('dark');
});

const formulario = document.querySelector('#formulario');
const btnContrate = document.querySelector('#btn-contrate');
const btnMensagem = document.querySelector('#btn-mensagem');

btnContrate.addEventListener('click', () => {
  formulario.classList.remove('hidden');
  setTimeout(() => {
    formulario.classList.add('opacity-100');
    formulario.classList.remove('opacity-0');
  }, 10);
});

btnMensagem.addEventListener('click', () => {
  formulario.classList.add('opacity-20');
  formulario.classList.remove('opacity-100');
  setTimeout(() => {
    formulario.classList.add('hidden');
  }, 750);
});
