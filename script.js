/* SAYFALAR ARASI GEÇİŞ */
function showPage(pageId) {
    document.querySelectorAll(".page-view").forEach(page => {
        page.classList.remove("active-page");
    });

    const activePage = document.getElementById(pageId);

    if (activePage) {
        activePage.classList.add("active-page");
    }

    window.scrollTo({ top: 0, behavior: "smooth" });

    const navMenu = document.getElementById("navMenu");

    if (navMenu) {
        navMenu.classList.remove("show");
    }
}

/* SAYFA YÜKLENDİKTEN SONRA */
document.addEventListener("DOMContentLoaded", function () {

    /* HAMBURGER MENÜ */
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", function () {
            navMenu.classList.toggle("show");
        });
    }

    /* TEKLİF FORMU - E-POSTA GÖNDERİMİNİ ENGELLEME */
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            // FormSubmit kullanıyorsan gönderimi engelleme.
            // Formun action adresi FormSubmit olmalı.
            if (!contactForm.action.includes("formsubmit.co")) {
                event.preventDefault();
                alert("Formun e-posta gönderim ayarını kontrol etmeliyiz.");
            }
        });
    }

    /* WHATSAPP İLE TEKLİF İSTE */
    const whatsappButton = document.getElementById("whatsappQuoteBtn");

    if (whatsappButton && contactForm) {
        whatsappButton.addEventListener("click", function () {
            const name = contactForm.elements["name"].value.trim();
            const email = contactForm.elements["email"].value.trim();
            const phone = contactForm.elements["phone"].value.trim();
            const message = contactForm.elements["message"].value.trim();

            if (!name || !message) {
                alert("Lütfen adınızı ve proje detaylarınızı doldurun.");
                return;
            }

            const whatsappNumber = "905066126375";

            const text =
                "Merhaba Ersan Group, teklif almak istiyorum.\n\n" +
                "Ad Soyad: " + name + "\n" +
                "E-posta: " + email + "\n" +
                "Telefon: " + phone + "\n" +
                "Proje Detayı: " + message;

            const url =
                "https://wa.me/" + whatsappNumber +
                "?text=" + encodeURIComponent(text);

            window.open(url, "_blank");
        });
    }

});
