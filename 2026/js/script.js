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
    const links = document.querySelectorAll('.nav-links a');

    // 1. Hampurilaisvalikon toiminta
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // 2. Pehmeä rullaus ja valikon sulkeminen
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            // Suljetaan mobiilivalikko aina klikatessa
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');

            // Haetaan kohteen ID (esim. #palvelut)
            const targetId = link.getAttribute('href');
            
            // Jos kyseessä on sisäinen linkki (alkaa #)
            if (targetId.startsWith('#')) {
                e.preventDefault(); // Estetään oletushyppy
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    // Rullataan kohteeseen pehmeästi
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Hero-alueen CTA-napin rullaus (jos käytössä)
    const ctaButton = document.getElementById('cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            const servicesSection = document.getElementById('palvelut');
            if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});