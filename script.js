// Automatikus évszám a footerben
document.getElementById("year").textContent = new Date().getFullYear();


// Navbar változása görgetéskor
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        navbar.style.boxShadow =
            "0 18px 60px rgba(20,20,50,.13)";
    } else {
        navbar.style.boxShadow =
            "0 15px 50px rgba(20,20,50,.08)";
    }

});


// Egyszerű megjelenési animáció
const elements = document.querySelectorAll(
    ".service-card, .project-card, .about-box"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


elements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition =
        "opacity .7s ease, transform .7s ease";

    observer.observe(element);

});