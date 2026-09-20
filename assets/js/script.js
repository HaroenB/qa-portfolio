const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const skipLink = document.querySelector(".skip-link");
const mainContent = document.querySelector("#main-content");

if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");
        navToggle.setAttribute("aria-expanded", isOpen.toString());
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            navToggle.setAttribute("aria-expanded", "false");
        });
    });
}

if (skipLink && mainContent) {
    skipLink.addEventListener("click", () => {
        mainContent.focus();
    });
}
