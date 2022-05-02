$(document).ready(function() {
    $('.carousel__inner').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        centerMode: true,
        centerPadding: '498px',
        slidesToShow: 1,
        responsive: [
        {
            breakpoint: 1619,
            settings: {
                centerMode: true,
                centerPadding: '470px',
            }
        },
        {
            breakpoint: 1459,
            settings: {
                centerMode: true,
                centerPadding: '390px',
            }
        },
        {
            breakpoint: 1199,
            settings: {
                adaptiveHeight: true,
                arrows: true,
                centerMode: false,
                autoplay: true,
                autoplaySpeed: 15000,
            }
        }
        ]
    });

    window.addEventListener('DOMContentLoaded', () => {
        const menu = document.querySelector('.header__menu'),
        menuItem = document.querySelectorAll('.header__menu-item'),
        hamburger = document.querySelector('.header__hamburger');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('header__hamburger_active');
            menu.classList.toggle('header__menu_active');
        });

        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.toggle('header__hamburger_active');
                menu.classList.toggle('header__menu_active');
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
        }
    });

    $('input[name=phone]').mask("+7 (999) 999-99-99");

    $('form').submit(function(e) {
        e.preventDefault();

        if (!$(this).valid()) {
            return;
        }

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
