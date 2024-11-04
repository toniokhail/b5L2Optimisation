// Ajout d'une fonction pour faire défiler la page en douceur vers les sections
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('.dot').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.2)';
    });
    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
    });
});

