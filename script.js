// Smooth scrolling for navigation buttons
document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Fade-in animation on scroll
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        } else {
            entry.target.classList.remove('fade-in');
        }
    });
}, { threshold: 0.5 });

sections.forEach(section => {
    observer.observe(section);
});

// Scroll to top and bottom buttons
document.getElementById('scroll-to-top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.getElementById('scroll-to-bottom').addEventListener('click', function() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
});

// Loading screen
// Set a minimum display time for the loading screen (e.g., 2 seconds)
const minLoadingTime = 2000; // 2 seconds

// Start tracking the time when the page starts loading
const startTime = Date.now();

// Function to hide the loading screen
function hideLoadingScreen() {
    const elapsedTime = Date.now() - startTime;
    const remainingTime = minLoadingTime - elapsedTime;
    
    // Ensure the loading screen stays for at least `minLoadingTime`
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.style.transition = 'opacity 0.5s ease';  // Smooth fade out
        loadingScreen.style.opacity = '0';  // Start fade out

        // Remove the loading screen from DOM after fade out
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);  // Match the duration of the fade-out effect (0.5s)
    }, Math.max(remainingTime, 0));  // Wait the remaining time if necessary
}

// Event listener for when the page fully loads
window.addEventListener('load', hideLoadingScreen);

// Form validation
const form = document.getElementById('contactForm');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', function(e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple email format validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!name || !email.match(emailPattern) || !message) {
        e.preventDefault(); // Prevent form submission
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
    }
});
