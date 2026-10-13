// Sayfalar Arası Geçiş Fonksiyonu
function showPage(pageId) {
    const pages = document.querySelectorAll('.page-view');
    pages.forEach(page => {
        page.classList.remove('active-page');
    });

    const activePage = document.getElementById(pageId);
    if (activePage) {
        activePage.classList.add('active-page');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });

    const navMenu = document.getElementById('navMenu');
    if (navMenu) {
        navMenu.classList.remove('show');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menü İşlevi
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });
    }

    // İletişim Form Gönderimi Simülasyonu
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Mesajınız başarıyla iletildi! Sizinle en kısa sürede iletişime geçeceğiz.');
            contactForm.reset();
        });
    }
});