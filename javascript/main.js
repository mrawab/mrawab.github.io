const textarea = document.querySelector(".input-box textarea");
const toggle = document.querySelector(".mobile-menu-toggle");
const closeBtn = document.querySelector(".mobile-menu-close");
const header = document.querySelector(".mobile-header");
const overlay = document.querySelector(".overlay");
// const mobileWarning = document.querySelector("#mobile-warning");

document.addEventListener("DOMContentLoaded", () => {
  if (
    (isMobile() || window.innerWidth < 768) &&
    !window.location.pathname.includes("mobile.html")
  ) {
    window.location.href = "/html/mobile.html";
  }
});

function isMobile() {
  return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
    navigator.userAgent,
  );
}

toggle.addEventListener("click", () => {
  header.classList.add("open");
  overlay.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  header.classList.remove("open");
  overlay.classList.remove("open");
});

overlay.addEventListener("click", () => {
  header.classList.remove("open");
  overlay.classList.remove("open");
});

document.querySelectorAll("textarea").forEach((textarea) => {
  textarea.addEventListener("input", function () {
    this.style.height = "90px";
    this.style.height = this.scrollHeight + "px";
  });
});
