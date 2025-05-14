// navbar script

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const icons = document.querySelector('.icons');
    const menuIcon = document.querySelector('.hamburger');

    navLinks.classList.toggle('show');
    icons.classList.toggle('show'); // Toggle icons visibility

    // Toggle between hamburger and close icon
    if (navLinks.classList.contains('show')) {
        menuIcon.classList.replace('fa-bars', 'fa-times');
    } else {
        menuIcon.classList.replace('fa-times', 'fa-bars');
    }
}

// back to top button script

    // Show button on scroll
window.addEventListener('scroll', function () {
    const button = document.getElementById('backToTop');
    button.style.display = window.scrollY > 300 ? 'block' : 'none';
  });
  
    // Scroll to top
  document.getElementById('backToTop').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
// loading screen script

window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.style.display = 'none';
  });
  