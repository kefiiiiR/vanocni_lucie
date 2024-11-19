const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');
const navItems = document.querySelectorAll('nav ul li a');

// Přepnutí zobrazení menu
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Zavření menu po kliknutí na odkaz
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('show');
    });
});

// Plynulý přechod mezi sekcemi
navItems.forEach(item => {
    item.addEventListener('click', event => {
        const targetId = item.getAttribute('href');

        // Pokud odkaz obsahuje "#", přechází na sekci (plynulý scroll)
        if (targetId.startsWith('#')) {
            event.preventDefault(); // Zabrání okamžitému skoku
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
        // Pokud odkaz směřuje jinam (např. index.html), neblokujeme přesměrování
    });
});
