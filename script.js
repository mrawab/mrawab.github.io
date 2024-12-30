document.addEventListener('DOMContentLoaded', function () {
    // Select all h, a, p, and body elements for animation
    const elementsToAnimate = document.querySelectorAll('h1, h2, h3, h4, h5, h6, a, p, img');

    // Create IntersectionObserver instance
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible'); // Optionally remove class when scrolling back up
        }
      });
    }, {
      threshold: 0.2
    });

    // Observe all selected elements
    elementsToAnimate.forEach(item => {
      item.classList.add('hidden');  // Initially hide the elements
      observer.observe(item);
    });
  });



// dark - light mode
const modeToggleMobile = document.getElementById('mobile-mode-toggle');
const modeIconMobile = document.getElementById('mobile-mode-icon');
const modeToggleDesktop = document.getElementById('desktop-mode-toggle');
const modeIconDesktop = document.getElementById('desktop-mode-icon');
const avatarImage = document.getElementById('avatar-image');
let isDarkMode = false;

function toggleMode() {
  isDarkMode = !isDarkMode;
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
    modeIconMobile.src = 'dark-mode.svg';
    modeIconDesktop.src = 'dark-mode.svg';
    avatarImage.src = 'main-dark.jpg'; // Change to dark mode avatar
  } else {
    document.body.classList.remove('dark-mode');
    modeIconMobile.src = 'light-mode.svg';
    modeIconDesktop.src = 'light-mode.svg';
    avatarImage.src = 'main.png'; // Change to light mode avatar
  }
}

// Add event listeners to the buttons themselves
modeToggleMobile.addEventListener('click', toggleMode);
modeIconMobile.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevents event propagation to the parent button
  toggleMode();
});

modeToggleDesktop.addEventListener('click', toggleMode);
modeIconDesktop.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevents event propagation to the parent button
  toggleMode();
});


// Add event listeners to both mobile and desktop buttons
modeToggleMobile.addEventListener('click', toggleMode);
modeToggleDesktop.addEventListener('click', toggleMode);



//Toggle Navigation
function toggleNavigation() {
  let nav = document.getElementById("mobile-nav");
  
  if (nav.classList.contains('w3-show')) {
    nav.classList.remove('w3-show');
  } else { 
    nav.classList.add('w3-show');
  }
}
