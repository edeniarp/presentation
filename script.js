document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Project description toggle
    document.querySelectorAll('.project-description-button').forEach(button => {
        button.addEventListener('click', function() {
            const description = this.nextElementSibling;
            description.classList.toggle('show');
            this.textContent = description.classList.contains('show') ? 'Masquer la description' : 'Description';
        });
    });
});
