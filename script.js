// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in animation on scroll
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target); // Stop observing once it's visible
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    section.classList.add('hidden'); // Initially hide sections
    observer.observe(section);
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
