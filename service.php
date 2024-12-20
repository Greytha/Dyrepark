<?php
$pageTitle = "Nos Services - Parc Animalier La Barben";
include 'header.php';

$conn = getDbConnection();
$query = "SELECT * FROM services";
$result = $conn->query($query);
$services = $result->fetch_all(MYSQLI_ASSOC);
$conn->close();
?>

<h1>Nos Services</h1>

<div class="service-grid">
    <?php foreach ($services as $service): ?>
        <div class="service-card">
            <img src="<?php echo e($service['image']); ?>" alt="<?php echo e($service['name']); ?>">
            <h3><?php echo e($service['name']); ?></h3>
            <p><?php echo e($service['description']); ?></p>
        </div>
    <?php endforeach; ?>
</div>

<?php include 'footer.php'; ?>

