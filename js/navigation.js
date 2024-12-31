document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content');
    const navLinks = document.querySelectorAll('.nav-links a');

    // Charger la page d'accueil par défaut
    loadPage('pages/accueil.html');

    // Gérer la navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('href');
            loadPage(page);
            
            // Mettre à jour la classe active
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Fonction pour charger le contenu de la page
    async function loadPage(url) {
        try {
            const response = await fetch(url);
            const html = await response.text();
            mainContent.innerHTML = html;
        } catch (error) {
            console.error('Erreur lors du chargement de la page:', error);
            mainContent.innerHTML = '<p>Erreur lors du chargement de la page.</p>';
        }
    }
});