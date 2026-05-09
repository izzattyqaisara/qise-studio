const pageButtons = document.querySelectorAll(".page-link");
const pages = document.querySelectorAll(".page");
const navLinks = document.querySelectorAll(".nav-link");
const menu = document.querySelector(".menu");
const navToggle = document.querySelector(".nav-toggle");

function openPage(pageId) {
  pages.forEach((page) => {
    page.classList.toggle("active-page", page.id === pageId);
  });

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.page === pageId);
  });

  menu.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

pageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openPage(button.dataset.page);
  });
});

navToggle.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
});
