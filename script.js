document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('.project');
    const projectDetails = document.getElementById('project-details');
    const projectImage = document.getElementById('project-image');
    const projectDescription = document.getElementById('project-description');
    const backButton = document.getElementById('back-button');
    const mainContent = document.getElementById('main-content');
    
    const profileImg = document.getElementById('profile-img');
    const profileModal = document.getElementById('profile-modal');

    // Gère le clic sur les projets pour afficher les détails
    projects.forEach(project => {
        project.addEventListener('click', () => {
            const projectId = project.getAttribute('data-project');
            projectImage.src = `https://via.placeholder.com/600x400?text=Image+du+Projet+${projectId}`;
            projectDescription.textContent = `Description détaillée du projet ${projectId}. Voici plus d'informations sur ce projet.`;
            
            mainContent.classList.add('hidden');
            projectDetails.classList.add('show');
        });
    });

    // Gère le clic sur le bouton de retour
    backButton.addEventListener('click', () => {
        projectDetails.classList.remove('show');
        mainContent.classList.remove('hidden');
    });

    // Gère le clic sur la photo de profil pour afficher le modal
    profileImg.addEventListener('click', () => {
        profileModal.classList.add('show');
    });

    // Gère le clic en dehors du modal de la photo de profil pour le fermer
    profileModal.addEventListener('click', (event) => {
        if (event.target === profileModal) {
            profileModal.classList.remove('show');
        }
    });
});
