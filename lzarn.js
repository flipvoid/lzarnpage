/* =========================================
   L'ZARN
   JAVASCRIPT
========================================= */


// ========================================
// HEADER AO ROLAR
// ========================================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


// ========================================
// MENU MOBILE
// ========================================

const menuButton = document.getElementById("menuButton");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", () => {

    mobileMenu.classList.add("active");

});

closeMenu.addEventListener("click", () => {

    mobileMenu.classList.remove("active");

});


// Fechar menu ao clicar em algum link

const mobileLinks = document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

    });

});


// ========================================
// SACOLA
// ========================================

let bagCount = 0;

const bagCounter = document.getElementById("bagCount");
const toast = document.getElementById("toast");

const addButtons = document.querySelectorAll(".quick-add");

addButtons.forEach(button => {

    button.addEventListener("click", () => {

        bagCount++;

        bagCounter.textContent = bagCount;

        const productName = button.dataset.product;

        showToast(`${productName} adicionado à sacola`);

    });

});


// ========================================
// TOAST
// ========================================

let toastTimeout;

function showToast(message) {

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimeout);

    toastTimeout = setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}


// ========================================
// NEWSLETTER
// ========================================

const newsletterForm = document.getElementById("newsletterForm");
const newsletterMessage = document.getElementById("newsletterMessage");

newsletterForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const email = newsletterForm.querySelector("input").value;

    if (!email) {
        return;
    }

    newsletterMessage.textContent =
        "Obrigada. Você agora faz parte do universo L'ZARN.";

    newsletterForm.reset();

});


// ========================================
// ANO AUTOMÁTICO
// ========================================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ========================================
// REVELAÇÃO SUAVE AO ROLAR
// ========================================

const revealElements = document.querySelectorAll(
    ".category-card, .product, .editorial-content, .section-heading"
);

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(25px)";

    element.style.transition =
        "opacity .8s ease, transform .8s ease";

    observer.observe(element);

});