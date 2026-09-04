/* =========================================
   TJEPUCHO — PROFESSIONAL WEBSITE JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================
       MOBILE NAVIGATION
    ===================================== */

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {

            navLinks.classList.toggle("active");

            const isOpen =
                navLinks.classList.contains("active");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );

        });


        /* Close menu after selecting a link */

        const links =
            navLinks.querySelectorAll("a");

        links.forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    /* =====================================
       AUTOMATIC COPYRIGHT YEAR
    ===================================== */

    const year =
        document.getElementById("year");

    if (year) {

        year.textContent =
            new Date().getFullYear();

    }


    /* =====================================
       HEADER EFFECT WHEN SCROLLING
    ===================================== */

    const header =
        document.querySelector(".header");

    if (header) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 20) {

                header.style.boxShadow =
                    "0 8px 30px rgba(0, 0, 0, 0.08)";

            } else {

                header.style.boxShadow =
                    "none";

            }

        });

    }


    /* =====================================
       SCROLL REVEAL ANIMATIONS
    ===================================== */

    const revealElements =
        document.querySelectorAll(
            ".impact-card, .contact-card, .about-content, .section-heading"
        );


    const observer =
        new IntersectionObserver(

            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);

                    }

                });

            },

            {
                threshold: 0.15
            }

        );


    revealElements.forEach(function (element) {

        element.classList.add("reveal");

        observer.observe(element);

    });


    /* =====================================
       SMOOTH INTERNAL NAVIGATION
    ===================================== */

    const internalLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    internalLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            if (
                targetId &&
                targetId !== "#"
            ) {

                const target =
                    document.querySelector(targetId);

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }

        });

    });

});
// =========================
// DONATION MODAL
// =========================

let selectedAmount = 0;

function openDonation() {
    document.getElementById("donationModal").style.display = "flex";
}

function closeDonation() {
    document.getElementById("donationModal").style.display = "none";
}

function selectAmount(amount) {
    selectedAmount = amount;
    document.getElementById("customAmount").value = amount;
}

function getDonationAmount() {
    const customAmount =
        document.getElementById("customAmount").value;

    if (customAmount && Number(customAmount) > 0) {
        return Number(customAmount);
    }

    return selectedAmount;
}

function payWithPayPal() {
    const amount = getDonationAmount();

    if (!amount) {
        alert("Please select or enter a donation amount.");
        return;
    }

    alert("PayPal donation selected: $" + amount);
}

function payWithBinance() {
    const amount = getDonationAmount();

    if (!amount) {
        alert("Please select or enter a donation amount.");
        return;
    }

    alert("Binance Pay donation selected: $" + amount);
}