// Simple animation on input focus
const searchInput = document.querySelector('main input');

searchInput.addEventListener('focus', () => {
    searchInput.style.transform = 'scale(1.05)';
});

searchInput.addEventListener('blur', () => {
    searchInput.style.transform = 'scale(1)';
});

// Fade-in animation for main text and input
document.addEventListener('DOMContentLoaded', () => {
    const mainText = document.querySelector('main p');
    const inputBox = document.querySelector('main input');

    mainText.style.opacity = 0;
    inputBox.style.opacity = 0;

    setTimeout(() => {
        mainText.style.transition = 'opacity 1.5s ease';
        inputBox.style.transition = 'opacity 1.5s ease';
        mainText.style.opacity = 1;
        inputBox.style.opacity = 1;
    }, 200);
});
