document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#main-nav");
  if (!button || !nav) return;
  button.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    button.setAttribute("aria-expanded", String(open));
  });
});
