// Animations on scroll (Example)
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('h2, .project');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});
