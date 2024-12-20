<?php
$pageTitle = "Billetterie - Parc Animalier La Barben";
include 'header.php';

$message = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $visitDate = $_POST['visit_date'];
    $adultTickets = intval($_POST['adult_tickets']);
    $childTickets = intval($_POST['child_tickets']);
    
    $totalPrice = ($adultTickets * 20) + ($childTickets * 10); // Prix: 20€ adulte, 10€ enfant

    $conn = getDbConnection();
    $query = "INSERT INTO bookings (visit_date, adult_tickets, child_tickets, total_price) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("siid", $visitDate, $adultTickets, $childTickets, $totalPrice);
    
    if ($stmt->execute()) {
        $message = "Réservation effectuée avec succès ! Total : {$totalPrice}€";
    } else {
        $message = "Erreur lors de la réservation. Veuillez réessayer.";
    }
    
    $conn->close();
}
?>

<h1>Réservation de Billets</h1>

<?php if ($message): ?>
    <p><?php echo e($message); ?></p>
<?php endif; ?>

<form action="billetterie.php" method="POST">
    <div>
        <label for="visit_date">Date de visite :</label>
        <input type="date" id="visit_date" name="visit_date" required>
    </div>
    <div>
        <label for="adult_tickets">Billets Adultes (20€) :</label>
        <input type="number" id="adult_tickets" name="adult_tickets" min="0" value="0" required>
    </div>
    <div>
        <label for="child_tickets">Billets Enfants (10€) :</label>
        <input type="number" id="child_tickets" name="child_tickets" min="0" value="0" required>
    </div>
    <button type="submit">Réserver</button>
</form>

<?php include 'footer.php'; ?>

