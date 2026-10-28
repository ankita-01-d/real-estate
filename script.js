const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
const contactForm = document.getElementById('contactForm');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thank you! Our real-estate advisor will contact you soon.');
    contactForm.reset();
  });
}
