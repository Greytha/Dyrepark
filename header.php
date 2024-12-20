<?php require_once 'config.php'; ?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $pageTitle ?? 'Parc Animalier La Barben'; ?></title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header>
        <nav>
            <div class="logo">
                <a href="index.php"><img src="images/logo.png" alt="Parc Animalier La Barben"></a>
            </div>
            <ul class="nav-links">
                <li><a href="index.php">Accueil</a></li>
                <li><a href="enclos.php">Enclos</a></li>
                <li><a href="animaux.php">Animaux</a></li>
                <li><a href="services.php">Services</a></li>
                <li><a href="billetterie.php">Billetterie</a></li>
            </ul>
            <div class="auth-buttons">
                <?php if (isLoggedIn()): ?>
                    <a href="profil.php">Mon Profil</a>
                    <a href="logout.php">Déconnexion</a>
                <?php else: ?>
                    <a href="login.php">Connexion</a>
                    <a href="register.php">Inscription</a>
                <?php endif; ?>
            </div>
        </nav>
    </header>
    <main>

