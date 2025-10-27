// Toggle navigation menu on mobile
const menuToggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('open');
});

// Example button interaction
function showAlert() {
  alert('Welcome to the simple mobile website!');
}
