<?php
$pageTitle = "Accueil - Parc Animalier La Barben";
include 'header.php';

$conn = getDbConnection();
$query = "SELECT * FROM enclosures LIMIT 3";
$result = $conn->query($query);
$featuredEnclosures = $result->fetch_all(MYSQLI_ASSOC);
$conn->close();
?>

<section class="hero">
    <h1>Bienvenue au Parc Animalier La Barben</h1>
    <p>Découvrez la faune sauvage dans un cadre exceptionnel</p>
    <a href="billetterie.php" class="cta-button">Réserver vos billets</a>
</section>

<section class="featured-enclosures">
    <h2>Nos Enclos Vedettes</h2>
    <div class="enclosure-grid">
        <?php foreach ($featuredEnclosures as $enclosure): ?>
            <div class="enclosure-card">
                <img src="<?php echo e($enclosure['image']); ?>" alt="<?php echo e($enclosure['name']); ?>">
                <h3><?php echo e($enclosure['name']); ?></h3>
                <p><?php echo e($enclosure['description']); ?></p>
                <a href="enclos.php?id=<?php echo $enclosure['id']; ?>" class="button">En savoir plus</a>
            </div>
        <?php endforeach; ?>
    </div>
</section>

<section class="services">
    <h2>Nos Services</h2>
    <div class="service-grid">
        <div class="service-card">
            <img src="images/restaurant-icon.png" alt="Restaurant">
            <h3>Restaurants</h3>
            <p>Savourez des repas délicieux avec vue sur le parc</p>
        </div>
        <div class="service-card">
            <img src="images/shop-icon.png" alt="Boutique">
            <h3>Boutique</h3>
            <p>Ramenez un souvenir de votre visite</p>
        </div>
        <div class="service-card">
            <img src="images/guide-icon.png" alt="Visites guidées">
            <h3>Visites guidées</h3>
            <p>Découvrez le parc avec nos experts</p>
        </div>
    </div>
</section>

<?php include 'footer.php'; ?>

