document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    const container = document.querySelector('.container-center');

    // Function to hide preloader and show content
    function hidePreloader() {
        preloader.classList.add('hidden');
        container.classList.remove('hidden');
    }

    // Check if the page has fully loaded
    if (document.readyState === 'complete') {
        hidePreloader();
    } else {
        window.addEventListener('load', hidePreloader);
    }
});

function toggleMode() {
    const body = document.body;
    const toggleBtn = document.querySelector('.toggle-btn');
    if (body.classList.contains('dark-mode')) {
        body.classList.replace('dark-mode', 'light-mode');
        toggleBtn.textContent = '🌙';
    } else {
        body.classList.replace('light-mode', 'dark-mode');
        toggleBtn.textContent = '☀️';
    }
}
