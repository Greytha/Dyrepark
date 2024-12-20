<?php
$pageTitle = "Inscription - Parc Animalier La Barben";
include 'header.php';

$error = '';
$success = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirmPassword = $_POST['confirm_password'];

    if ($password !== $confirmPassword) {
        $error = "Les mots de passe ne correspondent pas.";
    } else {
        $conn = getDbConnection();
        
        // Vérifier si le nom d'utilisateur ou l'email existe déjà
        $checkQuery = "SELECT id FROM users WHERE username = ? OR email = ?";
        $checkStmt = $conn->prepare($checkQuery);
        $checkStmt->bind_param("ss", $username, $email);
        $checkStmt->execute();
        $checkResult = $checkStmt->get_result();

        if ($checkResult->num_rows > 0) {
            $error = "Ce nom d'utilisateur ou cet email est déjà utilisé.";
        } else {
            $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
            $insertQuery = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
            $insertStmt = $conn->prepare($insertQuery);
            $insertStmt->bind_param("sss", $username, $email, $hashedPassword);

            if ($insertStmt->execute()) {
                $success = "Inscription réussie ! Vous pouvez maintenant vous connecter.";
            } else {
                $error = "Une erreur est survenue lors de l'inscription.";
            }
        }

        $conn->close();
    }
}
?>

<h1>Inscription</h1>

<?php if ($error): ?>
    <p class="error"><?php echo e($error); ?></p>
<?php endif; ?>

<?php if ($success): ?>
    <p class="success"><?php echo e($success); ?></p>
<?php endif; ?>

<form action="register.php" method="POST">
    <div>
        <label for="username">Nom d'utilisateur :</label>
        <input type="text" id="username" name="username" required>
    </div>
    <div>
        <label for="email">Email :</label>
        <input type="email" id="email" name="email" required>
    </div>
    <div>
        <label for="password">Mot de passe :</label>
        <input type="password" id="password" name="password" required>
    </div>
    <div>
        <label for="confirm_password">Confirmer le mot de passe :</label>
        <input type="password" id="confirm_password" name="confirm_password" required>
    </div>
    <button type="submit">S'inscrire</button>
</form>

<p>Déjà un compte ? <a href="login.php">Se connecter</a></p>

<?php include 'footer.php'; ?>

