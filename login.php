<?php
$pageTitle = "Connexion - Parc Animalier La Barben";
include 'header.php';

$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $conn = getDbConnection();
    $query = "SELECT id, username, password FROM users WHERE username = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();
    $user = $result->fetch_assoc();

    if ($user && password_verify($password, $user['password'])) {
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['username'] = $user['username'];
        header("Location: index.php");
        exit();
    } else {
        $error = "Nom d'utilisateur ou mot de passe incorrect.";
    }

    $conn->close();
}
?>

<h1>Connexion</h1>

<?php if ($error): ?>
    <p class="error"><?php echo e($error); ?></p>
<?php endif; ?>

<form action="login.php" method="POST">
    <div>
        <label for="username">Nom d'utilisateur :</label>
        <input type="text" id="username" name="username" required>
    </div>
    <div>
        <label for="password">Mot de passe :</label>
        <input type="password" id="password" name="password" required>
    </div>
    <button type="submit">Se connecter</button>
</form>

<p>Pas encore de compte ? <a href="register.php">S'inscrire</a></p>

<?php include 'footer.php'; ?>

