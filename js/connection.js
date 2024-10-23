// Fichier : script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Exemple simple de validation
    if (email === 'test@example.com' && password === 'password123') {
        alert('Connexion réussie !');
        // Redirige l'utilisateur ou fais autre chose après une connexion réussie
    } else {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Email ou mot de passe incorrect.';
    }
});
