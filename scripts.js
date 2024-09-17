window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const container = document.querySelector('.container-center');
    
    preloader.classList.add('hidden');  // Hide preloader
    container.classList.remove('hidden');  // Show content
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
