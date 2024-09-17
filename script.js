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

// Fade-in and Fade-out animation when scrolling between sections
const sections = document.querySelectorAll('.section');
const options = {
    threshold: [0, 0.5, 1],
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const section = entry.target;

        // Apply fade-in when the section is entering view
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            section.classList.add('visible');
            section.classList.remove('fade-out');
        } else {
            // Apply fade-out when leaving
            section.classList.remove('visible');
            section.classList.add('fade-out');
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// Scroll arrows functionality
document.getElementById('scroll-to-bottom').addEventListener('click', function() {
    document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('scroll-to-top').addEventListener('click', function() {
    document.getElementById('hero').scrollIntoView({ behavior: 'smooth' });
});





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
