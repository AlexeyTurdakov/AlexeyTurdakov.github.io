$(document).ready(function () {
    $('.carousel__inner').slick({
        infinite: true,
        speed: 1500,
        adaptiveHeight: false,
        autoplay: true,
        autoplaySpeed: 2000,
        dotsClass: 'slick-dots',
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/leftCarouselP.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/rightCarouselP.png"></button>',
        responsive: [{
            breakpoint: 992,
            settings: {
                dots: true,
                arrows: false
            }
        }]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
        $(item).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            });
        });
    }

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');


    //Modal windows

    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn('slow');
    });

    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });

    $('.button_mini').on('click', function () {
        $('.overlay, #order').fadeIn('slow');
    });

    $('.button_mini').each(function (i) {
        $(this).on('click', function () {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });

    function validateForms(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя.",
                    minlength: jQuery.validator.format("Имя должно содержать минимум {0} символа!")
                },
                phone: "Пожалуйста, введите свой телефон.",
                email: {
                    required: "Нам нужен адрес электронной почты для связи с вами!",
                    email: "Ваш адрес почты должен иметь формат: name@domain.com"
                }
            }
        });
    }

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');

    // scroll 

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1600) {
            $('.pageUp').fadeIn();
        } else {
            $('.pageUp').fadeOut();
        }
    });

    const anchors = document.querySelectorAll('a[href*="#up"');

    for (let anchor of anchors) {
        anchor.addEventListener("click", function(e){
            event.preventDefault();
            const blockID = anchor.getAttribute('href');
            document.querySelector('' + blockID).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }); 
    }

    //validation phone

    $('input[name=phone').mask("+7(999)999-99-99");

    // send form

    $('form').submit(function(e){
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function(){
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');
            $('form').trigger('reset');
        });
        return false;
    });

    //wow animation
    new WOW().init();
});