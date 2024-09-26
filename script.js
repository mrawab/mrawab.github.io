document.addEventListener('DOMContentLoaded', function () {
    // Select all elements you want to observe
    const elementsToAnimate = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, img, a, .content-container');

    // Create IntersectionObserver instance
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);  // Optionally stop observing once element is visible
        }
      });
    }, {
      threshold: 0.1 // Adjust this threshold to control how much of the element must be visible
    });

    // Apply observer to each element
    elementsToAnimate.forEach(element => {
      element.classList.add('hidden');  // Start with elements hidden
      observer.observe(element);  // Start observing the element
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
