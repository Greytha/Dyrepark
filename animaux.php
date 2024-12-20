<?php
$pageTitle = "Nos Animaux - Parc Animalier La Barben";
include 'header.php';

$conn = getDbConnection();

$search = isset($_GET['search']) ? $_GET['search'] : '';

echo "<h1>Nos Animaux</h1>";

echo "<form action='animaux.php' method='GET'>";
echo "<input type='text' name='search' placeholder='Rechercher un animal' value='" . e($search) . "'>";
echo "<button type='submit'>Rechercher</button>";
echo "</form>";

$query = "SELECT a.*, e.name as enclosure_name 
          FROM animals a 
          JOIN enclosures e ON a.enclosure_id = e.id 
          WHERE a.name LIKE ? OR a.species LIKE ?";
$stmt = $conn->prepare($query);
$searchParam = "%$search%";
$stmt->bind_param("ss", $searchParam, $searchParam);
$stmt->execute();
$result = $stmt->get_result();
$animals = $result->fetch_all(MYSQLI_ASSOC);

if (count($animals) > 0) {
    echo "<div class='animal-grid'>";
    foreach ($animals as $animal) {
        echo "<div class='animal-card'>";
        echo "<img src='" . e($animal['image']) . "' alt='" . e($animal['name']) . "'>";
        echo "<h3>" . e($animal['name']) . "</h3>";
        echo "<p>Espèce : " . e($animal['species']) . "</p>";
        echo "<p>Enclos : " . e($animal['enclosure_name']) . "</p>";
        echo "<p>" . e(substr($animal['description'], 0, 100)) . "...</p>";
        echo "</div>";
    }
    echo "</div>";
} else {
    echo "<p>Aucun animal trouvé.</p>";
}

$conn->close();

include 'footer.php';
?>

