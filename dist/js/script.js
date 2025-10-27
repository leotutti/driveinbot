const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');
const bgBlack = document.getElementById('bg-black');

menuBtn.addEventListener('click', function () {
  mobileMenu.classList.remove('hidden');
  bgBlack.classList.remove('hidden');
});

closeMenu.addEventListener('click', function () {
  mobileMenu.classList.add('hidden');
  bgBlack.classList.add('hidden');
});

const menuLinks = mobileMenu.querySelectorAll('a');
menuLinks.forEach(link => {
  link.addEventListener('click', function () {
    mobileMenu.classList.add('hidden');
    bgBlack.classList.add('hidden');
  });
});

const htmlElement = document.querySelector('html');
const sunBtn = document.querySelector('#sunBtn');
const moonBtn = document.querySelector('#moonBtn');

sunBtn.addEventListener('click', () => {
  htmlElement.classList.toggle('dark');
  sunBtn.classList.add('opacity-0');
  sunBtn.classList.remove('opacity-100');
  setTimeout(() => {
    sunBtn.classList.add('hidden');
    moonBtn.classList.remove('hidden');
  }, 200);
  moonBtn.classList.remove('opacity-0');
  moonBtn.classList.add('opacity-100');
});

moonBtn.addEventListener('click', () => {
  htmlElement.classList.toggle('dark');
  moonBtn.classList.add('opacity-0');
  moonBtn.classList.remove('opacity-100');
  setTimeout(() => {
    moonBtn.classList.add('hidden');
    sunBtn.classList.remove('hidden');
  }, 200);
  sunBtn.classList.remove('opacity-0');
  sunBtn.classList.add('opacity-100');
});

const formulario = document.querySelector('#formulario');
const btnContrate = document.querySelector('#btn-contrate');
const btnMensagem = document.querySelector('#btn-mensagem');
const check = document.querySelector('#check');

btnContrate.addEventListener('click', () => {
  formulario.classList.remove('hidden');
  check.classList.remove('hidden');
  check.classList.add('w-0');
  check.classList.remove('w-24');
  setTimeout(() => {
    formulario.classList.add('opacity-100');
    formulario.classList.remove('opacity-0');
  }, 10);
});

btnMensagem.addEventListener('click', () => {
  formulario.classList.add('opacity-20');
  formulario.classList.remove('opacity-100');
  check.classList.remove('w-0');
  check.classList.add('w-24');
  setTimeout(() => {
  formulario.classList.add('hidden');
  check.classList.add('hidden');
}, 750);
});

const btnConheca = document.querySelector('#btn-conheca');
const arrowDown = document.querySelector('#arrow-down');
const arrowDownContrate = document.querySelector('#arrow-down-contrate');

btnConheca.addEventListener('mouseenter', () => {
  arrowDown.animate(
    [
      { transform: 'translateY(0)' },
      { transform: 'translateY(-8px)' },
      { transform: 'translateY(0)' }
    ],
    {
      duration: 800,
      iterations: Infinity,
      easing: 'ease-in-out'
    }
  );
});

btnConheca.addEventListener('mouseleave', () => {
  arrowDown.getAnimations().forEach(anim => anim.cancel());
});

btnContrate.addEventListener('mouseenter', () => {
  arrowDownContrate.animate(
    [
      { transform: 'translateY(0)' },
      { transform: 'translateY(-8px)' },
      { transform: 'translateY(0)' }
    ],
    {
      duration: 800,
      iterations: Infinity,
      easing: 'ease-in-out'
    }
  );
});

btnContrate.addEventListener('mouseleave', () => {
  arrowDownContrate.getAnimations().forEach(anim => anim.cancel());
});