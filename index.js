const hamburger = document.querySelector('.icon');
const navLink = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('show');
});
