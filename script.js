// JavaScript for fade-in and slide-in animations on scroll
document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    const slideElements = document.querySelectorAll('.slide-in');

    const fadeInOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observerOptions = {
        threshold: 0.1
    };

    const fadeObserver = new IntersectionObserver(fadeInOnScroll, observerOptions);

    fadeElements.forEach(element => {
        fadeObserver.observe(element);
    });

    slideElements.forEach(element => {
        fadeObserver.observe(element);
    });
});


// form validation
document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        document.getElementById("formResponse").innerText = "Thanks, " + name + "! Your message has been sent.";
        document.getElementById("contactForm").reset();
    } else {
        document.getElementById("formResponse").innerText = "Please fill out all fields.";
    }
});
