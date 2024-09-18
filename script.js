const toggleButton = document.getElementById('theme-toggle');
const bodyElement = document.body;

toggleButton.addEventListener('click', () => {
    bodyElement.classList.toggle('dark-mode');
    bodyElement.classList.toggle('light-mode');
});

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
