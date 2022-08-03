const hamburger = document.querySelector('.icon');
const navLink = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('show');
});


/*
trigger.addEventListener("click", toggleModal);
function closeButton() {
addEventListener("click", toggleModal);
}
window.addEventListener("click", windowOnClick);
*/
