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
