document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#main-nav");

  if (button && nav) {
    button.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  }
});
