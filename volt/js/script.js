window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.sidemenu'),
    menuLink = document.querySelectorAll('.sidemenu__list-link'),
    hamburger = document.querySelector('.header__hamburger'),
    menuOverlay = document.querySelector('.sidemenu__overlay'),
    button = document.querySelector('.header__callback'),
    logo = document.querySelector('.header__logo');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('header__hamburger_active');
        menu.classList.toggle('sidemenu_active');
        });

    menuLink.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('header__hamburger_active');
            menu.classList.toggle('sidemenu_active');
        });
    });

    menuOverlay.addEventListener('click', (e) => {
        if (e.target === menuOverlay) {
            hamburger.classList.remove('header__hamburger_active');
            menu.classList.remove('sidemenu_active');
        }
    });

    button.addEventListener('click', (e) => {
        if (e.target === button) {
            hamburger.classList.remove('header__hamburger_active');
            menu.classList.remove('sidemenu_active');
        }
    });
});

    