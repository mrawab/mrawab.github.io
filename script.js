// Dark/Light Mode Toggle
const modeToggle = document.getElementById('modeToggle');
const body = document.body;

// Load previous mode from localStorage
if (localStorage.getItem('mode') === 'dark') {
    body.classList.add('dark-mode');
}

// Toggle between light and dark mode
modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    // Save the mode in localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('mode', 'dark');
    } else {
        localStorage.setItem('mode', 'light');
    }
});
