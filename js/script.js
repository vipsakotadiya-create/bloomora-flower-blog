```javascript
/* =====================================================
   BLOOMORA JAVASCRIPT
===================================================== */


/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton = document.getElementById("menuButton");

const navigation = document.getElementById("navigation");

if (menuButton) {

    menuButton.addEventListener("click", function () {

        navigation.classList.toggle("active");

    });

}


/* =====================================================
   SEARCH
===================================================== */

const searchButton = document.getElementById("searchButton");

const searchOverlay = document.getElementById("searchOverlay");

const closeSearch = document.getElementById("closeSearch");

const searchInput = document.getElementById("searchInput");


if (searchButton) {

    searchButton.addEventListener("click", function () {

        searchOverlay.classList.add("active");

        setTimeout(function () {

            if (searchInput) {

                searchInput.focus();

            }

        }, 100);

    });

}


if (closeSearch) {

    closeSearch.addEventListener("click", function () {

        searchOverlay.classList.remove("active");

    });

}


document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        if (searchOverlay) {

            searchOverlay.classList.remove("active");

        }

    }

});


/* =====================================================
   SEARCH DEMO
===================================================== */

if (searchInput) {

    searchInput.addEventListener("keypress", function (event) {

        if (event.key === "Enter") {

            const value = searchInput.value.toLowerCase();

            if (value.includes("rose")) {

                alert("Rose stories are available in our Flower Stories section 🌹");

            }

            else if (value.includes("sunflower")) {

                alert("Discover our sunflower story 🌻");

            }

            else if (value.includes("lavender")) {

                alert("Check out our lavender gardening guide 💜");

            }

            else if (value.includes("garden")) {

                alert("Explore our gardening stories 🌿");

            }

            else {

                alert("More Bloomora stories are coming soon 🌸");

            }

        }

    });

}


/* =====================================================
   NEWSLETTER
===================================================== */

const newsletterForm =
    document.getElementById("newsletterForm");

const toast =
    document.getElementById("toast");


if (newsletterForm) {

    newsletterForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const email =
            newsletterForm.querySelector("input").value;

        if (email) {

            newsletterForm.reset();

            showToast(
                "Thank you for joining Bloomora! 🌸"
            );

        }

    });

}


/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        contactForm.reset();

        showToast(
            "Your message has been received! 🌿"
        );

    });

}


/* =====================================================
   TOAST
===================================================== */

function showToast(message) {

    if (!toast) return;

    toast.innerText = message;

    toast.classList.add("show");

    setTimeout(function () {

        toast.classList.remove("show");

    }, 3000);

}


/* =====================================================
   CLOSE MOBILE MENU AFTER CLICK
===================================================== */

const menuLinks =
    document.querySelectorAll(".navigation a");


menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navigation.classList.remove("active");

    });

});


/* =====================================================
   SIMPLE SCROLL EFFECT
===================================================== */

window.addEventListener("scroll", function () {

    const header =
        document.querySelector(".header");

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.04)";

    }

    else {

        header.style.boxShadow = "none";

    }

});
```
