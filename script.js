// Smooth scrolling for navigation buttons
document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Section-by-section loading with fade-in and fade-out animations
const sections = document.querySelectorAll('.section');
let currentSectionIndex = -1;

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const index = Array.from(sections).indexOf(entry.target);

        if (entry.isIntersecting) {
            if (index !== currentSectionIndex) {
                // Fade out the previous section
                if (currentSectionIndex >= 0) {
                    sections[currentSectionIndex].classList.remove('fade-in');
                    sections[currentSectionIndex].classList.add('fade-out');
                }

                // Fade in the current section
                entry.target.classList.remove('fade-out');
                entry.target.classList.add('fade-in');
                currentSectionIndex = index;
            }
        } else {
            // Add fade-out class when not in view
            entry.target.classList.remove('fade-in');
            entry.target.classList.add('fade-out');
        }
    });
}, { threshold: 0.5 });

// Observe each section
sections.forEach(section => {
    observer.observe(section);
});

// Scroll to top and bottom buttons
document.getElementById('scroll-to-top').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.getElementById('scroll-to-bottom').addEventListener('click', function () {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
});

// Loading screen with dynamic responsiveness based on the speed of the internet
// Set a minimum display time for the loading screen (e.g., 1.5 seconds)
const minLoadingTime = 1500; // 1.5 seconds

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

form.addEventListener('submit', function (e) {
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
