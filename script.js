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

// Fade-in and fade-out animation on scroll
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('hidden'); // Ensure section becomes visible
            entry.target.classList.add('fade-in'); // Apply fade-in class when intersecting
            entry.target.classList.remove('fade-out');
        } else {
            entry.target.classList.add('fade-out'); // Apply fade-out when leaving view
            entry.target.classList.remove('fade-in');
        }
    });
}, { threshold: 0.5 });

sections.forEach(section => {
    observer.observe(section);
});

// Scroll to the next section with arrows
document.querySelectorAll('.scroll-to-next').forEach(button => {
    button.addEventListener('click', function() {
        const nextSection = this.closest('.section').nextElementSibling;
        if (nextSection && nextSection.classList.contains('section')) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Scroll to the previous section with arrows
document.querySelectorAll('.scroll-to-prev').forEach(button => {
    button.addEventListener('click', function() {
        const prevSection = this.closest('.section').previousElementSibling;
        if (prevSection && prevSection.classList.contains('section')) {
            prevSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
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
