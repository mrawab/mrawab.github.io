// variables
//const hoverOne = document.getElementById("project-one");
//const hoverTwo = document.getElementById("project-two");
const mobileHeader = document.getElementById("mobile-header");
const overlay = document.getElementById("overlay");
const coolinfo = document.getElementById("coolinfo");
//projects
/*function display_project_website() {
  hoverOne.style.opacity=1;
  hoverOne.style.transform='scale(1.2)';
  hoverOne.style.visibility='visible';
  hoverOne.style.transition='transform 0.5s ease-in-out , opacity 0.5s ease-in-out, visibility 0.5s';
}
function hide_project_website() {
  hoverOne.style.opacity=0;
  hoverOne.style.transform='scale(1)';
  hoverOne.style.visibility='hidden';
}

function display_project_telegram_bot() {
  hoverTwo.style.opacity=1;
  hoverTwo.style.transform='scale(1.2)';
  hoverTwo.style.visibility='visible';
  hoverTwo.style.transition='transform 0.5s ease-in-out , opacity 0.5s ease-in-out, visibility 0.5s';
}
function hide_project_telegram_bot() {
  hoverTwo.style.opacity=0;
  hoverTwo.style.transform='scale(1)';
  hoverTwo.style.visibility='hidden';
}*/
function showInfo(){
  coolinfo.style.display="block";
}
//nav bar
function show_nav_bar() {
  //mobileHeader.style.display = "flex";
  mobileHeader.classList.add("show");
  overlay.style.display = "block";
}

function hide_nav_bar() {
  // mobileHeader.style.display = "none";
  mobileHeader.classList.remove("show");
  overlay.style.display = "none";
}
