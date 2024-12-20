export function renderHeader() {
    const header = document.getElementById('main-header');
    header.innerHTML = `
        <div class="container">
            <nav>
                <div class="logo">
                    <a href="index.html"><img src="images/logo.png" alt="Parc Animalier La Barben"></a>
                </div>
                <ul class="nav-links">
                    <li><a href="index.html">Accueil</a></li>
                    <li><a href="enclosures.html">Enclos</a></li>
                    <li><a href="animals.html">Animaux</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="tickets.html">Billetterie</a></li>
                </ul>
                <div class="auth-buttons">
                    <a href="login.html" class="login-btn">Connexion</a>
                    <a href="register.html" class="signup-btn">Inscription</a>
                </div>
            </nav>
        </div>
    `;
}

