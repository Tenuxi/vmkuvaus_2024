document.addEventListener('DOMContentLoaded', () => {
    console.log("VMKuvaus.fi valmiina.");

    // Esimerkki: Hero-napin toiminto
    const ctaButton = document.getElementById('cta-button');
    ctaButton.addEventListener('click', () => {
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    // Avaa/Sulje valikko klikkaamalla hampurilaista
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Sulje valikko kun linkkiä klikataan (tärkeää mobiilissa)
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Alkuperäinen Hero-napin toiminto
    const ctaButton = document.getElementById('cta-button');
    if(ctaButton) {
        ctaButton.addEventListener('click', () => {
            window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
        });
    }
});