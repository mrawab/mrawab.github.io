
document.addEventListener('DOMContentLoaded', function () {
  const elementsToAnimate = document.querySelectorAll('h1, h2, h3, h4, h5, h6, a, p, img, body');
  let lastScrollY = window.scrollY;

  // Create IntersectionObserver instance
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const currentScrollY = window.scrollY;
      
      if (entry.isIntersecting) {
        if (currentScrollY < lastScrollY) {
          // Scrolling up, move elements down
          entry.target.style.transform = 'translateY(30px)';
        } else {
          // Scrolling down, move elements up (optional)
          entry.target.style.transform = 'translateY(0)';
        }
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible'); // Optionally remove class when not in view
      }
    });

    lastScrollY = window.scrollY;
  }, {
    threshold: 0.3
  });

  // Observe all selected elements
  elementsToAnimate.forEach(item => {
    item.classList.add('hidden');  // Initially hide the elements
    observer.observe(item);
  });
});
      

      // When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
      
      // Function to toggle mobile navigation
      const modeToggle = document.getElementById('mode-toggle');
  const modeIcon = document.getElementById('mode-icon');
  const avatarImage = document.getElementById('avatar-image');

  let isDarkMode = false;

  modeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      modeIcon.src = 'dark-mode.svg';
      avatarImage.src = 'main-dark.jpg';  // Change to dark mode avatar
    } else {
      document.body.classList.remove('dark-mode');
      modeIcon.src = 'light-mode.svg';
      avatarImage.src = 'main.png'; // Change to light mode avatar
    }
  });
      function toggleNavigation() {
        let nav = document.getElementById("mobile-nav");
        if (nav.classList.contains('w3-show')) {
          nav.classList.remove('w3-show');
        } else { 
          nav.classList.add('w3-show');
        }
      }
