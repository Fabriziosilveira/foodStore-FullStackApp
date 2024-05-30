document.addEventListener('DOMContentLoaded', () => {
    const backButton = document.getElementById('back');

    backButton.addEventListener('click', () => {
        window.location.href = '../menuPage/menu.html';
    });
});