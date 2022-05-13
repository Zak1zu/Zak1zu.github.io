$(document).ready(function() {
    $('.promo_carousel__inner').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/promo_arrows/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/promo_arrows/right.svg"></button>',
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1
    });

    $('.solutions_carousel__inner').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/solutions_arrows/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/solutions_arrows/right.svg"></button>',
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1
    });

    window.addEventListener('DOMContentLoaded', () => {
        const menu = document.querySelector('.promo__menu'),
        menuItem = document.querySelectorAll('.promo__menu-item'),
        hamburger = document.querySelector('.promo__hamburger');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('promo__hamburger_active');
            menu.classList.toggle('promo__menu_active');
        });

        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.toggle('promo__hamburger_active');
                menu.classList.toggle('promo__menu_active');
            });
        });
    });

    $('[data-modal=general]').on('click', function() {
        $('.overlay, #general').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #general, #thanks').fadeOut('slow')
    });
    const overlay = document.querySelector('.overlay');
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            $('#general, #thanks, .overlay').fadeOut('slow');
        };
    });

    $('input[name=phone]').mask("+38 (999) 999-99-99");

    $('form').submit(function(e) {
        e.preventDefault();

        if (!$(this).valid()) {
            return;
        };

        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#general').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');


            $('form').trigger('reset');
        });
        return false;
    });
});
