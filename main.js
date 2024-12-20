import { renderHeader } from './components/header.js';
import { renderFooter } from './components/footer.js';

document.addEventListener('DOMContentLoaded', () => {
    renderHeader();
    renderFooter();

    // Ici, nous ajouterons plus de logique pour les autres fonctionnalités
});

// Importation des modules nécessaires
import { initNavigation } from './modules/navigation.js';
import { initAuth } from './modules/auth.js';
import { initSearch } from './modules/search.js';
import { initTicketBooking } from './modules/ticketBooking.js';
import { initReviews } from './modules/reviews.js';

// Fonction d'initialisation principale
function initApp() {
    console.log('Initialisation de l\'application...');
    
    // Initialisation de la navigation
    initNavigation();
    
    // Initialisation de l'authentification
    initAuth();
    
    // Initialisation de la recherche
    initSearch();
    
    // Initialisation de la réservation de billets
    initTicketBooking();
    
    // Initialisation des avis
    initReviews();
    
    // Autres initialisations...
    initMobileMenu();
    initAccessibility();
    initAnalytics();
}

// Fonction pour initialiser le menu mobile
function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });
    }
}

// Fonction pour initialiser les fonctionnalités d'accessibilité
function initAccessibility() {
    // Ajout de la fonctionnalité de changement de taille de police
    const fontSizeToggle = document.querySelector('.font-size-toggle');
    if (fontSizeToggle) {
        fontSizeToggle.addEventListener('click', () => {
            document.body.classList.toggle('large-font');
        });
    }
    
    // Ajout de la fonctionnalité de contraste élevé
    const contrastToggle = document.querySelector('.contrast-toggle');
    if (contrastToggle) {
        contrastToggle.addEventListener('click', () => {
            document.body.classList.toggle('high-contrast');
        });
    }
}

// Fonction pour initialiser l'analytique
function initAnalytics() {
    // Code pour initialiser l'analytique (par exemple, Google Analytics)
    console.log('Initialisation de l\'analytique...');
}

// Écouteur d'événement pour s'assurer que le DOM est chargé avant l'initialisation
document.addEventListener('DOMContentLoaded', initApp);

// Exportation des fonctions pour une utilisation potentielle dans d'autres modules
export { initMobileMenu, initAccessibility, initAnalytics };

