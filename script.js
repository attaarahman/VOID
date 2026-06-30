/* ===========================================
   VOID
   script.js
=========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       FAQ Accordion
    ========================== */

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const button = item.querySelector("button");

        button.addEventListener("click", () => {

            faqItems.forEach(faq => {
                if (faq !== item) {
                    faq.classList.remove("active");
                }
            });

            item.classList.toggle("active");

        });

    });


    /* ==========================
       Smooth Scroll
    ========================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth",
                    block: "start"

                });

            }

        });

    });


    /* ==========================
       Scroll Reveal
    ========================== */

    const revealElements = document.querySelectorAll(
        ".problem, .how, .slots, .pricing, .faq, .cta, .step, .slot-card, .price-box"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.15

    });

    revealElements.forEach(el => {

        el.classList.add("fade");

        observer.observe(el);

    });


    /* ==========================
       Navbar Background
    ========================== */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            navbar.style.background = "rgba(255,255,255,0.88)";
            navbar.style.boxShadow = "0 20px 60px rgba(0,0,0,.08)";

        }

        else {

            navbar.style.background = "rgba(255,255,255,.65)";
            navbar.style.boxShadow = "0 20px 60px rgba(0,0,0,.05)";

        }

    });


    /* ==========================
       Button Hover Effect
    ========================== */

    document.querySelectorAll(".primary-btn").forEach(btn => {

        btn.addEventListener("mouseenter", () => {

            btn.style.transform = "translateY(-3px) scale(1.02)";

        });

        btn.addEventListener("mouseleave", () => {

            btn.style.transform = "";

        });

    });


    /* ==========================
       Floating Book Button
    ========================== */

    const floatingButton = document.createElement("a");

    floatingButton.href = "#pricing";

    floatingButton.className = "floating-book";

    floatingButton.innerHTML = "Reserve →";

    document.body.appendChild(floatingButton);

});
