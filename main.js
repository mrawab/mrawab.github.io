//projects
function display_project_website() {
  const hover = document.querySelector(".project-one");
  hover.style.opacity=1;
  hover.style.transform='scale(1.2)';
  hover.style.visibility='visible';
  hover.style.transition='transform 0.5s ease-in-out , opacity 0.5s ease-in-out, visibility 0.5s';
}
function hide_project_website() {
  const hover = document.querySelector(".project-one");
  hover.style.opacity=0;
  hover.style.transform='scale(1)';
  hover.style.visibility='hidden';
}
function display_project_telegram_bot() {
  const hover = document.querySelector(".project-two");
  hover.style.opacity=1;
  hover.style.transform='scale(1.2)';
  hover.style.visibility='visible';
  hover.style.transition='transform 0.5s ease-in-out , opacity 0.5s ease-in-out, visibility 0.5s';
}
function hide_project_telegram_bot() {
  const hover = document.querySelector(".project-two");
  hover.style.opacity=0;
  hover.style.transform='scale(1)';
  hover.style.visibility='hidden';
}

//nav bar
function hide_nav_bar() {
  const mobileHeader = document.getElementById("mobile-header");
  const overlay = document.getElementById("overlay");
 // mobileHeader.style.display = "none"; 
  mobileHeader.classList.remove("show");
  overlay.style.display = "none";
}
function show_nav_bar() {
  const mobileHeader = document.getElementById("mobile-header");
  const overlay = document.getElementById("overlay");
  //mobileHeader.style.display = "flex";
  mobileHeader.classList.add("show");
  overlay.style.display = "block";
}
