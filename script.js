const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }

});

scrollTopBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});

const footer = document.querySelector("footer p");

footer.innerHTML = `© ${new Date().getFullYear()} My Portfolio. All Rights Reserved.`;

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("show");

    if (navMenu.classList.contains("show")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }

});

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navMenu.classList.remove("show");
        menuToggle.textContent = "☰";

    });

});

const revealElements = document.querySelectorAll(
    ".about-container, .skill-card, .project-card, .education-card, .contact-card"
);

const observer = new IntersectionObserver(function (entries) {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach(element => {
    element.classList.add("reveal");
    observer.observe(element);
});
document.querySelectorAll("img").forEach((image) => {
    image.addEventListener("contextmenu", (event) => {
        event.preventDefault();
    });
});
// document.addEventListener("contextmenu", (event) => {
//     event.preventDefault();
// });
