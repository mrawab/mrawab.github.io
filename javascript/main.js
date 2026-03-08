const textarea = document.querySelector(".input-box textarea");

document.querySelectorAll("textarea").forEach((textarea) => {
  textarea.addEventListener("input", function () {
    this.style.height = "90px";
    this.style.height = this.scrollHeight + "px";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  if (isMobile() || window.innerWidth < 768) {
    document.getElementById("mobile-warning").style.display = "flex";
  }
});

function isMobile() {
  return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
    navigator.userAgent,
  );
}

if (isMobile() || window.innerWidth < 768) {
  const warning = document.getElementById("mobile-warning");

  if (warning) {
    warning.style.display = "flex";
    document.body.style.overflow = "hidden";
    console.log("Mobile warning displayed");
  }
}
