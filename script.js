document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('.project');
    const projectDetails = document.getElementById('project-details');
    const projectImage = document.getElementById('project-image');
    const projectDescription = document.getElementById('project-description');
    const backButton = document.getElementById('back-button');
    const mainContent = document.getElementById('main-content');

    projects.forEach(project => {
        project.addEventListener('click', () => {
            const projectId = project.getAttribute('data-project');
            // Configure les détails du projet ici
            projectImage.src = `https://via.placeholder.com/600x400?text=Image+du+Projet+${projectId}`;
            projectDescription.textContent = `Description détaillée du projet ${projectId}. Voici plus d'informations sur ce projet.`;
            
            // Montre les détails du projet
            mainContent.classList.add('hidden');
            projectDetails.classList.add('show');
        });
    });

    backButton.addEventListener('click', () => {
        // Cache les détails du projet et montre le contenu principal
        projectDetails.classList.remove('show');
        mainContent.classList.remove('hidden');
    });
});
