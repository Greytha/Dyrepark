export function renderFooter() {
    const footer = document.getElementById('main-footer');
    footer.innerHTML = `
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>À propos</h3>
                    <p>Le Parc Animalier La Barben est dédié à la conservation des espèces et à l'éducation du public sur la faune sauvage.</p>
                </div>
                <div class="footer-section">
                    <h3>Liens rapides</h3>
                    <ul>
                        <li><a href="index.html">Accueil</a></li>
                        <li><a href="enclosures.html">Enclos</a></li>
                        <li><a href="animals.html">Animaux</a></li>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="tickets.html">Billetterie</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Contact</h3>
                    <p>Email: contact@parclabarben.com</p>
                    <p>Téléphone: +33 4 90 55 19 12</p>
                    <div class="social-icons">
                        <a href="#" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
                        <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                        <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2023 Parc Animalier La Barben. Tous droits réservés.</p>
            </div>
        </div>
    `;
}

