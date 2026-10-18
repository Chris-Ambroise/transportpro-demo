const quoteForm = document.querySelector("#quote-form");

if (quoteForm) {
  quoteForm.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Demo only: quote requests are not active yet.");
  });
}

const yearElement = document.querySelector("#current-year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

/* ===== MOBILE NAVIGATION ===== */

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("active");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu",
  );
});

/* Close mobile menu after selecting a link */

const navLinks = mainNav.querySelectorAll("a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  });
});
