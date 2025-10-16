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
})