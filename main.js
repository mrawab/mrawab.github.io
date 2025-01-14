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