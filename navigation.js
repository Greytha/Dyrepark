export function initNavigation() {
    console.log('Initialisation de la navigation...');
    
    // Gestion des liens de navigation
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Ajoutez ici la logique pour la navigation fluide si nécessaire
            console.log(`Navigation vers : ${link.href}`);
        });
    });
    
    // Gestion du scroll pour le header fixe
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (currentScrollTop > lastScrollTop) {
            // Scroll vers le bas
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scroll vers le haut
            header.style.transform = 'translateY(0)';
        }
        lastScrollTop = currentScrollTop;
    });
}

