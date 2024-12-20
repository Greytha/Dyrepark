export function initAuth() {
    console.log('Initialisation de l\'authentification...');
    
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }
    
    // Vérifier si l'utilisateur est connecté
    checkAuthStatus();
}

async function handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    try {
        const response = await fetch('/api/login.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        
        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('user', JSON.stringify(data.user));
            window.location.href = 'index.php';
        } else {
            throw new Error('Identifiants incorrects');
        }
    } catch (error) {
        console.error('Erreur de connexion:', error);
        alert(error.message);
    }
}

async function handleRegister(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    if (password !== confirmPassword) {
        alert('Les mots de passe ne correspondent pas');
        return;
    }
    
    try {
        const response = await fetch('/api/register.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        });
        
        if (response.ok) {
            alert('Inscription réussie ! Vous pouvez maintenant vous connecter.');
            window.location.href = 'login.php';
        } else {
            throw new Error('Erreur lors de l\'inscription');
        }
    } catch (error) {
        console.error('Erreur d\'inscription:', error);
        alert(error.message);
    }
}

function checkAuthStatus() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        // Mettre à jour l'interface utilisateur pour un utilisateur connecté
        document.body.classList.add('user-logged-in');
        // Vous pouvez ajouter d'autres modifications d'interface ici
    }
}

