// index-js    
    const menu = document.getElementById("mobileMenu");
      const openBtn = document.getElementById("openMenu");
      const closeBtn = document.getElementById("closeMenu");

      openBtn.addEventListener("click", () => {
        menu.classList.add("active");
      });

      closeBtn.addEventListener("click", () => {
        menu.classList.remove("active");
      });



//team-js

    const fadeElements = document.querySelectorAll('.fade-up');

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){
                entry.target.classList.add('show');
            }

        });

    }, {
        threshold:0.2
    });

    fadeElements.forEach(el => {
        observer.observe(el);
    });


//team-js


// home-js

/* =========================
SCROLL REVEAL
========================= */

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    reveals.forEach((el) => {

        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){
            el.classList.add("active");
        }

    });

});

/* =========================
LIGHTBOX GALLERY
========================= */

const galleryItems = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

galleryItems.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.classList.add("active");
        lightboxImg.src = img.src;

    });

});

lightbox.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

/* =========================
PARALLAX EFFECT
========================= */

window.addEventListener("scroll", () => {

    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector(".hero-wrapper img");

    heroImage.style.transform =
    `translateY(${scrolled * 0.15}px) scale(1.05)`;

});

