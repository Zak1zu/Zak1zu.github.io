const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
    lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
})

$(document).ready(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('.sidepanel__divider').removeClass('sidepanel__divider_inactive');
            $('.sidepanel__link').removeClass('sidepanel__link_inactive');
            $('.sidepanel__text').removeClass('sidepanel__text_inactive');

            $('.sidepanel__divider').addClass('sidepanel__divider_active');
            $('.sidepanel__link').addClass('sidepanel__link_active');
            $('.sidepanel__text').addClass('sidepanel__text_active');
        } else {
            $('.sidepanel__divider').removeClass('sidepanel__divider_active');
            $('.sidepanel__link').removeClass('sidepanel__link_active');
            $('.sidepanel__text').removeClass('sidepanel__text_active');

            $('.sidepanel__divider').addClass('sidepanel__divider_inactive');
            $('.sidepanel__link').addClass('sidepanel__link_inactive');
            $('.sidepanel__text').addClass('sidepanel__text_inactive');
        }
    });
});